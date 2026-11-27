/* ============================================================
   data.js — Contenu officiel complet du cours SYSCOHADA
   Comptabilité Générale I — Licence I Informatique
   Conforme aux enseignements du Dr Rock Stanislas HINVI
   ============================================================ */

window.COURSE = window.COURSE || {};
var COURSE = window.COURSE;

/* ── 11 Chapitres complets du programme ────────────────────── */
COURSE.chapters = [
  {
    "id": "generalites",
    "title": "Généralités sur la comptabilité",
    "summary": "Définition, historique OHADA, livres obligatoires et postulats comptables fondamentaux.",
    "key": true,
    "minutes": 10,
    "content": "<p class=\"lead\">La comptabilité est une technique d'organisation financière et de communication d'origine séculaire, devenue indispensable pour la gestion, la mesure de la performance et la preuve juridique des transactions de toute entité économique.</p>\n\n<h3>1. Historique et évolution</h3>\n<p>La comptabilité trouve ses racines dans l'Antiquité (Mésopotamie, Égypte, Rome antique) où l'on consignait sur tablettes et registres les opérations d'échange et les créances. Initialement limitée aux transactions avec les tiers (qui doit quoi à qui), elle s'est élargie à la description du patrimoine global de l'entreprise au fil des siècles.</p>\n<ul class=\"timeline\">\n  <li><b>1494</b> Publication du traité de Luca Pacioli à Venise, formalisant la <strong>partie double</strong>.</li>\n  <li><b>1993</b> Signature à Port-Louis (Maurice) du Traité instituant l'<strong>OHADA</strong> (Organisation pour l'Harmonisation en Afrique du Droit des Affaires), entré en vigueur en 1995.</li>\n  <li><b>1994</b> Création de l'UEMOA au lendemain de la dévaluation du Franc CFA, donnant naissance au <strong>SYSCOA</strong> (Système Comptable Ouest Africain).</li>\n  <li><b>1998</b> Entrée en vigueur obligatoire du SYSCOA au 1er janvier 1998.</li>\n  <li><b>2000</b> Adoption de l'Acte Uniforme OHADA portant organisation et harmonisation des comptabilités des entreprises (SYSCOHADA d'origine).</li>\n  <li><b>2017</b> Adoption du <strong>SYSCOHADA révisé</strong> (applicable au 1er janvier 2018), unifiant le droit comptable dans les <strong>17 États membres</strong> de l'espace OHADA.</li>\n</ul>\n\n<h3>2. Définition selon le SYSCOHADA</h3>\n<p>Selon le référentiel comptable OHADA, la comptabilité est un <strong>système d'organisation de l'information financière</strong> permettant de :</p>\n<ul>\n  <li>Saisir, classer et enregistrer des données de base chiffrées ;</li>\n  <li>Fournir, après traitement approprié, un ensemble d'informations conforme aux besoins des divers utilisateurs intéressés.</li>\n</ul>\n\n<h3>3. Les 4 états financiers annuels indissociables</h3>\n<p>Pour les entités relevant du Système Normal, les états financiers de synthèse annuels comprennent obligatoirement :</p>\n<table>\n  <thead><tr><th>État financier</th><th>Nature et objectif</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Le Bilan</strong></td><td>Décrit séparément les éléments d'actif (emplois) et de passif (ressources) et fait apparaître de façon distincte les capitaux propres de l'entité à une date donnée.</td></tr>\n    <tr><td><strong>Le Compte de résultat</strong></td><td>Récapitule les produits et les charges qui font apparaître, par différence, le bénéfice net ou la perte nette de l'exercice.</td></tr>\n    <tr><td><strong>Le Tableau des flux de trésorerie (TFT)</strong></td><td>Remplace l'ancien TAFIRE dans le SYSCOHADA révisé ; il retrace les entrées et sorties de liquidités liées aux activités opérationnelles, d'investissement et de financement.</td></tr>\n    <tr><td><strong>Les Notes annexes</strong></td><td>Commentent, complètent et précisent les informations chiffrées portées au bilan, compte de résultat et TFT.</td></tr>\n  </tbody>\n</table>\n\n<h3>4. Rôles et utilisateurs de l'information comptable</h3>\n<p>La comptabilité répond à une triple exigence :</p>\n<ul>\n  <li><strong>Rôle de gestion et de prévision</strong> : instrument de pilotage interne pour le chef d'entreprise et les managers ;</li>\n  <li><strong>Rôle de preuve et juridique</strong> : moyen de preuve en justice entre commerçants, garantie pour les créanciers et base d'imposition fiscale ;</li>\n  <li><strong>Rôle d'information externe</strong> : communication avec les 7 catégories de partenaires : les dirigeants, les associés/actionnaires, le personnel, les banques et prêteurs, les clients et fournisseurs, l'État (fisc, douane, statistiques) et les institutions internationales (UEMOA, BCEAO, Banque Mondiale, FMI).</li>\n</ul>\n\n<h3>5. Livres obligatoires et formalités légales</h3>\n<p>Toute entité a l'obligation légale de tenir les livres comptables suivants, tenus sans blanc, altération ni rature :</p>\n<ul>\n  <li><strong>Le Livre-Journal</strong> : enregistre chronologiquement au jour le jour chaque transaction ;</li>\n  <li><strong>Le Grand-Livre</strong> : regroupe l'ensemble des comptes ouverts de l'entité avec mouvements débit, crédit et solde ;</li>\n  <li><strong>La Balance générale</strong> : tableau de contrôle récapitulant les totaux débit/crédit et les soldes de tous les comptes ;</li>\n  <li><strong>Le Livre d'inventaire</strong> : regroupe les données de l'inventaire physique des actifs et passifs, appuyé par le bilan et compte de résultat.</li>\n</ul>\n\n<h3>6. Les principes comptables fondamentaux (3 familles)</h3>\n<table>\n  <thead><tr><th>Famille</th><th>Désignation</th><th>Signification</th></tr></thead>\n  <tbody>\n    <tr><td><strong>1. Hypothèse de base</strong></td><td>Continuité de l'exploitation</td><td>L'entité est présumée poursuivre ses activités dans un avenir prévisible, sans intention de liquidation ni réduction drastique de sa voilure.</td></tr>\n    <tr><td rowspan=\"5\"><strong>2. Les 5 Postulats</strong></td><td>Postulat de l'entité</td><td>L'entreprise est une personne distincte de ses propriétaires ou associés. Ses comptes ne contiennent que son patrimoine propre.</td></tr>\n    <tr><td>Comptabilité d'engagement</td><td>Les effets des transactions sont comptabilisés lorsqu'ils se produisent (et non au moment du flux monétaire effectif).</td></tr>\n    <tr><td>Spécialisation des exercices</td><td>La vie de l'entreprise est découpée en périodes annuelles indépendantes ; chaque exercice se voit rattacher ses charges et produits propres.</td></tr>\n    <tr><td>Permanence des méthodes</td><td>Les méthodes d'évaluation et de présentation des comptes doivent être identiques d'un exercice à l'autre pour assurer la comparabilité.</td></tr>\n    <tr><td>Prééminence de la réalité économique</td><td>Les opérations doivent être enregistrées et présentées conformément à leur substance financière et économique, au-delà de leur seule apparence juridique.</td></tr>\n    <tr><td rowspan=\"5\"><strong>3. Les 5 Conventions</strong></td><td>Coût historique</td><td>Les biens figurent à l'actif pour leur coût d'acquisition ou de production nominal, sans réévaluation spontanée.</td></tr>\n    <tr><td>Prudence</td><td>Appréciation raisonnable des faits : les gains potentiels ne sont pas enregistrés, alors que les pertes prévisibles ou risques certains sont provisionnés.</td></tr>\n    <tr><td>Régularité et sincérité (transparence)</td><td>Conformité aux règles en vigueur et traduction loyale de la situation réelle.</td></tr>\n    <tr><td>Correspondance bilan de clôture / d'ouverture</td><td>Le bilan d'ouverture d'un exercice doit correspondre exactement au bilan de clôture de l'exercice précédent (intangibilité).</td></tr>\n    <tr><td>Importance significative</td><td>Sont obligatoirement présentées toutes les informations susceptibles d'influencer le jugement ou les décisions des lecteurs des comptes.</td></tr>\n  </tbody>\n</table>\n\n<div class=\"callout\"><div class=\"callout-title\">À retenir pour l'examen</div><p>Le postulat de <strong>spécialisation des exercices</strong> impose de rattacher à chaque année uniquement les charges et les produits consommés ou acquis sur cette période. Les écritures de régularisation (charges à payer, produits constatés d'avance) découlent directement de ce postulat.</p></div>",
    "recap": [
      "La comptabilité est un système d'organisation financière permettant de saisir, classer, enregistrer des données chiffrées et fournir des états financiers fiables.",
      "L'OHADA regroupe 17 États membres, avec le SYSCOHADA révisé entré en vigueur au 1er janvier 2018.",
      "Les 4 états financiers du Système Normal sont indissociables : Bilan, Compte de résultat, Tableau des flux de trésorerie (TFT) et Notes annexes.",
      "Les livres légaux obligatoires sont le Livre-Journal, le Grand-Livre, la Balance et le Livre d'inventaire, tenus sans blanc ni rature.",
      "L'hypothèse fondamentale est la continuité de l'exploitation.",
      "Les 5 postulats comptables : entité, comptabilité d'engagement, spécialisation des exercices, permanence des méthodes, prééminence de la réalité économique.",
      "Les 5 conventions comptables : coût historique, prudence, régularité/transparence, correspondance bilan d'ouverture/clôture, importance significative."
    ]
  },
  {
    "id": "cadre",
    "title": "Le cadre comptable SYSCOHADA",
    "summary": "Classes 1 à 5, lecture verticale et horizontale du bilan et constantes de codification décimale.",
    "key": true,
    "minutes": 10,
    "content": "<p class=\"lead\">Le plan des comptes du SYSCOHADA révisé structure l'ensemble des opérations économiques et financières d'une entité à travers une codification décimale rigoureuse répartie en 9 classes.</p>\n\n<h3>1. Architecture générale : les 9 classes de comptes</h3>\n<table>\n  <thead><tr><th>Classes</th><th>Désignation</th><th>Nature</th><th>Caractère</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Classe 1</strong></td><td>Comptes de ressources durables</td><td>Passif stable (Capitaux propres et Dettes financières)</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 2</strong></td><td>Comptes d'actif immobilisé</td><td>Actif immobilisé (Incorporel, Corporel, Financier)</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 3</strong></td><td>Comptes de stocks</td><td>Actif circulant (Marchandises, Matières, Produits)</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 4</strong></td><td>Comptes de tiers</td><td>Créances (Actif) et Dettes circulantes (Passif)</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 5</strong></td><td>Comptes de trésorerie</td><td>Titres de placement, Banques, Caisse (Actif / Passif)</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 6</strong></td><td>Comptes de charges des activités ordinaires (AO)</td><td>Gestion - Charges d'exploitation et financières</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 7</strong></td><td>Comptes de produits des activités ordinaires (AO)</td><td>Gestion - Produits d'exploitation et financiers</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 8</strong></td><td>Comptes des autres charges et autres produits (HAO)</td><td>Hors Activités Ordinaires (exceptionnel)</td><td>Obligatoire</td></tr>\n    <tr><td><strong>Classe 9</strong></td><td>Comptes des engagements hors bilan et analytique</td><td>Opérations conditionnelles et gestion interne</td><td>Facultatif</td></tr>\n  </tbody>\n</table>\n\n<h3>2. Les classes de situation (1 à 5) : lecture du bilan</h3>\n<p>Les comptes des classes 1 à 5 sont appelés <strong>comptes de situation</strong> ou comptes de bilan. Ils décrivent la structure financière du patrimoine de l'entité :</p>\n<div class=\"bilan-schema\">\n  <div class=\"bilan-col\">\n    <div class=\"bilan-head\">Actif (Emplois de valeurs)</div>\n    <div class=\"bilan-cell\"><b>Classe 2 : Actif immobilisé</b><span>Biens destinés à servir de façon durable (plus d'un an) : terrains (22), bâtiments (23), matériel (24), titres de participation (26).</span></div>\n    <div class=\"bilan-cell\"><b>Classe 3 : Stocks</b><span>Biens achetés ou produits destinés à être revendus ou consommés : marchandises (31), matières premières (32), produits finis (36).</span></div>\n    <div class=\"bilan-cell\"><b>Classe 4 (solde débiteur) : Créances</b><span>Sommes dues par les clients (411), avances versées aux fournisseurs (4091), créances fiscales (445).</span></div>\n    <div class=\"bilan-cell\"><b>Classe 5 : Trésorerie-Actif</b><span>Disponibilités immédiates : banques (521), chèques postaux (531), caisse (571).</span></div>\n  </div>\n  <div class=\"bilan-col\">\n    <div class=\"bilan-head\">Passif (Origine des ressources)</div>\n    <div class=\"bilan-cell\"><b>Classe 1 : Ressources durables</b><span>Capitaux propres (10 Capital, 11 Réserves, 13 Résultat net) et dettes financières à plus d'un an (16 Emprunts bancaires).</span></div>\n    <div class=\"bilan-cell\"><b>Classe 4 (solde créditeur) : Dettes circulantes</b><span>Dettes envers les fournisseurs (401), le personnel (422), les organismes sociaux (431) et l'État (442, 4441).</span></div>\n    <div class=\"bilan-cell\"><b>Classe 5 : Trésorerie-Passif</b><span>Découverts bancaires et facilités de caisse (561 Crédits de trésorerie, 521 créditeur).</span></div>\n  </div>\n</div>\n\n<h3>3. Règles de codification et constantes de numérotation</h3>\n<p>Le plan comptable repose sur une codification décimale arborescente :</p>\n<ul>\n  <li><strong>1er chiffre</strong> : indique la <em>classe</em> (ex : <code>4</code> = Tiers).</li>\n  <li><strong>2e chiffre</strong> : indique le <em>compte principal</em> à deux chiffres (ex : <code>41</code> = Clients et comptes rattachés).</li>\n  <li><strong>3e chiffre</strong> : indique le <em>sous-compte</em> (ex : <code>411</code> = Clients).</li>\n  <li><strong>4e chiffre</strong> : indique la <em>divisionnaire</em> (ex : <code>4111</code> = Clients ordinaires).</li>\n</ul>\n\n<h4>Signification des constantes fondamentales</h4>\n<table>\n  <thead><tr><th>Chiffre</th><th>Position</th><th>Signification conventionnelle</th><th>Exemples</th></tr></thead>\n  <tbody>\n    <tr><td><strong>8</strong></td><td>2e position (classe 2)</td><td>Compte d'<strong>amortissement</strong> de l'immobilisation correspondante</td><td><code>245</code> Matériel de transport &rarr; <code>2845</code> Amortissement du matériel de transport ; <code>23</code> Bâtiments &rarr; <code>283</code> Amortissement des bâtiments.</td></tr>\n    <tr><td><strong>9</strong></td><td>2e position (classes 1 à 5)</td><td>Compte de <strong>dépréciation ou provision</strong> pour risque</td><td><code>31</code> Marchandises &rarr; <code>391</code> Dépréciation des stocks de marchandises ; <code>411</code> Clients &rarr; <code>491</code> Dépréciation des comptes clients.</td></tr>\n    <tr><td><strong>9</strong></td><td>3e ou 4e position</td><td>Compte de <strong>sens inverse (opposant)</strong> au fonctionnement normal de sa catégorie</td><td><code>411</code> Client est débiteur &rarr; <code>4191</code> Avances reçues des clients (dette, créditeur) ;<br><code>401</code> Fournisseur est créditeur &rarr; <code>4091</code> Avances versées aux fournisseurs (créance, débiteur).</td></tr>\n    <tr><td><strong>8</strong></td><td>3e ou 4e position</td><td>Compte <strong>résiduel ou divers</strong> regroupant les éléments non repris ailleurs</td><td><code>2458</code> Autres matériels de transport.</td></tr>\n    <tr><td><strong>0</strong> ou <strong>1</strong></td><td>Dernière position</td><td>Compte principal ordinaire ou subdivision d'exploitation</td><td><code>4011</code> Fournisseurs d'exploitation.</td></tr>\n  </tbody>\n</table>\n\n<h3>4. Le Plan Comptable d'Entreprise (PCE)</h3>\n<p>Chaque entité adapte le cadre général à ses besoins par des subdivisions facultatives :</p>\n<ul>\n  <li><strong>Extension par nature</strong> (+2 chiffres) : ex. <code>6047.18</code> pour identifier précisément les fournitures de bureau informatiques.</li>\n  <li><strong>Extension par fonction ou centre de coût</strong> (+2 chiffres additionnels) : ex. <code>6047.18.03</code> pour affecter cette charge au service comptabilité (classes 6, 7 et 8 uniquement).</li>\n</ul>\n\n<div class=\"callout\"><div class=\"callout-title\">Astuce mnémotechnique</div><p>Pour trouver le compte d'amortissement d'un bien de la classe 2, il suffit d'intercaler un <strong>8</strong> en deuxième position :<br>Terrain non amortissable &rarr; pas d'amortissement.<br>Bâtiment <code>23</code> &rarr; Amortissement <code>283</code>.<br>Matériel <code>24</code> &rarr; Amortissement <code>284</code>.</p></div>",
    "recap": [
      "Les classes 1 à 5 forment les comptes de bilan (situation patrimoniale).",
      "La classe 1 regroupe les ressources durables (Capitaux propres + Dettes financières à long terme).",
      "La classe 2 représente l'actif immobilisé (biens destinés à servir durablement).",
      "La classe 3 correspond aux stocks de marchandises, matières et produits.",
      "La classe 4 regroupe les tiers (créances clients à l'actif, dettes fournisseurs au passif).",
      "La classe 5 représente la trésorerie active (banque, caisse) ou passive (découverts).",
      "Le chiffre 8 en 2e position en classe 2 désigne toujours un compte d'amortissement (ex: 2845).",
      "Le chiffre 9 en 2e position désigne une provision ou dépréciation (ex: 391, 491).",
      "Le chiffre 9 en 3e position inverse le sens habituel du compte (ex: 4091 créance sur fournisseur, 4191 dette envers client)."
    ]
  },
  {
    "id": "charges-produits",
    "title": "Comptes de charges et produits (AO / HAO)",
    "summary": "Activités ordinaires (classes 6 et 7) et hors activités ordinaires (classe 8) pour le calcul du résultat.",
    "key": false,
    "minutes": 8,
    "content": "<p class=\"lead\">Les classes 6, 7 et 8 mesurent l'activité économique de l'entité. Elles regroupent les charges (consommations et emplois définitifs) et les produits (ressources définitives) pour dégager le résultat net de l'exercice.</p>\n\n<h3>1. Distinction fondamentale : AO vs HAO</h3>\n<p>Le SYSCOHADA sépare strictement les opérations récurrentes de celles à caractère exceptionnel :</p>\n<ul>\n  <li><strong>Activités Ordinaires (AO) — Classes 6 et 7</strong> : opérations liées à l'objet social de l'entreprise, se reproduisant de manière régulière au cours de l'exercice (achats, ventes, loyers, salaires, intérêts d'emprunt).</li>\n  <li><strong>Hors Activités Ordinaires (HAO) — Classe 8</strong> : opérations et événements distincts des activités habituelles, imprévisibles ou non censés se reproduire régulièrement (cessions d'immobilisations, sinistres, dons importants, restructurations, subventions d'équilibre).</li>\n</ul>\n\n<h3>2. Les comptes de charges (Classe 6) : Emplois définitifs</h3>\n<p>Les charges représentent des appauvrissements pour l'entité. Elles augmentent par le <strong>DÉBIT</strong> et diminuent exceptionnellement par le <strong>CRÉDIT</strong> (en cas d'annulation ou de retour).</p>\n<table>\n  <thead><tr><th>Poste</th><th>Intitulé</th><th>Exemples d'opérations</th></tr></thead>\n  <tbody>\n    <tr><td><code>601</code></td><td>Achats de marchandises</td><td>Biens achetés pour être revendus en l'état sans transformation.</td></tr>\n    <tr><td><code>602</code></td><td>Achats de matières premières</td><td>Biens destinés à entrer dans la fabrication de produits finis.</td></tr>\n    <tr><td><code>603</code></td><td>Variations des stocks de biens achetés</td><td>Différence entre stock final et stock initial (régularisation d'inventaire).</td></tr>\n    <tr><td><code>604</code></td><td>Achats stockés de matières consommables</td><td>Carburants, emballages, fournitures industrielles d'entretien.</td></tr>\n    <tr><td><code>605</code></td><td>Achats non stockés de matières et fournitures</td><td>Fournitures de bureau non stockées, eau, électricité consommée.</td></tr>\n    <tr><td><code>61</code></td><td>Transports</td><td>Port sur achats (611), transports du personnel (613).</td></tr>\n    <tr><td><code>62 / 63</code></td><td>Services extérieurs A et B</td><td>Loyers et charges locatives (622), entretien et réparations (624), primes d'assurance (625), honoraires (632), publicité (627).</td></tr>\n    <tr><td><code>64</code></td><td>Impôts et taxes</td><td>Patente, taxes foncières, timbres fiscaux, droits d'enregistrement.</td></tr>\n    <tr><td><code>66</code></td><td>Charges de personnel</td><td>Salaires bruts des employés (661), cotisations patronales CNSS (664).</td></tr>\n    <tr><td><code>67</code></td><td>Frais financiers et charges assimilées</td><td>Intérêts sur emprunts bancaires (671), escomptes de règlement accordés aux clients (673).</td></tr>\n    <tr><td><code>68</code></td><td>Dotations aux amortissements et dépréciations</td><td>Constatation de l'usure des immobilisations (681) et risques d'exploitation.</td></tr>\n  </tbody>\n</table>\n\n<h3>3. Les comptes de produits (Classe 7) : Ressources définitives</h3>\n<p>Les produits constituent l'enrichissement généré par les ventes et prestations. Ils augmentent par le <strong>CRÉDIT</strong> et diminuent par le <strong>DÉBIT</strong>.</p>\n<table>\n  <thead><tr><th>Poste</th><th>Intitulé</th><th>Exemples d'opérations</th></tr></thead>\n  <tbody>\n    <tr><td><code>701</code></td><td>Ventes de marchandises</td><td>Revenus tirés de l'activité commerciale principale.</td></tr>\n    <tr><td><code>702</code></td><td>Ventes de produits finis</td><td>Revenus tirés de la vente de biens fabriqués par l'entité.</td></tr>\n    <tr><td><code>706</code></td><td>Services vendus / Travaux</td><td>Prestations de services facturées aux clients.</td></tr>\n    <tr><td><code>707</code></td><td>Produits accessoires</td><td>Ports facturés aux clients (7071), commissions, locations diverses.</td></tr>\n    <tr><td><code>71</code></td><td>Subventions d'exploitation</td><td>Aides reçues de l'État pour compenser des prix de vente réglementés.</td></tr>\n    <tr><td><code>75</code></td><td>Autres produits</td><td>Redevances pour concessions, brevets et licences.</td></tr>\n    <tr><td><code>77</code></td><td>Revenus financiers</td><td>Intérêts perçus sur prêts (771), escomptes de règlement obtenus des fournisseurs (773), gains de change.</td></tr>\n    <tr><td><code>78 / 79</code></td><td>Transferts de charges et Reprises</td><td>Neutralisation d'une charge ou annulation de provisions devenues sans objet.</td></tr>\n  </tbody>\n</table>\n\n<h3>4. Les comptes de gestion HAO (Classe 8)</h3>\n<p>La classe 8 permet de dégager le <strong>Résultat HAO</strong> séparément du Résultat d'Exploitation et du Résultat Financier :</p>\n<ul>\n  <li><code>81</code> Valeurs comptables des cessions d'immobilisations (VCN) — Charge HAO.</li>\n  <li><code>82</code> Produits des cessions d'immobilisations (Prix de vente du matériel cédé) — Produit HAO.</li>\n  <li><code>83</code> Charges HAO constatées (pénalités fiscales, dons versés, pertes exceptionnelles sur créances).</li>\n  <li><code>84</code> Produits HAO constatés (dons reçus, dégrèvements d'impôts).</li>\n  <li><code>85</code> Dotations HAO aux amortissements et provisions.</li>\n  <li><code>86</code> Reprises HAO de dépréciations et provisions.</li>\n  <li><code>87</code> Participation des travailleurs aux bénéfices.</li>\n  <li><code>89</code> Impôt sur le résultat (BIC).</li>\n</ul>\n\n<div class=\"callout\"><div class=\"callout-title\">Règle d'or de détermination du résultat</div><p>Le résultat net de l'exercice découle de la confrontation générale :<br>\n<strong>Résultat Net = Total des Produits (Classes 7 et 8) &minus; Total des Charges (Classes 6 et 8)</strong><br>\nSi Produits &gt; Charges &rarr; <strong>Bénéfice</strong> (Compte <code>131</code> créditeur).<br>\nSi Charges &gt; Produits &rarr; <strong>Perte</strong> (Compte <code>139</code> débiteur).</p></div>",
    "recap": [
      "Les classes 6 et 7 traduisent les activités ordinaires (AO) récurrentes de l'entité.",
      "La classe 8 isole les événements hors activités ordinaires (HAO) exceptionnels.",
      "Les comptes de charges (classe 6 et charges 8) augmentent au DÉBIT.",
      "Les comptes de produits (classe 7 et produits 8) augmentent au CRÉDIT.",
      "Les escomptes obtenus des fournisseurs constituent un produit financier (compte 773).",
      "Les escomptes accordés aux clients constituent une charge financière (compte 673).",
      "La cession d'une immobilisation fait intervenir le compte 81 (VCN au débit) et le compte 82 (prix de cession au crédit).",
      "Le résultat net est la différence entre tous les produits et toutes les charges."
    ]
  },
  {
    "id": "partie-double",
    "title": "L'entité, les flux et la partie double",
    "summary": "Flux réels et financiers, analyse emplois-ressources et principe d'égalité de la partie double.",
    "key": true,
    "minutes": 9,
    "content": "<p class=\"lead\">L'activité économique d'une entité s'analyse comme un réseau continu de flux réciproques entre l'entreprise et ses partenaires. Le principe de la partie double traduit chaque flux par une égalité rigoureuse entre les emplois et les ressources.</p>\n\n<h3>1. La notion d'entité et ses partenaires</h3>\n<p>L'entité est un organisme économique indépendant exerçant une activité de production ou de distribution de biens et de services. Elle interagit constamment avec son environnement :</p>\n<ul>\n  <li>Les <strong>fournisseurs</strong> (approvisionnement en matières, marchandises et services) ;</li>\n  <li>Les <strong>clients</strong> (vente des produits et encaissement des recettes) ;</li>\n  <li>Le <strong>personnel</strong> (fourniture de travail contre rémunération) ;</li>\n  <li>Les <strong>propriétaires ou associés</strong> (apports en capital contre dividendes) ;</li>\n  <li>Les <strong>banques et prêteurs</strong> (octroi de crédits contre intérêts et remboursements) ;</li>\n  <li>L'<strong>État</strong> (infrastructures publiques contre impôts et taxes).</li>\n</ul>\n\n<h3>2. La typologie des flux économiques</h3>\n<p>Un flux représente la circulation d'une valeur au cours d'une période donnée. On distingue :</p>\n<table>\n  <thead><tr><th>Catégorie de flux</th><th>Nature</th><th>Exemples concrets</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Flux réels (ou physiques)</strong></td><td>Mouvement de biens matériels ou de prestations de services</td><td>Livraison de marchandises, achat de mobilier, consommation d'électricité, travail effectué.</td></tr>\n    <tr><td><strong>Flux financiers (ou monétaires)</strong></td><td>Mouvement de monnaie, de créances ou de dettes</td><td>Paiement en espèces, chèque bancaire, virement postal, promesse de payer à 30 jours (créance/dette).</td></tr>\n    <tr><td><strong>Flux internes</strong></td><td>Mouvement de valeur à l'intérieur même de l'entité</td><td>Transfert de matières du magasin aux ateliers de fabrication, passage de produits finis au stock.</td></tr>\n  </tbody>\n</table>\n\n<h3>3. Analyse Emploi / Ressource</h3>\n<p>Toute transaction économique comporte une double dimension indissociable :</p>\n<ul>\n  <li>La <strong>Ressource (Origine / Moyen)</strong> : d'où provient la valeur ? Quel est le moyen de financement utilisé ?</li>\n  <li>L'<strong>Emploi (Destination / Utilisation)</strong> : où va la valeur ? À quoi a servi la ressource mobilisée ?</li>\n</ul>\n\n<div class=\"example\">\n  <div class=\"example-title\">Exemple fondamental</div>\n  <p>L'entité achète des marchandises pour <strong>500 000 F CFA</strong> au comptant par chèque bancaire :</p>\n  <ul>\n    <li><strong>Ressource :</strong> Avoir en banque (Compte <code>521</code>) &rarr; 500 000 F (Crédit).</li>\n    <li><strong>Emploi :</strong> Entrée de marchandises dans le patrimoine (Compte <code>601</code>) &rarr; 500 000 F (Débit).</li>\n  </ul>\n</div>\n\n<h3>4. Le principe de la partie double</h3>\n<p>Formulé dès le XVe siècle par Luca Pacioli, le principe comptable universel de la partie double s'énonce ainsi :</p>\n<div class=\"formula\">\n  <div>Tout flux entrant (Emploi) = Tout flux sortant (Ressource)</div>\n  <div>Total des Débits = Total des Crédits</div>\n</div>\n<p>Pour chaque opération enregistrée :</p>\n<ul>\n  <li>Un ou plusieurs comptes sont <strong>débités</strong> (pour constater les emplois) ;</li>\n  <li>Un ou plusieurs comptes sont <strong>crédités</strong> (pour constater les ressources) ;</li>\n  <li>La somme des montants portés au débit est <strong>strictement égale</strong> à la somme des montants portés au crédit.</li>\n</ul>\n\n<div class=\"callout\"><div class=\"callout-title\">Règle de conversion Débit / Crédit</div><p><strong>DÉBIT = EMPLOIS</strong> (Augmentation de l'Actif ou Charges consommées).<br>\n<strong>CRÉDIT = RESSOURCES</strong> (Augmentation du Passif ou Produits réalisés).<br>\nIl n'existe aucune écriture comptable où Débit &ne; Crédit.</p></div>",
    "recap": [
      "L'entité échange des flux constants avec ses partenaires (clients, fournisseurs, banques, État).",
      "Les flux réels concernent les biens et services physiques.",
      "Les flux financiers concernent les règlements immédiats ou différés (créances/dettes).",
      "La Ressource répond à la question : D'où vient la valeur ? (Origine).",
      "L'Emploi répond à la question : Où va la valeur ? (Destination).",
      "Principe de la partie double : Total Débit = Total Crédit pour chaque transaction.",
      "Tout emploi se traduit par un Débit ; toute ressource se traduit par un Crédit."
    ]
  },
  {
    "id": "bilan",
    "title": "Le bilan",
    "summary": "Actif, passif, égalité fondamentale, capitaux propres, situation nette et équilibre financier.",
    "key": true,
    "minutes": 10,
    "content": "<p class=\"lead\">Le bilan est une photographie instantanée de la situation patrimoniale de l'entreprise à une date donnée. Il récapitule d'un côté ce que l'entité possède (Actif) et de l'autre ce qu'elle doit et d'où proviennent ses capitaux (Passif).</p>\n\n<h3>1. Définition et structure générale</h3>\n<p>Conformément au SYSCOHADA révisé, le bilan est un état financier de synthèse faisant partie des comptes annuels. Il se présente sous la forme d'un tableau à deux volets équilibrés :</p>\n<ul>\n  <li><strong>À gauche : l'ACTIF</strong> regroupe les éléments du patrimoine ayant une valeur économique positive pour l'entité (emplois de capitaux).</li>\n  <li><strong>À droite : le PASSIF</strong> décrit l'origine des fonds mis à disposition de l'entité : capitaux propres apportés par les associés ou créés par l'activité, et dettes contractées auprès de tiers.</li>\n</ul>\n\n<h3>2. La structure de l'Actif (Emplois)</h3>\n<p>L'actif est classé selon la destination des biens et leur liquidité croissante :</p>\n<table>\n  <thead><tr><th>Masse d'Actif</th><th>Composantes et caractéristiques</th><th>Exemples de comptes</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Actif immobilisé (Classe 2)</strong></td><td>Biens destinés à être utilisés de façon durable pour les besoins de l'activité (durée &gt; 1 an). Comprend :<br>&bull; Immobilisations incorporelles (logiciels, fonds de commerce) ;<br>&bull; Immobilisations corporelles (terrains, bâtiments, matériel, mobilier) ;<br>&bull; Immobilisations financières (prêts accordés, titres de participation).</td><td><code>21</code> Incorporelles<br><code>22</code> Terrains<br><code>23</code> Bâtiments<br><code>24</code> Matériel et mobilier<br><code>26</code> Titres</td></tr>\n    <tr><td><strong>Actif circulant (Classes 3 et 4)</strong></td><td>Éléments liés au cycle d'exploitation se renouvelant rapidement :<br>&bull; Stocks de marchandises (31), matières (32), produits finis (36) ;<br>&bull; Créances sur clients (411) et débiteurs divers.</td><td><code>31</code> Marchandises<br><code>32</code> Matières premières<br><code>411</code> Clients</td></tr>\n    <tr><td><strong>Trésorerie-Actif (Classe 5)</strong></td><td>Disponibilités financières liquides immédiatement mobilisables.</td><td><code>50</code> Titres de placement<br><code>521</code> Banques<br><code>531</code> Chèques postaux<br><code>571</code> Caisse</td></tr>\n  </tbody>\n</table>\n\n<h3>3. La structure du Passif (Ressources)</h3>\n<p>Le passif est ordonné selon son exigibilité croissante :</p>\n<table>\n  <thead><tr><th>Masse de Passif</th><th>Composantes et caractéristiques</th><th>Exemples de comptes</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Ressources stables / Capitaux propres (Classe 1)</strong></td><td>Fonds propres appartenant définitivement à l'entité et dettes à long et moyen terme :<br>&bull; Capital social apporté par les associés (101) ;<br>&bull; Réserves accumulées (11) ;<br>&bull; Résultat net de l'exercice (13) ;<br>&bull; Emprunts et dettes financières auprès des banques à plus d'un an (16).</td><td><code>101</code> Capital social<br><code>11</code> Réserves<br><code>13</code> Résultat net<br><code>16</code> Emprunts</td></tr>\n    <tr><td><strong>Passif circulant (Classe 4)</strong></td><td>Dettes nées du cycle d'exploitation exigibles à court terme (&lt; 1 an) :<br>&bull; Dettes fournisseurs (401) ;<br>&bull; Dettes fiscales (44) et sociales (42, 43).</td><td><code>401</code> Fournisseurs<br><code>422</code> Salaires dus<br><code>4441</code> TVA due</td></tr>\n    <tr><td><strong>Trésorerie-Passif (Classe 5)</strong></td><td>Avances de trésorerie bancaire à très court terme (découverts autorisés, crédits de trésorerie).</td><td><code>561</code> Crédits de trésorerie<br><code>521</code> Solde créditeur banque</td></tr>\n  </tbody>\n</table>\n\n<h3>4. L'égalité fondamentale du bilan</h3>\n<div class=\"formula\">\n  <div>TOTAL ACTIF = TOTAL PASSIF</div>\n  <div>Actif Immobilisé + Actif Circulant + Trésorerie-Actif = Ressources Stables + Passif Circulant + Trésorerie-Passif</div>\n</div>\n\n<h3>5. La situation nette et le résultat</h3>\n<p>La <strong>Situation Nette (SN)</strong> représente la richesse propre véritable des propriétaires de l'entreprise :</p>\n<div class=\"formula\">\n  <div>Situation Nette = Actif Réel &minus; Dettes exigibles = Capitaux Propres</div>\n</div>\n<p>Le résultat de l'exercice s'intègre au passif parmi les capitaux propres pour équilibrer le bilan :</p>\n<ul>\n  <li>Si l'exercice est bénéficiaire : le résultat s'inscrit au compte <code>131</code> avec un signe <strong>positif (+)</strong> au passif.</li>\n  <li>Si l'exercice est déficitaire : le résultat s'inscrit au compte <code>139</code> avec un signe <strong>négatif (&minus;)</strong> au passif, venant diminuer les capitaux propres.</li>\n</ul>\n\n<div class=\"example\">\n  <div class=\"example-title\">Cas réel du cours : Bilan entreprise AZERD au 31/12/2000</div>\n  <p>L'inventaire donne : Terrains 1 500 000, Mobilier 5 000 000, Matériel de transport 4 200 000, Marchandises 950 000, Clients 1 200 000, Banque 800 000, Chèques postaux 750 000, Caisse 350 000. Passif : Capital 15 000 000, Résultat 2 500 000, Emprunt 5 000 000, Fournisseurs 250 000.<br>\n  Le total du Passif est de <strong>22 750 000 F CFA</strong>.<br>\n  Par équilibre Actif = Passif, le poste Bâtiment inconnu se déduit :<br>\n  <strong>Bâtiment = 22 750 000 &minus; 14 750 000 = 8 000 000 F CFA</strong>.</p>\n</div>",
    "recap": [
      "Le bilan est la photographie du patrimoine de l'entreprise à une date précise.",
      "L'Actif (à gauche) regroupe les emplois de biens et de créances.",
      "Le Passif (à droite) regroupe les ressources : capitaux propres et dettes.",
      "L'équilibre fondamental est permanent : Total Actif = Total Passif.",
      "L'actif se divise en 3 masses : Actif immobilisé, Actif circulant, Trésorerie-Actif.",
      "Le passif se divise en 3 masses : Ressources stables, Passif circulant, Trésorerie-Passif.",
      "Situation Nette = Actif Réel - Passif Exigible (Dettes) = Capitaux Propres.",
      "Le résultat net (bénéfice ou perte) s'inscrit au passif du bilan dans les capitaux propres."
    ]
  },
  {
    "id": "compte",
    "title": "Le compte et son fonctionnement",
    "summary": "Imputation, solde, arrêt de compte, tracés (T, colonnes séparées, colonnes mariées) et règles débit/crédit.",
    "key": false,
    "minutes": 9,
    "content": "<p class=\"lead\">Le compte est l'unité de base du traitement comptable. C'est un tableau ouvert pour chaque élément du patrimoine ou de l'activité, permettant d'enregistrer de façon continue les augmentations et les diminutions subies.</p>\n\n<h3>1. Terminologie fondamentale du compte</h3>\n<table>\n  <thead><tr><th>Terme</th><th>Définition technique</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Imputer</strong></td><td>Inscrire un montant au débit ou au crédit d'un compte donné.</td></tr>\n    <tr><td><strong>Débiter un compte</strong></td><td>Porter un montant dans la colonne Débit (à gauche).</td></tr>\n    <tr><td><strong>Créditer un compte</strong></td><td>Porter un montant dans la colonne Crédit (à droite).</td></tr>\n    <tr><td><strong>Total Débit (TD) & Total Crédit (TC)</strong></td><td>Somme arithmétique de toutes les valeurs enregistrées respectivement au débit et au crédit.</td></tr>\n    <tr><td><strong>Solde d'un compte</strong></td><td>Différence entre le Total Débit et le Total Crédit (TD &minus; TC) :<br>&bull; Si TD &gt; TC : <strong>Solde Débiteur (SD)</strong> ;<br>&bull; Si TC &gt; TD : <strong>Solde Créditeur (SC)</strong> ;<br>&bull; Si TD = TC : Le compte est <strong>soldé</strong> (solde nul).</td></tr>\n    <tr><td><strong>Arrêter un compte</strong></td><td>Calculer son solde et inscrire ce solde du côté le plus faible pour équilibrer artificiellement TD et TC en fin de période.</td></tr>\n    <tr><td><strong>Réouvrir un compte</strong></td><td>Inscrire le solde à nouveau (RAN) de départ du côté normal (SD au débit, SC au crédit) pour la nouvelle période.</td></tr>\n  </tbody>\n</table>\n\n<h3>2. Les tracés de compte</h3>\n<p>Il existe plusieurs manières de matérialiser un compte :</p>\n<ul>\n  <li><strong>Le compte schématique en T</strong> : outil pédagogique rapide présentant une barre horizontale et une séparation centrale (Débit à gauche, Crédit à droite).</li>\n  <li><strong>Le tracé à colonnes séparées (classique)</strong> : sépare nettement la page en deux moitiés indépendantes (Débit : Date, Libellé, Montant | Crédit : Date, Libellé, Montant).</li>\n  <li><strong>Le tracé à colonnes mariées avec colonnes de soldes</strong> : regroupe les dates et libellés dans un tronc commun et fait apparaître après chaque opération le nouveau solde débiteur ou créditeur. C'est le tracé universel des relevés bancaires modernes.</li>\n</ul>\n\n<h3>3. Règles d'imputation Débit / Crédit selon la nature</h3>\n<table>\n  <thead><tr><th>Nature du compte</th><th>Sens d'augmentation</th><th>Sens de diminution</th><th>Solde normal</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Comptes d'Actif (Classes 2, 3, 4 débiteur, 5 actif)</strong></td><td>Augmentent au <strong>DÉBIT</strong></td><td>Diminuent au <strong>CRÉDIT</strong></td><td>Débiteur</td></tr>\n    <tr><td><strong>Comptes de Passif (Classes 1, 4 créditeur, 5 passif)</strong></td><td>Augmentent au <strong>CRÉDIT</strong></td><td>Diminuent au <strong>DÉBIT</strong></td><td>Créditeur</td></tr>\n    <tr><td><strong>Comptes de Charges (Classe 6 et Charges 8)</strong></td><td>Augmentent au <strong>DÉBIT</strong></td><td>Diminuent au <strong>CRÉDIT</strong></td><td>Débiteur</td></tr>\n    <tr><td><strong>Comptes de Produits (Classe 7 et Produits 8)</strong></td><td>Augmentent au <strong>CRÉDIT</strong></td><td>Diminuent au <strong>DÉBIT</strong></td><td>Créditeur</td></tr>\n  </tbody>\n</table>\n\n<div class=\"callout\"><div class=\"callout-title\">Règle de synthèse</div><p>Comptes d'Emplois (Actif et Charges) : <strong>+ au Débit / &minus; au Crédit</strong> &rarr; Solde débiteur.<br>\nComptes de Ressources (Passif et Produits) : <strong>&minus; au Débit / + au Crédit</strong> &rarr; Solde créditeur.</p></div>",
    "recap": [
      "Le compte récapitule les mouvements concernant un élément homogène.",
      "Débiter = inscrire à gauche. Créditer = inscrire à droite.",
      "Solde = Total Débit - Total Crédit.",
      "Un compte d'actif ou de charge augmente au Débit et a un solde normal débiteur.",
      "Un compte de passif ou de produit augmente au Crédit et a un solde normal créditeur.",
      "Arrêter un compte consiste à inscrire son solde du côté opposé pour équilibrer les totaux.",
      "Les tracés courants sont le compte en T, les colonnes séparées et les colonnes mariées avec soldes."
    ]
  },
  {
    "id": "facture",
    "title": "La facture, les réductions et les achats / ventes",
    "summary": "Factures de doit et d'avoir, réductions commerciales (3R) et financières (escompte), cascade et comptabilisation.",
    "key": true,
    "minutes": 10,
    "content": "<p class=\"lead\">La facture est la pièce justificative comptable fondamentale constatant l'accord de vente ou de prestation entre le vendeur et l'acheteur. Elle formalise les réductions commerciales et financières et fixe le montant net exigible.</p>\n\n<h3>1. Facture de Doit et Facture d'Avoir</h3>\n<table>\n  <thead><tr><th>Facture de Doit</th><th>Facture d'Avoir (Note de crédit)</th></tr></thead>\n  <tbody>\n    <tr><td>Établie lors de la vente initiale par le fournisseur.</td><td>Établie postérieurement par le fournisseur pour régulariser une situation.</td></tr>\n    <tr><td>Constate ce que le client <strong>doit</strong> payer.</td><td>Constate ce que le fournisseur <strong>doit déduire</strong> de sa créance (ou rembourser).</td></tr>\n    <tr><td>Fait ressortir le <strong>Net à Payer (NAP)</strong>.</td><td>Fait ressortir le <strong>Net à Déduire (ou Net à votre crédit)</strong>.</td></tr>\n    <tr><td>Déclenchée par l'expédition ou la livraison des marchandises.</td><td>Déclenchée par : un retour de marchandises non conformes, ou une réduction commerciale accordée hors facture de doit.</td></tr>\n  </tbody>\n</table>\n\n<h3>2. La hiérarchie des réductions sur facture</h3>\n<h4>A. Les réductions à caractère commercial (les \"3 R\")</h4>\n<ul>\n  <li><strong>Le Rabais :</strong> réduction accordée pour défaut de conformité, retard de livraison ou vice de fabrication constaté sur les biens livrés.</li>\n  <li><strong>La Remise :</strong> réduction accordée en considération de l'importance du volume acheté ou de la qualité du client (fidélité, profession).</li>\n  <li><strong>La Ristourne :</strong> réduction globale périodique (annuelle ou trimestrielle) calculée sur le volume d'affaires total réalisé avec le client.</li>\n</ul>\n\n<h4>B. La réduction à caractère financier : l'Escompte de règlement</h4>\n<p>L'<strong>escompte</strong> est une réduction consentie au client qui règle sa dette par anticipation (au comptant ou avant l'échéance normale). C'est un coût financier pour le vendeur (charge financière <code>673</code>) et un gain financier pour l'acheteur (produit financier <code>773</code>).</p>\n\n<h3>3. Ordre logique et cascade de calcul</h3>\n<div class=\"formula steps\">\n  <div><span>Montant brut des marchandises (MB)</span></div>\n  <div class=\"minus\"><span>&minus; Rabais (% ou montant fixe)</span></div>\n  <div class=\"minus\"><span>&minus; Remise 1 (% sur la base résiduelle)</span></div>\n  <div class=\"minus\"><span>&minus; Remise 2 (% en cascade)</span></div>\n  <div class=\"total\"><span>= Net commercial (NC)</span></div>\n  <div class=\"minus\"><span>&minus; Escompte financier (% calculé sur le Net commercial)</span></div>\n  <div class=\"total\"><span>= Net financier (NF)</span></div>\n  <div class=\"plus\"><span>+ Port et frais accessoires (si facturés)</span></div>\n  <div class=\"total\"><span>= Total Hors Taxes (HT)</span></div>\n  <div class=\"plus\"><span>+ TVA 18 %</span></div>\n  <div class=\"total strong\"><span>= Net à payer TTC (NAP)</span></div>\n</div>\n\n<div class=\"callout warn\"><div class=\"callout-title\">Règle d'or de comptabilisation des 3 R</div><p>Les réductions commerciales (3 R) figurant <strong>sur la facture de doit</strong> ne sont <strong>JAMAIS enregistrées</strong> dans un compte distinct. Les achats (compte <code>601</code>) et les ventes (compte <code>701</code>) sont inscrits directement pour leur <strong>Net commercial</strong>.<br>\nEn revanche, l'<strong>escompte de règlement</strong> est toujours comptabilisé (en <code>673</code> chez le fournisseur, en <code>773</code> chez le client).</p></div>\n\n<h3>4. Les schémas d'écritures de la facture de doit</h3>\n<p>Pour une vente comportant Net commercial (NC), Escompte (ESC), Port facturé (PORT), TVA et Net à payer (NAP) :</p>\n<table class=\"journal\">\n  <thead><tr><th>Chez l'Acheteur (Client)</th><th>Débit</th><th>Crédit</th></tr></thead>\n  <tbody>\n    <tr><td><code>601</code> Achats de marchandises (pour le Net commercial)</td><td>NC</td><td></td></tr>\n    <tr><td><code>6015</code> Frais sur achats / Port</td><td>PORT</td><td></td></tr>\n    <tr><td><code>445</code> État, TVA récupérable</td><td>TVA</td><td></td></tr>\n    <tr><td><code>401</code> Fournisseurs (dette totale TTC)</td><td></td><td>NAP</td></tr>\n    <tr><td><code>773</code> Escomptes obtenus</td><td></td><td>ESC</td></tr>\n  </tbody>\n</table>\n\n<table class=\"journal\">\n  <thead><tr><th>Chez le Vendeur (Fournisseur)</th><th>Débit</th><th>Crédit</th></tr></thead>\n  <tbody>\n    <tr><td><code>411</code> Clients (créance totale TTC)</td><td>NAP</td><td></td></tr>\n    <tr><td><code>673</code> Escomptes accordés</td><td>ESC</td><td></td></tr>\n    <tr><td><code>701</code> Ventes de marchandises (pour le Net commercial)</td><td></td><td>NC</td></tr>\n    <tr><td><code>7071</code> Ports facturés et frais accessoires</td><td></td><td>PORT</td></tr>\n    <tr><td><code>443</code> État, TVA facturée</td><td></td><td>TVA</td></tr>\n  </tbody>\n</table>\n\n<h3>5. La facture d'avoir (Retours de marchandises & 3R hors facture)</h3>\n<p>Lors d'un retour de marchandises ou de l'accord d'une réduction hors facture de doit, le fournisseur émet une facture d'avoir :</p>\n<ul>\n  <li><strong>Pour retour de marchandises :</strong> l'écriture initiale est purement et simplement passée en sens inverse (contre-passation).</li>\n  <li><strong>Pour 3 R accordés hors facture :</strong> on utilise les comptes spécifiques de déduction : <code>6019</code> Rabais, remises et ristournes obtenus chez le client, et <code>7019</code> Rabais, remises et ristournes accordés chez le fournisseur.</li>\n</ul>",
    "recap": [
      "La facture de doit constate une vente et dégage le Net à Payer (NAP).",
      "La facture d'avoir constate une réduction ou un retour et dégage le Net à Déduire.",
      "Les réductions commerciales (Rabais, Remise, Ristourne) se calculent en cascade successive.",
      "Le Net commercial sert de base de calcul à l'escompte de règlement financier.",
      "Les 3R sur facture de doit ne se comptabilisent pas : 601 et 701 s'enregistrent au Net commercial.",
      "L'escompte se comptabilise toujours : 673 Escomptes accordés (vendeur) et 773 Escomptes obtenus (acheteur).",
      "Les retours de marchandises font l'objet d'une contre-passation exacte de la facture initiale.",
      "Les 3R accordés hors facture s'enregistrent en 6019 chez l'acheteur et 7019 chez le vendeur."
    ]
  },
  {
    "id": "transport",
    "title": "Les frais de transport",
    "summary": "Port forfaitaire, port payé (débours), clauses franco, comptabilisation client et fournisseur.",
    "key": false,
    "minutes": 8,
    "content": "<p class=\"lead\">L'acheminement des marchandises vendues entraîne des frais de transport dont le traitement comptable diffère selon qu'il incombe au fournisseur ou au client, et selon les moyens mis en œuvre.</p>\n\n<h3>1. Les clauses juridiques de livraison</h3>\n<ul>\n  <li><strong>Vente Franco de port (départ fournisseur) :</strong> les frais de transport sont à la charge intégrale du fournisseur jusqu'au lieu convenu. Aucun frais de port n'est réclamé au client sur la facture.</li>\n  <li><strong>Vente Port dû (départ usine / magasin) :</strong> les frais de transport incombent au client, qui paie directement le transporteur à la livraison.</li>\n  <li><strong>Vente Port facturé (forfaitaire) :</strong> le fournisseur assure lui-même le transport avec son propre matériel et facture un service accessoire forfaitaire au client.</li>\n  <li><strong>Vente Port payé / récupéré (débours) :</strong> le fournisseur paie d'avance un transporteur tiers pour le compte du client et récupère exactement cette somme sur la facture de vente.</li>\n</ul>\n\n<h3>2. Traitement du Port Forfaitaire (moyens propres du vendeur)</h3>\n<p>Le transport constitue une vente accessoire de service :</p>\n<ul>\n  <li>Chez le fournisseur : crédité au compte <code>7071</code> Ports, emballages perdus et autres frais facturés.</li>\n  <li>Chez le client : débité au compte <code>6015</code> Frais sur achats (ou incorporé directement au compte <code>601</code>).</li>\n</ul>\n\n<h3>3. Traitement du Port Récupéré (Débours / Port payé pour compte de tiers)</h3>\n<p>Le fournisseur n'est qu'un intermédiaire financier :</p>\n<ul>\n  <li>Au paiement initial du transporteur par le vendeur : Débit <code>612</code> Transports sur ventes (ou <code>419</code> Tiers) / Crédit Banque ou Caisse.</li>\n  <li>Sur la facture adressée au client : récupération du débours au compte <code>7072</code> ou contre-passation du compte <code>612</code>.</li>\n  <li>Chez le client : débit du compte <code>611</code> Transports sur achats (ou <code>6015</code>) / Crédit Fournisseur.</li>\n</ul>\n\n<h3>4. Incidences de la TVA et de l'escompte</h3>\n<div class=\"callout\"><div class=\"callout-title\">Règles fondamentales</div><p>1. <strong>TVA sur les transports :</strong> Les frais de port facturés sont passibles de la TVA au taux de droit commun (18 % au Bénin), tout comme les marchandises.<br>\n2. <strong>Assiette de l'escompte :</strong> L'escompte financier ne rémunère que le paiement anticipé des marchandises : il se calcule sur le Net commercial <strong>avant</strong> l'addition des frais de port.</p></div>",
    "recap": [
      "Franco de port signifie que le transport est intégralement pris en charge par le fournisseur.",
      "Le port forfaitaire correspond au transport assuré par les moyens propres du vendeur (compte 7071).",
      "Le port débours (ou port payé) correspond au remboursement exact d'un transporteur tiers payé d'avance.",
      "Chez le client, le port s'enregistre au compte 6015 Frais sur achats ou 611 Transports sur achats.",
      "L'escompte financier de règlement se calcule sur le Net commercial, pas sur le port.",
      "Les frais de port facturés sont soumis à la TVA au taux normal de 18 %."
    ]
  },
  {
    "id": "tva",
    "title": "La TVA",
    "summary": "Principes, calcul au taux béninois de 18 %, TVA facturée, TVA déductible et liquidation mensuelle.",
    "key": true,
    "minutes": 8,
    "content": "<p class=\"lead\">La Taxe sur la Valeur Ajoutée (TVA) est un impôt indirect général sur la consommation supporté par le consommateur final et collecté à chaque stade par les entreprises assujetties pour le compte de l'État.</p>\n\n<h3>1. Mécanisme de collecte et de déduction</h3>\n<p>L'entreprise assujettie joue le rôle d'intermédiaire collecteur pour l'administration fiscale :</p>\n<ul>\n  <li>Lors des ventes : elle facture la <strong>TVA collectée (ou facturée)</strong> au compte <code>443</code> (dette envers le Trésor public).</li>\n  <li>Lors des achats professionnels : elle récupère la <strong>TVA déductible</strong> au compte <code>445</code> (créance sur le Trésor public).</li>\n  <li>À la fin de chaque mois : elle liquide la taxe en compensant TVA facturée et TVA récupérable.</li>\n</ul>\n\n<h3>2. Taux et assiette au Bénin</h3>\n<ul>\n  <li><strong>Taux normal en vigueur au Bénin :</strong> <strong>18 %</strong>.</li>\n  <li><strong>Assiette de calcul sur facture :</strong> la TVA s'applique sur le <em>Net financier</em> majoré des frais accessoires (ports, emballages perdus) :<br>\n  <strong>Base HT = Net financier + Frais accessoires HT</strong><br>\n  <strong>TVA = Base HT &times; 18 %</strong></li>\n</ul>\n\n<h3>3. Déclaration mensuelle et liquidation (Compte 444)</h3>\n<p>À la clôture de chaque période mensuelle :</p>\n\n<h4>Cas A : TVA due (TVA facturée &gt; TVA récupérable)</h4>\n<p>L'entreprise a collecté plus d'impôt qu'elle n'en a payé à ses fournisseurs : elle doit verser la différence à l'État au plus tard le 15 du mois suivant.</p>\n<table class=\"journal\">\n  <thead><tr><th>Liquidation — Constatation de la TVA due</th><th>Débit</th><th>Crédit</th></tr></thead>\n  <tbody>\n    <tr><td><code>443</code> État, TVA facturée (pour solde)</td><td>Total facturé</td><td></td></tr>\n    <tr><td><code>445</code> État, TVA récupérable (pour solde)</td><td></td><td>Total récupérable</td></tr>\n    <tr><td><code>4441</code> État, TVA due (solde à payer au fisc)</td><td></td><td>Différence</td></tr>\n  </tbody>\n</table>\n<p>Au règlement au Trésor public : <strong>Débit 4441 / Crédit 521 (Banque)</strong>.</p>\n\n<h4>Cas B : Crédit de TVA (TVA récupérable &gt; TVA facturée)</h4>\n<p>L'entreprise a payé plus de TVA qu'elle n'en a collectée (investissements importants, stocks) : elle détient une créance sur l'État à reporter sur les déclarations suivantes.</p>\n<table class=\"journal\">\n  <thead><tr><th>Liquidation — Constatation du Crédit de TVA</th><th>Débit</th><th>Crédit</th></tr></thead>\n  <tbody>\n    <tr><td><code>443</code> État, TVA facturée (pour solde)</td><td>Total facturé</td><td></td></tr>\n    <tr><td><code>4449</code> État, crédit de TVA à reporter (créance)</td><td>Différence</td><td></td></tr>\n    <tr><td><code>445</code> État, TVA récupérable (pour solde)</td><td></td><td>Total récupérable</td></tr>\n  </tbody>\n</table>\n\n<div class=\"callout\"><div class=\"callout-title\">À retenir</div><p>La TVA est un impôt <strong>neutre</strong> pour l'entreprise assujettie : elle ne constitue ni une charge ni un produit d'exploitation direct. Seul le consommateur final supporte définitivement la charge de la taxe.</p></div>",
    "recap": [
      "La TVA est un impôt indirect supporté par le consommateur final et neutre pour l'entreprise.",
      "Taux normal au Bénin : 18 % sur le montant hors taxe.",
      "Compte 443 État, TVA facturée : dette envers l'État lors des ventes.",
      "Compte 445 État, TVA récupérable : créance sur l'État lors des achats professionnels.",
      "Si TVA facturée > TVA récupérable : TVA due (compte 4441 crédité).",
      "Si TVA récupérable > TVA facturée : Crédit de TVA à reporter (compte 4449 débité)."
    ]
  },
  {
    "id": "emballages",
    "title": "Les emballages commerciaux",
    "summary": "Emballages perdus et récupérables, consignation, déconsignation (boni/mali) et conservation.",
    "key": false,
    "minutes": 8,
    "content": "<div class=\"callout warn\"><div class=\"callout-title\">Chapitre complémentaire au programme</div><p>Ce chapitre figure au programme officiel de L1 Informatique mais n'était pas détaillé dans le polycopié scanné. Il a été fidèlement rédigé selon le référentiel du SYSCOHADA révisé.</p></div>\n\n<p class=\"lead\">Les emballages sont des objets destinés à contenir, protéger, conditionner et faciliter la manutention des marchandises. Leur traitement comptable dépend de leur nature (perdus ou récupérables) et du recours à la consignation.</p>\n\n<h3>1. Classification des emballages</h3>\n<table>\n  <thead><tr><th>Catégorie</th><th>Définition et régime</th><th>Comptabilisation</th></tr></thead>\n  <tbody>\n    <tr><td><strong>Emballages perdus (irrécupérables)</strong></td><td>Emballages vendus avec la marchandise sans restitution possible (cartons jetables, sachets, canettes).</td><td>Inclus dans le prix de vente ou facturés en produits accessoires (<code>7071</code>). Chez le client : charge d'achat (<code>601</code> ou <code>6043</code>).</td></tr>\n    <tr><td><strong>Emballages récupérables identifiables</strong></td><td>Grands contenants durables de valeur unitaire élevée (citernes, conteneurs spéciaux, fûts métalliques numérotés).</td><td>Considérés comme des immobilisations corporelles amortissables (Compte <code>243</code> Matériel d'emballage récupérable).</td></tr>\n    <tr><td><strong>Emballages récupérables non identifiables</strong></td><td>Objets banalisés prêtés ou consignés aux clients (bouteilles en verre standard, palettes, casiers).</td><td>Enregistrés en stocks (Compte <code>335</code> Emballages récupérables) et faisant l'objet de consignation.</td></tr>\n  </tbody>\n</table>\n\n<h3>2. Le mécanisme de la consignation</h3>\n<p>La <strong>consignation</strong> est un prêt d'emballages assorti d'un dépôt de garantie financier versé par le client :</p>\n<ul>\n  <li>Ce n'est <strong>pas une vente</strong> : aucune TVA n'est exigible au moment de la consignation.</li>\n  <li>Chez le <strong>fournisseur</strong> : il a une dette conditionnelle envers le client. On crédite le compte <code>4194</code> Clients, dettes pour emballages et matériels consignés.</li>\n  <li>Chez le <strong>client</strong> : il détient une créance conditionnelle sur le fournisseur. On débite le compte <code>4094</code> Fournisseurs, créances pour emballages et matériels à rendre.</li>\n</ul>\n\n<h3>3. La déconsignation (restitution des emballages)</h3>\n<p>Trois situations peuvent se présenter lors du retour :</p>\n<ul>\n  <li><strong>1er cas : Reprise au prix de consignation (intégrale)</strong><br>\n  Le client restitue les emballages en bon état dans les délais convenus. Les écritures initiales sont exactement contre-passées (Débit 4194 / Crédit 411 chez le vendeur).</li>\n  <li><strong>2e cas : Reprise à un prix inférieur (Mali pour le client / Boni pour le vendeur)</strong><br>\n  Le fournisseur retient une somme pour dépréciation ou usure. Cette différence constitue un service de location facturé soumis à la TVA (<code>7074</code> Bonis sur reprise d'emballages chez le vendeur, <code>6224</code> Malis sur emballages chez le client).</li>\n  <li><strong>3e cas : Non-restitution (Emballages conservés ou détruits par le client)</strong><br>\n  La consignation se transforme en vente ferme d'emballages perdus, avec application de la TVA au taux de 18 %.</li>\n</ul>",
    "recap": [
      "Les emballages perdus sont consommés avec la marchandise (achats stockés ou non).",
      "Les emballages récupérables de valeur durable sont immobilisés (compte 243).",
      "La consignation est un prêt garanti par un dépôt financier non assujetti à la TVA.",
      "Compte 4194 (Fournisseur) : dettes pour emballages consignés aux clients.",
      "Compte 4094 (Client) : créances pour emballages à rendre aux fournisseurs.",
      "Une reprise à un prix inférieur génère un Boni (produit 7074) pour le vendeur et un Mali (charge 6224) pour l'acheteur."
    ]
  },
  {
    "id": "effets",
    "title": "Les effets de commerce",
    "summary": "Lettre de change, billet à ordre, création, encaissement, endossement et négociation à l'escompte.",
    "key": false,
    "minutes": 8,
    "content": "<div class=\"callout warn\"><div class=\"callout-title\">Chapitre complémentaire au programme</div><p>Ce chapitre figure au programme officiel de L1 Informatique mais n'était pas détaillé dans le polycopié scanné. Il a été fidèlement rédigé selon le référentiel du SYSCOHADA révisé.</p></div>\n\n<p class=\"lead\">L'effet de commerce est un titre négociable représentant une créance de somme d'argent payable à court terme. Il constitue à la fois un instrument de paiement et un instrument de crédit fondamental du commerce ouest-africain.</p>\n\n<h3>1. Les deux formes usuelles d'effets de commerce</h3>\n<table>\n  <thead><tr><th>Instrument</th><th>Créateur / Émetteur</th><th>Mécanisme</th></tr></thead>\n  <tbody>\n    <tr><td><strong>La Lettre de Change (ou Traite)</strong></td><td>Créée par le <strong>Fournisseur (Tireur)</strong></td><td>Ordre écrit donné par le tireur à son client débiteur (Tiré) de payer une somme fixée à une date convenue (l'échéance) à un bénéficiaire (souvent le tireur lui-même).</td></tr>\n    <tr><td><strong>Le Billet à Ordre</strong></td><td>Créé par le <strong>Client (Souscripteur)</strong></td><td>Promesse écrite souscrite par le débiteur de payer une somme déterminée à une date précise à l'ordre de son créancier (Bénéficiaire).</td></tr>\n  </tbody>\n</table>\n\n<h3>2. Création et acceptation de l'effet</h3>\n<p>À la réception de la traite acceptée ou du billet à ordre souscrit :</p>\n<ul>\n  <li>Chez le bénéficiaire (fournisseur) : on transforme la créance ordinaire en créance cambiaire garantie :<br>\n  <strong>Débit <code>412</code> Clients, effets à recevoir / Crédit <code>411</code> Clients</strong>.</li>\n  <li>Chez le tiré (client) : on transforme la dette ordinaire en dette cambiaire :<br>\n  <strong>Débit <code>401</code> Fournisseurs / Crédit <code>402</code> Fournisseurs, effets à payer</strong>.</li>\n</ul>\n\n<h3>3. Utilisation de l'effet par le créancier</h3>\n<p>Le détenteur d'un effet dispose de trois possibilités d'action :</p>\n<ol>\n  <li><strong>Conservation jusqu'à l'échéance :</strong> l'effet est remis directement à l'encaissement quelques jours avant l'échéance (compte <code>511</code> ou <code>512</code> Effets à l'encaissement).</li>\n  <li><strong>Négociation à l'escompte bancaire :</strong> pour obtenir des liquidités immédiates sans attendre l'échéance, l'entreprise remet l'effet à sa banque à l'escompte. La banque verse le net sous déduction des <em>agios</em> (intérêts d'escompte en <code>675</code> et commissions de service en <code>631</code>).</li>\n  <li><strong>Endossement à l'ordre d'un tiers :</strong> l'effet est transmis à un autre fournisseur en règlement d'une dette propre.</li>\n</ol>\n\n<div class=\"callout\"><div class=\"callout-title\">À retenir</div><p>Le compte <code>412</code> (Effets à recevoir) est un actif circulant.<br>\nLe compte <code>402</code> (Effets à payer) est un passif circulant.<br>\nL'escompte d'effet de commerce fait supporter à l'entreprise des charges financières (intérêts d'escompte) inscrites en classe 6.</p></div>",
    "recap": [
      "La lettre de change est tirée par le fournisseur ; le billet à ordre est souscrit par le client.",
      "À l'acceptation : Débit 412 Clients, effets à recevoir (Actif) / Crédit 411 Clients.",
      "Chez le client : Débit 401 Fournisseurs / Crédit 402 Fournisseurs, effets à payer (Passif).",
      "L'effet peut être gardé jusqu'à l'échéance, endossé à un tiers ou remis à l'escompte bancaire.",
      "L'escompte d'effet génère des agios comprenant des intérêts bancaires (compte 675) et des commissions de service (compte 631)."
    ]
  }
];

