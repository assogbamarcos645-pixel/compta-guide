/* ============================================================
   app.js — Comptabilité Générale I (SYSCOHADA / OHADA)
   Application sans dépendance : routage, cours, outils, quiz
   ============================================================ */

(() => {
  "use strict";

  const C = window.COURSE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $("#app");

  /* ── Stockage local ──────────────────────────────────────── */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("cg1-" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("cg1-" + k, JSON.stringify(v)); } catch (e) {} }
  };
  const state = {
    read: new Set(store.get("read", [])),
    best: store.get("best", null),
    attempts: store.get("attempts", 0),
    wrongs: store.get("wrongs", []),
    exDone: new Set(store.get("exDone", []))
  };
  const saveWrongs = () => store.set("wrongs", state.wrongs);
  const saveExDone = () => store.set("exDone", Array.from(state.exDone));
  const saveRead = () => store.set("read", Array.from(state.read));

  /* ── Utilitaires ─────────────────────────────────────────── */
  const ICONS = {
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    book: '<path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M8 8h6M8 12h6"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h1M12 11h1M16 11h0M8 15h1M12 15h1M8 18h1M12 18h1M16 15v3"/>',
    t: '<path d="M4 6h16M12 6v14"/><path d="M6 10h4M14 10h4M6 13h3M15 13h3"/>',
    cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    sort: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M6 9h3M15 9h3M6 13h3M15 13h3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3"/><path d="M4 4v4h4M20 20v-4h-4"/>',
    bolt: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'
  };
  const icon = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

  const fmt = (n) => Math.round(n).toLocaleString("fr-FR");
  const num = (v) => { const x = parseFloat(String(v).replace(/\s/g, "").replace(",", ".")); return isFinite(x) ? x : 0; };
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const chapterIndex = (id) => C.chapters.findIndex((c) => c.id === id);

  const ring = (pct, r, label) => {
    const len = 2 * Math.PI * r, size = (r + 8) * 2;
    return `<svg viewBox="0 0 ${size} ${size}">
      <defs>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#667eea"/>
          <stop offset="100%" stop-color="#764ba2"/>
        </linearGradient>
      </defs>
      <circle class="track" cx="${size / 2}" cy="${size / 2}" r="${r}"/>
      <circle class="val" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-dasharray="${len}" stroke-dashoffset="${len * (1 - pct / 100)}"/></svg>
      <span>${label}</span>`;
  };

  /* ── Particules flottantes en fond ───────────────────────── */
  const initParticles = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = $("#bgCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = innerWidth);
    let height = (canvas.height = innerHeight);

    const onResize = () => {
      width = canvas.width = innerWidth;
      height = canvas.height = innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    const particleCount = Math.min(40, Math.floor(width / 32));
    const colors = ["102, 126, 234", "118, 75, 162", "245, 158, 11", "251, 191, 36"];
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.35 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(render);
    };
    render();
  };

  let toastTimer;
  const toast = (msg) => {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  };

  /* Chapitre lié à un numéro de compte (pour la recherche) */
  const accountChapter = (n) => {
    if (["443", "445", "4441", "4449", "645"].includes(n)) return "tva";
    if (["612", "613", "707", "781"].includes(n)) return "transport";
    if (["673", "773"].includes(n)) return "facture";
    if (/^[678]/.test(n)) return "charges-produits";
    return "cadre";
  };

  /* ── Confettis ───────────────────────────────────────────── */
  const confetti = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = $("#confetti"), ctx = cv.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.scale(dpr, dpr);
    const colors = ["#667eea", "#764ba2", "#f59e0b", "#fbbf24", "#d97706", "#818cf8"];
    const parts = Array.from({ length: 160 }, () => ({
      x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35,
      vx: (Math.random() - .5) * 14, vy: Math.random() * -14 - 4,
      w: Math.random() * 8 + 4, h: Math.random() * 5 + 3,
      r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3,
      c: colors[Math.floor(Math.random() * colors.length)]
    }));
    const t0 = performance.now();
    const step = (t) => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      });
      if (t - t0 < 3200) requestAnimationFrame(step);
      else ctx.clearRect(0, 0, innerWidth, innerHeight);
    };
    requestAnimationFrame(step);
  };

  /* ============================================================
     ACCUEIL
     ============================================================ */
  const TOOLS = [
    { id: "facture", label: "Calculateur de facture", icon: "calc", desc: "Du montant brut au net à payer, étape par étape, avec l'écriture au journal." },
    { id: "compte-t", label: "Compte en T", icon: "t", desc: "Passez des opérations au débit ou au crédit et observez le solde évoluer." },
    { id: "fiches", label: "Fiches du plan comptable", icon: "cards", desc: "Mémorisez les numéros de comptes essentiels avec des cartes à retourner." },
    { id: "bilan", label: "Classer au bilan", icon: "sort", desc: "Rangez chaque poste à l'actif ou au passif et vérifiez vos réflexes." }
  ];

  function viewHome() {
    const total = C.chapters.length;
    const read = C.chapters.filter((c) => state.read.has(c.id)).length;
    const pct = Math.round((read / total) * 100);
    const next = C.chapters.find((c) => !state.read.has(c.id)) || C.chapters[0];
    const best = state.best ? state.best.pct + " %" : "—";

    app.innerHTML = `
      <section class="hero">
        <div class="wrap hero-grid">
          <div class="fade-in">
            <span class="eyebrow">L1 Informatique · SYSCOHADA révisé</span>
            <h1>Maîtrisez les bases de la <em>comptabilité générale</em>.</h1>
            <p class="hero-lead">Un cours clair en ${total} chapitres, des outils pour s'exercer sur de vrais calculs et un quiz pour vérifier ce que vous avez retenu.</p>
            <div class="hero-cta">
              <a class="btn btn-primary" href="#/cours/${next.id}">${read ? "Reprendre le cours" : "Commencer le cours"} ${icon("arrowR", "ic-sm")}</a>
              <a class="btn btn-outline" href="#/quiz">Tester mes connaissances</a>
            </div>
            <div class="hero-meta">
              <div><strong>${total}</strong><span>chapitres</span></div>
              <div><strong>${C.questions.length}</strong><span>questions de quiz</span></div>
              <div><strong>${TOOLS.length}</strong><span>outils interactifs</span></div>
            </div>
          </div>

          <div class="hero-art fade-in" style="animation-delay:.12s" aria-hidden="true">
            <div class="hero-tag one"><span class="dot"></span>Débit = emplois · Crédit = ressources</div>
            <div class="t-card">
              <div class="t-card-head"><b>Banques</b><span>Compte 52</span></div>
              <div class="t-grid">
                <div>
                  <div class="t-side d">Débit</div>
                  <div class="t-line"><span>Apport en capital</span><span>2 000 000</span></div>
                  <div class="t-line"><span>Vente encaissée</span><span>450 000</span></div>
                </div>
                <div>
                  <div class="t-side c">Crédit</div>
                  <div class="t-line"><span>Achat marchandises</span><span>350 000</span></div>
                  <div class="t-line"><span>Salaires</span><span>200 000</span></div>
                </div>
              </div>
              <div class="t-foot"><span>Solde débiteur</span><b>1 900 000</b></div>
            </div>
            <div class="hero-tag two"><code>4441</code> État, TVA due</div>
          </div>
        </div>
      </section>

      <section class="section" style="padding-top:8px">
        <div class="wrap">
          <div class="progress-panel fade-in">
            <div class="ring">${ring(pct, 26, pct + "%")}</div>
            <div>
              <h3>Votre progression</h3>
              <p>${read ? `${read} chapitre${read > 1 ? "s" : ""} sur ${total} lu${read > 1 ? "s" : ""}.` : "Vous n'avez pas encore commencé."} ${read < total ? `Prochain : <a href="#/cours/${next.id}">${esc(next.title)}</a>` : "Cours terminé, place au quiz."}</p>
            </div>
            <div class="progress-stats">
              <div><b>${read}/${total}</b><span>chapitres lus</span></div>
              <div><b>${best}</b><span>meilleur score</span></div>
              <div><b>${state.attempts}</b><span>quiz terminés</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div>
              <span class="eyebrow">Programme</span>
              <h2>Les ${total} chapitres du cours</h2>
              <p>Des généralités à la TVA, dans l'ordre du programme de L1.</p>
            </div>
            <a class="btn btn-outline btn-sm" href="#/cours/${C.chapters[0].id}">Voir le cours ${icon("arrowR", "ic-sm")}</a>
          </div>
          <div class="chapter-grid">
            ${C.chapters.map((c, i) => `
              <a class="chapter-card" href="#/cours/${c.id}">
                <span class="num">Chapitre ${String(i + 1).padStart(2, "0")}
                  ${state.read.has(c.id) ? `<span class="pill ok">${icon("check", "ic-sm")} Lu</span>` : c.key ? `<span class="pill">Essentiel</span>` : ""}
                </span>
                <h3>${esc(c.title)}</h3>
                <p>${esc(c.summary)}</p>
                <span class="meta">${icon("clock", "ic-sm")} ${c.minutes} min</span>
              </a>`).join("")}
          </div>
        </div>
      </section>

      <section class="section" style="padding-bottom:72px">
        <div class="wrap">
          <div class="section-head">
            <div>
              <span class="eyebrow">Pratique</span>
              <h2>Apprendre en manipulant</h2>
              <p>Des exercices interactifs pour ancrer les notions du cours.</p>
            </div>
          </div>
          <div class="feature-grid">
            ${TOOLS.map((t) => `
              <a class="feature" href="#/outils/${t.id}">
                <div class="feature-ic">${icon(t.icon)}</div>
                <h3>${t.label}</h3>
                <p>${t.desc}</p>
              </a>`).join("")}
          </div>
        </div>
      </section>`;
  }

  /* ============================================================
     COURS
     ============================================================ */
  function viewCourse(id) {
    let i = chapterIndex(id);
    if (i < 0) i = Math.max(0, chapterIndex(store.get("last", "")));
    const ch = C.chapters[i];
    store.set("last", ch.id);
    const prev = C.chapters[i - 1], next = C.chapters[i + 1];

    app.innerHTML = `
      <div class="wrap course">
        <aside class="toc" aria-label="Sommaire">
          <div class="toc-title">Sommaire</div>
          <div class="toc-progress" id="tocProgress"></div>
          <ol id="tocList"></ol>
        </aside>

        <article class="article fade-in">
          <div class="toc-mobile">
            <label class="toc-title" for="chSelect">Chapitre</label>
            <select class="input" id="chSelect">
              ${C.chapters.map((c, k) => `<option value="${c.id}" ${k === i ? "selected" : ""}>${k + 1}. ${esc(c.title)}</option>`).join("")}
            </select>
          </div>

          <header class="article-head">
            <span class="eyebrow">Chapitre ${i + 1} sur ${C.chapters.length}</span>
            <h1>${esc(ch.title)}</h1>
            <div class="meta">${icon("clock", "ic-sm")} ${ch.minutes} min de lecture ${ch.key ? '<span class="pill">Essentiel</span>' : ""}</div>
          </header>

          <div class="prose" id="prose">${ch.content}</div>

          <div class="article-actions">
            <p id="readText"></p>
            <button class="btn btn-primary" id="markRead" type="button"></button>
          </div>

          <nav class="pager" aria-label="Chapitres précédent et suivant">
            ${prev ? `<a class="prev" href="#/cours/${prev.id}"><small>Précédent</small><b>${esc(prev.title)}</b></a>` : ""}
            ${next
              ? `<a class="next" href="#/cours/${next.id}"><small>Suivant</small><b>${esc(next.title)}</b></a>`
              : `<a class="next" href="#/quiz"><small>Étape suivante</small><b>Passer au quiz</b></a>`}
          </nav>
        </article>
      </div>`;

    // Tableaux défilants sur mobile
    $$("#prose table").forEach((t) => {
      const w = document.createElement("div");
      w.className = "table-wrap";
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });

    // Liens vers les outils
    $$("#prose .tool-link").forEach((el) => {
      el.setAttribute("role", "link");
      el.tabIndex = 0;
      const go = () => { location.hash = "#/outils/" + el.dataset.tool; };
      el.addEventListener("click", go);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    });

    $("#chSelect").addEventListener("change", (e) => { location.hash = "#/cours/" + e.target.value; });

    const updateRead = () => {
      const isRead = state.read.has(ch.id);
      const count = C.chapters.filter((c) => state.read.has(c.id)).length;
      const pct = Math.round((count / C.chapters.length) * 100);
      $("#tocProgress").innerHTML = `<div class="bar"><i style="width:${pct}%"></i></div><small>${count} sur ${C.chapters.length} chapitres lus</small>`;
      $("#tocList").innerHTML = C.chapters.map((c, k) => `
        <li><a href="#/cours/${c.id}" class="${k === i ? "active" : ""}" ${k === i ? 'aria-current="page"' : ""}>
          <span class="n">${String(k + 1).padStart(2, "0")}</span>
          <span>${esc(c.title)}</span>
          <span class="check ${state.read.has(c.id) ? "done" : ""}">${state.read.has(c.id) ? icon("check") : ""}</span>
        </a></li>`).join("");
      const btn = $("#markRead");
      btn.className = "btn " + (isRead ? "btn-outline done" : "btn-primary");
      btn.innerHTML = isRead ? `${icon("check", "ic-sm")} Chapitre lu` : "Marquer comme lu";
      $("#readText").textContent = isRead ? "Vous pouvez annuler en cliquant à nouveau." : "Terminé ? Enregistrez votre progression.";
    };
    updateRead();

    $("#markRead").addEventListener("click", () => {
      if (state.read.has(ch.id)) state.read.delete(ch.id);
      else {
        state.read.add(ch.id);
        toast(state.read.size === C.chapters.length ? "Bravo, vous avez terminé tout le cours." : "Chapitre enregistré comme lu.");
      }
      saveRead();
      updateRead();
    });

    // Barre de lecture
    const bar = $("#readProgress");
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (scrollY / h) * 100) : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { removeEventListener("scroll", onScroll); bar.style.width = "0"; };
  }

  /* ============================================================
     OUTILS
     ============================================================ */
  function viewTools(tid) {
    const t = TOOLS.find((x) => x.id === tid) || TOOLS[0];
    app.innerHTML = `
      <div class="wrap">
        <div class="page-head fade-in">
          <span class="eyebrow">Outils</span>
          <h1>S'exercer en manipulant</h1>
          <p>Chaque outil reprend une notion du cours. Modifiez les valeurs, observez le résultat, recommencez.</p>
        </div>
        <nav class="tabs" aria-label="Outils">
          ${TOOLS.map((x) => `<a class="tab ${x.id === t.id ? "active" : ""}" href="#/outils/${x.id}" ${x.id === t.id ? 'aria-current="page"' : ""}>${icon(x.icon, "ic-sm")} ${x.label}</a>`).join("")}
        </nav>
        <div id="toolBody" class="fade-in"></div>
      </div>`;
    const el = $("#toolBody");
    return ({ facture: toolFacture, "compte-t": toolCompteT, fiches: toolFiches, bilan: toolBilan })[t.id](el);
  }

  /* ── Calculateur de facture ──────────────────────────────── */
  function toolFacture(el) {
    const PRESETS = {
      abc: { mb: 1000000, rabais: 15, remises: [], ristourne: 0, esc: 1, port: 70000, tva: 18 },
      cascade: { mb: 2500000, rabais: 0, remises: [10, 5], ristourne: 2, esc: 2, port: 0, tva: 18 },
      zero: { mb: 0, rabais: 0, remises: [], ristourne: 0, esc: 0, port: 0, tva: 18 }
    };
    let s = JSON.parse(JSON.stringify(PRESETS.abc));
    let view = "client";

    el.innerHTML = `
      <div class="tool">
        <div class="panel">
          <h2>Données de la facture</h2>
          <p class="sub">Les réductions commerciales s'appliquent en cascade. L'escompte se calcule sur le Net commercial.</p>
          <div class="field"><label for="f-mb">Montant brut (F CFA)</label><input class="input" id="f-mb" type="number" min="0" step="1000"></div>
          <div class="field-row">
            <div class="field"><label for="f-rabais">Rabais</label><div class="input-suffix"><input class="input" id="f-rabais" type="number" min="0" max="100" step="0.5"><span>%</span></div></div>
            <div class="field"><label for="f-ristourne">Ristourne</label><div class="input-suffix"><input class="input" id="f-ristourne" type="number" min="0" max="100" step="0.5"><span>%</span></div></div>
          </div>
          <div class="field">
            <label>Remise(s)</label>
            <div class="remise-list" id="f-remises"></div>
            <button class="link-btn" id="f-add" type="button">${icon("plus", "ic-sm")} Ajouter une remise</button>
          </div>
          <div class="field-row">
            <div class="field"><label for="f-esc">Escompte</label><div class="input-suffix"><input class="input" id="f-esc" type="number" min="0" max="100" step="0.5"><span>%</span></div></div>
            <div class="field"><label for="f-port">Port HT (F CFA)</label><input class="input" id="f-port" type="number" min="0" step="1000"></div>
          </div>
          <div class="field"><label for="f-tva">Taux de TVA</label><div class="input-suffix"><input class="input" id="f-tva" type="number" min="0" max="100" step="0.5"><span>%</span></div></div>
          <div class="field"><label>Exemples</label>
            <div class="presets">
              <button class="chip" data-preset="abc" type="button">Facture ABC vers BAC (cours)</button>
              <button class="chip" data-preset="cascade" type="button">Remises en cascade</button>
              <button class="chip" data-preset="zero" type="button">Tout effacer</button>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="invoice-head"><h2>Facture de doit</h2><span class="pill brand" id="f-tvapill"></span></div>
          <div class="invoice" id="f-out"></div>
          <div class="journal-box">
            <div class="invoice-head" style="flex-wrap:wrap;gap:12px">
              <h3>Écriture au journal</h3>
              <div class="seg" id="f-view" style="min-width:250px">
                <button type="button" data-v="client">Chez le client</button>
                <button type="button" data-v="fournisseur">Chez le fournisseur</button>
              </div>
            </div>
            <div id="f-journal"></div>
          </div>
        </div>
      </div>`;

    const ids = ["mb", "rabais", "ristourne", "esc", "port", "tva"];
    const fill = () => {
      ids.forEach((k) => { $("#f-" + k).value = s[k] || ""; });
      $("#f-remises").innerHTML = s.remises.map((r, k) => `
        <div class="remise-item">
          <div class="input-suffix"><input class="input" data-remise="${k}" type="number" min="0" max="100" step="0.5" value="${r}" aria-label="Remise ${k + 1}"><span>%</span></div>
          <button class="icon-btn" data-del="${k}" type="button" aria-label="Supprimer la remise ${k + 1}">${icon("trash", "ic-sm")}</button>
        </div>`).join("") || `<p class="t-empty" style="padding:0">Aucune remise.</p>`;
      compute();
    };

    const row = (cls, lbl, val, sub = "") => `<div class="invoice-row ${cls}"><span class="lbl">${lbl}${sub ? `<small>${sub}</small>` : ""}</span><span class="val">${val}</span></div>`;

    const compute = () => {
      let base = s.mb, html = row("", "Montant brut", fmt(s.mb));
      const reduce = (name, pct) => {
        if (!pct) return;
        const amt = base * pct / 100;
        html += row("minus", `${name} ${pct} %`, "− " + fmt(amt), `sur ${fmt(base)}`);
        base -= amt;
      };
      reduce("Rabais", s.rabais);
      s.remises.forEach((r, k) => reduce(s.remises.length > 1 ? `Remise ${k + 1}` : "Remise", r));
      reduce("Ristourne", s.ristourne);
      const nc = base;
      html += row("total", "Net commercial", fmt(nc));
      const escompte = nc * s.esc / 100;
      if (s.esc) html += row("minus", `Escompte ${s.esc} %`, "− " + fmt(escompte), "sur le Net commercial");
      const nf = nc - escompte;
      if (s.esc) html += row("total", "Net financier", fmt(nf));
      if (s.port) html += row("plus", "Port HT", "+ " + fmt(s.port));
      const ht = nf + s.port;
      if (s.port) html += row("total", "Sous-total HT", fmt(ht));
      const tva = ht * s.tva / 100;
      html += row("plus", `TVA ${s.tva} %`, "+ " + fmt(tva));
      const nap = ht + tva;
      html += row("nap", "Net à payer", fmt(nap));
      $("#f-out").innerHTML = html;
      $("#f-tvapill").textContent = "TVA " + s.tva + " %";

      const lines = view === "client"
        ? [
            ["d", "601", "Achats de marchandises", nc],
            ["d", "6015", "Frais sur achats (port)", s.port],
            ["d", "445", "État, TVA récupérable", tva],
            ["c", "401", "Fournisseurs", nap],
            ["c", "773", "Escomptes obtenus", escompte]
          ]
        : [
            ["d", "411", "Clients", nap],
            ["d", "673", "Escomptes accordés", escompte],
            ["c", "701", "Ventes de marchandises", nc],
            ["c", "707", "Produits accessoires (port)", s.port],
            ["c", "443", "État, TVA facturée", tva]
          ];
      const shown = lines.filter((l) => Math.round(l[3]) !== 0);
      const td = shown.filter((l) => l[0] === "d").reduce((a, l) => a + l[3], 0);
      const tc = shown.filter((l) => l[0] === "c").reduce((a, l) => a + l[3], 0);
      $("#f-journal").innerHTML = nap > 0 ? `
        <table class="journal-table">
          <thead><tr><th>Compte</th><th>Intitulé</th><th style="text-align:right">Débit</th><th style="text-align:right">Crédit</th></tr></thead>
          <tbody>
            ${shown.map((l) => `<tr class="${l[0] === "c" ? "cr" : ""}"><td class="acc">${l[1]}</td><td>${l[2]}</td>
              <td class="num">${l[0] === "d" ? fmt(l[3]) : ""}</td><td class="num">${l[0] === "c" ? fmt(l[3]) : ""}</td></tr>`).join("")}
            <tr><td></td><td><b>Totaux</b></td><td class="num"><b>${fmt(td)}</b></td><td class="num"><b>${fmt(tc)}</b></td></tr>
          </tbody>
        </table>` : `<p class="t-empty">Saisissez un montant brut pour générer l'écriture.</p>`;
      $$("#f-view button").forEach((b) => b.classList.toggle("on-d", b.dataset.v === view));
    };

    ids.forEach((k) => $("#f-" + k).addEventListener("input", (e) => { s[k] = num(e.target.value); compute(); }));
    $("#f-remises").addEventListener("input", (e) => {
      if (e.target.dataset.remise !== undefined) { s.remises[+e.target.dataset.remise] = num(e.target.value); compute(); }
    });
    $("#f-remises").addEventListener("click", (e) => {
      const b = e.target.closest("[data-del]");
      if (b) { s.remises.splice(+b.dataset.del, 1); fill(); }
    });
    $("#f-add").addEventListener("click", () => {
      s.remises.push(5); fill();
      const inputs = $$("#f-remises input"); inputs[inputs.length - 1].focus();
    });
    el.addEventListener("click", (e) => {
      const p = e.target.closest("[data-preset]");
      if (p) { s = JSON.parse(JSON.stringify(PRESETS[p.dataset.preset])); fill(); }
      const v = e.target.closest("#f-view button");
      if (v) { view = v.dataset.v; compute(); }
    });
    fill();
  }

  /* ── Simulateur de compte en T ───────────────────────────── */
  function toolCompteT(el) {
    const ACCOUNTS = {
      "52": { l: "Banques", type: "actif" },
      "57": { l: "Caisse", type: "actif" },
      "411": { l: "Clients", type: "actif" },
      "401": { l: "Fournisseurs", type: "passif" },
      "10": { l: "Capital", type: "passif" },
      "601": { l: "Achats de marchandises", type: "charge" },
      "701": { l: "Ventes de marchandises", type: "produit" }
    };
    const RULES = {
      actif: "Compte d'actif : il augmente au débit et diminue au crédit. Son solde est normalement débiteur.",
      passif: "Compte de passif : il augmente au crédit et diminue au débit. Son solde est normalement créditeur.",
      charge: "Compte de charges : il s'enregistre au débit. Son solde est normalement débiteur.",
      produit: "Compte de produits : il s'enregistre au crédit. Son solde est normalement créditeur."
    };
    const EXAMPLES = [
      { l: "Apport en capital", v: 2000000, s: "d" },
      { l: "Vente encaissée", v: 450000, s: "d" },
      { l: "Achat de marchandises", v: 350000, s: "c" },
      { l: "Paiement des salaires", v: 200000, s: "c" },
      { l: "Règlement fournisseur", v: 2100000, s: "c" }
    ];
    let acc = "52", entries = [], side = "d";

    el.innerHTML = `
      <div class="tool">
        <div class="panel">
          <h2>Nouvelle opération</h2>
          <p class="sub" id="t-rule"></p>
          <div class="field"><label for="t-acc">Compte</label>
            <select class="input" id="t-acc">${Object.entries(ACCOUNTS).map(([n, a]) => `<option value="${n}">${n} — ${a.l}</option>`).join("")}</select>
          </div>
          <div class="field"><label for="t-lbl">Libellé</label><input class="input" id="t-lbl" type="text" placeholder="Ex : vente au comptant" style="font-family:var(--sans)"></div>
          <div class="field-row">
            <div class="field"><label for="t-val">Montant (F CFA)</label><input class="input" id="t-val" type="number" min="0" step="1000" placeholder="0"></div>
            <div class="field"><label>Sens</label>
              <div class="seg" id="t-side"><button type="button" data-s="d">Débit</button><button type="button" data-s="c">Crédit</button></div>
            </div>
          </div>
          <button class="btn btn-primary" id="t-add" type="button" style="width:100%">${icon("plus", "ic-sm")} Passer l'opération</button>
          <div class="field" style="margin-top:22px"><label>Exemples sur le compte Banques</label>
            <div class="presets">${EXAMPLES.map((x, k) => `<button class="chip" data-ex="${k}" type="button">${x.l} (${x.s === "d" ? "D" : "C"} ${fmt(x.v)})</button>`).join("")}</div>
          </div>
        </div>

        <div class="panel">
          <div class="t-sim">
            <div class="t-sim-title" id="t-title"></div>
            <div class="t-sim-grid">
              <div><div class="t-side d">Débit</div><div id="t-d"></div></div>
              <div><div class="t-side c">Crédit</div><div id="t-c"></div></div>
            </div>
            <div class="t-totals"><div id="t-td"></div><div id="t-tc"></div></div>
            <div id="t-solde"></div>
            <div style="display:flex;justify-content:flex-end;margin-top:14px">
              <button class="btn btn-ghost btn-sm" id="t-reset" type="button">${icon("refresh", "ic-sm")} Vider le compte</button>
            </div>
          </div>
        </div>
      </div>`;

    const render = () => {
      const a = ACCOUNTS[acc];
      $("#t-title").textContent = `${acc} — ${a.l}`;
      $("#t-rule").textContent = RULES[a.type];
      $$("#t-side button").forEach((b) => { b.className = b.dataset.s === side ? (side === "d" ? "on-d" : "on-c") : ""; });
      const list = (s) => {
        const items = entries.map((e, k) => ({ ...e, k })).filter((e) => e.s === s);
        return items.length ? items.map((e) => `
          <div class="t-entry"><span class="l" title="${esc(e.l)}">${esc(e.l)}</span><span style="display:flex;gap:6px;align-items:center"><span class="v">${fmt(e.v)}</span>
          <button type="button" data-rm="${e.k}" aria-label="Supprimer">${icon("x", "ic-sm")}</button></span></div>`).join("")
          : `<div class="t-empty">Aucune opération</div>`;
      };
      $("#t-d").innerHTML = list("d");
      $("#t-c").innerHTML = list("c");
      const td = entries.filter((e) => e.s === "d").reduce((x, e) => x + e.v, 0);
      const tc = entries.filter((e) => e.s === "c").reduce((x, e) => x + e.v, 0);
      $("#t-td").textContent = "TD " + fmt(td);
      $("#t-tc").textContent = "TC " + fmt(tc);

      let html = "";
      if (entries.length) {
        const diff = td - tc;
        if (diff === 0) {
          html = `<div class="t-solde"><span>Compte soldé (TD = TC)</span><b>0</b></div>`;
        } else {
          const deb = diff > 0;
          const normalDeb = a.type === "actif" || a.type === "charge";
          let note = deb ? "TD > TC : pour arrêter le compte, on inscrit le solde au crédit." : "TC > TD : pour arrêter le compte, on inscrit le solde au débit.";
          if (deb !== normalDeb) {
            note += acc === "52"
              ? " Un compte Banques créditeur correspond à un découvert (trésorerie-passif)."
              : " Attention : ce sens de solde est inhabituel pour ce type de compte.";
          }
          html = `<div class="t-solde ${deb ? "" : "cr"}"><div><div style="font-weight:600">Solde ${deb ? "débiteur" : "créditeur"}</div><div style="font-size:13px;color:var(--muted)">${note}</div></div><b>${fmt(Math.abs(diff))}</b></div>`;
        }
      }
      $("#t-solde").innerHTML = html;
    };

    const add = (l, v, s) => {
      if (!(v > 0)) { toast("Indiquez un montant supérieur à zéro."); return false; }
      entries.push({ l: l || (s === "d" ? "Opération au débit" : "Opération au crédit"), v, s });
      render();
      return true;
    };

    $("#t-acc").addEventListener("change", (e) => { acc = e.target.value; entries = []; render(); });
    $("#t-side").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { side = b.dataset.s; render(); } });
    $("#t-add").addEventListener("click", () => {
      if (add($("#t-lbl").value.trim(), num($("#t-val").value), side)) { $("#t-lbl").value = ""; $("#t-val").value = ""; $("#t-lbl").focus(); }
    });
    $("#t-val").addEventListener("keydown", (e) => { if (e.key === "Enter") $("#t-add").click(); });
    $("#t-reset").addEventListener("click", () => { entries = []; render(); });
    el.addEventListener("click", (e) => {
      const x = e.target.closest("[data-ex]");
      if (x) {
        if (acc !== "52") { acc = "52"; entries = []; $("#t-acc").value = "52"; }
        const ex = EXAMPLES[+x.dataset.ex];
        add(ex.l, ex.v, ex.s);
      }
      const rm = e.target.closest("[data-rm]");
      if (rm) { entries.splice(+rm.dataset.rm, 1); render(); }
    });
    render();
  }

  /* ── Fiches du plan comptable ────────────────────────────── */
  function toolFiches(el) {
    let cls = "all", mode = "n2l", deck = [], pos = 0, known = 0, again = 0, unique = 0, flipped = false;

    el.innerHTML = `
      <div class="tool">
        <div class="flash-wrap">
          <div class="flash-controls">
            <select class="input" id="fc-cls" style="width:auto" aria-label="Classe">
              <option value="all">Toutes les classes</option>
              ${Object.entries(C.classNames).map(([k, v]) => `<option value="${k}">Classe ${k} — ${v}</option>`).join("")}
            </select>
            <div class="seg" id="fc-mode" style="min-width:300px">
              <button type="button" data-m="n2l">Numéro → intitulé</button>
              <button type="button" data-m="l2n">Intitulé → numéro</button>
            </div>
          </div>
          <div id="fc-body" style="width:100%;display:flex;flex-direction:column;align-items:center;gap:20px"></div>
        </div>
      </div>`;

    const build = () => {
      deck = shuffle(C.accounts.filter((a) => cls === "all" || String(a.c) === cls));
      pos = 0; known = 0; again = 0; unique = deck.length; flipped = false;
      render();
    };

    const render = () => {
      $$("#fc-mode button").forEach((b) => b.classList.toggle("on-d", b.dataset.m === mode));
      const body = $("#fc-body");
      if (pos >= deck.length) {
        const pct = unique ? Math.round((known / unique) * 100) : 0;
        body.innerHTML = `
          <div class="panel" style="text-align:center;max-width:520px;width:100%">
            <div class="ring" style="margin:0 auto 14px">${ring(pct, 26, pct + "%")}</div>
            <h2>Série terminée</h2>
            <p class="sub" style="margin-top:6px">${known} compte${known > 1 ? "s" : ""} sur ${unique} reconnu${known > 1 ? "s" : ""} du premier coup${again ? `, ${again} carte${again > 1 ? "s" : ""} revue${again > 1 ? "s" : ""}` : ""}.</p>
            <button class="btn btn-primary" id="fc-restart" type="button">${icon("refresh", "ic-sm")} Nouvelle série</button>
          </div>`;
        $("#fc-restart").addEventListener("click", build);
        if (pct >= 80) confetti();
        return;
      }
      const a = deck[pos];
      const front = mode === "n2l"
        ? `<div class="flash-num">${a.n}</div><small>Classe ${a.c} — ${C.classNames[a.c]}</small>`
        : `<div class="flash-label" style="font-family:var(--serif);font-size:26px;line-height:1.25">${esc(a.l)}</div><small>Classe ${a.c} — ${C.classNames[a.c]}</small>`;
      const back = mode === "n2l"
        ? `<div class="flash-label">${esc(a.l)}</div><small>Compte ${a.n}</small>`
        : `<div class="flash-num" style="color:inherit">${a.n}</div><small>${esc(a.l)}</small>`;
      body.innerHTML = `
        <div class="flash-score"><span>Carte <b>${pos + 1}</b> / ${deck.length}</span><span>Reconnues <b>${known}</b></span><span>À revoir <b>${again}</b></span></div>
        <div class="flashcard ${flipped ? "flipped" : ""}" id="fc-card" role="button" tabindex="0" aria-label="Retourner la carte">
          <div class="flash-inner">
            <div class="flash-face front">${front}<span class="flash-hint">Cliquez ou appuyez sur Espace pour retourner</span></div>
            <div class="flash-face back">${back}</div>
          </div>
        </div>
        <div class="flash-controls">
          <button class="btn btn-again" id="fc-again" type="button">${icon("refresh", "ic-sm")} À revoir <kbd>1</kbd></button>
          <button class="btn btn-know" id="fc-know" type="button">${icon("check", "ic-sm")} Je savais <kbd>2</kbd></button>
        </div>`;
      $("#fc-card").addEventListener("click", flip);
      $("#fc-again").addEventListener("click", () => answer(false));
      $("#fc-know").addEventListener("click", () => answer(true));
    };

    const flip = () => { flipped = !flipped; const c = $("#fc-card"); if (c) c.classList.toggle("flipped", flipped); };
    const answer = (ok) => {
      if (pos >= deck.length) return;
      const card = deck[pos];
      if (ok) { if (!card._seen) known++; }
      else { again++; card._seen = true; deck.push(card); }
      pos++; flipped = false; render();
    };

    $("#fc-cls").addEventListener("change", (e) => { cls = e.target.value; build(); });
    $("#fc-mode").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { mode = b.dataset.m; flipped = false; render(); } });

    const onKey = (e) => {
      if (e.target.matches("input, select, textarea") || !$("#searchModal").hidden) return;
      if (e.code === "Space") { e.preventDefault(); flip(); }
      else if (e.key === "1") answer(false);
      else if (e.key === "2") answer(true);
    };
    document.addEventListener("keydown", onKey);
    build();
    return () => document.removeEventListener("keydown", onKey);
  }

  /* ── Classer au bilan ────────────────────────────────────── */
  function toolBilan(el) {
    let items, placed, errors, picked;

    el.innerHTML = `
      <div class="tool">
        <div class="sort-wrap">
          <p class="sub" style="color:var(--muted);margin-bottom:14px">Glissez chaque poste dans la bonne colonne, ou touchez un poste puis une colonne. L'actif regroupe les emplois, le passif les ressources.</p>
          <div class="sort-pool" id="sb-pool"></div>
          <div class="sort-zones">
            <div class="zone actif" data-zone="actif"><h3><span>Actif — Emplois</span><span id="sb-na"></span></h3><div class="items"></div></div>
            <div class="zone passif" data-zone="passif"><h3><span>Passif — Ressources</span><span id="sb-np"></span></h3><div class="items"></div></div>
          </div>
          <div class="sort-foot">
            <p id="sb-status"></p>
            <button class="btn btn-outline btn-sm" id="sb-reset" type="button">${icon("refresh", "ic-sm")} Recommencer</button>
          </div>
        </div>
      </div>`;

    const reset = () => {
      items = shuffle(C.bilanItems).map((x, k) => ({ ...x, k }));
      placed = new Set(); errors = 0; picked = null;
      render();
    };

    const chip = (it, cls = "") => `<div class="sort-item ${cls}" data-k="${it.k}" ${cls ? "" : 'draggable="true" tabindex="0" role="button"'}>${esc(it.l)}</div>`;

    const render = () => {
      const pool = items.filter((it) => !placed.has(it.k));
      $("#sb-pool").innerHTML = pool.length ? pool.map((it) => chip(it, picked === it.k ? "picked" : "").replace('class="sort-item picked"', 'class="sort-item picked" draggable="true" tabindex="0" role="button"')).join("")
        : `<span style="color:var(--muted);font-size:14px">Tous les postes sont classés.</span>`;
      ["actif", "passif"].forEach((z) => {
        $(`[data-zone="${z}"] .items`).innerHTML = items.filter((it) => placed.has(it.k) && it.s === z).map((it) => chip(it, "right")).join("");
      });
      const na = items.filter((it) => it.s === "actif"), np = items.filter((it) => it.s === "passif");
      $("#sb-na").textContent = `${na.filter((it) => placed.has(it.k)).length}/${na.length}`;
      $("#sb-np").textContent = `${np.filter((it) => placed.has(it.k)).length}/${np.length}`;
      const done = placed.size === items.length;
      $("#sb-status").innerHTML = done
        ? `<b style="color:var(--ok)">Exercice terminé</b> avec ${errors} erreur${errors > 1 ? "s" : ""}.`
        : `${placed.size} sur ${items.length} postes classés · ${errors} erreur${errors > 1 ? "s" : ""}`;
    };

    const tryPlace = (k, zone) => {
      const it = items.find((x) => x.k === k);
      if (!it || placed.has(k)) return;
      picked = null;
      if (it.s === zone) {
        placed.add(k);
        render();
        if (placed.size === items.length) { toast(errors ? `Terminé avec ${errors} erreur${errors > 1 ? "s" : ""}.` : "Sans faute, bravo."); if (!errors) confetti(); }
      } else {
        errors++;
        render();
        const node = $(`#sb-pool [data-k="${k}"]`);
        if (node) { node.classList.add("wrong"); setTimeout(() => node.classList.remove("wrong"), 600); }
        toast(`« ${it.l} » : emploi ou ressource ? Réessayez.`);
      }
    };

    const pool = $("#sb-pool");
    pool.addEventListener("click", (e) => {
      const n = e.target.closest(".sort-item");
      if (!n) return;
      const k = +n.dataset.k;
      picked = picked === k ? null : k;
      render();
    });
    pool.addEventListener("keydown", (e) => {
      const n = e.target.closest(".sort-item");
      if (!n) return;
      if (e.key === "ArrowLeft") tryPlace(+n.dataset.k, "actif");
      if (e.key === "ArrowRight") tryPlace(+n.dataset.k, "passif");
      if (e.key === "Enter") n.click();
    });
    pool.addEventListener("dragstart", (e) => {
      const n = e.target.closest(".sort-item");
      if (!n) return;
      e.dataTransfer.setData("text/plain", n.dataset.k);
      n.classList.add("dragging");
    });
    pool.addEventListener("dragend", (e) => { const n = e.target.closest(".sort-item"); if (n) n.classList.remove("dragging"); });

    $$(".zone", el).forEach((z) => {
      z.addEventListener("dragover", (e) => { e.preventDefault(); z.classList.add("over"); });
      z.addEventListener("dragleave", () => z.classList.remove("over"));
      z.addEventListener("drop", (e) => { e.preventDefault(); z.classList.remove("over"); tryPlace(+e.dataTransfer.getData("text/plain"), z.dataset.zone); });
      z.addEventListener("click", () => { if (picked !== null) tryPlace(picked, z.dataset.zone); });
    });
    $("#sb-reset").addEventListener("click", reset);
    reset();
  }


  /* ============================================================
     EXERCICES INTERACTIFS GUIDÉS
     ============================================================ */
  function viewExercises(exId) {
    if (exId) return renderSingleExercise(exId);

    const exs = C.exercises || [];
    const doneCount = exs.filter(e => state.exDone.has(e.id)).length;

    app.innerHTML = `
      <div class="wrap">
        <div class="page-head fade-in">
          <span class="eyebrow">Entraînement</span>
          <h1>Exercices d'application réels</h1>
          <p>Mettez en pratique vos acquis sur les cas réels du polycopié (CHIC CHOC, AZERD, BAC, TVA). Vos réponses sont corrigées automatiquement.</p>
          <div style="margin-top:14px;font-size:14px;color:var(--muted)">
            Progression : <strong style="color:var(--brand)">${doneCount} / ${exs.length}</strong> exercices réussis
          </div>
        </div>

        <div class="ex-grid fade-in">
          ${exs.map((e, idx) => {
            const isDone = state.exDone.has(e.id);
            const chObj = C.chapters.find(c => c.id === e.ch);
            return `
              <a class="ex-card" href="#/exercices/${e.id}">
                <div>
                  <div class="ex-meta" style="margin-bottom:10px">
                    <span class="ex-badge ${isDone ? 'done' : ''}">${isDone ? icon('check', 'ic-sm') + ' Validé' : 'Niveau ' + e.level}</span>
                    <span style="color:var(--muted)">${e.source || 'Cours'}</span>
                  </div>
                  <h3>${esc(e.title)}</h3>
                  <p style="margin-top:8px">${chObj ? esc(chObj.title) : ''}</p>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px">
                  <span style="font-size:13px;color:var(--brand);font-weight:600">Type : ${e.type.toUpperCase()}</span>
                  <span class="btn btn-outline btn-sm">${isDone ? 'Refaire' : 'Résoudre'}</span>
                </div>
              </a>`;
          }).join('')}
        </div>
      </div>`;
  }

  function renderSingleExercise(exId) {
    const ex = (C.exercises || []).find(e => e.id === exId);
    if (!ex) {
      location.hash = '#/exercices';
      return;
    }

    app.innerHTML = `
      <div class="wrap ex-view fade-in">
        <div style="margin-bottom:20px">
          <a class="btn btn-ghost btn-sm" href="#/exercices">${icon('arrowL', 'ic-sm')} Retour aux exercices</a>
        </div>
        <div class="ex-panel">
          <div class="ex-header">
            <span class="eyebrow">Exercice ${ex.type.toUpperCase()} · ${ex.source || 'Cours Sonou'}</span>
            <h2>${esc(ex.title)}</h2>
          </div>
          <div class="ex-context">${ex.context || ''}</div>
          <div id="ex-runner"></div>
        </div>
      </div>`;

    const runner = $('#ex-runner');
    if (ex.type === 'journal') renderExerciseJournal(runner, ex);
    else if (ex.type === 'facture') renderExerciseFacture(runner, ex);
    else if (ex.type === 'compte') renderExerciseCompte(runner, ex);
    else if (ex.type === 'bilan') renderExerciseBilan(runner, ex);
  }

  function renderExerciseJournal(runner, ex) {
    let currentOpIdx = 0;
    const ops = ex.ops || [];

    const renderStep = () => {
      if (currentOpIdx >= ops.length) {
        state.exDone.add(ex.id);
        saveExDone();
        confetti();
        runner.innerHTML = `
          <div style="text-align:center;padding:30px 10px">
            <div style="font-size:48px;color:var(--ok);margin-bottom:12px">${icon('check')}</div>
            <h3>Exercice validé avec succès !</h3>
            <p style="color:var(--muted);margin-top:6px">Toutes les opérations ont été correctement imputées au journal.</p>
            <div style="margin-top:24px;display:flex;gap:12px;justify-content:center">
              <a class="btn btn-primary" href="#/exercices">Liste des exercices</a>
              <button class="btn btn-outline" id="ex-restart">Recommencer</button>
            </div>
          </div>`;
        $('#ex-restart').addEventListener('click', () => { currentOpIdx = 0; renderStep(); });
        return;
      }

      const op = ops[currentOpIdx];
      runner.innerHTML = `
        <div style="margin-bottom:20px">
          <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:14px;color:var(--muted)">
            <span>Opération <b>${currentOpIdx + 1} / ${ops.length}</b></span>
            <span>Date : <b>${op.date}</b></span>
          </div>
          <p style="font-size:16px;font-weight:600;margin-bottom:16px">${esc(op.text)}</p>
          <div id="op-lines" style="display:flex;flex-direction:column;gap:10px"></div>
          <div style="margin-top:14px">
            <button class="btn btn-ghost btn-sm" id="btn-add-line" type="button">${icon('plus', 'ic-sm')} Ajouter une ligne</button>
          </div>
          <div id="op-feedback" style="margin-top:16px"></div>
          <div style="margin-top:24px;display:flex;justify-content:flex-end">
            <button class="btn btn-primary" id="btn-val-op" type="button">Vérifier l'écriture</button>
          </div>
        </div>`;

      const linesBox = $('#op-lines');
      const addLine = (side = 'd') => {
        const row = document.createElement('div');
        row.className = 'journal-entry-row';
        row.innerHTML = `
          <select class="input j-side">
            <option value="d" ${side === 'd' ? 'selected' : ''}>DÉBIT</option>
            <option value="c" ${side === 'c' ? 'selected' : ''}>CRÉDIT</option>
          </select>
          <input class="input j-acc" type="text" placeholder="N° compte (ex: 601)" list="dl-accounts" />
          <input class="input j-deb" type="number" placeholder="Montant Débit" ${side === 'c' ? 'disabled' : ''} />
          <input class="input j-cred" type="number" placeholder="Montant Crédit" ${side === 'd' ? 'disabled' : ''} />
          <button class="icon-btn j-del" type="button">${icon('trash', 'ic-sm')}</button>`;

        const sSelect = row.querySelector('.j-side');
        const dIn = row.querySelector('.j-deb');
        const cIn = row.querySelector('.j-cred');
        sSelect.addEventListener('change', () => {
          if (sSelect.value === 'd') { dIn.disabled = false; cIn.disabled = true; cIn.value = ''; }
          else { dIn.disabled = true; cIn.disabled = false; dIn.value = ''; }
        });
        row.querySelector('.j-del').addEventListener('click', () => {
          if ($$('.journal-entry-row', linesBox).length > 2) row.remove();
          else toast('Une écriture comporte au moins 2 lignes.');
        });
        linesBox.appendChild(row);
      };

      // Initialise deux lignes de saisie par défaut (une au débit, une au crédit)
      addLine('d');
      addLine('c');

      $('#btn-add-line').addEventListener('click', () => addLine('d'));

      $('#btn-val-op').addEventListener('click', () => {
        const rows = $$('.journal-entry-row', linesBox);
        const entries = rows.map(r => {
          const side = r.querySelector('.j-side').value;
          const acc = r.querySelector('.j-acc').value.trim();
          const amt = num(side === 'd' ? r.querySelector('.j-deb').value : r.querySelector('.j-cred').value);
          return { side, acc, amt };
        });

        // Contrôle de complétude et d'équilibre de la partie double
        const totD = entries.filter(e => e.side === 'd').reduce((s, e) => s + e.amt, 0);
        const totC = entries.filter(e => e.side === 'c').reduce((s, e) => s + e.amt, 0);

        if (totD === 0 || totC === 0) {
          toast("Veuillez saisir les montants de l'écriture.");
          return;
        }

        if (totD !== totC) {
          $('#op-feedback').innerHTML = `<div class="feedback ko"><b>${icon('x', 'ic-sm')} Écriture non équilibrée</b><p>Total Débit (${fmt(totD)}) &ne; Total Crédit (${fmt(totC)}). La partie double impose Débit = Crédit.</p></div>`;
          return;
        }

        // Vérification de la conformité des comptes et des montants avec le corrigé
        const expected = op.lines || [];
        let ok = true;
        for (const exp of expected) {
          const found = entries.find(e => (e.acc.startsWith(exp.a) || exp.a.startsWith(e.acc)) && Math.abs(e.amt - (exp.d || exp.c)) < 5);
          if (!found) { ok = false; break; }
        }

        if (ok) {
          $('#op-feedback').innerHTML = `
            <div class="feedback ok">
              <b>${icon('check', 'ic-sm')} Parfait ! Écriture exacte.</b>
              <p>${esc(op.note || '')}</p>
            </div>`;
          $('#btn-val-op').disabled = true;
          setTimeout(() => { currentOpIdx++; renderStep(); }, 1400);
        } else {
          $('#op-feedback').innerHTML = `
            <div class="feedback ko">
              <b>${icon('x', 'ic-sm')} Erreur d'imputation</b>
              <p>Vérifiez les numéros de comptes et les montants attribués à chaque compte.</p>
              ${op.note ? `<small style="color:var(--muted)">Indice : ${esc(op.note)}</small>` : ''}
            </div>`;
        }
      });
    };

    renderStep();
  }

  function renderExerciseFacture(runner, ex) {
    const lines = ex.lines || [];
    runner.innerHTML = `
      <div style="max-width:600px;margin:0 auto">
        <p style="color:var(--muted);font-size:14px;margin-bottom:18px">Complétez les montants de la facture en appliquant la cascade des réductions :</p>
        <div class="invoice" id="ex-fac-table">
          ${lines.map((l, i) => `
            <div class="invoice-row ${l.op === '-' ? 'minus' : l.op === '+' ? 'plus' : ''} ${l.total ? 'total' : ''}">
              <span class="lbl">${esc(l.l)}</span>
              <span class="val">
                ${l.given
                  ? `<b>${fmt(l.v)}</b>`
                  : `<input class="input" style="width:130px;height:34px;text-align:right" data-idx="${i}" type="number" placeholder="?" />`
                }
              </span>
            </div>`).join('')}
        </div>
        <div id="fac-feedback" style="margin-top:20px"></div>
        <div style="margin-top:24px;text-align:right">
          <button class="btn btn-primary" id="btn-val-fac">Vérifier la facture</button>
        </div>
      </div>`;

    $('#btn-val-fac').addEventListener('click', () => {
      const inputs = $$('#ex-fac-table input');
      let allCorrect = true;
      inputs.forEach(inp => {
        const idx = +inp.dataset.idx;
        const target = lines[idx].v;
        const val = num(inp.value);
        if (Math.abs(val - target) > 2) {
          allCorrect = false;
          inp.style.borderColor = 'var(--bad)';
        } else {
          inp.style.borderColor = 'var(--ok)';
        }
      });

      if (allCorrect) {
        state.exDone.add(ex.id);
        saveExDone();
        confetti();
        $('#fac-feedback').innerHTML = `<div class="feedback ok"><b>${icon('check', 'ic-sm')} Bravo ! Facture exacte.</b><p>Tous les calculs en cascade correspondent parfaitement à la solution du professeur.</p></div>`;
      } else {
        $('#fac-feedback').innerHTML = `<div class="feedback ko"><b>${icon('x', 'ic-sm')} Certains montants sont incorrects</b><p>Rappelez-vous : les remises se calculent en cascade, et l'escompte se calcule sur le Net commercial.</p></div>`;
      }
    });
  }

  function renderExerciseCompte(runner, ex) {
    runner.innerHTML = `
      <div style="text-align:center;padding:20px">
        <p style="margin-bottom:16px">Cet exercice utilise notre simulateur de compte avec les données de l'exercice <strong>${esc(ex.title)}</strong>.</p>
        <a class="btn btn-primary" href="#/outils/compte-t">Ouvrir dans le simulateur de compte ${icon('arrowR', 'ic-sm')}</a>
      </div>`;
  }

  function renderExerciseBilan(runner, ex) {
    runner.innerHTML = `
      <div style="text-align:center;padding:20px">
        <p style="margin-bottom:16px">Cet exercice interactif permet d'ajuster les postes du bilan <strong>${esc(ex.title)}</strong>.</p>
        <a class="btn btn-primary" href="#/outils/bilan">S'exercer sur le classement du bilan ${icon('arrowR', 'ic-sm')}</a>
      </div>`;
  }

  /* ============================================================
     FICHES MÉMO & RÉSUMÉS IMPRIMABLES
     ============================================================ */
  function viewFichesSummary() {
    app.innerHTML = `
      <div class="wrap">
        <div class="page-head fade-in">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
            <div>
              <span class="eyebrow">Fiches de synthèse</span>
              <h1>Les indispensables pour réussir</h1>
              <p>Toutes les formules clés, principes SYSCOHADA et schémas d'écritures réunis sur une seule page prête à imprimer.</p>
            </div>
            <button class="btn btn-outline" onclick="window.print()" type="button">
              <svg class="ic" viewBox="0 0 24 24"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Imprimer la fiche PDF
            </button>
          </div>
        </div>

        <div class="recap-grid fade-in">
          ${C.chapters.map((ch, idx) => `
            <div class="recap-card">
              <h3>${String(idx + 1).padStart(2, '0')}. ${esc(ch.title)}</h3>
              <ul>
                ${(ch.recap || []).map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /* ============================================================
     QUIZ
     ============================================================ */
  function viewQuiz() {
    app.innerHTML = `
      <div class="wrap">
        <div class="page-head fade-in" style="text-align:center">
          <span class="eyebrow">Quiz</span>
          <h1>Évaluez vos connaissances</h1>
          <p style="margin:0 auto">Questions et réponses mélangées à chaque partie. Répondez au clavier avec A, B, C, D puis Entrée.</p>
        </div>
        <div class="quiz" id="quiz"></div>
      </div>`;
    const root = $("#quiz");
    let Q = null;

    const MODES = [
      { id: "full", icon: "list", title: "Quiz complet", desc: `Les ${C.questions.length} questions du programme, dont des calculs.` },
      { id: "quick", icon: "bolt", title: "Série rapide", desc: "10 questions tirées au hasard pour réviser en quelques minutes." },
      { id: "calc", icon: "calc", title: "Calculs", desc: "Réductions, escompte, TVA : uniquement des questions chiffrées." },
      { id: "exam", icon: "target", title: "Examen blanc", desc: "20 questions variées chronométrées avec notation sur 20." },
      { id: "wrongs", icon: "refresh", title: "Mes erreurs", desc: `Revoir les ${state.wrongs.length} questions que vous avez précédemment ratées.` }
    ];

    const intro = () => {
      Q = null;
      root.innerHTML = `
        <div class="quiz-intro fade-in">
          ${MODES.map((m) => `
            <button class="mode-card" data-mode="${m.id}" type="button">
              <div class="feature-ic">${icon(m.icon)}</div>
              <h3>${m.title}</h3>
              <p>${m.desc}</p>
            </button>`).join("")}
        </div>
        <div class="panel" style="margin-top:24px;text-align:left">
          <h3>S'évaluer sur un chapitre spécifique</h3>
          <p class="sub">Sélectionnez le chapitre de votre choix pour tester directement vos connaissances :</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <select class="input" id="quiz-ch-select" style="max-width:380px">
              ${C.chapters.map((c, i) => `<option value="${c.id}">Ch. ${i + 1} : ${esc(c.title)}</option>`).join("")}
            </select>
            <button class="btn btn-primary" id="btn-quiz-ch" type="button">Lancer le quiz du chapitre</button>
          </div>
        </div>
        <p class="best">${state.best ? `Meilleur score : <b>${state.best.pct} %</b> (${state.best.score}/${state.best.total}) · ${state.attempts} quiz terminé${state.attempts > 1 ? "s" : ""}` : "Aucun quiz terminé pour l'instant."}</p>`;
      $$("[data-mode]", root).forEach((b) => b.addEventListener("click", () => start(b.dataset.mode)));
      const chBtn = $("#btn-quiz-ch", root);
      if (chBtn) chBtn.addEventListener("click", () => {
        const val = $("#quiz-ch-select", root).value;
        start("chapter", val);
      });
    };

    let lastMode = "full";
    const start = (mode, filterCh = null) => {
      lastMode = mode;
      let pool = C.questions;
      if (filterCh) {
        pool = pool.filter((q) => q.ch === filterCh);
      } else if (mode === "calc") {
        pool = pool.filter((q) => q.calc);
      } else if (mode === "wrongs") {
        if (!state.wrongs.length) {
          toast("Aucune question enregistrée dans vos erreurs pour l'instant !");
          return;
        }
        pool = C.questions.filter((q) => state.wrongs.some((w) => w.q === q.q));
      } else if (mode === "exam") {
        pool = pool.slice(0);
      }
      pool = shuffle(pool);
      if (mode === "quick") pool = pool.slice(0, 10);
      else if (mode === "exam") pool = pool.slice(0, 20);
      const items = pool.map((q) => {
        const order = shuffle(q.o.map((_, k) => k));
        return { ...q, opts: order.map((k) => q.o[k]), ans: order.indexOf(q.a) };
      });
      Q = { items, i: 0, sel: null, sub: false, res: [], wrongs: [], t0: Date.now() };
      renderQ();
    };

    const renderQ = () => {
      const it = Q.items[Q.i];
      const dots = Q.items.map((_, k) => `<i class="${k < Q.i ? (Q.res[k] ? "ok" : "ko") : k === Q.i ? "cur" : ""}"></i>`).join("");
      const score = Q.res.filter(Boolean).length;
      root.innerHTML = `
        <div class="quiz-card fade-in">
          <div class="quiz-top"><span>Question <b>${Q.i + 1}</b> / ${Q.items.length}</span><span>Score <b>${score}</b></span></div>
          <div class="quiz-dots">${dots}</div>
          <h2 class="quiz-q">${esc(it.q)}</h2>
          <div class="options" role="radiogroup">
            ${it.opts.map((o, k) => `
              <button class="option" data-k="${k}" type="button" role="radio" aria-checked="false">
                <span class="key">${String.fromCharCode(65 + k)}</span><span>${esc(o)}</span><span class="mark"></span>
              </button>`).join("")}
          </div>
          <div id="q-feedback"></div>
          <div class="quiz-actions">
            <span class="hint"><kbd>A</kbd><kbd>B</kbd><kbd>C</kbd><kbd>D</kbd> pour choisir, <kbd>Entrée</kbd> pour valider</span>
            <button class="btn btn-primary" id="q-main" type="button" disabled>Valider</button>
          </div>
        </div>`;
      $$(".option", root).forEach((b) => b.addEventListener("click", () => select(+b.dataset.k)));
      $("#q-main").addEventListener("click", main);
    };

    const select = (k) => {
      if (!Q || Q.sub || k >= Q.items[Q.i].opts.length) return;
      Q.sel = k;
      $$(".option", root).forEach((b, j) => { b.classList.toggle("selected", j === k); b.setAttribute("aria-checked", j === k); });
      $("#q-main").disabled = false;
    };

    const main = () => {
      if (!Q) return;
      if (!Q.sub) validate();
      else if (Q.i < Q.items.length - 1) { Q.i++; Q.sel = null; Q.sub = false; renderQ(); }
      else results();
    };

    const validate = () => {
      if (Q.sel === null) return;
      const it = Q.items[Q.i], ok = Q.sel === it.ans;
      Q.sub = true;
      Q.res[Q.i] = ok;
      if (!ok) {
        Q.wrongs.push({ q: it.q, sel: it.opts[Q.sel], good: it.opts[it.ans], e: it.e, ch: it.ch });
        if (!state.wrongs.some((w) => w.q === it.q)) {
          state.wrongs.push({ q: it.q, e: it.e, ch: it.ch });
          saveWrongs();
        }
      } else {
        // En cas de bonne réponse ultérieure, retire la question de la liste des erreurs
        const idxW = state.wrongs.findIndex((w) => w.q === it.q);
        if (idxW >= 0) { state.wrongs.splice(idxW, 1); saveWrongs(); }
      }
      $$(".option", root).forEach((b, j) => {
        b.disabled = true;
        b.classList.remove("selected");
        if (j === it.ans) { b.classList.add("correct"); b.querySelector(".mark").innerHTML = icon("check"); }
        else if (j === Q.sel) { b.classList.add("incorrect"); b.querySelector(".mark").innerHTML = icon("x"); }
      });
      const chI = chapterIndex(it.ch);
      $("#q-feedback").innerHTML = `
        <div class="feedback ${ok ? "ok" : "ko"}">
          <b>${icon(ok ? "check" : "x", "ic-sm")} ${ok ? "Bonne réponse" : "Mauvaise réponse"}</b>
          <p>${esc(it.e)}</p>
          ${!ok && chI >= 0 ? `<a href="#/cours/${it.ch}">Revoir le chapitre ${chI + 1} : ${esc(C.chapters[chI].title)}</a>` : ""}
        </div>`;
      const dot = $$(".quiz-dots i", root)[Q.i];
      dot.className = ok ? "ok" : "ko";
      $(".quiz-top b:last-child", root).textContent = Q.res.filter(Boolean).length;
      const btn = $("#q-main");
      btn.innerHTML = Q.i < Q.items.length - 1 ? `Question suivante ${icon("arrowR", "ic-sm")}` : `Voir les résultats ${icon("arrowR", "ic-sm")}`;
      btn.focus();
    };

    const results = () => {
      const total = Q.items.length, score = Q.res.filter(Boolean).length;
      const pct = Math.round((score / total) * 100);
      const secs = Math.round((Date.now() - Q.t0) / 1000);
      const time = `${Math.floor(secs / 60)} min ${String(secs % 60).padStart(2, "0")} s`;
      const [title, msg] =
        pct >= 80 ? ["Excellent travail", "Vous maîtrisez l'essentiel du programme."]
        : pct >= 60 ? ["Très bien", "Encore quelques notions à consolider."]
        : pct >= 40 ? ["Bon début", "Revoyez les chapitres signalés ci-dessous, puis retentez votre chance."]
        : ["Continuez vos efforts", "Reprenez le cours chapitre par chapitre, puis refaites le quiz."];

      state.attempts++;
      store.set("attempts", state.attempts);
      const isBest = !state.best || pct > state.best.pct;
      if (isBest) { state.best = { pct, score, total }; store.set("best", state.best); }

      const toReview = [...new Set(Q.wrongs.map((w) => w.ch))].map(chapterIndex).filter((k) => k >= 0).sort((a, b) => a - b);

      root.innerHTML = `
        <div class="quiz-card result fade-in">
          <div class="ring">${ring(pct, 65, pct + "%")}</div>
          <h2>${title}</h2>
          <p>${msg}${isBest && state.attempts > 1 ? " Nouveau record personnel." : ""}</p>
          <div class="result-stats">
            <div><b style="color:var(--ok)">${score}</b><span>bonnes réponses</span></div>
            <div><b style="color:var(--bad)">${total - score}</b><span>erreurs</span></div>
            <div><b>${time}</b><span>temps total</span></div>
          </div>
          ${toReview.length ? `<p style="margin-bottom:20px;font-size:14px;color:var(--muted)">Chapitres à revoir : ${toReview.map((k) => `<a href="#/cours/${C.chapters[k].id}" style="color:var(--brand);font-weight:600">${k + 1}. ${esc(C.chapters[k].title)}</a>`).join(" · ")}</p>` : ""}
          ${Q.wrongs.length ? `
            <div class="review">
              <h3>Questions à revoir (${Q.wrongs.length})</h3>
              ${Q.wrongs.map((w) => `
                <div class="review-item">
                  <p class="q">${esc(w.q)}</p>
                  <div class="ans"><span class="ko">${icon("x", "ic-sm")} ${esc(w.sel)}</span><span class="ok">${icon("check", "ic-sm")} ${esc(w.good)}</span></div>
                  <p class="exp">${esc(w.e)}</p>
                </div>`).join("")}
            </div>` : ""}
          <div class="result-actions">
            <button class="btn btn-primary" id="q-again" type="button">${icon("refresh", "ic-sm")} Rejouer</button>
            <button class="btn btn-outline" id="q-modes" type="button">Changer de mode</button>
          </div>
        </div>`;
      Q = null;
      $("#q-again").addEventListener("click", () => start(lastMode));
      $("#q-modes").addEventListener("click", intro);
      if (pct >= 80) confetti();
    };

    const onKey = (e) => {
      if (!Q || e.target.matches("input, select, textarea") || !$("#searchModal").hidden) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const k = e.key.toLowerCase();
      const map = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
      if (k in map) { e.preventDefault(); select(map[k]); }
      else if (e.key === "Enter" && !(e.target.closest && e.target.closest("button"))) { e.preventDefault(); main(); }
    };
    document.addEventListener("keydown", onKey);
    intro();

    return () => document.removeEventListener("keydown", onKey);
  }

  /* ============================================================
     RECHERCHE
     ============================================================ */
  const search = (() => {
    const modal = $("#searchModal"), input = $("#searchInput"), out = $("#searchResults");
    let index = null, active = 0;

    const build = () => {
      const tmp = document.createElement("div");
      index = C.chapters.map((c, i) => {
        tmp.innerHTML = c.content;
        const text = tmp.textContent.replace(/\s+/g, " ").trim();
        return { c, i, text, ntext: norm(text), ntitle: norm(c.title + " " + c.summary) };
      });
    };

    const highlight = (str, q) => {
      const n = norm(str), at = n.indexOf(q);
      if (!q || at < 0 || n.length !== str.length) return esc(str);
      return esc(str.slice(0, at)) + "<mark>" + esc(str.slice(at, at + q.length)) + "</mark>" + esc(str.slice(at + q.length));
    };

    const snippet = (text, ntext, q) => {
      const at = ntext.indexOf(q);
      if (at < 0) return "";
      const s = Math.max(0, at - 40), e = Math.min(text.length, at + q.length + 70);
      return (s > 0 ? "…" : "") + highlight(text.slice(s, e), q) + (e < text.length ? "…" : "");
    };

    const renderResults = (raw) => {
      if (!index) build();
      const q = norm(raw.trim());
      let html = "";
      if (!q) {
        html = `<div class="search-group">Chapitres</div>` + index.map(({ c, i }) => `
          <a class="search-item" href="#/cours/${c.id}"><span class="acc">${String(i + 1).padStart(2, "0")}</span><span><span class="t">${esc(c.title)}</span><span class="s">${esc(c.summary)}</span></span></a>`).join("");
      } else {
        const accs = C.accounts.filter((a) => a.n.startsWith(q) || norm(a.l).includes(q)).slice(0, 6);
        const chs = index.filter((x) => x.ntitle.includes(q) || x.ntext.includes(q)).slice(0, 6);
        if (accs.length) {
          html += `<div class="search-group">Plan comptable</div>` + accs.map((a) => `
            <a class="search-item" href="#/cours/${accountChapter(a.n)}"><span class="acc">${highlight(a.n, q)}</span><span><span class="t">${highlight(a.l, q)}</span><span class="s">Classe ${a.c} — ${C.classNames[a.c]}</span></span></a>`).join("");
        }
        if (chs.length) {
          html += `<div class="search-group">Dans le cours</div>` + chs.map(({ c, i, text, ntext }) => `
            <a class="search-item" href="#/cours/${c.id}"><span class="acc">${String(i + 1).padStart(2, "0")}</span><span><span class="t">${highlight(c.title, q)}</span><span class="s">${snippet(text, ntext, q) || esc(c.summary)}</span></span></a>`).join("");
        }
        if (!html) html = `<div class="search-empty">Aucun résultat pour « ${esc(raw)} ».</div>`;
      }
      out.innerHTML = html;
      active = 0;
      setActive();
    };

    const setActive = () => {
      const items = $$(".search-item", out);
      items.forEach((el, k) => el.classList.toggle("active", k === active));
      if (items[active]) items[active].scrollIntoView({ block: "nearest" });
    };

    const open = () => { modal.hidden = false; input.value = ""; renderResults(""); setTimeout(() => input.focus(), 10); };
    const close = () => { modal.hidden = true; };

    input.addEventListener("input", () => renderResults(input.value));
    input.addEventListener("keydown", (e) => {
      const items = $$(".search-item", out);
      if (e.key === "ArrowDown") { e.preventDefault(); active = Math.min(items.length - 1, active + 1); setActive(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); active = Math.max(0, active - 1); setActive(); }
      else if (e.key === "Enter" && items[active]) { e.preventDefault(); items[active].click(); }
    });
    out.addEventListener("click", (e) => { if (e.target.closest(".search-item")) close(); });
    modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) close(); });
    $("#searchOpen").addEventListener("click", open);

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); modal.hidden ? open() : close(); }
      else if (e.key === "Escape" && !modal.hidden) close();
      else if (e.key === "/" && modal.hidden && !e.target.matches("input, select, textarea")) { e.preventDefault(); open(); }
    });
    return { open, close };
  })();

  /* ============================================================
     ROUTAGE & INTERFACE GLOBALE
     ============================================================ */
  let cleanup = null, prevRoute = null;

  function render() {
    if (cleanup) { cleanup(); cleanup = null; }
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    const route = ["cours", "exercices", "outils", "quiz", "fiches"].includes(parts[0]) ? parts[0] : "home";

    $$(".nav a").forEach((a) => {
      const on = a.dataset.route === route;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    $("#nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    search.close();

    const titles = { home: "Accueil", cours: "Cours", exercices: "Exercices", outils: "Outils", quiz: "Quiz", fiches: "Fiches de synthèse" };
    if (route === "cours") cleanup = viewCourse(parts[1]);
    else if (route === "exercices") cleanup = viewExercises(parts[1]);
    else if (route === "outils") cleanup = viewTools(parts[1]);
    else if (route === "quiz") cleanup = viewQuiz();
    else if (route === "fiches") cleanup = viewFichesSummary();
    else cleanup = viewHome();
    cleanup = typeof cleanup === "function" ? cleanup : null;

    document.title = `${titles[route]} — Comptabilité Générale I`;
    if (!(route === "outils" && prevRoute === "outils")) window.scrollTo({ top: 0, behavior: "instant" });
    prevRoute = route;
  }

  // Thème clair / sombre
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("cg1-theme", next); } catch (e) {}
  });

  // Menu mobile
  $("#menuToggle").addEventListener("click", () => {
    const open = $("#nav").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", open);
  });

  addEventListener("hashchange", render);
  initParticles();
  render();
})();
