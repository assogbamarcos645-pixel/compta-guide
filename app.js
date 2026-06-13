/* ============================================================
   app.js — Comptabilité Générale (SYSCOHADA / OHADA)
   Guide enrichi + Quiz QCM interactif
   ============================================================ */

// ── Génération des particules de fond ──────────────────────
const createParticles = () => {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('span');
    const size = Math.random() * 3 + 1;
    p.style.width  = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left   = `${Math.random() * 100}%`;
    p.style.animationDelay    = `${Math.random() * 20}s`;
    p.style.animationDuration = `${Math.random() * 10 + 10}s`;
    container.appendChild(p);
  }
};

// ── Composant section dépliable ────────────────────────────
const GuideSection = ({ title, content, isImportant = false, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4">
      <div className={`glass-card overflow-hidden ${isImportant ? 'border-l-4 border-l-orange-500' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className={`w-1 rounded-full transition-all duration-300 ${isImportant ? 'bg-orange-500' : 'bg-indigo-500'} ${isOpen ? 'h-12' : 'h-8'}`}></div>
            <h3 className={`font-semibold text-lg ${isImportant ? 'text-orange-800' : 'text-gray-800'}`}>
              {title}
            </h3>
            {isImportant && (
              <span className="badge-pro text-white text-xs px-3 py-1 rounded-full font-medium">⭐ Important</span>
            )}
          </div>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-5 pt-0 border-t border-gray-100">
            <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Données du guide (enrichies depuis le document) ────────
const guideContent = [
  {
    title: "Chapitre 1 — Généralités sur la comptabilité",
    isImportant: true,
    content: `
      <p>La comptabilité est une technique née dans l'Antiquité pour tracer créances, dettes et patrimoine. Elle est aujourd'hui le moyen de communication et de preuve le plus efficace entre une entreprise et ses partenaires.</p>

      <p><strong>Définition (référentiel OHADA) :</strong> La comptabilité est un système d'organisation financière permettant de :</p>
      <ul>
        <li>Saisir, classer et enregistrer des données chiffrées de base ;</li>
        <li>Fournir, après traitement, des informations conformes aux besoins des utilisateurs.</li>
      </ul>

      <p><strong>Les 4 états financiers indissociables :</strong></p>
      <table><thead><tr><th>État</th><th>Rôle</th></tr></thead><tbody>
        <tr><td>Bilan</td><td>Situation patrimoniale à une date donnée</td></tr>
        <tr><td>Compte de résultat</td><td>Richesse créée/détruite sur la période</td></tr>
        <tr><td>TAFIRE</td><td>Tableau de flux de trésorerie</td></tr>
        <tr><td>Notes annexes</td><td>Informations complémentaires significatives</td></tr>
      </tbody></table>

      <p><strong>Historique OHADA / SYSCOA :</strong></p>
      <ul>
        <li>1993 — Traité OHADA signé à Port-Louis (entré en vigueur le 18/09/1995)</li>
        <li>1994 — Suite à la dévaluation du franc CFA, l'UEMOA crée le <strong>SYSCOA</strong></li>
        <li>1998 — Application obligatoire du SYSCOA (1er janvier)</li>
        <li>2000 — Acte Uniforme OHADA (24 mars) pour l'harmonisation sur 16 pays</li>
      </ul>

      <p><strong>7 utilisateurs de l'information comptable (SYSCOA) :</strong> l'entreprise elle-même, clients/fournisseurs, associés/banques, personnel, État, Centrale des Bilans, partenaires hors UEMOA (FMI, Banque Mondiale).</p>

      <p><strong>Livres obligatoires :</strong> Livre-journal, Grand livre, Balance générale (6 colonnes), Livre d'inventaire — sans blanc ni altération.</p>

      <p><strong>Principes comptables — 3 familles :</strong></p>
      <table><thead><tr><th>Famille</th><th>Contenu</th></tr></thead><tbody>
        <tr><td><strong>Hypothèse</strong></td><td>Continuité de l'exploitation (présomption de poursuite des activités)</td></tr>
        <tr><td><strong>Postulats (5)</strong></td><td>Entité · Comptabilité d'engagement · Spécialisation des exercices · Permanence des méthodes · Prééminence de la réalité économique</td></tr>
        <tr><td><strong>Conventions</strong></td><td>Coût historique · Prudence · Régularité et transparence · Correspondance bilan clôture/ouverture · Importance significative</td></tr>
      </tbody></table>

      <p><strong>Focus — Postulat de spécialisation des exercices :</strong> Le résultat de chaque exercice est <em>indépendant</em> de celui qui précède et de celui qui suit.</p>
    `
  },
  {
    title: "Chapitre 2 — Le cadre comptable SYSCOHADA",
    isImportant: true,
    content: `
      <p><strong>Plan des comptes — 9 classes :</strong></p>
      <table><thead><tr><th>Classes</th><th>Nature</th><th>Usage</th></tr></thead><tbody>
        <tr><td>1 à 5</td><td>Comptes de situation (bilan)</td><td>Obligatoire</td></tr>
        <tr><td>6, 7, 8</td><td>Comptes de gestion (résultat)</td><td>Obligatoire</td></tr>
        <tr><td>9</td><td>Engagements hors bilan + comptabilité analytique</td><td>Facultatif</td></tr>
      </tbody></table>

      <p><strong>Lecture verticale du bilan :</strong></p>
      <table><thead><tr><th>ACTIF</th><th>PASSIF</th></tr></thead><tbody>
        <tr><td>Haut — Classe 2 : Actif Immobilisé</td><td>Haut — Classe 1 : Ressources stables</td></tr>
        <tr><td rowspan="2">Bas — Classes 3, 4 (débiteur), 5</td><td>Bas — Classe 4 (créditeur), 5</td></tr>
      </tbody></table>

      <p><strong>Constantes de numérotation :</strong></p>
      <ul>
        <li>1er chiffre = la classe</li>
        <li>Chiffre <strong>8</strong> en 2e position (classe 2) = <strong>amortissement</strong> (ex : 245 Matériel de transport → <code>2845</code> Amortissement matériel de transport)</li>
        <li>Chiffre <strong>8</strong> en 3e/4e position = compte résiduel ou divers</li>
        <li>Chiffre <strong>9</strong> en 2e position = <strong>provision/dépréciation</strong> (ex : 69, 39)</li>
        <li>Chiffre <strong>9</strong> en 3e position = compte <strong>opposant</strong> au sens normal (ex : 411 débiteur, mais <code>4191</code> = avances reçues → créditeur)</li>
      </ul>

      <p><strong>Plan Comptable d'Entreprise (PCE) — extensions :</strong></p>
      <ul>
        <li>+2 chiffres (nature) : ex. <code>6047.18</code> = achat de papier photocopieur</li>
        <li>+2 chiffres (fonction) : ex. <code>6047.18.03</code> = papier pour le service comptable — uniquement classes 6, 7, 8</li>
      </ul>
    `
  },
  {
    title: "Chapitre 3 — Comptes de charges et produits (AO / HAO)",
    isImportant: false,
    content: `
      <p><strong>Activités Ordinaires (AO) :</strong></p>
      <table><thead><tr><th>Charges (classe 6)</th><th>Produits (classe 7)</th></tr></thead><tbody>
        <tr><td>601 — Achat de marchandises</td><td>701 — Vente de marchandises</td></tr>
        <tr><td>602 — Achat de matières premières</td><td>702 — Vente de produits finis</td></tr>
        <tr><td>603 — Variation de stocks achetés</td><td>71 — Subventions d'exploitation</td></tr>
        <tr><td>61 — Transports</td><td>75 — Autres produits</td></tr>
        <tr><td>62/63 — Services extérieurs</td><td>77 — Revenus financiers</td></tr>
        <tr><td>64 — Impôts et taxes</td><td>78 — Transferts de charges</td></tr>
        <tr><td>66 — Charges de personnel</td><td>79 — Reprises de provisions</td></tr>
        <tr><td>67 — Frais financiers</td><td></td></tr>
        <tr><td>68 — Dotations aux amortissements</td><td></td></tr>
      </tbody></table>

      <p><strong>Hors Activités Ordinaires (HAO) — classe 8 :</strong><br>
      Règle : <em>impairs = charges, pairs = produits</em></p>
      <table><thead><tr><th>Charges HAO (impairs)</th><th>Produits HAO (pairs)</th></tr></thead><tbody>
        <tr><td>81 — Valeurs comptables des cessions</td><td>82 — Produits des cessions d'immob.</td></tr>
        <tr><td>83 — Charges HAO</td><td>84 — Produits HAO</td></tr>
        <tr><td>85 — Dotations HAO</td><td>86 — Reprises HAO</td></tr>
        <tr><td>87 — Participation des travailleurs</td><td>88 — Subventions d'équipement</td></tr>
      </tbody></table>
    `
  },
  {
    title: "Chapitre 4 — L'entité, les flux et la partie double",
    isImportant: false,
    content: `
      <p><strong>Deux catégories d'opérations :</strong></p>
      <ul>
        <li><strong>Investissement-financement :</strong> acquisition d'immobilisations financée par le capital ou des emprunts</li>
        <li><strong>Exploitation :</strong> achats, ventes, prestations quotidiennes</li>
      </ul>

      <p><strong>Types de flux :</strong></p>
      <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
        <tr><td>Flux externes</td><td>Opérations avec des tiers (les plus nombreux)</td></tr>
        <tr><td>Flux internes</td><td>Mouvements à l'intérieur (ex : virement caisse → banque)</td></tr>
        <tr><td>Flux réels</td><td>Portent sur des biens/ressources échangés</td></tr>
        <tr><td>Flux quasi-réels</td><td>Prestations : banque, personnel, État → entreprise</td></tr>
        <tr><td>Flux financiers</td><td>Monnaie, créances, dettes</td></tr>
        <tr><td>Flux de résultat</td><td>Produits − Charges</td></tr>
      </tbody></table>

      <p><strong>Principe de la partie double :</strong><br>
      <em>« Une opération comptable entraîne obligatoirement au moins une ressource et un emploi. »</em></p>
      <table><thead><tr><th>EMPLOIS (Débit)</th><th>RESSOURCES (Crédit)</th></tr></thead><tbody>
        <tr><td>Acquisition d'immobilisation</td><td>Ventes, prestations facturées</td></tr>
        <tr><td>Achat de marchandises</td><td>Dettes contractées</td></tr>
        <tr><td>Charges (salaires, impôts…)</td><td>Créances recouvrées</td></tr>
        <tr><td>Recettes encaissées</td><td>Dépenses effectuées</td></tr>
      </tbody></table>

      <p><strong>Incidence sur le résultat :</strong> Les emplois consommés (charges) génèrent des pertes ; les ressources créées (ventes) génèrent des profits. Les emplois/ressources réversibles (achats d'immobilisations, emprunts) n'ont pas d'incidence directe sur le résultat.</p>
    `
  },
  {
    title: "Chapitre 5 — Le bilan",
    isImportant: true,
    content: `
      <p>Le bilan est un état financier de synthèse décrivant séparément les éléments actifs et passifs à une date donnée.</p>

      <table><thead><tr><th>ACTIF (Emplois)</th><th>PASSIF (Ressources)</th></tr></thead><tbody>
        <tr><td><strong>Actif immobilisé</strong><br>Immobilisations incorporelles, corporelles, financières, avances sur immob.</td><td><strong>Capitaux propres et assimilés</strong><br>Capital, réserves, résultat, subventions, provisions réglementées</td></tr>
        <tr><td><strong>Actif circulant</strong><br>Stocks HAO/AO, créances HAO/AO</td><td><strong>Dettes financières</strong><br>Emprunts LT/MT, provisions financières</td></tr>
        <tr><td><strong>Trésorerie-Actif</strong><br>Titres de placement, valeurs à encaisser, banque, caisse, CCP</td><td><strong>Passif circulant</strong><br>Dettes fournisseurs, dettes sociales/fiscales, passif circ. HAO</td></tr>
        <tr><td></td><td><strong>Trésorerie-Passif</strong><br>Crédits bancaires CT, découverts bancaires</td></tr>
        <tr><td><strong>TOTAL ACTIF</strong></td><td><strong>TOTAL PASSIF</strong></td></tr>
      </tbody></table>

      <p><strong>Formules clés :</strong></p>
      <div class="formule-box">
        SN = Actif réel − Passif exigible = Capitaux propres<br>
        Résultat = Actif − Passif (hors résultat)<br>
        Bénéfice si Produits &gt; Charges · Perte si Produits &lt; Charges
      </div>

      <p><strong>Fonctionnement des comptes principaux :</strong></p>
      <table><thead><tr><th>Compte</th><th>Débité lors de…</th><th>Crédité lors de…</th></tr></thead><tbody>
        <tr><td><strong>CAPITAL</strong></td><td>Réductions (retrait, absorption de pertes)</td><td>Apports initiaux, augmentations de capital</td></tr>
        <tr><td><strong>IMMOBILISATIONS</strong></td><td>Acquisition (coût HT + frais accessoires)</td><td>Cessions, destructions, mises au rebut</td></tr>
        <tr><td><strong>FOURNISSEURS</strong></td><td>Règlements effectués nets d'avoirs</td><td>Achats à crédit, dettes &lt; 1 an</td></tr>
        <tr><td><strong>CLIENTS</strong></td><td>Créances &lt; 1 an (ventes à crédit)</td><td>Règlements reçus nets d'avoirs</td></tr>
      </tbody></table>

      <p><strong>Exemple — Bilan AZERD au 31/12/2000 :</strong> Total Actif = Total Passif = 22 750 000. Le bâtiment manquant = 22 750 000 − 14 750 000 = <strong>8 000 000 F</strong></p>
    `
  },
  {
    title: "Chapitre 6 — Le compte et son fonctionnement",
    isImportant: false,
    content: `
      <p>Le compte est un tableau regroupant toutes les opérations concernant un même élément ou poste du bilan.</p>

      <p><strong>Terminologie essentielle :</strong></p>
      <table><thead><tr><th>Terme</th><th>Définition</th></tr></thead><tbody>
        <tr><td>Imputation</td><td>Inscription au débit ou crédit d'un compte</td></tr>
        <tr><td>Solde</td><td>TD − TC. Si TD&gt;TC → débiteur · Si TC&gt;TD → créditeur · Si TD=TC → soldé</td></tr>
        <tr><td>Arrêt</td><td>Clôture : on inscrit le solde côté opposé, on totalise et on souligne de 2 traits</td></tr>
        <tr><td>Réouverture</td><td>On reporte le solde du côté de sa nature</td></tr>
      </tbody></table>

      <p><strong>3 tracés de compte :</strong></p>
      <ul>
        <li><strong>Tracé classique :</strong> colonnes Dates / Libellés / Montants débit et crédit</li>
        <li><strong>Tracé à colonnes mariées :</strong> ajoute le solde après chaque opération</li>
        <li><strong>Tracé schématique (compte en T) :</strong> montants seuls, débit à gauche, crédit à droite</li>
      </ul>

      <p><strong>Règles de fonctionnement :</strong></p>
      <table><thead><tr><th>Type de compte</th><th>Augmente par</th><th>Diminue par</th></tr></thead><tbody>
        <tr><td>Actif du bilan (classes 2 à 5 actif)</td><td>Débit</td><td>Crédit</td></tr>
        <tr><td>Passif du bilan (classes 1, 4, 5 passif)</td><td>Crédit</td><td>Débit</td></tr>
        <tr><td>Charges (classes 6 et 8 impairs)</td><td>Débit</td><td>Crédit</td></tr>
        <tr><td>Produits (classes 7 et 8 pairs)</td><td>Crédit</td><td>Débit</td></tr>
      </tbody></table>

      <p><strong>Comptes réciproques :</strong> deux comptes représentant deux agents différents (un tenu chez chacun) enregistrant les mêmes flux. Arrêtés à la même date, ils présentent le même solde mais de nature opposée (ex : « Fournisseur A » chez B ↔ « Client B » chez A).</p>
    `
  },
  {
    title: "Chapitre 7 — La facture, les réductions et les achats/ventes",
    isImportant: true,
    content: `
      <p><strong>Deux types de factures :</strong></p>
      <table><thead><tr><th>Facture de doit</th><th>Facture d'avoir</th></tr></thead><tbody>
        <tr><td>Établie par le fournisseur · Constate une vente · Fait ressortir le <strong>Net à Payer (NAP)</strong></td><td>Établie par le fournisseur · Constate une réduction du prix · Fait ressortir le <strong>Net à déduire</strong></td></tr>
      </tbody></table>

      <p><strong>Les réductions :</strong></p>
      <ul>
        <li><strong>Commerciales (3R) :</strong> Rabais (défaut qualité) · Remise (importance/régularité achat) · Ristourne (CA périodique) — exprimées en % et calculées <em>en cascade</em></li>
        <li><strong>Financière :</strong> Escompte de règlement (paiement anticipé) — calculé <em>toujours sur le Net Commercial (NC)</em>, après toutes les réductions commerciales</li>
      </ul>

      <p><strong>Schéma général d'une facture :</strong></p>
      <div class="formule-box">
        MB (Montant Brut)<br>
        − Rabais<br>
        − Remise(s) en cascade<br>
        = NC (Net Commercial)<br>
        − Escompte (% du NC)<br>
        = NF (Net Financier)<br>
        + Port HT (si applicable)<br>
        = sous-total HT<br>
        + TVA 18%<br>
        = NAP (Net à Payer)
      </div>

      <p><strong>Règle importante — 3R sur facture de doit :</strong> Les 3R figurant SUR la facture de doit <strong>ne sont PAS comptabilisés</strong> (déjà déduits dans le NC). Un avoir pour réduction obtenu hors facture (a posteriori) EST comptabilisé.</p>

      <p><strong>Comptabilisation achat/vente (inventaire permanent) :</strong></p>
      <table><thead><tr><th>Chez le client</th><th>Chez le fournisseur</th></tr></thead><tbody>
        <tr><td>D 601/602/604 NC · C 4011 NAP · C 773 Escompte obtenu</td><td>D 4111 NAP · D 673 Escompte accordé · C 701/702 NC</td></tr>
        <tr><td>D 31/36/37 CA · C 6031/73 CA (entrée en stock)</td><td>D 6031/73 CAMV · C 31/32/37 CAMV (sortie de stock)</td></tr>
      </tbody></table>

      <p><strong>Exemple — Facture ABC → BAC :</strong> MB = 1 000 000 · Rabais 150 000 · NC = 850 000 · Escompte 1% = 8 500 · NF = 841 500 · Port = 70 000 · Sous-total = 911 500 · TVA 18% = 164 070 · <strong>NAP = 1 075 570</strong></p>
    `
  },
  {
    title: "Chapitre 8 — Les frais de transport",
    isImportant: false,
    content: `
      <p>Le SYSCOHADA révisé a supprimé le compte 611 « transport sur achat ». Les comptes <code>6015, 6025, 6045, 6085</code> sont utilisés à la place.</p>

      <p><strong>3 cas pour les frais à charge du client :</strong></p>
      <table><thead><tr><th>Cas</th><th>Mécanisme</th><th>Compte chez le client</th><th>Compte chez le fournisseur</th></tr></thead><tbody>
        <tr><td><strong>Port dû</strong></td><td>Le client paie directement le transporteur</td><td>D 60*5 / C 401 ou 52/57</td><td>Aucune écriture de transport</td></tr>
        <tr><td><strong>Port payé (récupéré)</strong></td><td>Le fournisseur avance et récupère sur facture</td><td>D 60*5 (compris dans le NAP)</td><td>D 613 / C 52 puis D 411 / C 7071</td></tr>
        <tr><td><strong>Port forfaitaire</strong></td><td>Le fournisseur transporte avec ses propres camions</td><td>D 60*5 (compris dans le NAP)</td><td>C <strong>707</strong> (produit accessoire)</td></tr>
      </tbody></table>

      <p><strong>Frais à charge du fournisseur (transport vers le client) :</strong> D <code>612</code> Transport sur vente / C 401 ou 52/57. Ces frais ne figurent pas sur la facture de vente.</p>

      <p><strong>Frais de réexpédition lors d'un retour :</strong></p>
      <ul>
        <li>Le client engage : D 613 / C 57 (caisse)</li>
        <li>Récupération via facture d'avoir : le client crédite 781 ou 7071 · le fournisseur débite 612</li>
      </ul>

      <p><strong>Exemple — Paul / Coffi (retour 12/3) :</strong> Retour brut 200 000 · NC = 190 000 · Escompte repris = 1 900 · Port réexpédition = 50 000 · <strong>Net à déduire = 238 100</strong></p>
    `
  },
  {
    title: "Chapitre 9 — La TVA",
    isImportant: true,
    content: `
      <p>La TVA est un impôt indirect frappant les livraisons de biens et prestations de services à titre onéreux. Elle est supportée par le consommateur final mais collectée par les entreprises assujetties.</p>

      <ul>
        <li><strong>Exonérations :</strong> opérations dans le champ TVA, mais non taxées par décision de l'État</li>
        <li><strong>Exemptions :</strong> opérations hors champ d'application de la TVA</li>
      </ul>

      <p><strong>Taux en vigueur au Bénin : 18%</strong></p>
      <p>La TVA se calcule sur le <strong>Net Financier (NF) + Port HT</strong> s'il figure sur la facture.</p>

      <p><strong>Comptes de TVA :</strong></p>
      <table><thead><tr><th>Compte</th><th>Rôle</th></tr></thead><tbody>
        <tr><td><code>443</code> — TVA facturée</td><td>Dette envers l'État (TVA collectée sur les ventes)</td></tr>
        <tr><td><code>445</code> — TVA récupérable</td><td>Créance sur l'État (TVA déductible sur achats)</td></tr>
        <tr><td><code>645</code> — Impôts/taxes indirects</td><td>Charge si l'entreprise N'EST PAS assujettie</td></tr>
        <tr><td><code>4441</code> — TVA due</td><td>Solde à payer (TVA facturée &gt; TVA récupérable)</td></tr>
        <tr><td><code>4449</code> — Crédit de TVA</td><td>Solde reportable (TVA récupérable &gt; TVA facturée)</td></tr>
      </tbody></table>

      <p><strong>Liquidation mensuelle — TVA due (à payer) :</strong></p>
      <table><thead><tr><th>Compte</th><th>Débit</th><th>Crédit</th></tr></thead><tbody>
        <tr><td>443 État TVA facturée</td><td>TVA facturée</td><td></td></tr>
        <tr><td>445 État TVA récupérable</td><td></td><td>TVA récupérable</td></tr>
        <tr><td>4441 État TVA due</td><td></td><td>Différence</td></tr>
      </tbody></table>

      <p>Au paiement : D <code>4441</code> / C <code>52</code> (banque)</p>

      <p><strong>Liquidation mensuelle — Crédit de TVA :</strong></p>
      <table><thead><tr><th>Compte</th><th>Débit</th><th>Crédit</th></tr></thead><tbody>
        <tr><td>443 État TVA facturée</td><td>TVA facturée</td><td></td></tr>
        <tr><td>4449 État crédit de TVA</td><td>Différence</td><td></td></tr>
        <tr><td>445 État TVA récupérable</td><td></td><td>TVA récupérable</td></tr>
      </tbody></table>
    `
  }
];

// ── Données du quiz (20 questions) ─────────────────────────
const questions = [
  { question: "En quelle année le SYSCOA a-t-il été créé, suite à la dévaluation du franc CFA ?", options: ["1990", "1994", "1998", "2000"], correctAnswer: 1, explanation: "Le SYSCOA a été créé en 1994 par l'UEMOA, applicable dès le 1er janvier 1998." },
  { question: "Combien de pays ont signé et ratifié le traité OHADA ?", options: ["7", "8", "16", "17"], correctAnswer: 2, explanation: "Seize (16) pays africains ont signé et ratifié le traité OHADA." },
  { question: "Quelle est l'hypothèse de base de la présentation des états financiers ?", options: ["La prudence", "La continuité de l'exploitation", "La permanence des méthodes", "Le coût historique"], correctAnswer: 1, explanation: "L'hypothèse de base est la continuité de l'exploitation." },
  { question: "Quel postulat énonce que le résultat d'un exercice est indépendant de celui qui précède et de celui qui suit ?", options: ["Postulat de l'entité", "Postulat de la comptabilité d'engagement", "Postulat de spécialisation des exercices", "Postulat de la permanence des méthodes"], correctAnswer: 2, explanation: "Le postulat de spécialisation des exercices stipule que le résultat de chaque exercice est indépendant des autres." },
  { question: "Dans la lecture verticale du bilan, le bas du bilan comprend les classes :", options: ["1 et 2", "3, 4 et 5", "6, 7 et 8", "9 uniquement"], correctAnswer: 1, explanation: "Le haut du bilan comprend les classes 1 et 2, tandis que le bas comprend les classes 3, 4 et 5." },
  { question: "Le compte 2845 correspond à :", options: ["Matériel de transport", "Amortissement du matériel de transport", "Provision pour dépréciation du matériel", "Achat de matériel de transport"], correctAnswer: 1, explanation: "Le chiffre 8 en 2ème position de la classe 2 indique l'amortissement (245 → 2845)." },
  { question: "Le chiffre 9 en 3ème position d'un compte indique :", options: ["Une provision", "Un amortissement", "Un caractère opposant au sens normal du compte", "Un compte résiduel"], correctAnswer: 2, explanation: "Le chiffre 9 en 3ème position implique le caractère opposant au sens normal du compte (ex : 4191)." },
  { question: "Parmi ces comptes, lequel enregistre une charge des activités ordinaires ?", options: ["701", "601", "82", "88"], correctAnswer: 1, explanation: "601 = Achat de marchandises, qui est une charge des activités ordinaires (classe 6)." },
  { question: "Le compte 84 correspond à :", options: ["Charges HAO", "Produits HAO", "Dotations HAO", "Reprises HAO"], correctAnswer: 1, explanation: "84 = Produits HAO (comptes pairs = produits en HAO)." },
  { question: "Dans le PCE, l'analyse par fonction ne concerne que :", options: ["Les classes 1 à 5", "Les classes 6, 7 et 8", "La classe 9 uniquement", "Toutes les classes"], correctAnswer: 1, explanation: "La subdivision par fonction n'a de sens que pour les comptes de charges/produits (classes 6, 7, 8)." },
  { question: "Le compte CAPITAL est crédité lors :", options: ["D'une absorption de pertes", "D'un retrait définitif", "D'un nouvel apport des associés", "D'un remboursement aux associés"], correctAnswer: 2, explanation: "Le compte capital est crédité lors des augmentations de capital (nouveaux apports, incorporation de bénéfices)." },
  { question: "Dans le bilan, la partie Actif fait apparaître :", options: ["Les ressources", "Les emplois", "Le résultat uniquement", "Les charges"], correctAnswer: 1, explanation: "L'actif du bilan fait apparaître les emplois ; le passif retrace les ressources." },
  { question: "La situation nette (SN) est égale à :", options: ["Actif total", "Passif exigible", "Capitaux propres", "Résultat de l'exercice"], correctAnswer: 2, explanation: "SN = Actif réel - Passif exigible = Capitaux propres." },
  { question: "Si le Total Débit (TD) d'un compte est supérieur au Total Crédit (TC), le solde est :", options: ["Créditeur", "Nul", "Débiteur", "Indéterminé"], correctAnswer: 2, explanation: "Si TD > TC, le solde = TD - TC et est dit débiteur." },
  { question: "Le tracé qui fait apparaître le solde après chaque opération est appelé :", options: ["Tracé classique", "Tracé à colonnes mariées", "Tracé schématique", "Tracé en T"], correctAnswer: 1, explanation: "Le tracé à colonnes mariées fait apparaître le solde (débiteur/créditeur) après chaque opération." },
  { question: "Les comptes de l'actif du bilan augmentent par :", options: ["Le crédit", "Le débit", "Le virement", "L'arrêt"], correctAnswer: 1, explanation: "Les comptes de l'actif du bilan augmentent par le débit et diminuent par le crédit." },
  { question: "Sur une facture de doit, l'escompte se calcule :", options: ["Sur le montant brut", "Avant les réductions commerciales", "Après toutes les réductions commerciales (sur le NC)", "Sur le net à payer"], correctAnswer: 2, explanation: "L'escompte se calcule toujours après toutes les réductions commerciales, sur le Net Commercial." },
  { question: "Les 3R figurant sur une facture de doit sont :", options: ["Comptabilisés au débit du 601", "Comptabilisés au crédit du 701", "Non comptabilisés (déjà déduits du NC)", "Comptabilisés en TVA"], correctAnswer: 2, explanation: "Les réductions à caractère commercial figurant sur la facture de doit ne sont pas comptabilisées." },
  { question: "Lorsque le fournisseur réalise le transport avec ses propres camions (port forfaitaire), ce produit est enregistré chez lui au crédit du compte :", options: ["612", "613", "707", "6015"], correctAnswer: 2, explanation: "Le port forfaitaire constitue un produit accessoire enregistré au crédit du compte 707." },
  { question: "Le taux de TVA en vigueur au Bénin est de :", options: ["10%", "15%", "18%", "20%"], correctAnswer: 2, explanation: "Le taux de TVA en vigueur au Bénin est de 18%." }
];

// ── Composant Quiz ──────────────────────────────────────────
const Quiz = () => {
  const [currentQ, setCurrentQ]     = React.useState(0);
  const [score, setScore]           = React.useState(0);
  const [selected, setSelected]     = React.useState(null);
  const [submitted, setSubmitted]   = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [wrongs, setWrongs]         = React.useState([]);
  const [loading, setLoading]       = React.useState(false);

  const q        = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;

  const handleSubmit = () => {
    if (selected === null) return;
    setLoading(true);
    setTimeout(() => {
      if (selected === q.correctAnswer) {
        setScore(s => s + 1);
      } else {
        setWrongs(w => [...w, {
          question: q.question,
          selected: q.options[selected],
          correct:  q.options[q.correctAnswer],
          explanation: q.explanation
        }]);
      }
      setSubmitted(true);
      setLoading(false);
    }, 300);
  };

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(c => c + 1);
        setSelected(null);
        setSubmitted(false);
      } else {
        setShowResults(true);
      }
      setLoading(false);
    }, 300);
  };

  const restart = () => {
    setCurrentQ(0); setScore(0); setSelected(null);
    setSubmitted(false); setShowResults(false); setWrongs([]);
  };

  if (showResults) {
    const pct = (score / questions.length) * 100;
    const msg = pct >= 80 ? "🏆 Excellent ! Vous maîtrisez parfaitement le sujet !"
               : pct >= 60 ? "👍 Très bien ! Continuez à vous entraîner !"
               : pct >= 40 ? "📚 Bon début ! Révisez les notions clés."
               : "💪 Ne vous découragez pas ! Une révision s'impose.";

    return (
      <div className="glass-card p-8 max-w-3xl mx-auto animate-slide-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Résultats du Quiz</h2>
          <p className="text-gray-600">{msg}</p>
        </div>

        <div className="text-center mb-8">
          <div className="relative inline-block">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="56" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
              <circle cx="64" cy="64" r="56" fill="none" stroke="url(#grad)" strokeWidth="8"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * (1 - pct / 100)}
                style={{ transition: 'stroke-dashoffset 1s ease' }}/>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#667eea"/>
                  <stop offset="100%" stopColor="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-800">{pct.toFixed(0)}%</span>
                <p className="text-sm text-gray-500">Score</p>
              </div>
            </div>
          </div>
          <p className="text-lg mt-4">
            <span className="font-bold text-green-600 text-2xl">{score}</span>
            <span className="text-gray-600"> / {questions.length} bonnes réponses</span>
          </p>
        </div>

        {wrongs.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-red-600 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Questions à réviser ({wrongs.length})
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {wrongs.map((item, i) => (
                <div key={i} className="p-4 bg-red-50 rounded-xl border border-red-200 hover:shadow-md transition-shadow">
                  <p className="font-medium text-gray-800">{item.question}</p>
                  <p className="mt-2 text-sm">
                    <span className="text-red-600">✗ {item.selected}</span>
                    <span className="mx-2">→</span>
                    <span className="text-green-600">✓ {item.correct}</span>
                  </p>
                  <p className="mt-2 text-xs text-gray-500">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-4">
          <button onClick={restart} className="btn-ripple px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            <svg className="inline w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 max-w-3xl mx-auto animate-slide-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-500">Question {currentQ + 1} / {questions.length}</span>
          <span className="text-sm font-medium text-indigo-600">Score : {score}</span>
        </div>
        <div className="progress-bar w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="progress-bar-fill h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">{q.question}</h3>
        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let cls = "quiz-option-pro w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ";
            if (submitted && i === q.correctAnswer)                       cls += "correct border-green-500";
            else if (submitted && selected === i && i !== q.correctAnswer) cls += "incorrect border-red-500";
            else if (selected === i && !submitted)                         cls += "selected border-indigo-500 shadow-md";
            else                                                           cls += "border-gray-200 hover:border-indigo-300 hover:shadow-md";

            return (
              <button key={i} onClick={() => !submitted && setSelected(i)} disabled={submitted} className={cls}>
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs font-bold transition-all ${selected === i && !submitted ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="flex-1">{opt}</span>
                  {submitted && i === q.correctAnswer && (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {submitted && selected === i && i !== q.correctAnswer && (
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {!submitted ? (
        <button onClick={handleSubmit} disabled={selected === null || loading}
          className={`w-full py-3 rounded-xl text-white font-medium transition-all transform hover:-translate-y-0.5 ${selected === null ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg'}`}>
          {loading ? <div className="spinner mx-auto"></div> : "Valider la réponse"}
        </button>
      ) : (
        <div className="mt-6">
          <div className={`p-4 rounded-xl mb-4 ${selected === q.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${selected === q.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
              {selected === q.correctAnswer ? "✓ Bonne réponse !" : "✗ Mauvaise réponse"}
            </p>
            <p className="text-gray-600 mt-1 text-sm">{q.explanation}</p>
          </div>
          <button onClick={handleNext} className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            {currentQ < questions.length - 1 ? "Question suivante →" : "Voir les résultats →"}
          </button>
        </div>
      )}
    </div>
  );
};

// ── Composant principal App ─────────────────────────────────
const App = () => {
  const [activeTab, setActiveTab] = React.useState("guide");

  React.useEffect(() => { createParticles(); }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="header-wave glass-card mb-8 p-8 text-center animate-slide-in">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Comptabilité Générale I</h1>
        <p className="text-indigo-100 text-lg">Guide professionnel, éducatif et universitaire &amp; Quiz interactif — SYSCOHADA / OHADA</p>
        <div className="flex justify-center gap-2 mt-4">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">L1 Informatique</span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">Mis à jour 2026</span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">OHADA compliant</span>
        </div>
      </div>

      {/* Onglets */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-white/10 backdrop-blur-sm rounded-2xl p-1 shadow-lg">
          {[
            { key: "guide", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Guide d'étude" },
            { key: "quiz",  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Quiz QCM" }
          ].map(({ key, icon, label }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className={`tab-pro px-8 py-3 rounded-xl font-medium transition-all ${activeTab === key ? "active" : "text-gray-700 bg-white/80"}`}>
              <svg className="inline w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
              </svg>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Guide */}
      {activeTab === "guide" && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Guide d'étude — 9 chapitres</h2>
            <div className="tooltip" data-tooltip="Cliquez sur les sections pour les développer">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          {guideContent.map((section, i) => (
            <GuideSection key={i} index={i} title={section.title} content={section.content} isImportant={section.isImportant} />
          ))}
        </div>
      )}

      {/* Quiz */}
      {activeTab === "quiz" && (
        <div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Évaluez vos connaissances</h2>
            <p className="text-indigo-100">20 questions pour tester votre maîtrise de la comptabilité</p>
          </div>
          <Quiz />
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-white/60 text-sm">
        <p>Basé sur le cours « Initiation à la Comptabilité Générale I » — L1 Informatique — Les Cours Sonou (Calavi)</p>
        <p className="mt-1">Conforme SYSCOHADA / OHADA · Taux TVA Bénin : 18%</p>
        <p className="mt-2">ASSOGBA Marcos — Développeur web full-stack · Abomey-Calavi, Bénin · © 2026</p>
      </footer>
    </div>
  );
};

// ── Rendu ──────────────────────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