/* ── Plan des comptes enrichi (SYSCOHADA révisé) ───────────── */
COURSE.accounts = [
  {
    "n": "101",
    "l": "Capital social",
    "c": 1
  },
  {
    "n": "102",
    "l": "Capital par dotation",
    "c": 1
  },
  {
    "n": "103",
    "l": "Capital personnel",
    "c": 1
  },
  {
    "n": "111",
    "l": "Réserve légale",
    "c": 1
  },
  {
    "n": "112",
    "l": "Réserves statutaires ou contractuelles",
    "c": 1
  },
  {
    "n": "118",
    "l": "Autres réserves",
    "c": 1
  },
  {
    "n": "121",
    "l": "Report à nouveau créditeur",
    "c": 1
  },
  {
    "n": "129",
    "l": "Report à nouveau débiteur",
    "c": 1
  },
  {
    "n": "131",
    "l": "Résultat net : Bénéfice",
    "c": 1
  },
  {
    "n": "139",
    "l": "Résultat net : Perte",
    "c": 1
  },
  {
    "n": "161",
    "l": "Emprunts obligataires",
    "c": 1
  },
  {
    "n": "162",
    "l": "Emprunts et dettes auprès des établissements de crédit",
    "c": 1
  },
  {
    "n": "191",
    "l": "Provisions pour litiges",
    "c": 1
  },
  {
    "n": "211",
    "l": "Frais de développement",
    "c": 1
  },
  {
    "n": "212",
    "l": "Brevets, licences, concessions et droits similaires",
    "c": 1
  },
  {
    "n": "215",
    "l": "Fonds commercial",
    "c": 1
  },
  {
    "n": "221",
    "l": "Terrains agricoles et forestiers",
    "c": 1
  },
  {
    "n": "222",
    "l": "Terrains nus",
    "c": 1
  },
  {
    "n": "223",
    "l": "Terrains bâtis",
    "c": 1
  },
  {
    "n": "231",
    "l": "Bâtiments industriels, agricoles, administratifs et commerciaux",
    "c": 2
  },
  {
    "n": "232",
    "l": "Bâtiments affectés au logement du personnel",
    "c": 2
  },
  {
    "n": "241",
    "l": "Matériel et outillage industriel et commercial",
    "c": 2
  },
  {
    "n": "244",
    "l": "Matériel et mobilier de bureau",
    "c": 2
  },
  {
    "n": "245",
    "l": "Matériel de transport",
    "c": 2
  },
  {
    "n": "243",
    "l": "Matériel d'emballage récupérable et identifiable",
    "c": 2
  },
  {
    "n": "261",
    "l": "Titres de participation",
    "c": 2
  },
  {
    "n": "271",
    "l": "Prêts accordés",
    "c": 2
  },
  {
    "n": "275",
    "l": "Dépôts et cautionnements versés",
    "c": 2
  },
  {
    "n": "281",
    "l": "Amortissements des immobilisations incorporelles",
    "c": 2
  },
  {
    "n": "283",
    "l": "Amortissements des bâtiments",
    "c": 2
  },
  {
    "n": "284",
    "l": "Amortissements du matériel",
    "c": 2
  },
  {
    "n": "2845",
    "l": "Amortissements du matériel de transport",
    "c": 2
  },
  {
    "n": "311",
    "l": "Marchandises A",
    "c": 3
  },
  {
    "n": "312",
    "l": "Marchandises B",
    "c": 3
  },
  {
    "n": "321",
    "l": "Matières premières",
    "c": 3
  },
  {
    "n": "335",
    "l": "Emballages récupérables non identifiables",
    "c": 3
  },
  {
    "n": "361",
    "l": "Produits finis",
    "c": 3
  },
  {
    "n": "391",
    "l": "Dépréciations des stocks de marchandises",
    "c": 3
  },
  {
    "n": "401",
    "l": "Fournisseurs, dettes en compte",
    "c": 4
  },
  {
    "n": "4011",
    "l": "Fournisseurs d'exploitation",
    "c": 4
  },
  {
    "n": "402",
    "l": "Fournisseurs, effets à payer",
    "c": 4
  },
  {
    "n": "4091",
    "l": "Fournisseurs, avances et acomptes versés",
    "c": 4
  },
  {
    "n": "4094",
    "l": "Fournisseurs, créances pour emballages et matériels à rendre",
    "c": 4
  },
  {
    "n": "411",
    "l": "Clients",
    "c": 4
  },
  {
    "n": "4111",
    "l": "Clients ordinaires",
    "c": 4
  },
  {
    "n": "412",
    "l": "Clients, effets à recevoir",
    "c": 4
  },
  {
    "n": "4191",
    "l": "Clients, avances et acomptes reçus",
    "c": 4
  },
  {
    "n": "4194",
    "l": "Clients, dettes pour emballages et matériels consignés",
    "c": 4
  },
  {
    "n": "422",
    "l": "Personnel, rémunérations dues",
    "c": 4
  },
  {
    "n": "431",
    "l": "Sécurité sociale (CNSS)",
    "c": 4
  },
  {
    "n": "442",
    "l": "État, impôts et taxes recouvrables sur des tiers (AIB)",
    "c": 4
  },
  {
    "n": "443",
    "l": "État, TVA facturée",
    "c": 4
  },
  {
    "n": "445",
    "l": "État, TVA récupérable",
    "c": 4
  },
  {
    "n": "4441",
    "l": "État, TVA due",
    "c": 4
  },
  {
    "n": "4449",
    "l": "État, crédit de TVA à reporter",
    "c": 4
  },
  {
    "n": "481",
    "l": "Fournisseurs d'investissements",
    "c": 4
  },
  {
    "n": "491",
    "l": "Dépréciations des comptes clients",
    "c": 4
  },
  {
    "n": "501",
    "l": "Titres du Trésor",
    "c": 5
  },
  {
    "n": "511",
    "l": "Valeurs à l'encaissement",
    "c": 5
  },
  {
    "n": "512",
    "l": "Effets à l'encaissement",
    "c": 5
  },
  {
    "n": "521",
    "l": "Banques locales",
    "c": 5
  },
  {
    "n": "531",
    "l": "Chèques postaux (CCP)",
    "c": 5
  },
  {
    "n": "561",
    "l": "Crédits de trésorerie (découverts)",
    "c": 5
  },
  {
    "n": "571",
    "l": "Caisse",
    "c": 5
  },
  {
    "n": "601",
    "l": "Achats de marchandises",
    "c": 6
  },
  {
    "n": "6015",
    "l": "Frais sur achats de marchandises (Port)",
    "c": 6
  },
  {
    "n": "6019",
    "l": "Rabais, remises et ristournes obtenus sur achats",
    "c": 6
  },
  {
    "n": "602",
    "l": "Achats de matières premières",
    "c": 6
  },
  {
    "n": "603",
    "l": "Variations des stocks de biens achetés",
    "c": 6
  },
  {
    "n": "604",
    "l": "Achats stockés de matières et fournitures consommables",
    "c": 6
  },
  {
    "n": "605",
    "l": "Achats non stockés de matières et fournitures (eau, électricité)",
    "c": 6
  },
  {
    "n": "611",
    "l": "Transports sur achats",
    "c": 6
  },
  {
    "n": "612",
    "l": "Transports sur ventes",
    "c": 6
  },
  {
    "n": "622",
    "l": "Locations et charges locatives",
    "c": 6
  },
  {
    "n": "6224",
    "l": "Malis sur emballages",
    "c": 6
  },
  {
    "n": "624",
    "l": "Entretien, réparations et maintenance",
    "c": 6
  },
  {
    "n": "625",
    "l": "Primes d'assurance",
    "c": 6
  },
  {
    "n": "627",
    "l": "Publicité, publications, relations publiques",
    "c": 6
  },
  {
    "n": "631",
    "l": "Frais bancaires et commissions",
    "c": 6
  },
  {
    "n": "632",
    "l": "Rémunérations d'intermédiaires et honoraires",
    "c": 6
  },
  {
    "n": "641",
    "l": "Impôts et taxes directs (Patente)",
    "c": 6
  },
  {
    "n": "661",
    "l": "Rémunérations directes versées au personnel national",
    "c": 6
  },
  {
    "n": "664",
    "l": "Charges sociales patronales (CNSS)",
    "c": 6
  },
  {
    "n": "671",
    "l": "Intérêts des emprunts",
    "c": 6
  },
  {
    "n": "673",
    "l": "Escomptes accordés aux clients",
    "c": 6
  },
  {
    "n": "675",
    "l": "Escomptes des effets de commerce",
    "c": 6
  },
  {
    "n": "681",
    "l": "Dotations aux amortissements d'exploitation",
    "c": 6
  },
  {
    "n": "701",
    "l": "Ventes de marchandises",
    "c": 7
  },
  {
    "n": "7019",
    "l": "Rabais, remises et ristournes accordés sur ventes",
    "c": 7
  },
  {
    "n": "702",
    "l": "Ventes de produits finis",
    "c": 7
  },
  {
    "n": "706",
    "l": "Services vendus",
    "c": 7
  },
  {
    "n": "7071",
    "l": "Ports, emballages perdus et autres frais facturés",
    "c": 7
  },
  {
    "n": "7074",
    "l": "Bonis sur reprise d'emballages consignés",
    "c": 7
  },
  {
    "n": "711",
    "l": "Subventions d'exploitation",
    "c": 7
  },
  {
    "n": "771",
    "l": "Intérêts de prêts et créances",
    "c": 7
  },
  {
    "n": "773",
    "l": "Escomptes obtenus des fournisseurs",
    "c": 7
  },
  {
    "n": "781",
    "l": "Transferts de charges d'exploitation",
    "c": 7
  },
  {
    "n": "811",
    "l": "Valeurs comptables des cessions d'immobilisations corporelles",
    "c": 8
  },
  {
    "n": "821",
    "l": "Produits des cessions d'immobilisations corporelles",
    "c": 8
  },
  {
    "n": "831",
    "l": "Charges HAO constatées",
    "c": 8
  },
  {
    "n": "841",
    "l": "Produits HAO constatés",
    "c": 8
  },
  {
    "n": "891",
    "l": "Impôts sur les bénéfices de l'exercice (BIC)",
    "c": 8
  }
];

