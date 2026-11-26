/* ============================================================
   data.js — Contenu du cours, plan comptable, quiz
   Comptabilité Générale I — SYSCOHADA / OHADA
   ============================================================ */

window.COURSE = {};

/* ── Chapitres du guide ─────────────────────────────────────── */
COURSE.chapters = [
  {
    id: "generalites",
    title: "Généralités sur la comptabilité",
    summary: "Définition, états financiers, historique OHADA, livres obligatoires et principes comptables.",
    key: true,
    minutes: 8,
    content: `
      <p class="lead">La comptabilité est une technique née dans l'Antiquité pour tracer créances, dettes et patrimoine. Elle est aujourd'hui le moyen de communication et de preuve le plus efficace entre une entreprise et ses partenaires.</p>

      <h3>Définition (référentiel OHADA)</h3>
      <p>La comptabilité est un système d'organisation financière permettant de :</p>
      <ul>
        <li>saisir, classer et enregistrer des données chiffrées de base ;</li>
        <li>fournir, après traitement, des informations conformes aux besoins des utilisateurs.</li>
      </ul>

      <h3>Les 4 états financiers indissociables</h3>
      <table><thead><tr><th>État</th><th>Rôle</th></tr></thead><tbody>
        <tr><td>Bilan</td><td>Situation patrimoniale à une date donnée</td></tr>
        <tr><td>Compte de résultat</td><td>Richesse créée ou détruite sur la période</td></tr>
        <tr><td>TAFIRE / Tableau des flux de trésorerie</td><td>Flux de trésorerie de l'exercice (le SYSCOHADA révisé remplace le TAFIRE par le TFT)</td></tr>
        <tr><td>Notes annexes</td><td>Informations complémentaires significatives</td></tr>
      </tbody></table>

      <h3>Historique OHADA / SYSCOA</h3>
      <ul class="timeline">
        <li><b>1993</b> Traité OHADA signé à Port-Louis (entré en vigueur le 18/09/1995).</li>
        <li><b>1994</b> Suite à la dévaluation du franc CFA, l'UEMOA crée le <strong>SYSCOA</strong>.</li>
        <li><b>1998</b> Application obligatoire du SYSCOA (1er janvier).</li>
        <li><b>2000</b> Acte uniforme OHADA relatif au droit comptable (24 mars) : harmonisation entre les États membres.</li>
        <li><b>2017</b> Adoption du SYSCOHADA révisé, applicable à partir de 2018. L'OHADA compte aujourd'hui <strong>17 États membres</strong>.</li>
      </ul>

      <h3>Les 7 utilisateurs de l'information comptable</h3>
      <p>L'entreprise elle-même, clients et fournisseurs, associés et banques, personnel, État, Centrale des Bilans, partenaires hors UEMOA (FMI, Banque mondiale).</p>

      <h3>Livres obligatoires</h3>
      <p>Livre-journal, Grand livre, Balance générale (6 colonnes), Livre d'inventaire — tenus sans blanc ni altération.</p>

      <h3>Principes comptables — 3 familles</h3>
      <table><thead><tr><th>Famille</th><th>Contenu</th></tr></thead><tbody>
        <tr><td><strong>Hypothèse</strong></td><td>Continuité de l'exploitation (présomption de poursuite des activités)</td></tr>
        <tr><td><strong>Postulats (5)</strong></td><td>Entité · Comptabilité d'engagement · Spécialisation des exercices · Permanence des méthodes · Prééminence de la réalité économique</td></tr>
        <tr><td><strong>Conventions</strong></td><td>Coût historique · Prudence · Régularité et transparence · Correspondance bilan de clôture / d'ouverture · Importance significative</td></tr>
      </tbody></table>

      <div class="callout">
        <div class="callout-title">À retenir</div>
        <p>Postulat de spécialisation des exercices : le résultat de chaque exercice est <em>indépendant</em> de celui qui précède et de celui qui suit.</p>
      </div>
    `
  },
  {
    id: "cadre",
    title: "Le cadre comptable SYSCOHADA",
    summary: "Les 9 classes de comptes, la lecture du bilan et les règles de numérotation.",
    key: true,
    minutes: 6,
    content: `
      <h3>Plan des comptes — 9 classes</h3>
      <table><thead><tr><th>Classes</th><th>Nature</th><th>Usage</th></tr></thead><tbody>
        <tr><td>1 à 5</td><td>Comptes de situation (bilan)</td><td>Obligatoire</td></tr>
        <tr><td>6, 7, 8</td><td>Comptes de gestion (résultat)</td><td>Obligatoire</td></tr>
        <tr><td>9</td><td>Engagements hors bilan et comptabilité analytique</td><td>Facultatif</td></tr>
      </tbody></table>

      <h3>Lecture verticale du bilan</h3>
      <table><thead><tr><th>Actif</th><th>Passif</th></tr></thead><tbody>
        <tr><td>Haut — Classe 2 : actif immobilisé</td><td>Haut — Classe 1 : ressources stables</td></tr>
        <tr><td>Bas — Classes 3, 4 (débiteur), 5</td><td>Bas — Classes 4 (créditeur), 5</td></tr>
      </tbody></table>

      <h3>Constantes de numérotation</h3>
      <ul>
        <li>Le 1er chiffre désigne la classe.</li>
        <li>Chiffre <strong>8</strong> en 2e position (classe 2) = <strong>amortissement</strong> (ex : 245 Matériel de transport → <code>2845</code> Amortissement du matériel de transport).</li>
        <li>Chiffre <strong>8</strong> en 3e ou 4e position = compte résiduel ou divers.</li>
        <li>Chiffre <strong>9</strong> en 2e position = <strong>provision / dépréciation</strong> (ex : 69, 39).</li>
        <li>Chiffre <strong>9</strong> en 3e position = compte <strong>opposant</strong> au sens normal (ex : 411 débiteur, mais <code>4191</code> avances reçues → créditeur).</li>
      </ul>

      <h3>Plan Comptable d'Entreprise (PCE) — extensions</h3>
      <ul>
        <li>+2 chiffres (nature) : <code>6047.18</code> = achat de papier photocopieur.</li>
        <li>+2 chiffres (fonction) : <code>6047.18.03</code> = papier pour le service comptable — uniquement pour les classes 6, 7 et 8.</li>
      </ul>
    `
  },
  {
    id: "charges-produits",
    title: "Comptes de charges et produits (AO / HAO)",
    summary: "Activités ordinaires (classes 6 et 7) et hors activités ordinaires (classe 8).",
    key: false,
    minutes: 5,
    content: `
      <h3>Activités ordinaires (AO)</h3>
      <table><thead><tr><th>Charges (classe 6)</th><th>Produits (classe 7)</th></tr></thead><tbody>
        <tr><td><code>601</code> Achats de marchandises</td><td><code>701</code> Ventes de marchandises</td></tr>
        <tr><td><code>602</code> Achats de matières premières</td><td><code>702</code> Ventes de produits finis</td></tr>
        <tr><td><code>603</code> Variation des stocks achetés</td><td><code>71</code> Subventions d'exploitation</td></tr>
        <tr><td><code>61</code> Transports</td><td><code>75</code> Autres produits</td></tr>
        <tr><td><code>62/63</code> Services extérieurs</td><td><code>77</code> Revenus financiers</td></tr>
        <tr><td><code>64</code> Impôts et taxes</td><td><code>78</code> Transferts de charges</td></tr>
        <tr><td><code>66</code> Charges de personnel</td><td><code>79</code> Reprises de provisions</td></tr>
        <tr><td><code>67</code> Frais financiers</td><td></td></tr>
        <tr><td><code>68</code> Dotations aux amortissements</td><td></td></tr>
      </tbody></table>

      <h3>Hors activités ordinaires (HAO) — classe 8</h3>
      <div class="callout">
        <div class="callout-title">Règle mnémotechnique</div>
        <p>Comptes <strong>impairs = charges</strong>, comptes <strong>pairs = produits</strong>.</p>
      </div>
      <table><thead><tr><th>Charges HAO (impairs)</th><th>Produits HAO (pairs)</th></tr></thead><tbody>
        <tr><td><code>81</code> Valeurs comptables des cessions</td><td><code>82</code> Produits des cessions d'immobilisations</td></tr>
        <tr><td><code>83</code> Charges HAO</td><td><code>84</code> Produits HAO</td></tr>
        <tr><td><code>85</code> Dotations HAO</td><td><code>86</code> Reprises HAO</td></tr>
        <tr><td><code>87</code> Participation des travailleurs</td><td><code>88</code> Subventions d'équilibre</td></tr>
      </tbody></table>
    `
  },
  {
    id: "partie-double",
    title: "L'entité, les flux et la partie double",
    summary: "Catégories d'opérations, types de flux et principe emplois / ressources.",
    key: false,
    minutes: 5,
    content: `
      <h3>Deux catégories d'opérations</h3>
      <ul>
        <li><strong>Investissement-financement :</strong> acquisition d'immobilisations financée par le capital ou des emprunts.</li>
        <li><strong>Exploitation :</strong> achats, ventes, prestations quotidiennes.</li>
      </ul>

      <h3>Types de flux</h3>
      <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
        <tr><td>Flux externes</td><td>Opérations avec des tiers (les plus nombreux)</td></tr>
        <tr><td>Flux internes</td><td>Mouvements à l'intérieur (ex : virement caisse → banque)</td></tr>
        <tr><td>Flux réels</td><td>Portent sur des biens ou ressources échangés</td></tr>
        <tr><td>Flux quasi-réels</td><td>Prestations : banque, personnel, État → entreprise</td></tr>
        <tr><td>Flux financiers</td><td>Monnaie, créances, dettes</td></tr>
        <tr><td>Flux de résultat</td><td>Produits − Charges</td></tr>
      </tbody></table>

      <h3>Principe de la partie double</h3>
      <blockquote>Une opération comptable entraîne obligatoirement au moins une ressource et un emploi.</blockquote>
      <table><thead><tr><th>Emplois (débit)</th><th>Ressources (crédit)</th></tr></thead><tbody>
        <tr><td>Acquisition d'immobilisation</td><td>Ventes, prestations facturées</td></tr>
        <tr><td>Achat de marchandises</td><td>Dettes contractées</td></tr>
        <tr><td>Charges (salaires, impôts…)</td><td>Créances recouvrées</td></tr>
        <tr><td>Recettes encaissées</td><td>Dépenses effectuées</td></tr>
      </tbody></table>

      <h3>Incidence sur le résultat</h3>
      <p>Les emplois consommés (charges) génèrent des pertes ; les ressources créées (ventes) génèrent des profits. Les emplois et ressources réversibles (achats d'immobilisations, emprunts) n'ont pas d'incidence directe sur le résultat.</p>
    `
  },
  {
    id: "bilan",
    title: "Le bilan",
    summary: "Structure actif / passif, situation nette et fonctionnement des comptes principaux.",
    key: true,
    minutes: 7,
    content: `
      <p class="lead">Le bilan est un état financier de synthèse décrivant séparément les éléments actifs et passifs à une date donnée.</p>

      <div class="bilan-schema">
        <div class="bilan-col">
          <div class="bilan-head">Actif — Emplois</div>
          <div class="bilan-cell"><b>Actif immobilisé</b><span>Immobilisations incorporelles, corporelles, financières, avances sur immobilisations</span></div>
          <div class="bilan-cell"><b>Actif circulant</b><span>Stocks HAO / AO, créances HAO / AO</span></div>
          <div class="bilan-cell"><b>Trésorerie-Actif</b><span>Titres de placement, valeurs à encaisser, banque, caisse, CCP</span></div>
        </div>
        <div class="bilan-col">
          <div class="bilan-head">Passif — Ressources</div>
          <div class="bilan-cell"><b>Capitaux propres et assimilés</b><span>Capital, réserves, résultat, subventions, provisions réglementées</span></div>
          <div class="bilan-cell"><b>Dettes financières</b><span>Emprunts à long et moyen terme, provisions financières</span></div>
          <div class="bilan-cell"><b>Passif circulant</b><span>Dettes fournisseurs, dettes sociales et fiscales, passif circulant HAO</span></div>
          <div class="bilan-cell"><b>Trésorerie-Passif</b><span>Crédits bancaires à court terme, découverts bancaires</span></div>
        </div>
      </div>

      <h3>Formules clés</h3>
      <div class="formula">
        <div>SN = Actif réel − Passif exigible = Capitaux propres</div>
        <div>Résultat = Actif − Passif (hors résultat)</div>
        <div>Bénéfice si Produits &gt; Charges · Perte si Produits &lt; Charges</div>
      </div>

      <h3>Fonctionnement des comptes principaux</h3>
      <table><thead><tr><th>Compte</th><th>Débité lors de…</th><th>Crédité lors de…</th></tr></thead><tbody>
        <tr><td><strong>Capital</strong></td><td>Réductions (retrait, absorption de pertes)</td><td>Apports initiaux, augmentations de capital</td></tr>
        <tr><td><strong>Immobilisations</strong></td><td>Acquisition (coût HT + frais accessoires)</td><td>Cessions, destructions, mises au rebut</td></tr>
        <tr><td><strong>Fournisseurs</strong></td><td>Règlements effectués nets d'avoirs</td><td>Achats à crédit, dettes à moins d'un an</td></tr>
        <tr><td><strong>Clients</strong></td><td>Créances à moins d'un an (ventes à crédit)</td><td>Règlements reçus nets d'avoirs</td></tr>
      </tbody></table>

      <div class="example">
        <div class="example-title">Exemple — Bilan AZERD au 31/12/2000</div>
        <p>Total Actif = Total Passif = 22 750 000. Le bâtiment manquant vaut 22 750 000 − 14 750 000 = <strong>8 000 000 F</strong>.</p>
      </div>
    `
  },
  {
    id: "compte",
    title: "Le compte et son fonctionnement",
    summary: "Imputation, solde, arrêt, tracés de compte et règles débit / crédit.",
    key: false,
    minutes: 5,
    content: `
      <p class="lead">Le compte est un tableau regroupant toutes les opérations concernant un même élément ou poste du bilan.</p>

      <h3>Terminologie essentielle</h3>
      <table><thead><tr><th>Terme</th><th>Définition</th></tr></thead><tbody>
        <tr><td>Imputation</td><td>Inscription au débit ou au crédit d'un compte</td></tr>
        <tr><td>Solde</td><td>TD − TC. Si TD &gt; TC : débiteur · si TC &gt; TD : créditeur · si TD = TC : soldé</td></tr>
        <tr><td>Arrêt</td><td>Clôture : on inscrit le solde du côté opposé, on totalise et on souligne de 2 traits</td></tr>
        <tr><td>Réouverture</td><td>On reporte le solde du côté de sa nature</td></tr>
      </tbody></table>

      <h3>Les 3 tracés de compte</h3>
      <ul>
        <li><strong>Tracé classique :</strong> colonnes Dates / Libellés / Montants au débit et au crédit.</li>
        <li><strong>Tracé à colonnes mariées :</strong> ajoute le solde après chaque opération.</li>
        <li><strong>Tracé schématique (compte en T) :</strong> montants seuls, débit à gauche, crédit à droite.</li>
      </ul>

      <h3>Règles de fonctionnement</h3>
      <table><thead><tr><th>Type de compte</th><th>Augmente par</th><th>Diminue par</th></tr></thead><tbody>
        <tr><td>Actif du bilan (classes 2 à 5 actif)</td><td>Débit</td><td>Crédit</td></tr>
        <tr><td>Passif du bilan (classes 1, 4, 5 passif)</td><td>Crédit</td><td>Débit</td></tr>
        <tr><td>Charges (classe 6 et 8 impairs)</td><td>Débit</td><td>Crédit</td></tr>
        <tr><td>Produits (classe 7 et 8 pairs)</td><td>Crédit</td><td>Débit</td></tr>
      </tbody></table>

      <div class="callout">
        <div class="callout-title">Comptes réciproques</div>
        <p>Deux comptes représentant deux agents différents (un tenu chez chacun) enregistrent les mêmes flux. Arrêtés à la même date, ils présentent le même solde mais de nature opposée (ex : « Fournisseur A » chez B et « Client B » chez A).</p>
      </div>
      <p class="tool-link" data-tool="compte-t">Entraînez-vous avec le simulateur de compte en T</p>
    `
  },
  {
    id: "facture",
    title: "La facture, les réductions et les achats / ventes",
    summary: "Facture de doit et d'avoir, rabais, remise, ristourne, escompte et comptabilisation.",
    key: true,
    minutes: 8,
    content: `
      <h3>Deux types de factures</h3>
      <table><thead><tr><th>Facture de doit</th><th>Facture d'avoir</th></tr></thead><tbody>
        <tr><td>Établie par le fournisseur · constate une vente · fait ressortir le <strong>Net à payer (NAP)</strong></td><td>Établie par le fournisseur · constate une réduction de prix · fait ressortir le <strong>Net à déduire</strong></td></tr>
      </tbody></table>

      <h3>Les réductions</h3>
      <ul>
        <li><strong>Commerciales (3R) :</strong> Rabais (défaut de qualité) · Remise (importance ou régularité des achats) · Ristourne (chiffre d'affaires périodique). Exprimées en % et calculées <em>en cascade</em>.</li>
        <li><strong>Financière :</strong> Escompte de règlement (paiement anticipé), calculé <em>toujours sur le Net commercial (NC)</em>, après toutes les réductions commerciales.</li>
      </ul>

      <h3>Schéma général d'une facture</h3>
      <div class="formula steps">
        <div><span>Montant brut (MB)</span></div>
        <div class="minus"><span>Rabais</span></div>
        <div class="minus"><span>Remise(s) en cascade</span></div>
        <div class="total"><span>Net commercial (NC)</span></div>
        <div class="minus"><span>Escompte (% du NC)</span></div>
        <div class="total"><span>Net financier (NF)</span></div>
        <div class="plus"><span>Port HT (si applicable)</span></div>
        <div class="total"><span>Sous-total HT</span></div>
        <div class="plus"><span>TVA 18 %</span></div>
        <div class="total strong"><span>Net à payer (NAP)</span></div>
      </div>

      <div class="callout warn">
        <div class="callout-title">Règle importante</div>
        <p>Les 3R figurant <strong>sur</strong> la facture de doit ne sont <strong>pas comptabilisés</strong> (déjà déduits dans le NC). Un avoir pour réduction obtenue hors facture (a posteriori) <strong>est</strong> comptabilisé.</p>
      </div>

      <h3>Comptabilisation achat / vente (inventaire permanent)</h3>
      <table><thead><tr><th>Chez le client</th><th>Chez le fournisseur</th></tr></thead><tbody>
        <tr><td>D 601/602/604 NC · C 4011 NAP · C 773 Escompte obtenu</td><td>D 4111 NAP · D 673 Escompte accordé · C 701/702 NC</td></tr>
        <tr><td>D 31/36/37 CA · C 6031/73 CA (entrée en stock)</td><td>D 6031/73 CAMV · C 31/32/37 CAMV (sortie de stock)</td></tr>
      </tbody></table>

      <div class="example">
        <div class="example-title">Exemple — Facture ABC vers BAC</div>
        <p>MB = 1 000 000 · Rabais 150 000 · NC = 850 000 · Escompte 1 % = 8 500 · NF = 841 500 · Port = 70 000 · Sous-total = 911 500 · TVA 18 % = 164 070 · <strong>NAP = 1 075 570</strong></p>
      </div>
      <p class="tool-link" data-tool="facture">Refaire ce calcul avec le calculateur de facture</p>
    `
  },
  {
    id: "transport",
    title: "Les frais de transport",
    summary: "Port dû, port payé, port forfaitaire, transport sur ventes et frais de réexpédition.",
    key: false,
    minutes: 5,
    content: `
      <p class="lead">Le SYSCOHADA révisé a supprimé le compte 611 « Transports sur achats ». Les comptes <code>6015</code>, <code>6025</code>, <code>6045</code> et <code>6085</code> sont utilisés à la place.</p>

      <h3>Frais à la charge du client — 3 cas</h3>
      <table><thead><tr><th>Cas</th><th>Mécanisme</th><th>Chez le client</th><th>Chez le fournisseur</th></tr></thead><tbody>
        <tr><td><strong>Port dû</strong></td><td>Le client paie directement le transporteur</td><td>D 60*5 / C 401 ou 52/57</td><td>Aucune écriture de transport</td></tr>
        <tr><td><strong>Port payé (récupéré)</strong></td><td>Le fournisseur avance et récupère sur facture</td><td>D 60*5 (compris dans le NAP)</td><td>D 613 / C 52 puis D 411 / C 7071</td></tr>
        <tr><td><strong>Port forfaitaire</strong></td><td>Le fournisseur transporte avec ses propres camions</td><td>D 60*5 (compris dans le NAP)</td><td>C <strong>707</strong> (produit accessoire)</td></tr>
      </tbody></table>

      <h3>Frais à la charge du fournisseur</h3>
      <p>Transport vers le client : D <code>612</code> Transports sur ventes / C 401 ou 52/57. Ces frais ne figurent pas sur la facture de vente.</p>

      <h3>Frais de réexpédition lors d'un retour</h3>
      <ul>
        <li>Le client engage les frais : D 613 / C 57 (caisse).</li>
        <li>Récupération via facture d'avoir : le client crédite 781 ou 7071 · le fournisseur débite 612.</li>
      </ul>

      <div class="example">
        <div class="example-title">Exemple — Paul / Coffi (retour du 12/3)</div>
        <p>Retour brut 200 000 · NC = 190 000 · Escompte repris = 1 900 · Port de réexpédition = 50 000 · <strong>Net à déduire = 238 100</strong></p>
      </div>
    `
  },
  {
    id: "tva",
    title: "La TVA",
    summary: "Champ d'application, taux béninois, comptes 443 / 445 / 4441 / 4449 et liquidation.",
    key: true,
    minutes: 6,
    content: `
      <p class="lead">La TVA est un impôt indirect frappant les livraisons de biens et prestations de services à titre onéreux. Elle est supportée par le consommateur final mais collectée par les entreprises assujetties.</p>

      <ul>
        <li><strong>Exonérations :</strong> opérations dans le champ de la TVA, mais non taxées par décision de l'État.</li>
        <li><strong>Exemptions :</strong> opérations hors du champ d'application de la TVA.</li>
      </ul>

      <div class="callout">
        <div class="callout-title">Taux en vigueur au Bénin : 18 %</div>
        <p>La TVA se calcule sur le <strong>Net financier (NF) + Port HT</strong> s'il figure sur la facture.</p>
      </div>

      <h3>Comptes de TVA</h3>
      <table><thead><tr><th>Compte</th><th>Rôle</th></tr></thead><tbody>
        <tr><td><code>443</code> TVA facturée</td><td>Dette envers l'État (TVA collectée sur les ventes)</td></tr>
        <tr><td><code>445</code> TVA récupérable</td><td>Créance sur l'État (TVA déductible sur achats)</td></tr>
        <tr><td><code>645</code> Impôts et taxes indirects</td><td>Charge si l'entreprise n'est <strong>pas</strong> assujettie</td></tr>
        <tr><td><code>4441</code> TVA due</td><td>Solde à payer (TVA facturée &gt; TVA récupérable)</td></tr>
        <tr><td><code>4449</code> Crédit de TVA</td><td>Solde reportable (TVA récupérable &gt; TVA facturée)</td></tr>
      </tbody></table>

      <h3>Liquidation mensuelle — TVA due</h3>
      <table class="journal"><thead><tr><th>Compte</th><th>Débit</th><th>Crédit</th></tr></thead><tbody>
        <tr><td>443 État, TVA facturée</td><td>TVA facturée</td><td></td></tr>
        <tr><td>445 État, TVA récupérable</td><td></td><td>TVA récupérable</td></tr>
        <tr><td>4441 État, TVA due</td><td></td><td>Différence</td></tr>
      </tbody></table>
      <p>Au paiement : D <code>4441</code> / C <code>52</code> (banque).</p>

      <h3>Liquidation mensuelle — Crédit de TVA</h3>
      <table class="journal"><thead><tr><th>Compte</th><th>Débit</th><th>Crédit</th></tr></thead><tbody>
        <tr><td>443 État, TVA facturée</td><td>TVA facturée</td><td></td></tr>
        <tr><td>4449 État, crédit de TVA</td><td>Différence</td><td></td></tr>
        <tr><td>445 État, TVA récupérable</td><td></td><td>TVA récupérable</td></tr>
      </tbody></table>
    `
  }
];

