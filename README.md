# Comptabilité Générale I — Plateforme PWA de Révision (SYSCOHADA)

Une application web progressive (PWA) moderne, interactive et complète pour l'apprentissage et la révision de l'**Initiation à la Comptabilité Générale I**, conforme au référentiel **SYSCOHADA révisé (OHADA)** et adaptée au programme universitaire de Licence I Informatique dispensé par le **Dr Rock Stanislas HINVI** (*Les Cours Sonou*, Calavi, République du Bénin).

---

## Fonctionnalités Clés

### 1. Cours Complets et Structurés (11 Chapitres)
- **Chapitre 1 : Généralités sur la comptabilité** (Historique de Luca Pacioli au SYSCOHADA 2017, les 4 états financiers indissociables, les 7 utilisateurs, livres obligatoires, les 3 familles de principes comptables).
- **Chapitre 2 : Le cadre comptable SYSCOHADA** (Architecture des 9 classes, lecture verticale et horizontale du bilan, constantes de codification décimale : rôle des chiffres 8 et 9, Plan Comptable d'Entreprise).
- **Chapitre 3 : Comptes de charges et de produits (AO / HAO)** (Distinction activités ordinaires et hors activités ordinaires, fonctionnement des classes 6, 7 et 8, équation du résultat net).
- **Chapitre 4 : L'entité, les flux et la partie double** (Typologie des flux réels, financiers et internes, analyse Emplois / Ressources, règle absolue d'équilibre Débit = Crédit).
- **Chapitre 5 : Le bilan** (Structure de l'Actif et du Passif, capitaux propres, situation nette, équilibre financier fondamental, cas pratique AZERD résolu).
- **Chapitre 6 : Le compte et son fonctionnement** (Terminologie, arrêt et réouverture, tracés schématique en T, à colonnes séparées et à colonnes mariées avec soldes).
- **Chapitre 7 : La facture, les réductions et les achats / ventes** (Factures de Doit et d'Avoir, cascade des réductions commerciales 3R et financière escompte, comptabilisation au Net commercial, schémas complets client/fournisseur, retours de marchandises et 3R hors facture 6019/7019).
- **Chapitre 8 : Les frais de transport** (Port forfaitaire 7071/6015, port débours / port payé 612/7072, clause franco de port, assiette de la TVA à 18 % et exclusion de l'escompte).
- **Chapitre 9 : La Taxe sur la Valeur Ajoutée (TVA)** (Mécanisme de collecte 443 et déduction 445, taux béninois de 18 %, liquidation mensuelle : TVA due 4441 et crédit de TVA 4449).
- **Chapitre 10 : Les emballages commerciaux** *(Complément au programme)* (Emballages perdus et récupérables, consignation sans TVA 4194/4094, déconsignation, bonis 7074 et malis 6224).
- **Chapitre 11 : Les effets de commerce** *(Complément au programme)* (Lettre de change et billet à ordre, création 412/402, encaissement, endossement, négociation à l'escompte et agios bancaires 675/631).

---

### 2. Exercices d'Application avec Correction Automatique
- **Saisie au Journal** : Validation ligne par ligne du numéro de compte SYSCOHADA, du sens Débit/Crédit et contrôle immédiat de l'équilibre de la partie double.
- **Factures en Cascade** : Remplissage guidé du montant brut au net à payer avec correction instantanée des calculs intermédiaires.
- **Cas réels intégrés** : Entreprises BAC, CHIC CHOC, AZERD, liquidation de la TVA.
- **Suivi de progression** : Mémorisation des exercices complétés dans le stockage local du navigateur (`localStorage`).

---

### 3. Outils et Simulateurs Interactifs
1. **Calculateur de Facture** : Calculez dynamiquement les remises en cascade, escomptes, frais de port et TVA, avec génération instantanée des écritures au journal chez l'acheteur et le vendeur.
2. **Simulateur de Compte en T** : Imputez des opérations au débit ou au crédit et observez l'évolution dynamique du solde.
3. **Fiches Mémos 3D & SRS** : Cartes mémoire interactives (Flashcards) avec effet 3D et algorithme de répétition espacée (Spaced Repetition System) pour optimiser la mémorisation à long terme.
4. **Jeu de Tri du Bilan** : Rangez les postes d'actif et de passif par glisser-déposer (Drag & Drop) pour tester vos réflexes d'analyse patrimoniale.
5. **Tableau d'Amortissement** : Simulation du plan d'amortissement linéaire selon le SYSCOHADA (taux, annuité constante, valeur nette comptable et écritures de dotation 681/28x).
6. **Bordereau de Déclaration de TVA** : Calcul mensuel automatisé confrontant TVA facturée et TVA déductible (sur immobilisations et sur charges), avec arbitrage TVA due (4441) ou crédit de TVA (4449).
7. **Générateur Infini d'Exercices** : Génération aléatoire d'opérations commerciales (achats/ventes avec remises, escomptes et ports) pour un entraînement autonome illimité.

---

### 4. Glossaire & Pièges Fréquents d'Examen
- **Glossaire Interactif (15 termes incontournables)** : Recherche instantanée par mot-clé pour maîtriser les concepts fondamentaux (Partie double, Image fidèle, Prudence, Continuité d'exploitation, Coût historique, etc.).
- **Guide des 6 Pièges Fréquents** : Analyse comparative (Erreur classique vs Règle juste) avec conseils pratiques pour éviter les zéros aux examens (calcul de l'escompte, TVA sur transport, règle Débit/Crédit, consignation d'emballages, etc.).

---

### 5. Tableau de Bord, Gamification & Évaluation
- **Streak Journalier** : Compteur de jours consécutifs d'étude pour encourager la régularité d'apprentissage.
- **Trophées & Badges d'Apprentissage** : 7 succès déblocables au fur et à mesure de votre progression (Premier pas, As du Quiz, Maître des calculs, Rat de bibliothèque, etc.).
- **Suivi de Maîtrise par Chapitre** : Barres d'avancement dynamiques visualisant l'assimilation du programme.
- **Sauvegarde & Restauration (JSON)** : Exportez votre progression pour la transférer entre smartphone et ordinateur sans créer de compte.
- **Générateur d'Examen Blanc (PDF)** : Générez en un clic un sujet d'examen officiel type avec QCM, cas pratique de synthèse et **corrigé officiel détachable** prêt à imprimer.

---

### 4. Quiz et Évaluations Multimodales
- **Quiz complet** : 52 questions à choix multiple couvrant l'ensemble du programme.
- **Mode Vrai ou Faux** : 15 affirmations clés du SYSCOHADA pour tester vos réflexes conceptuels avec justifications méthodologiques.
- **Questions de cours (Saisie obligatoire de l'étudiant)** : L'étudiant doit d'abord formuler et soumettre par écrit sa propre réponse avant de débloquer le corrigé officiel du professeur et la vérification des mots-clés attendus.
- **Série rapide** : 10 questions tirées aléatoirement pour une révision express.
- **Calculs** : Questions dédiées aux calculs arithmétiques comptables (réductions, TVA, résultat).
- **Examen blanc chronométré** : 20 questions variées avec note sur 20.
- **Mode « Mes erreurs »** : Enregistrement automatique des questions ratées pour vous entraîner dessus jusqu'à maîtrise complète.
- **Quiz ciblé par chapitre** : Évaluation personnalisée sur le chapitre de votre choix.

---

### 5. Générateur d'Examen Blanc & Corrigé Séparé (PDF)
- Génère en un clic des documents distincts conformes aux examens universitaires officiels :
  1. **Épreuve d'Examen Blanc (Sujet seul)** :
     - **Partie I : Questionnaire à Choix Multiple (QCM)** (tiré aléatoirement de la banque).
     - **Partie II : Questions Vrai ou Faux** sous forme de tableau d'émargement.
     - **Partie III : Questions de réflexion et définitions** avec lignes d'écriture réservées à la rédaction de l'étudiant.
     - **Partie IV : Cas pratique de synthèse** (Facturation en cascade et journalisation).
  2. **Corrigé Officiel et Grille de Notation (Document à part)** :
     - Détail de chaque réponse exacte avec justifications et règles SYSCOHADA.
     - Explications méthodologiques pour chaque Vrai/Faux.
     - Réponses modèles pour les questions de cours.
     - Calculs complets de la facture et imputations comptables au journal de la synthèse.
  3. **Bouton « Nouveau tirage »** pour régénérer un nouveau couple sujet/corrigé à tout moment.
- Compatible avec tous les téléphones (Android/iOS) et ordinateurs, sans blocage de fenêtres pop-up.

---

### 5. Fiches de Synthèse Prêtes à Imprimer
- Tous les points essentiels, définitions clés et schémas d'écritures réunis sur une seule page.
- **Feuille de style d'impression dédiée (`@media print`)** : Export PDF ou impression papier nette, sans barre de navigation, sans boutons ni distractions.

---

### 6. PWA Mobile & Hors-Ligne (Offline First)
- **Installable sur Android, iOS, Windows et macOS** comme une application native.
- **Mode hors ligne intégral** grâce au Service Worker (`sw.js`) : révisez sans connexion Internet ni consommation de données mobiles.
- Icônes adaptatives (Maskable icons) haute résolution conformes aux standards Android.

---

## Architecture du Projet

Le projet a été développé sans framework lourd ni dépendance externe superflue, garantissant une rapidité d'exécution maximale, une compatibilité universelle et une grande légèreté :

```text
Init_Compt_Gen_I/
├── index.html                  # Structure principale et intégration PWA
├── styles.css                  # Design moderne (mode sombre/clair, responsive, impression)
├── data.js                     # Base de données locale (11 chapitres, 102 comptes, 52 QCM, exercices)
├── app.js                      # Moteur applicatif (routage SPA sans rechargement, exercices, quiz)
├── manifest.json               # Manifeste PWA pour l'installation sur smartphone/desktop
├── sw.js                       # Service Worker v2 (mise en cache et support hors ligne)
├── icon-192.png                # Icône de l'application (192x192 px)
├── icon-512.png                # Icône haute résolution (512x512 px)
├── icon-maskable-512.png       # Icône adaptative pour lanceurs Android
├── .gitignore                  # Exclusion des fichiers temporaires
└── README.md                   # Documentation du projet
```

---

## Démarrage Rapide

### Utilisation locale
Aucun serveur ni installation préalable (`npm`, `pip`, etc.) n'est requis. Il suffit d'ouvrir le fichier `index.html` dans n'importe quel navigateur moderne (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari) :

```bash
# Cloner le dépôt
git clone https://github.com/assogbamarcos645-pixel/compta-guide.git

# Accéder au dossier
cd compta-guide

# Ouvrir directement dans le navigateur
# Double-cliquez sur index.html ou utilisez un serveur local statique :
npx serve .
# ou avec python :
python -m http.server 8000
```

### Installation sur Mobile (Android / iOS)
1. Ouvrez le site déployé dans votre navigateur mobile (**Google Chrome** sur Android ou **Safari** sur iPhone).
2. Cliquez sur le menu du navigateur (les **trois points** sur Chrome ou le bouton de **partage** sur Safari).
3. Sélectionnez **« Installer l'application »** ou **« Sur l'écran d'accueil »**.
4. L'application est installée sur votre smartphone et accessible hors ligne à tout moment.

---

## Raccourcis Clavier Pratiques
- <kbd>Ctrl</kbd> + <kbd>K</kbd> ou <kbd>/</kbd> : Ouvrir la recherche rapide globale (comptes, notions, chapitres).
- <kbd>Échap</kbd> : Fermer la recherche ou les fenêtres contextuelles.
- <kbd>A</kbd>, <kbd>B</kbd>, <kbd>C</kbd>, <kbd>D</kbd> + <kbd>Entrée</kbd> : Répondre et valider dans le Quiz.
- <kbd>Espace</kbd> : Retourner une fiche mémo 3D.
- <kbd>1</kbd> / <kbd>2</kbd> : Marquer une fiche mémo comme « À revoir » ou « Je savais ».

---

## Auteur & Crédits

- **Conception & Développement Web** : **ASSOGBA Marcos** — Développeur Web Full-Stack (*Abomey-Calavi, Bénin*).
- **Programme Académique & Enseignement** : Cours officiel « *Initiation à la Comptabilité Générale I* » dispensé par le **Dr Rock Stanislas HINVI**, Enseignant-Chercheur — *Les Cours Sonou* (Site de Calavi), Filière Informatique, Licence I (Année académique 2025-2026).
- **Référentiel Juridique et Comptable** : **SYSCOHADA révisé** — Acte Uniforme relatif au Droit Comptable et à l'Information Financière (AUDCIF / OHADA).

---

*© 2026 — Comptabilité Générale I. Tous droits réservés.*