/* ── Intitulés des classes ─────────────────────────────────── */
COURSE.classNames = {
  "1": "Ressources durables (Capitaux propres et dettes financières)",
  "2": "Actif immobilisé (Immobilisations incorporelles, corporelles et financières)",
  "3": "Stocks (Marchandises, matières premières, produits)",
  "4": "Tiers (Créances clients, dettes fournisseurs, personnel, État)",
  "5": "Trésorerie (Titres de placement, banques, caisse, découverts)",
  "6": "Charges des activités ordinaires (Exploitation et financier)",
  "7": "Produits des activités ordinaires (Exploitation et financier)",
  "8": "Autres charges et autres produits (Hors Activités Ordinaires - HAO)",
  "9": "Engagements hors bilan et comptabilité analytique"
};

/* ── Postes pour l'outil de tri du bilan ───────────────────── */
COURSE.bilanItems = [
  {
    "l": "Fonds commercial",
    "s": "actif"
  },
  {
    "l": "Terrains nus",
    "s": "actif"
  },
  {
    "l": "Bâtiments administratifs",
    "s": "actif"
  },
  {
    "l": "Matériel de transport",
    "s": "actif"
  },
  {
    "l": "Stocks de marchandises",
    "s": "actif"
  },
  {
    "l": "Créances clients",
    "s": "actif"
  },
  {
    "l": "Banques (avoirs)",
    "s": "actif"
  },
  {
    "l": "Caisse",
    "s": "actif"
  },
  {
    "l": "Capital social",
    "s": "passif"
  },
  {
    "l": "Réserves statutaires",
    "s": "passif"
  },
  {
    "l": "Résultat net (bénéfice)",
    "s": "passif"
  },
  {
    "l": "Emprunt bancaire à 5 ans",
    "s": "passif"
  },
  {
    "l": "Dettes fournisseurs",
    "s": "passif"
  },
  {
    "l": "TVA due à l'État",
    "s": "passif"
  },
  {
    "l": "Avances reçues des clients",
    "s": "passif"
  },
  {
    "l": "Crédits de trésorerie (découverts)",
    "s": "passif"
  }
];