/* ── Extrait du plan comptable (fiches + recherche) ─────────── */
COURSE.accounts = [
  { n: "10",   l: "Capital",                                  c: 1 },
  { n: "11",   l: "Réserves",                                 c: 1 },
  { n: "13",   l: "Résultat net de l'exercice",               c: 1 },
  { n: "16",   l: "Emprunts et dettes assimilées",            c: 1 },
  { n: "21",   l: "Immobilisations incorporelles",            c: 2 },
  { n: "22",   l: "Terrains",                                 c: 2 },
  { n: "23",   l: "Bâtiments, installations techniques et agencements", c: 2 },
  { n: "24",   l: "Matériel, mobilier et actifs biologiques", c: 2 },
  { n: "245",  l: "Matériel de transport",                    c: 2 },
  { n: "2845", l: "Amortissements du matériel de transport",  c: 2 },
  { n: "31",   l: "Marchandises",                             c: 3 },
  { n: "32",   l: "Matières premières et fournitures liées",  c: 3 },
  { n: "36",   l: "Produits finis",                           c: 3 },
  { n: "39",   l: "Dépréciations des stocks",                 c: 3 },
  { n: "401",  l: "Fournisseurs, dettes en compte",           c: 4 },
  { n: "411",  l: "Clients",                                  c: 4 },
  { n: "4191", l: "Clients, avances et acomptes reçus",       c: 4 },
  { n: "443",  l: "État, TVA facturée",                       c: 4 },
  { n: "445",  l: "État, TVA récupérable",                    c: 4 },
  { n: "4441", l: "État, TVA due",                            c: 4 },
  { n: "4449", l: "État, crédit de TVA à reporter",           c: 4 },
  { n: "52",   l: "Banques",                                  c: 5 },
  { n: "57",   l: "Caisse",                                   c: 5 },
  { n: "601",  l: "Achats de marchandises",                   c: 6 },
  { n: "602",  l: "Achats de matières premières et fournitures liées", c: 6 },
  { n: "6031", l: "Variations des stocks de marchandises",    c: 6 },
  { n: "612",  l: "Transports sur ventes",                    c: 6 },
  { n: "613",  l: "Transports pour le compte de tiers",       c: 6 },
  { n: "645",  l: "Impôts et taxes indirects",                c: 6 },
  { n: "66",   l: "Charges de personnel",                     c: 6 },
  { n: "673",  l: "Escomptes accordés",                       c: 6 },
  { n: "68",   l: "Dotations aux amortissements",             c: 6 },
  { n: "701",  l: "Ventes de marchandises",                   c: 7 },
  { n: "702",  l: "Ventes de produits finis",                 c: 7 },
  { n: "707",  l: "Produits accessoires",                     c: 7 },
  { n: "773",  l: "Escomptes obtenus",                        c: 7 },
  { n: "781",  l: "Transferts de charges d'exploitation",     c: 7 },
  { n: "81",   l: "Valeurs comptables des cessions d'immobilisations", c: 8 },
  { n: "82",   l: "Produits des cessions d'immobilisations",  c: 8 },
  { n: "84",   l: "Produits HAO",                             c: 8 }
];