/* ── Banque globale de questions QCM ───────────────────────── */
COURSE.questions = [
  {
    "q": "Selon l'Acte uniforme de l'OHADA, quel état financier a remplacé le TAFIRE dans le SYSCOHADA révisé ?",
    "o": [
      "Le Tableau des flux de trésorerie (TFT)",
      "Le Bilan financier condensé",
      "Le Grand Livre analytique",
      "Le Tableau d'amortissement linéaire"
    ],
    "a": 0,
    "e": "Le SYSCOHADA révisé a substitué le Tableau des flux de trésorerie (TFT) à l'ancien TAFIRE pour décrire les flux de liquidités.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Quel postulat comptable impose que le résultat d'un exercice soit strictement indépendant de celui qui précède et de celui qui suit ?",
    "o": [
      "La permanence des méthodes",
      "La spécialisation des exercices",
      "La prééminence de la réalité économique",
      "Le postulat de l'entité"
    ],
    "a": 1,
    "e": "Le postulat de spécialisation des exercices stipule que la vie de l'entreprise est découpée en périodes annuelles autonomes auxquelles on rattache charges et produits propres.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Quel principe comptable interdit d'anticiper l'enregistrement d'un gain probable tout en imposant la prise en compte de toute perte prévisible ?",
    "o": [
      "La convention du coût historique",
      "Le postulat de l'entité",
      "La convention de prudence",
      "La continuité de l'exploitation"
    ],
    "a": 2,
    "e": "La prudence commande d'inscrire les risques et dépréciations dès qu'ils sont prévisibles, alors que les bénéfices ne sont comptabilisés que lorsqu'ils sont définitivement réalisés.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Combien d'États membres compte aujourd'hui l'espace juridique et comptable de l'OHADA ?",
    "o": [
      "8 États",
      "15 États",
      "17 États",
      "24 États"
    ],
    "a": 2,
    "e": "L'OHADA compte 17 États membres signataires du traité de Port-Louis.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Parmi les documents suivants, lequel N'EST PAS un livre comptable obligatoire prévu par l'Acte Uniforme ?",
    "o": [
      "Le Livre-Journal",
      "Le Grand-Livre",
      "Le Livre d'inventaire",
      "Le Journal des prévisions budgétaires"
    ],
    "a": 3,
    "e": "Le journal budgétaire relève de la gestion interne facultative. Les 4 documents obligatoires sont le Journal, le Grand-Livre, la Balance et le Livre d'inventaire.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Quelle est l'hypothèse de base sous-jacente à l'établissement des états financiers en SYSCOHADA ?",
    "o": [
      "La liquidation imminente de l'actif",
      "La continuité de l'exploitation",
      "La constance de la valeur monétaire",
      "La neutralité fiscale"
    ],
    "a": 1,
    "e": "La continuité de l'exploitation est l'hypothèse fondamentale présumant que l'entité poursuivra ses activités dans un avenir prévisible.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Que prévoit la convention de correspondance entre le bilan de clôture et le bilan d'ouverture ?",
    "o": [
      "Le bilan d'ouverture d'un exercice doit correspondre exactement au bilan de clôture précédent",
      "Le bénéfice doit être égal aux capitaux propres d'ouverture",
      "Le total actif doit être multiplié par le taux d'inflation",
      "Les créances d'ouverture doivent être soldées en clôture"
    ],
    "a": 0,
    "e": "Ce principe d'intangibilité garantit que le bilan d'ouverture N est la copie conforme du bilan de clôture N-1 sans omission ni décalage.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Le postulat de prééminence de la réalité économique sur l'apparence juridique autorise notamment :",
    "o": [
      "L'enregistrement d'opérations selon leur substance économique réelle (ex: crédit-bail)",
      "L'omission des factures non payées",
      "La non-déclaration de la TVA",
      "La tenue de comptabilités parallèles"
    ],
    "a": 0,
    "e": "La prééminence de la substance économique conduit à inscrire certains biens loués en crédit-bail à l'actif de l'utilisateur comme s'il en était propriétaire.",
    "calc": false,
    "ch": "generalites"
  },
  {
    "q": "Dans quelle classe du SYSCOHADA enregistre-t-on les capitaux propres et les emprunts à long terme ?",
    "o": [
      "Classe 1",
      "Classe 2",
      "Classe 4",
      "Classe 5"
    ],
    "a": 0,
    "e": "La classe 1 regroupe les ressources durables : capitaux propres (10, 11, 13) et dettes financières stables (16).",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Quel est le numéro du compte d'amortissement correspondant au compte 245 'Matériel de transport' ?",
    "o": [
      "2845",
      "2945",
      "2458",
      "6812"
    ],
    "a": 0,
    "e": "En insérant un 8 en 2e position dans la classe 2, on obtient le compte d'amortissement correspondant : 2845.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Le compte 4191 'Clients, avances et acomptes reçus' est de quelle nature dans le bilan ?",
    "o": [
      "Une ressource (passif circulant)",
      "Un emploi (actif immobilisé)",
      "Une charge d'exploitation",
      "Une disponibilité de trésorerie"
    ],
    "a": 0,
    "e": "Le chiffre 9 en 3e position indique un compte à solde opposé : 4191 représente une dette envers le client pour l'argent reçu avant livraison, donc un passif.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Que désigne le chiffre 9 en deuxième position d'un compte de bilan (ex: 391, 491) ?",
    "o": [
      "Une dépréciation ou provision",
      "Un amortissement linéaire",
      "Une créance irrécouvrable définitive",
      "Un produit exceptionnel"
    ],
    "a": 0,
    "e": "Le chiffre 9 en 2e position signale une dépréciation constatant la perte de valeur probable d'un actif.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Parmi les classes suivantes, laquelle est facultative dans le SYSCOHADA ?",
    "o": [
      "Classe 5",
      "Classe 8",
      "Classe 9",
      "Classe 3"
    ],
    "a": 2,
    "e": "La classe 9, réservée aux engagements hors bilan et à la comptabilité analytique de gestion, est d'usage facultatif.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Quel compte représente les 'Marchandises' au bilan ?",
    "o": [
      "Compte 31",
      "Compte 601",
      "Compte 701",
      "Compte 401"
    ],
    "a": 0,
    "e": "Le compte 31 Marchandises est le compte de stock d'actif. 601 est la charge d'achat et 701 le produit de vente.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Le compte 4091 'Fournisseurs, avances et acomptes versés' se classe :",
    "o": [
      "À l'actif circulant (créance sur le fournisseur)",
      "Au passif circulant (dette envers le fournisseur)",
      "En capitaux propres",
      "En trésorerie active"
    ],
    "a": 0,
    "e": "L'avance versée au fournisseur confère à l'entreprise un droit de créance jusqu'à réception de la facture, donc un élément d'actif.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Dans le PCE (Plan Comptable d'Entreprise), comment peut-on codifier la fonction d'une charge ?",
    "o": [
      "En ajoutant deux chiffres de fonction aux classes 6, 7 et 8",
      "En changeant le premier chiffre du compte",
      "En utilisant exclusivement des lettres",
      "Ce procédé est formellement interdit"
    ],
    "a": 0,
    "e": "Le SYSCOHADA permet d'ajouter 2 chiffres de fonction (ex: .03 service comptabilité) aux charges et produits pour l'analyse par destination.",
    "calc": false,
    "ch": "cadre"
  },
  {
    "q": "Où s'enregistre normalement l'augmentation d'un compte de charge de la classe 6 ?",
    "o": [
      "Au Débit",
      "Au Crédit",
      "Au Passif du bilan",
      "En compte de tiers"
    ],
    "a": 0,
    "e": "Les comptes de charges représentent des emplois d'appauvrissement : ils augmentent toujours au débit.",
    "calc": false,
    "ch": "charges-produits"
  },
  {
    "q": "Quel compte utilise-t-on pour comptabiliser les escomptes financiers obtenus de nos fournisseurs ?",
    "o": [
      "773 Escomptes obtenus",
      "673 Escomptes accordés",
      "601 Achats de marchandises",
      "707 Produits accessoires"
    ],
    "a": 0,
    "e": "L'escompte obtenu réduit notre dette et constitue un produit financier pour l'acheteur, crédité au compte 773.",
    "calc": false,
    "ch": "charges-produits"
  },
  {
    "q": "Dans quelle classe enregistre-t-on la vente occasionnelle d'un véhicule de livraison par une entreprise commerciale ?",
    "o": [
      "Classe 8 (Produits HAO 82)",
      "Classe 7 (Ventes 701)",
      "Classe 2 (Immobilisations)",
      "Classe 1 (Capitaux)"
    ],
    "a": 0,
    "e": "La cession d'une immobilisation ne fait pas partie de l'activité ordinaire : le prix de vente s'enregistre au compte 82 Produits des cessions d'immobilisations.",
    "calc": false,
    "ch": "charges-produits"
  },
  {
    "q": "Que représente le solde du compte 603 'Variations des stocks de biens achetés' ?",
    "o": [
      "La différence entre Stock Initial et Stock Final",
      "Le total des achats de l'année",
      "Le bénéfice brut de vente",
      "La dépréciation des stocks"
    ],
    "a": 0,
    "e": "Le compte 603 ajuste les achats de la période en calculant Stock Initial - Stock Final pour déterminer les achats consommés réels.",
    "calc": false,
    "ch": "charges-produits"
  },
  {
    "q": "Les salaires bruts versés aux employés de l'entité sont enregistrés au débit du compte :",
    "o": [
      "661 Rémunérations directes versées au personnel",
      "422 Personnel, rémunérations dues",
      "706 Prestations de services",
      "101 Capital social"
    ],
    "a": 0,
    "e": "Le compte 661 est le compte de charge de personnel constatant l'emploi du travail.",
    "calc": false,
    "ch": "charges-produits"
  },
  {
    "q": "Si le total des produits d'une entité s'élève à 18 500 000 F et le total des charges à 14 200 000 F, l'entreprise réalise :",
    "o": [
      "Un bénéfice net de 4 300 000 F",
      "Une perte nette de 4 300 000 F",
      "Un excédent brut de 32 700 000 F",
      "Un équilibre nul"
    ],
    "a": 0,
    "e": "Résultat = 18 500 000 - 14 200 000 = +4 300 000 F CFA. Les produits excèdent les charges, il s'agit d'un bénéfice.",
    "calc": true,
    "ch": "charges-produits"
  },
  {
    "q": "Dans l'analyse comptable, comment définit-on la 'Ressource' d'une opération ?",
    "o": [
      "L'origine ou le moyen qui a financé l'opération",
      "La destination finale de la dépense",
      "Le bénéfice retiré de la vente",
      "La taxe versée à l'État"
    ],
    "a": 0,
    "e": "La ressource représente le moyen ou le point de départ du flux économique qui a permis de réaliser l'opération.",
    "calc": false,
    "ch": "partie-double"
  },
  {
    "q": "Une entreprise achète un camion de livraison à crédit auprès d'un fournisseur d'immobilisations. Quel est l'emploi ?",
    "o": [
      "L'entrée du matériel de transport dans l'actif (Compte 245)",
      "La dette envers le fournisseur (Compte 481)",
      "Le compte de banque",
      "Les intérêts de retard"
    ],
    "a": 0,
    "e": "L'emploi est l'utilisation faite de la ressource : ici, l'acquisition et l'entrée dans le patrimoine du matériel de transport.",
    "calc": false,
    "ch": "partie-double"
  },
  {
    "q": "Que stipule le principe fondamental de la partie double ?",
    "o": [
      "Pour chaque écriture, la somme des débits doit être égale à la somme des crédits",
      "L'entreprise doit tenir deux comptabilités distinctes",
      "Le résultat doit être divisé par deux associés",
      "Chaque facture doit comporter deux signatures"
    ],
    "a": 0,
    "e": "La partie double impose l'égalité arithmétique absolue : Total Débit = Total Crédit pour toute opération.",
    "calc": false,
    "ch": "partie-double"
  },
  {
    "q": "L'achat de matières premières payé en espèces constitue :",
    "o": [
      "Un flux réel d'entrée (matières) et un flux financier de sortie (espèces)",
      "Deux flux financiers réciproques",
      "Un flux purement interne",
      "Un flux sans contrepartie monétaire"
    ],
    "a": 0,
    "e": "L'arrivée des matières constitue un flux réel (physique) et le règlement en monnaie constitue un flux financier en sens inverse.",
    "calc": false,
    "ch": "partie-double"
  },
  {
    "q": "Lors du règlement par chèque bancaire d'une dette envers un fournisseur, quel est le compte crédité ?",
    "o": [
      "521 Banques (Ressource)",
      "401 Fournisseurs (Emploi)",
      "601 Achats de marchandises",
      "571 Caisse"
    ],
    "a": 0,
    "e": "La banque est la ressource qui procure les fonds : son compte diminue par le crédit. Le fournisseur est débité pour annuler la dette.",
    "calc": false,
    "ch": "partie-double"
  },
  {
    "q": "Dans quelle masse du bilan classe-t-on un emprunt bancaire contracté pour une durée de 5 ans ?",
    "o": [
      "Ressources stables (Classe 1)",
      "Passif circulant (Classe 4)",
      "Trésorerie-Passif",
      "Actif immobilisé"
    ],
    "a": 0,
    "e": "Les dettes financières à plus d'un an (compte 16) sont des ressources stables finançant durablement l'entité.",
    "calc": false,
    "ch": "bilan"
  },
  {
    "q": "Où figure une perte nette constatée à la clôture de l'exercice dans le bilan ?",
    "o": [
      "Au passif, dans les capitaux propres, avec un signe négatif (compte 139)",
      "À l'actif immobilisé",
      "Dans les dettes fournisseurs",
      "Elle ne figure pas au bilan"
    ],
    "a": 0,
    "e": "Une perte réduit les capitaux propres de l'entité et s'inscrit donc au passif avec une valeur négative ou entre parenthèses.",
    "calc": false,
    "ch": "bilan"
  },
  {
    "q": "Une entreprise présente un Actif total de 30 000 000 F CFA et un total de dettes exigibles de 12 000 000 F CFA. Quelle est sa situation nette ?",
    "o": [
      "18 000 000 F CFA",
      "42 000 000 F CFA",
      "30 000 000 F CFA",
      "12 000 000 F CFA"
    ],
    "a": 0,
    "e": "Situation Nette = Actif total - Dettes exigibles = 30 000 000 - 12 000 000 = 18 000 000 F CFA.",
    "calc": true,
    "ch": "bilan"
  },
  {
    "q": "Parmi les postes suivants, lequel appartient à l'Actif circulant ?",
    "o": [
      "Stocks de marchandises",
      "Bâtiments industriels",
      "Emprunt bancaire à 7 ans",
      "Fonds de commerce"
    ],
    "a": 0,
    "e": "Les stocks de marchandises (compte 31) sont destinés à être vendus rapidement au cours du cycle d'exploitation, donc actif circulant.",
    "calc": false,
    "ch": "bilan"
  },
  {
    "q": "Si le total de l'actif s'élève à 45 000 000 F, le capital à 25 000 000 F et les dettes totales à 15 000 000 F, quel est le montant du résultat ?",
    "o": [
      "Bénéfice de 5 000 000 F",
      "Perte de 5 000 000 F",
      "Bénéfice de 10 000 000 F",
      "Équilibre nul"
    ],
    "a": 0,
    "e": "Actif = Passif -> 45 000 000 = 25 000 000 + 15 000 000 + Résultat -> Résultat = 45 000 000 - 40 000 000 = +5 000 000 F (Bénéfice).",
    "calc": true,
    "ch": "bilan"
  },
  {
    "q": "Que signifie l'opération d'arrêt d'un compte ?",
    "o": [
      "Calculer son solde et inscrire ce montant du côté opposé pour égaliser Débit et Crédit",
      "Supprimer définitivement le compte du Grand-Livre",
      "Bloquer les retraits bancaires",
      "Vérifier la signature du comptable"
    ],
    "a": 0,
    "e": "Pour arrêter un compte, on calcule son solde et on l'inscrit du côté le plus faible pour faire concorder les totaux de clôture.",
    "calc": false,
    "ch": "compte"
  },
  {
    "q": "Un compte présente un Total Débit de 8 500 000 F et un Total Crédit de 9 200 000 F. Quel est son solde ?",
    "o": [
      "Solde créditeur de 700 000 F",
      "Solde débiteur de 700 000 F",
      "Compte soldé",
      "Solde débiteur de 17 700 000 F"
    ],
    "a": 0,
    "e": "TC (9 200 000) > TD (8 500 000) -> Solde créditeur de 700 000 F CFA.",
    "calc": true,
    "ch": "compte"
  },
  {
    "q": "Comment fonctionne un compte d'actif (ex: Caisse ou Clients) ?",
    "o": [
      "Augmente au débit, diminue au crédit",
      "Augmente au crédit, diminue au débit",
      "Augmente toujours au crédit sans diminution",
      "Ne comporte jamais de débit"
    ],
    "a": 0,
    "e": "Les comptes d'actif sont des comptes d'emplois : ils augmentent par le débit et diminuent par le crédit.",
    "calc": false,
    "ch": "compte"
  },
  {
    "q": "Quel tracé de compte fait apparaître après chaque opération le solde mis à jour ?",
    "o": [
      "Le tracé à colonnes mariées avec colonnes de soldes",
      "Le compte schématique en T",
      "Le tracé à colonnes séparées",
      "Le tracé linéaire sans date"
    ],
    "a": 0,
    "e": "Le tracé à colonnes mariées dispose de colonnes réservées au solde (débiteur ou créditeur) recalculé à chaque mouvement.",
    "calc": false,
    "ch": "compte"
  },
  {
    "q": "Sur quelle base se calcule l'escompte de règlement lorsqu'une facture comporte des remises commerciales ?",
    "o": [
      "Sur le Net commercial",
      "Sur le Montant brut initial",
      "Sur le Net à payer TTC",
      "Sur le montant de la TVA"
    ],
    "a": 0,
    "e": "L'escompte financier est toujours calculé sur le dernier Net commercial résultant de la cascade des réductions commerciales.",
    "calc": false,
    "ch": "facture"
  },
  {
    "q": "Une facture comporte : Montant brut 1 000 000 F, Remise 10 %, Escompte 2 %. Quel est le Net commercial ?",
    "o": [
      "900 000 F CFA",
      "882 000 F CFA",
      "980 000 F CFA",
      "1 000 000 F CFA"
    ],
    "a": 0,
    "e": "Net commercial = 1 000 000 - 10 % (100 000) = 900 000 F CFA. L'escompte intervient après.",
    "calc": true,
    "ch": "facture"
  },
  {
    "q": "Comment comptabilise-t-on une remise de 5 % figurant sur une facture de doit d'achat de marchandises ?",
    "o": [
      "Elle n'est pas comptabilisée séparément (le compte 601 est débité du Net commercial)",
      "Au crédit du compte 6019",
      "Au débit du compte 673",
      "Au crédit du compte 773"
    ],
    "a": 0,
    "e": "Les réductions commerciales portées sur facture de doit sont déduites directement : on enregistre les achats au Net commercial sans écriture pour la remise.",
    "calc": false,
    "ch": "facture"
  },
  {
    "q": "Chez le fournisseur, dans quel compte enregistre-t-on l'escompte de règlement accordé au client sur la facture de doit ?",
    "o": [
      "Débit du compte 673 Escomptes accordés",
      "Crédit du compte 773 Escomptes obtenus",
      "Crédit du compte 701 Ventes",
      "Débit du compte 411 Clients"
    ],
    "a": 0,
    "e": "L'escompte accordé est une charge financière pour le vendeur, débitée au compte 673.",
    "calc": false,
    "ch": "facture"
  },
  {
    "q": "Une facture d'avoir émise pour accorder une remise oubliée sur la facture de doit initiale s'enregistre chez le client au :",
    "o": [
      "Crédit du compte 6019 (Rabais, remises et ristournes obtenus)",
      "Débit du compte 601",
      "Crédit du compte 401 Fournisseurs",
      "Débit du compte 773"
    ],
    "a": 0,
    "e": "Les 3R accordés hors facture se logent dans les comptes à terminaison 9 : 6019 au crédit chez le client pour diminuer le coût d'achat.",
    "calc": false,
    "ch": "facture"
  },
  {
    "q": "Quel compte le fournisseur crédite-t-il lorsqu'il facture un forfait de transport assuré par ses propres camions ?",
    "o": [
      "7071 Ports, emballages perdus et autres frais facturés",
      "612 Transports sur ventes",
      "701 Ventes de marchandises",
      "521 Banques"
    ],
    "a": 0,
    "e": "Le port forfaitaire constitue un produit accessoire d'exploitation enregistré au crédit du compte 7071.",
    "calc": false,
    "ch": "transport"
  },
  {
    "q": "Que signifie la mention 'Franco de port' sur une proposition commerciale ?",
    "o": [
      "Les frais de livraison sont à la charge du fournisseur et ne sont pas facturés au client",
      "Le client paie le double des frais normaux",
      "Le transport est interdit par la loi",
      "Le paiement doit avoir lieu en devises étrangères"
    ],
    "a": 0,
    "e": "Franco signifie livraison gratuite pour l'acheteur, le coût restant à la charge exclusive du vendeur.",
    "calc": false,
    "ch": "transport"
  },
  {
    "q": "Chez l'acheteur, les frais de transport engagés pour l'acquisition de marchandises sont inscrits au :",
    "o": [
      "Débit du compte 6015 (ou 611 Transports sur achats)",
      "Crédit du compte 7071",
      "Débit du compte 673",
      "Crédit du compte 401 Fournisseurs"
    ],
    "a": 0,
    "e": "Pour l'acheteur, le transport est un accessoire du coût d'achat, enregistré en charge d'approvisionnement (6015 ou 611).",
    "calc": false,
    "ch": "transport"
  },
  {
    "q": "Quel est le taux légal normal de TVA appliqué en République du Bénin ?",
    "o": [
      "18 %",
      "20 %",
      "15 %",
      "10 %"
    ],
    "a": 0,
    "e": "Dans l'espace UEMOA et particulièrement au Bénin, le taux de TVA de droit commun est fixé à 18 %.",
    "calc": false,
    "ch": "tva"
  },
  {
    "q": "Quel compte crédite-t-on lors de la constatation de la TVA sur une facture de vente ?",
    "o": [
      "443 État, TVA facturée",
      "445 État, TVA récupérable",
      "4441 État, TVA due",
      "645 Impôts et taxes"
    ],
    "a": 0,
    "e": "Lors d'une vente, l'entreprise collecte la taxe pour l'État : c'est une dette envers le fisc inscrite au crédit du compte 443.",
    "calc": false,
    "ch": "tva"
  },
  {
    "q": "Une entreprise a facturé 3 600 000 F de TVA à ses clients en juin et a payé 2 200 000 F de TVA déductible. Quelle est sa situation au 30 juin ?",
    "o": [
      "TVA due à verser à l'État : 1 400 000 F CFA",
      "Crédit de TVA : 1 400 000 F CFA",
      "TVA due : 5 800 000 F CFA",
      "Aucune taxe due"
    ],
    "a": 0,
    "e": "TVA facturée (3 600 000) > TVA récupérable (2 200 000). TVA due = 3 600 000 - 2 200 000 = 1 400 000 F CFA (Compte 4441).",
    "calc": true,
    "ch": "tva"
  },
  {
    "q": "Où s'enregistre le crédit de TVA constaté en fin de mois lorsque la TVA récupérable excède la TVA facturée ?",
    "o": [
      "Au débit du compte 4449 État, crédit de TVA à reporter",
      "Au crédit du compte 4441",
      "Au compte de résultat parmi les charges",
      "En compte de capitaux propres"
    ],
    "a": 0,
    "e": "Le crédit de TVA est une créance sur le Trésor public reportable sur les mois suivants, portée au débit du compte 4449.",
    "calc": false,
    "ch": "tva"
  },
  {
    "q": "Quel compte le fournisseur crédite-t-il pour constater le montant des emballages consignés à ses clients ?",
    "o": [
      "4194 Clients, dettes pour emballages et matériels consignés",
      "701 Ventes de marchandises",
      "4094 Fournisseurs, créances pour emballages",
      "243 Matériel d'emballage"
    ],
    "a": 0,
    "e": "La consignation est une dette de restitution inscrite au passif au crédit du compte 4194.",
    "calc": false,
    "ch": "emballages"
  },
  {
    "q": "La consignation d'emballages donne-t-elle lieu immédiatement au paiement de la TVA ?",
    "o": [
      "Non, car la consignation est un simple dépôt de garantie et non une vente définitive",
      "Oui, toujours au taux de 18 %",
      "Oui, mais uniquement pour les emballages en plastique",
      "Seulement si le client est étranger"
    ],
    "a": 0,
    "e": "La consignation n'étant pas une cession de propriété, elle n'est pas assujettie à la TVA lors de la mise à disposition.",
    "calc": false,
    "ch": "emballages"
  },
  {
    "q": "Quel compte utilise le fournisseur pour constater l'acceptation d'une lettre de change par son client ?",
    "o": [
      "412 Clients, effets à recevoir",
      "402 Fournisseurs, effets à payer",
      "521 Banques",
      "701 Ventes"
    ],
    "a": 0,
    "e": "Le compte 412 est un compte d'actif circulant représentant les créances matérialisées par des effets de commerce.",
    "calc": false,
    "ch": "effets"
  },
  {
    "q": "Qui est à l'initiative de la création d'une lettre de change ?",
    "o": [
      "Le créancier (Fournisseur ou Tireur)",
      "Le débiteur (Client ou Tiré)",
      "La banque centrale",
      "Le greffier du tribunal"
    ],
    "a": 0,
    "e": "La lettre de change est un ordre de paiement rédigé par le fournisseur (tireur) à l'attention de son client (tiré).",
    "calc": false,
    "ch": "effets"
  }
];

/* ── Exercices interactifs guidés ──────────────────────────── */
COURSE.exercises = [
  {
    "id": "pd-ex1",
    "type": "journal",
    "ch": "partie-double",
    "title": "Analyse Emploi / Ressource — Opérations CHIC CHOC",
    "source": "Polycopié p. 49 (Juin)",
    "level": 1,
    "analyse": true,
    "pick": true,
    "context": "<p>Analysez les opérations suivantes en identifiant l'Emploi (débit) et la Ressource (crédit) :</p>",
    "ops": [
      {
        "date": "05/06",
        "text": "Versement d'espèces en banque : 2 200 000 F CFA",
        "lines": [
          {
            "a": "521",
            "l": "Banques",
            "d": 2200000
          },
          {
            "a": "571",
            "l": "Caisse",
            "c": 2200000
          }
        ],
        "note": "Emploi : entrée en banque (+ Banque au débit). Ressource : sortie de caisse (Caisse au crédit)."
      },
      {
        "date": "07/06",
        "text": "Règlement par chèque bancaire d'un client : 1 800 000 F CFA",
        "lines": [
          {
            "a": "521",
            "l": "Banques",
            "d": 1800000
          },
          {
            "a": "411",
            "l": "Clients",
            "c": 1800000
          }
        ],
        "note": "Emploi : augmentation des avoirs bancaires. Ressource : extinction de la créance sur le client."
      },
      {
        "date": "10/06",
        "text": "Achat de matières premières à crédit : 900 000 F CFA",
        "lines": [
          {
            "a": "602",
            "l": "Achats de matières premières",
            "d": 900000
          },
          {
            "a": "401",
            "l": "Fournisseurs",
            "c": 900000
          }
        ],
        "note": "Emploi : achat de matières. Ressource : engagement de dette envers le fournisseur."
      }
    ]
  },
  {
    "id": "bilan-ex-azerd",
    "type": "bilan",
    "ch": "bilan",
    "title": "Bilan de clôture de l'entreprise AZERD",
    "source": "Polycopié p. 50-51 (Janvier 2001)",
    "level": 2,
    "date0": "31/12/2000",
    "date1": "31/01/2001",
    "context": "<p>À partir du bilan initial d'AZERD au 31/12/2000, déterminez le poste Bâtiment manquant et enregistrez les opérations de janvier pour dresser le bilan au 31/01/2001 :</p>",
    "postes": [
      {
        "l": "Terrain",
        "s": "actif",
        "v": 1500000
      },
      {
        "l": "Bâtiment",
        "s": "actif",
        "v": 8000000
      },
      {
        "l": "Matériel et Mobilier",
        "s": "actif",
        "v": 5000000
      },
      {
        "l": "Matériel de transport",
        "s": "actif",
        "v": 4200000
      },
      {
        "l": "Marchandises",
        "s": "actif",
        "v": 950000
      },
      {
        "l": "Clients",
        "s": "actif",
        "v": 1200000
      },
      {
        "l": "Banque",
        "s": "actif",
        "v": 800000
      },
      {
        "l": "Chèques postaux",
        "s": "actif",
        "v": 750000
      },
      {
        "l": "Caisse",
        "s": "actif",
        "v": 350000
      },
      {
        "l": "Capital",
        "s": "passif",
        "v": 15000000
      },
      {
        "l": "Résultat",
        "s": "passif",
        "v": 2500000
      },
      {
        "l": "Emprunt",
        "s": "passif",
        "v": 5000000
      },
      {
        "l": "Fournisseurs",
        "s": "passif",
        "v": 250000
      }
    ],
    "ops": [
      {
        "date": "02/01",
        "text": "Achat de marchandises contre chèque bancaire : 350 000",
        "deltas": {
          "Marchandises": 350000,
          "Banque": -350000
        }
      },
      {
        "date": "05/01",
        "text": "Règlement par chèque bancaire au fournisseur : 100 000",
        "deltas": {
          "Fournisseurs": -100000,
          "Banque": -100000
        }
      },
      {
        "date": "08/01",
        "text": "Vente de marchandises à crédit 450 000 (coût d'achat 325 000)",
        "deltas": {
          "Clients": 450000,
          "Marchandises": -325000,
          "Résultat": 125000
        }
      },
      {
        "date": "12/01",
        "text": "Achat d'un mobilier contre chèque postal : 200 000",
        "deltas": {
          "Matériel et Mobilier": 200000,
          "Chèques postaux": -200000
        }
      },
      {
        "date": "15/01",
        "text": "Règlement d'un client par chèque bancaire : 500 000",
        "deltas": {
          "Banque": 500000,
          "Clients": -500000
        }
      },
      {
        "date": "17/01",
        "text": "Retrait de la banque pour alimenter la caisse : 300 000",
        "deltas": {
          "Caisse": 300000,
          "Banque": -300000
        }
      },
      {
        "date": "22/01",
        "text": "Vente de marchandises à crédit 375 000 (coût d'achat 275 000)",
        "deltas": {
          "Clients": 375000,
          "Marchandises": -275000,
          "Résultat": 100000
        }
      },
      {
        "date": "25/01",
        "text": "Règlement par caisse au fournisseur : 125 000",
        "deltas": {
          "Fournisseurs": -125000,
          "Caisse": -125000
        }
      },
      {
        "date": "28/01",
        "text": "Achat à crédit de marchandises : 280 000",
        "deltas": {
          "Marchandises": 280000,
          "Fournisseurs": 280000
        }
      }
    ]
  },
  {
    "id": "compte-ex-banque",
    "type": "compte",
    "ch": "compte",
    "title": "Compte Banque en colonnes mariées avec soldes — CHIC CHOC",
    "source": "Polycopié p. 50 (Juin)",
    "level": 2,
    "trace": "mariees",
    "account": "521 Banques",
    "opening": {
      "s": "d",
      "v": 200000
    },
    "ops": [
      {
        "date": "05/06",
        "text": "Versement d'espèces en banque",
        "s": "d",
        "v": 2200000
      },
      {
        "date": "07/06",
        "text": "Règlement par chèque d'un client",
        "s": "d",
        "v": 1800000
      },
      {
        "date": "13/06",
        "text": "Achat marchandises (moitié par chèque)",
        "s": "c",
        "v": 900000
      },
      {
        "date": "15/06",
        "text": "Vente marchandises (2/3 par chèque)",
        "s": "d",
        "v": 1000000
      },
      {
        "date": "16/06",
        "text": "Retrait de la banque pour alimenter la caisse",
        "s": "c",
        "v": 1200000
      },
      {
        "date": "18/06",
        "text": "Paiement au fournisseur par chèque bancaire",
        "s": "c",
        "v": 350000
      },
      {
        "date": "22/06",
        "text": "Vente de marchandises (moitié chèque)",
        "s": "d",
        "v": 300000
      },
      {
        "date": "25/06",
        "text": "Règlement par chèque bancaire d'un emprunt",
        "s": "c",
        "v": 1500000
      },
      {
        "date": "28/06",
        "text": "Achat marchandises (moitié chèque bancaire)",
        "s": "c",
        "v": 600000
      }
    ]
  },
  {
    "id": "fac-ex-bac",
    "type": "facture",
    "ch": "facture",
    "title": "Facture de Doit — Entreprise BAC",
    "source": "Polycopié p. 54",
    "level": 1,
    "kind": "doit",
    "lines": [
      {
        "l": "Montant brut",
        "v": 500000,
        "given": true
      },
      {
        "l": "Rabais",
        "op": "-",
        "v": 50000
      },
      {
        "l": "Net commercial 1",
        "total": true,
        "v": 450000
      },
      {
        "l": "Remise 5 %",
        "op": "-",
        "p": 5,
        "v": 22500
      },
      {
        "l": "Net commercial 2",
        "total": true,
        "v": 427500
      },
      {
        "l": "Escompte 1 %",
        "op": "-",
        "p": 1,
        "v": 4275
      },
      {
        "l": "Net financier",
        "total": true,
        "v": 423225
      },
      {
        "l": "TVA 18 %",
        "op": "+",
        "p": 18,
        "v": 76181
      },
      {
        "l": "Net à payer",
        "total": true,
        "v": 499406
      }
    ]
  },
  {
    "id": "tva-liq-due",
    "type": "journal",
    "ch": "tva",
    "title": "Liquidation mensuelle de la TVA — Cas de TVA Due",
    "source": "Inspiré du cours",
    "level": 1,
    "context": "<p>Au 31 mai, la situation de la TVA de l'entreprise s'établit comme suit :<br>• TVA facturée (Compte 443) : 1 800 000 F CFA<br>• TVA récupérable sur achats (Compte 445) : 1 150 000 F CFA<br>Passez l'écriture de liquidation au journal.</p>",
    "ops": [
      {
        "date": "31/05",
        "text": "Liquidation de la TVA du mois de mai (TVA due : 650 000 F)",
        "lines": [
          {
            "a": "443",
            "l": "État, TVA facturée",
            "d": 1800000
          },
          {
            "a": "445",
            "l": "État, TVA récupérable",
            "c": 1150000
          },
          {
            "a": "4441",
            "l": "État, TVA due",
            "c": 650000
          }
        ],
        "note": "On solde les comptes 443 (au débit) et 445 (au crédit). Le solde résiduel de 650 000 F est crédité en 4441."
      }
    ]
  }
];