COURSE.classNames = {
  1: "Ressources durables", 2: "Actif immobilisé", 3: "Stocks", 4: "Tiers",
  5: "Trésorerie", 6: "Charges AO", 7: "Produits AO", 8: "Autres charges et produits (HAO)"
};

/* ── Exercice : classer au bilan ────────────────────────────── */
COURSE.bilanItems = [
  { l: "Capital social",            s: "passif" },
  { l: "Bâtiment",                  s: "actif"  },
  { l: "Emprunt bancaire (5 ans)",  s: "passif" },
  { l: "Stock de marchandises",     s: "actif"  },
  { l: "Dettes fournisseurs",       s: "passif" },
  { l: "Créances clients",          s: "actif"  },
  { l: "Caisse",                    s: "actif"  },
  { l: "Matériel de transport",     s: "actif"  },
  { l: "Réserves",                  s: "passif" },
  { l: "Découvert bancaire",        s: "passif" },
  { l: "Dettes fiscales (TVA due)", s: "passif" },
  { l: "Logiciel acquis",           s: "actif"  }
];

/* ── Questions du quiz ──────────────────────────────────────── */
/* ch = identifiant du chapitre à réviser en cas d'erreur          */
COURSE.questions = [
  { ch: "generalites", q: "En quelle année le SYSCOA a-t-il été créé, suite à la dévaluation du franc CFA ?", o: ["1990", "1994", "1998", "2000"], a: 1, e: "Le SYSCOA a été créé en 1994 par l'UEMOA, et rendu applicable dès le 1er janvier 1998." },
  { ch: "generalites", q: "Combien d'États sont aujourd'hui membres de l'OHADA ?", o: ["8", "14", "16", "17"], a: 3, e: "L'OHADA compte 17 États membres depuis l'adhésion de la République démocratique du Congo en 2012." },
  { ch: "generalites", q: "Quelle est l'hypothèse de base de la présentation des états financiers ?", o: ["La prudence", "La continuité de l'exploitation", "La permanence des méthodes", "Le coût historique"], a: 1, e: "L'hypothèse de base est la continuité de l'exploitation." },
  { ch: "generalites", q: "Quel postulat énonce que le résultat d'un exercice est indépendant de celui qui précède et de celui qui suit ?", o: ["Postulat de l'entité", "Postulat de la comptabilité d'engagement", "Postulat de spécialisation des exercices", "Postulat de la permanence des méthodes"], a: 2, e: "Le postulat de spécialisation des exercices stipule que le résultat de chaque exercice est indépendant des autres." },
  { ch: "cadre", q: "Dans la lecture verticale du bilan, le bas du bilan comprend les classes :", o: ["1 et 2", "3, 4 et 5", "6, 7 et 8", "9 uniquement"], a: 1, e: "Le haut du bilan comprend les classes 1 et 2, le bas comprend les classes 3, 4 et 5." },
  { ch: "cadre", q: "Le compte 2845 correspond à :", o: ["Matériel de transport", "Amortissements du matériel de transport", "Dépréciation du matériel", "Achat de matériel de transport"], a: 1, e: "Le chiffre 8 en 2e position de la classe 2 indique l'amortissement (245 devient 2845)." },
  { ch: "cadre", q: "Le chiffre 9 en 3e position d'un compte indique :", o: ["Une provision", "Un amortissement", "Un caractère opposant au sens normal du compte", "Un compte résiduel"], a: 2, e: "Le chiffre 9 en 3e position implique un sens opposé au sens normal du compte (ex : 4191)." },
  { ch: "charges-produits", q: "Parmi ces comptes, lequel enregistre une charge des activités ordinaires ?", o: ["701", "601", "82", "88"], a: 1, e: "601 = Achats de marchandises, charge des activités ordinaires (classe 6)." },
  { ch: "charges-produits", q: "Le compte 84 correspond à :", o: ["Charges HAO", "Produits HAO", "Dotations HAO", "Reprises HAO"], a: 1, e: "84 = Produits HAO (en classe 8, les comptes pairs sont des produits)." },
  { ch: "cadre", q: "Dans le PCE, l'analyse par fonction ne concerne que :", o: ["Les classes 1 à 5", "Les classes 6, 7 et 8", "La classe 9 uniquement", "Toutes les classes"], a: 1, e: "La subdivision par fonction n'a de sens que pour les comptes de charges et produits (classes 6, 7, 8)." },
  { ch: "bilan", q: "Le compte Capital est crédité lors :", o: ["D'une absorption de pertes", "D'un retrait définitif", "D'un nouvel apport des associés", "D'un remboursement aux associés"], a: 2, e: "Le compte Capital est crédité lors des augmentations de capital (nouveaux apports, incorporation de bénéfices)." },
  { ch: "bilan", q: "Dans le bilan, la partie Actif fait apparaître :", o: ["Les ressources", "Les emplois", "Le résultat uniquement", "Les charges"], a: 1, e: "L'actif fait apparaître les emplois ; le passif retrace les ressources." },
  { ch: "bilan", q: "La situation nette (SN) est égale à :", o: ["L'actif total", "Le passif exigible", "Les capitaux propres", "Le résultat de l'exercice"], a: 2, e: "SN = Actif réel − Passif exigible = Capitaux propres." },
  { ch: "compte", q: "Si le total débit (TD) d'un compte est supérieur au total crédit (TC), le solde est :", o: ["Créditeur", "Nul", "Débiteur", "Indéterminé"], a: 2, e: "Si TD > TC, le solde = TD − TC et il est dit débiteur." },
  { ch: "compte", q: "Le tracé qui fait apparaître le solde après chaque opération est appelé :", o: ["Tracé classique", "Tracé à colonnes mariées", "Tracé schématique", "Tracé en T"], a: 1, e: "Le tracé à colonnes mariées fait apparaître le solde après chaque opération." },
  { ch: "compte", q: "Les comptes de l'actif du bilan augmentent par :", o: ["Le crédit", "Le débit", "Le virement", "L'arrêt"], a: 1, e: "Les comptes d'actif augmentent par le débit et diminuent par le crédit." },
  { ch: "facture", q: "Sur une facture de doit, l'escompte se calcule :", o: ["Sur le montant brut", "Avant les réductions commerciales", "Après toutes les réductions commerciales (sur le NC)", "Sur le net à payer"], a: 2, e: "L'escompte se calcule toujours après toutes les réductions commerciales, sur le Net commercial." },
  { ch: "facture", q: "Les 3R figurant sur une facture de doit sont :", o: ["Comptabilisés au débit du 601", "Comptabilisés au crédit du 701", "Non comptabilisés (déjà déduits du NC)", "Comptabilisés en TVA"], a: 2, e: "Les réductions commerciales figurant sur la facture de doit ne sont pas comptabilisées." },
  { ch: "transport", q: "Lorsque le fournisseur transporte avec ses propres camions (port forfaitaire), ce produit est enregistré chez lui au crédit du compte :", o: ["612", "613", "707", "6015"], a: 2, e: "Le port forfaitaire est un produit accessoire, enregistré au crédit du compte 707." },
  { ch: "tva", q: "Le taux de TVA en vigueur au Bénin est de :", o: ["10 %", "15 %", "18 %", "20 %"], a: 2, e: "Le taux de TVA en vigueur au Bénin est de 18 %." },

  /* Questions de calcul */
  { ch: "facture", calc: true, q: "Montant brut 500 000, remise 10 %. Quel est le Net commercial ?", o: ["400 000", "450 000", "490 000", "550 000"], a: 1, e: "NC = 500 000 − 10 % × 500 000 = 450 000." },
  { ch: "facture", calc: true, q: "Montant brut 1 000 000, remises successives de 10 % puis 5 %. Quel est le Net commercial ?", o: ["850 000", "855 000", "860 000", "900 000"], a: 1, e: "En cascade : 1 000 000 × 0,90 = 900 000, puis 900 000 × 0,95 = 855 000." },
  { ch: "facture", calc: true, q: "Net commercial 800 000, escompte 2 %. Quel est le Net financier ?", o: ["784 000", "780 000", "796 000", "816 000"], a: 0, e: "Escompte = 2 % × 800 000 = 16 000, donc NF = 784 000." },
  { ch: "tva", calc: true, q: "Sous-total HT 200 000, TVA 18 %. Quel est le Net à payer ?", o: ["218 000", "236 000", "232 000", "240 000"], a: 1, e: "TVA = 18 % × 200 000 = 36 000, donc NAP = 236 000." },
  { ch: "tva", calc: true, q: "Sur le mois : TVA facturée 540 000, TVA récupérable 360 000. Que constate-t-on ?", o: ["Un crédit de TVA de 180 000 (4449)", "Une TVA due de 180 000 (4441)", "Une TVA due de 900 000 (4441)", "Aucune écriture"], a: 1, e: "TVA facturée > TVA récupérable : TVA due = 540 000 − 360 000 = 180 000, au crédit du 4441." }
];