/* ── Glossaire des termes clés ─────────────────────────────── */
COURSE.glossary = [
  {
    "term": "Rabais",
    "def": "Réduction accordée exceptionnellement sur le prix de vente pour compenser un défaut de qualité, une non-conformité ou un retard de livraison."
  },
  {
    "term": "Remise",
    "def": "Réduction commerciale habituelle accordée en fonction du volume important d'achats ou de la fidélité/qualité du client."
  },
  {
    "term": "Ristourne",
    "def": "Réduction commerciale globale calculée sur l'ensemble des opérations réalisées avec un client pendant une période donnée (trimestre, année)."
  },
  {
    "term": "Escompte",
    "def": "Réduction financière accordée au client qui s'acquitte de sa dette avant l'échéance ou au comptant."
  },
  {
    "term": "Partie double",
    "def": "Principe fondamental selon lequel toute opération se traduit par au moins un débit et un crédit d'égal montant (Débit = Crédit)."
  },
  {
    "term": "Situation nette",
    "def": "Richesse réelle des propriétaires de l'entité : Actif réel diminué de l'ensemble des dettes exigibles (égale aux capitaux propres)."
  },
  {
    "term": "Amortissement",
    "def": "Constatation comptable de la perte irréversible de valeur d'une immobilisation résultant de l'usage, du temps ou du progrès technique."
  },
  {
    "term": "Provisions",
    "def": "Passif dont l'échéance ou le montant n'est pas fixé de façon précise (risque prévisible ou dépréciation probable)."
  },
  {
    "term": "Franco de port",
    "def": "Clause de vente signifiant que les frais de transport des marchandises sont intégralement pris en charge par le fournisseur."
  },
  {
    "term": "Débours",
    "def": "Avance de fonds effectuée par le vendeur pour le compte d'un tiers (ex: paiement direct d'un transporteur), réclamée à l'identique sur la facture."
  },
  {
    "term": "Consignation",
    "def": "Prêt d'un emballage récupérable contre le dépôt d'une somme de garantie (dette du fournisseur 4194 / créance du client 4094)."
  },
  {
    "term": "Effet de commerce",
    "def": "Titre négociable payable à court terme représentant une créance d'argent (Lettre de change ou Billet à ordre)."
  },
  {
    "term": "Agios",
    "def": "Ensemble des intérêts d'escompte et des commissions bancaires prélevés par la banque lors de la négociation d'un effet de commerce."
  },
  {
    "term": "TVA facturée",
    "def": "Taxe sur la valeur ajoutée collectée par l'entreprise auprès de ses clients lors de la vente de biens ou services (dette fiscale compte 443)."
  },
  {
    "term": "TVA récupérable",
    "def": "Taxe sur la valeur ajoutée payée par l'entreprise sur ses achats professionnels, déductible de la TVA collectée (compte 445)."
  }
];

/* ── Pièges fréquents d'examen & Astuces du Professeur ─────── */
COURSE.traps = [
  {
    "title": "L'escompte sur le port",
    "trap": "Calculer l'escompte financier après avoir ajouté les frais de port.",
    "rule": "L'escompte rémunère uniquement le paiement anticipé des marchandises : il se calcule TOUJOURS sur le Net commercial, AVANT l'addition du transport et de la TVA."
  },
  {
    "title": "Comptabilisation des 3R sur facture de doit",
    "trap": "Enregistrer les rabais, remises ou ristournes figurant sur la facture de doit dans les comptes 6019 ou 7019.",
    "rule": "Les 3R sur facture de doit ne sont JAMAIS comptabilisés. Les achats (601) et ventes (701) sont enregistrés directement pour leur Net commercial."
  },
  {
    "title": "Fournisseur d'immobilisation vs Fournisseur d'exploitation",
    "trap": "Utiliser le compte 401 lors de l'acquisition d'un matériel ou d'un véhicule à crédit.",
    "rule": "Le compte 401 concerne exclusivement les achats de marchandises et matières. Pour un bien durable (classe 2), il faut utiliser le compte 481 Fournisseurs d'investissements."
  },
  {
    "title": "Sens des comptes 4091 et 4191",
    "trap": "Confondre le compte d'avance versée et le compte d'avance reçue.",
    "rule": "4091 est un compte d'actif (créance sur le fournisseur jusqu'à livraison) alors que 4191 est un compte de passif (dette envers le client pour l'argent encaissé)."
  },
  {
    "title": "TVA sur emballages consignés",
    "trap": "Appliquer la TVA de 18 % sur le montant de la consignation d'emballages.",
    "rule": "La consignation est un simple prêt avec cautionnement financier. Elle n'est pas une vente et ne supporte JAMAIS la TVA."
  },
  {
    "title": "Sens normal du compte Banque créditeur",
    "trap": "Penser qu'un compte 521 ne peut jamais avoir de solde créditeur.",
    "rule": "En cas de découvert bancaire, le compte 521 présente un solde créditeur qui figure au passif du bilan (Trésorerie-Passif)."
  }
];

/* ── Badges & Récompenses de gamification ─────────────────── */
COURSE.badges = [
  {
    "id": "first_read",
    "icon": "book",
    "title": "Premier Pas",
    "desc": "Lire son premier chapitre de cours"
  },
  {
    "id": "all_read",
    "icon": "check",
    "title": "Érudit SYSCOHADA",
    "desc": "Lire l'intégralité des 11 chapitres"
  },
  {
    "id": "quiz_first",
    "icon": "bolt",
    "title": "Première Évaluation",
    "desc": "Terminer un premier quiz"
  },
  {
    "id": "quiz_ace",
    "icon": "target",
    "title": "Major de Promo",
    "desc": "Obtenir un score parfait de 100 % à un quiz"
  },
  {
    "id": "streak_3",
    "icon": "clock",
    "title": "Assiduité",
    "desc": "Réviser 3 jours consécutifs"
  },
  {
    "id": "ex_master",
    "icon": "calc",
    "title": "Praticien Comptable",
    "desc": "Résoudre et valider tous les exercices interactifs"
  },
  {
    "id": "calc_guru",
    "icon": "sort",
    "title": "Maître de la Facture",
    "desc": "Manipuler et valider le simulateur de facture"
  }
];


/* ── Banque de questions Vrai ou Faux ──────────────────────── */
COURSE.trueFalse = [
  {
    "q": "Le Tableau des flux de trésorerie (TFT) a remplacé le TAFIRE dans le SYSCOHADA révisé.",
    "a": 0,
    "e": "Vrai. Le SYSCOHADA révisé a supprimé le TAFIRE au profit du TFT pour analyser les flux de liquidités.",
    "ch": "generalites"
  },
  {
    "q": "Les réductions commerciales (3R) mentionnées sur une facture de Doit doivent être comptabilisées aux comptes 6019 ou 7019.",
    "a": 1,
    "e": "Faux. Les 3R sur facture de Doit ne se comptabilisent JAMAIS. Les achats et ventes sont enregistrés directement pour leur Net commercial.",
    "ch": "factures"
  },
  {
    "q": "L'escompte de règlement accordé se calcule sur le Net commercial, avant l'ajout du transport et de la TVA.",
    "a": 0,
    "e": "Vrai. L'escompte rémunère uniquement le règlement rapide des marchandises et ne porte jamais sur les frais accessoires comme le transport.",
    "ch": "factures"
  },
  {
    "q": "Le taux normal de la Taxe sur la Valeur Ajoutée (TVA) en vigueur en République du Bénin est de 20 %.",
    "a": 1,
    "e": "Faux. Au Bénin, le taux de TVA est fixé à 18 % pour l'ensemble des opérations imposables.",
    "ch": "tva"
  },
  {
    "q": "Le bilan d'ouverture d'un exercice doit obligatoirement correspondre au bilan de clôture de l'exercice précédent.",
    "a": 0,
    "e": "Vrai. C'est le principe intangible d'intangibilité du bilan d'ouverture posé par le SYSCOHADA.",
    "ch": "generalites"
  },
  {
    "q": "La consignation d'emballages récupérables supporte la TVA de 18 % au moment de la facturation.",
    "a": 1,
    "e": "Faux. La consignation constitue un simple prêt d'emballage assorti d'une caution financière : elle ne supporte jamais la TVA.",
    "ch": "emballages"
  },
  {
    "q": "L'acquisition d'un camion de livraison à crédit s'enregistre au crédit du compte 401 Fournisseurs.",
    "a": 1,
    "e": "Faux. Le compte 401 est réservé aux achats d'exploitation (marchandises/matières). Pour une immobilisation (classe 2), on crédite le 481 Fournisseurs d'investissements.",
    "ch": "cadre-comptable"
  },
  {
    "q": "Le résultat de l'exercice est égal à la somme des produits (classes 7 et 8) moins la somme des charges (classes 6 et 8).",
    "a": 0,
    "e": "Vrai. Résultat net = Total des Produits - Total des Charges.",
    "ch": "charges-produits"
  },
  {
    "q": "Dans un compte en T, la colonne Débit est conventionnellement située à droite et le Crédit à gauche.",
    "a": 1,
    "e": "Faux. La convention comptable universelle place toujours le Débit à GAUCHE et le Crédit à DROITE.",
    "ch": "compte"
  },
  {
    "q": "Un compte de banque (compte 521) peut présenter un solde créditeur en cas de découvert bancaire autorisé.",
    "a": 0,
    "e": "Vrai. En cas de découvert, le solde créditeur de la banque exprime une dette envers l'établissement financier et figure au passif du bilan.",
    "ch": "compte"
  },
  {
    "q": "Les frais de port forfaitaire facturés par le vendeur à son client sont enregistrés au crédit du compte 7071 Port, emballages perdus et autres frais facturés.",
    "a": 0,
    "e": "Vrai. Pour le fournisseur, la facturation forfaitaire du port constitue un produit accessoire rattaché à l'activité ordinaire (compte 7071).",
    "ch": "transport"
  },
  {
    "q": "Un solde de TVA est dit 'Crédit de TVA' lorsque la TVA facturée aux clients est supérieure à la TVA déductible.",
    "a": 1,
    "e": "Faux. Lorsque la TVA facturée est supérieure, il s'agit d'une 'TVA due / à payer' (compte 4441). Le Crédit de TVA (compte 4449) survient quand la TVA déductible est supérieure.",
    "ch": "tva"
  },
  {
    "q": "La lettre de change est émise par le créancier (tireur) qui ordonne au débiteur (tiré) de payer une somme à une échéance fixée.",
    "a": 0,
    "e": "Vrai. Contrairement au billet à ordre qui est souscrit par le débiteur, la lettre de change est tirée par le créancier.",
    "ch": "effets"
  },
  {
    "q": "Selon le principe de prudence, les plus-values potentielles doivent être comptabilisées immédiatement dès qu'elles sont probables.",
    "a": 1,
    "e": "Faux. La prudence impose de ne comptabiliser que les gains certains et définitivement réalisés, tout en provisionnant les risques et pertes probables.",
    "ch": "generalites"
  },
  {
    "q": "L'amortissement linéaire consiste à répartir la valeur amortissable d'un bien de manière égale sur toute sa durée d'utilité.",
    "a": 0,
    "e": "Vrai. L'annuité d'amortissement linéaire est constante d'un exercice à l'autre : Annuité = Valeur d'origine / Durée.",
    "ch": "cadre-comptable"
  }
];

/* ── Banque de Questions-Réponses directes de cours ─────────── */
COURSE.directQuestions = [
  {
    "q": "Définir le principe comptable de la partie double et énoncer son équation fondamentale.",
    "r": "La partie double est la règle fondamentale selon laquelle toute opération comptable affecte au moins deux comptes, avec une égalité permanente entre le montant inscrit au Débit (Emplois) et le montant inscrit au Crédit (Ressources). Équation fondamentale : Total Débit = Total Crédit.",
    "ch": "entite-partie-double"
  },
  {
    "q": "Quelle est la distinction fondamentale entre une charge d'Activité Ordinaire (AO) et une charge Hors Activité Ordinaire (HAO) selon le SYSCOHADA ?",
    "r": "Les charges d'Activités Ordinaires (classe 6) correspondent aux opérations récurrentes et cycliques liées à l'objet social de l'entité (achats, salaires, loyers, transports). Les charges HAO (compte 83) désignent les événements inhabituels, non récurrents et fortuits ne relevant pas de la gestion courante (catastrophes, pénalités exceptionnelles, destructions accidentelles).",
    "ch": "charges-produits"
  },
  {
    "q": "Détailler la cascade des réductions sur une facture de Doit et préciser l'assiette de calcul de l'escompte.",
    "r": "1. Montant brut HT.\n2. Déduction des réductions commerciales en cascade (Rabais, puis Remise, puis Ristourne) -> Obtention du Net Commercial.\n3. Déduction de la réduction financière (Escompte de règlement) -> Obtention du Net Financier.\nL'assiette de l'escompte est STRICTEMENT le dernier Net commercial, avant tout ajout de port ou de TVA.",
    "ch": "factures"
  },
  {
    "q": "Expliquer le mécanisme de liquidation mensuelle de la TVA et donner les comptes du Plan Comptable SYSCOHADA utilisés.",
    "r": "Chaque fin de mois, l'entreprise confronte la TVA collectée/facturée sur ses ventes (compte 4431 débité pour solde) et la TVA déductible sur ses achats (comptes 4451 et 4452 crédités pour solde), plus un éventuel crédit antérieur (4449).\n- Si TVA facturée > TVA déductible : Solde créditeur = TVA due à l'État (compte 4441).\n- Si TVA déductible > TVA facturée : Solde débiteur = Crédit de TVA à reporter (compte 4449).",
    "ch": "tva"
  },
  {
    "q": "Qu'est-ce qu'un port payé (ou débours) lors d'une expédition de marchandises et comment s'enregistre-t-il chez le fournisseur ?",
    "r": "Le port payé ou port débours est un transport sous-traité à un transporteur tiers, que le fournisseur paie d'avance pour le compte de son client. Lors de la facturation au client, il s'agit d'une récupération à l'identique de frais engagés : le fournisseur crédite le compte 7072 'Ports et frais accessoires refacturés' (ou le compte 612 débité préalablement) sans marge.",
    "ch": "transport"
  },
  {
    "q": "Citer les 4 états financiers annuels obligatoires et indissociables formant le Système Normal du SYSCOHADA.",
    "r": "1. Le Bilan (synthèse patrimoniale Actif / Passif).\n2. Le Compte de Résultat (Charges et Produits de l'exercice).\n3. Le Tableau des flux de trésorerie - TFT (mouvements de liquidités d'exploitation, d'investissement et de financement).\n4. Les Notes annexes (commentaires et détails chiffrés des méthodes).",
    "ch": "generalites"
  },
  {
    "q": "Différencier emballages perdus et emballages récupérables, et préciser le traitement comptable de la déconsignation avec boni.",
    "r": "Les emballages perdus sont vendus définitivement avec la marchandise (comptabilisés en charges 601 ou produits 701). Les emballages récupérables sont prêtés au client contre cautionnement (compte 4194).\nEn cas de restitution à un prix inférieur au montant consigné (déconsignation avec boni pour le fournisseur), la différence représente un gain pour le fournisseur (compte 7074 Bonis sur reprise d'emballages) assujetti à la TVA, et une charge pour le client (compte 6224 Malis sur emballages).",
    "ch": "emballages"
  },
  {
    "q": "Définir l'annuité d'amortissement constant et donner la formule de calcul de la Valeur Nette Comptable (VNC).",
    "r": "L'annuité d'amortissement linéaire est la dépréciation annuelle irréversible subie par une immobilisation du fait de l'usage ou du temps : Annuité = Valeur d'origine (VO) × Taux d'amortissement (ou VO / Durée en années).\nLa Valeur Nette Comptable représente la valeur résiduelle du bien à la clôture de l'exercice : VNC = Valeur d'origine HT - Amortissements cumulés.",
    "ch": "cadre-comptable"
  }
];
