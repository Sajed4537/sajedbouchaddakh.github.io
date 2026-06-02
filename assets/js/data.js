'use strict';

window.DATA = {

  /* ══════════════════════════════════════════════════
     PROJECTS — cartes
  ══════════════════════════════════════════════════ */
  projects: {
    tech: [
      {
        id: 'coffra',
        title: 'CoffraBIM',
        nature: 'Plugin Revit (Automatisation 2D)',
        status: 'Projet professionnel',
        years: '2023 – 2025',
        buttons: [
          { label: 'Plus de détails',      action: 'detail', key: 'coffra',     style: 'outline' },
          { label: 'Les outils CoffraBIM', action: 'slider', key: 'coffraTools', style: 'blue'   },
        ],
      },
      {
        id: 'bioss',
        title: 'Plateforme BIOSS',
        nature: 'Plateforme web (support, docs, retours)',
        status: 'Projet professionnel',
        years: '2024 – 2025',
        buttons: [
          { label: 'Plus de détails', action: 'detail', key: 'bioss',      style: 'outline' },
          { label: 'Voir la vidéo',   action: 'slider', key: 'biossVideo', style: 'blue'   },
        ],
      },
      {
        id: 'cotatview',
        title: 'Cot-At-View (MVP mobile)',
        nature: 'Application mobile (.NET MAUI)',
        status: 'Projet personnel',
        years: '2025 - en cours',
        buttons: [
          { label: 'Plus de détails',   action: 'detail', key: 'cotatview',      style: 'outline' },
          { label: 'Voir la vidéo',     action: 'slider', key: 'cotatviewVideo', style: 'blue'    },
          { label: "Voir l'image (MVP)",action: 'slider', key: 'cotatviewImage', style: 'outline', full: true },
        ],
      },
      {
        id: 'fs10',
        title: 'Projet Full-Stack C# - 10 modules',
        nature: 'Repo GitHub preuve de mes compétences',
        status: 'Projet personnel',
        years: '2025 - en cours',
        buttons: [
          { label: 'Voir sur GitHub', action: 'href',   href: 'https://github.com/Sajed4537/fullstack-csharp-modules', style: 'outline' },
          { label: 'Les modules',     action: 'slider', key: 'fs10', style: 'blue' },
        ],
      },
    ],
    btp: [
      {
        id: 'gabaritBioss',
        title: 'Gabarit BIOSS',
        nature: 'Gabarit Revit',
        status: 'Projet professionnel',
        years: '2023 – 2025',
        buttons: [
          { label: 'Plus de détails', action: 'detail', key: 'gabaritBioss', style: 'outline' },
        ],
      },
      {
        id: 'coordBIM',
        title: 'Coordination/Modélisation BIM',
        nature: 'Projets BIM/BTP',
        status: 'Projets professionnels',
        years: '2023 – 2025',
        buttons: [
          { label: 'Plus de détails', action: 'detail', key: 'coordBIM', style: 'outline' },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════
     DETAIL MODALS
  ══════════════════════════════════════════════════ */
  details: {
    coffra: {
      title: 'CoffraBIM (plugin Revit)',
      objective: "Automatiser la production de plans d'exécution 2D dans Revit et accompagner la transition numérique du bureau d'études.",
      sections: [
        {
          title: 'Fonctionnalités principales',
          items: [
            'Génération automatique de vues (plans, coupes)',
            'Placement intelligent des vues sur feuilles',
            'Habillage dynamique (annotations, repères, cotations)',
          ],
        },
        {
          title: 'Organisation et méthodologie',
          items: [
            'Analyse fonctionnelle approfondie avec les utilisateurs finaux',
            'Conception centrée utilisateur (Agile, sprints courts, retours fréquents)',
            'Documentation technique claire et structurée',
            'Tests en conditions réelles &amp; intégration continue des retours',
          ],
        },
        {
          title: 'Environnement technique',
          items: ['C#', '.NET Framework', 'Windows Forms', 'Visual Studio', 'Revit API (Autodesk)'],
        },
        {
          title: 'Compétences mobilisées',
          items: ['Gestion de projet technique', 'Méthodologie Agile', 'Sprints itératifs', 'Suivi des retours utilisateurs'],
        },
      ],
      note: "R&amp;D CoffraBIM — 9 outils au service de l'automatisation : une étude interne estime jusqu'à <span class=\"font-semibold\">~98&nbsp;%</span> d'automatisation du processus d'extraction de documentation 2D à partir des maquettes.",
    },

    bioss: {
      title: 'Plateforme BIOSS',
      objective: 'Centraliser le support technique, les retours utilisateurs et la documentation liée au plugin CoffraBIM.',
      sections: [
        {
          title: 'Fonctionnalités principales',
          items: [
            'Guides illustrés et tutoriels pas-à-pas intégrés à la plateforme',
            "Documentation technique pour l'accompagnement utilisateur",
            "Formulaire d'amélioration connecté à une base de données interne",
            'Liaison directe avec le plugin CoffraBIM pour faciliter l\'accès au support',
          ],
        },
        {
          title: 'Organisation et méthodologie',
          items: [
            'Analyse des besoins récurrents exprimés par les utilisateurs internes',
            'Modélisation des données pour structurer les retours et les formulaires',
            'Déploiement cloud (Azure) avec mises à jour progressives',
            'Amélioration continue selon les feedbacks reçus',
          ],
        },
        {
          title: 'Environnement technique',
          items: ['C#', 'HTML', 'CSS', 'ASP.NET Core', 'Razor Pages', 'Entity Framework', 'SQLite', 'SQL Server', 'Visual Studio', 'Azure'],
        },
        {
          title: 'Compétences mobilisées',
          items: ['Conception de base de données', 'Développement web fullstack', 'Documentation technique', 'Déploiement cloud', 'Agilité et adaptation continue'],
        },
      ],
      note: "La plateforme BIOSS est une solution destinée à accompagner les équipes de BIOSS dans leur transition numérique. Elle centralise l'accompagnement autour de CoffraBIM et connecte directement les utilisateurs au support.",
    },

    cotatview: {
      title: 'Cot-At-View (application mobile) — Projet en cours',
      objective: null,
      sections: [
        {
          title: 'Objectif',
          items: [
            'Moderniser la consultation et la gestion de plans de chantier sur site via mobile.',
            "Réduire papier/encre et améliorer la qualité des documents d'exécution.",
          ],
        },
        {
          title: 'Fonctionnalités',
          items: ['Visualisation de plans PDF', 'Annotations et cotations manuelles', 'Gestion simple de la documentation'],
        },
        {
          title: 'Organisation',
          items: [
            'Autoformation continue, autonomie multi-plateforme.',
            'Tests réguliers sur simulateur.',
            'Code structuré en composants réutilisables + doc interne.',
          ],
        },
        {
          title: 'Environnement technique',
          items: ['C#', 'XAML', '.NET MAUI', 'Syncfusion', 'Visual Studio'],
        },
        {
          title: 'Compétences mobilisées',
          items: ['Développement mobile en autoformation', 'Prototypage rapide &amp; structuration modulaire', 'Gestion de projet individuel', 'Montée en compétence sur frameworks modernes'],
          fullWidth: true,
        },
      ],
    },

    gabaritBioss: {
      title: 'Gabarit BIOSS (Revit)',
      objective: "Uniformiser et fiabiliser la production des projets BIM au sein du bureau d'études grâce à la création d'un gabarit Revit complet et structuré.",
      sections: [
        {
          title: 'Contenu et structure du gabarit',
          items: [
            'Organisation hiérarchique claire des vues, feuilles et familles',
            'Création d\'un système de nomenclatures et filtres de vues standardisés',
            "Intégration d'un jeu de gabarits de vues adaptés aux phases d'étude et d'exécution",
            'Définition d\'une charte graphique cohérente (types de lignes, textes, cotations, hachures, etc.)',
          ],
        },
        {
          title: 'Missions principales',
          items: [
            "Audit des pratiques internes et analyse des besoins des projeteurs",
            "Structuration de la bibliothèque d'entreprise (familles, cartouches, symboles)",
            'Rationalisation des paramétrages pour assurer homogénéité et gain de temps',
            "Rédaction d'un guide d'utilisation du gabarit pour faciliter sa prise en main",
          ],
        },
        {
          title: 'Résultats et bénéfices',
          items: [
            'Standardisation des livrables BIM et réduction des erreurs de production',
            'Gain significatif en cohérence graphique et en productivité',
            'Adoption rapide par les équipes grâce à une documentation claire et aux retours utilisateurs',
          ],
        },
        {
          title: 'Outils et environnement',
          items: ['Revit'],
        },
      ],
      note: "Ce gabarit constitue désormais la base de travail des projets BIM du bureau d'études BIOSS, garantissant une production homogène, plus rapide et plus fiable pour l'ensemble des équipes.",
    },

    coordBIM: {
      title: 'Coordination &amp; Modélisation BIM',
      objective: "Assurer la production, la cohérence et la coordination technique des maquettes BIM sur plusieurs projets de construction, en phase de conception et d'exécution.",
      sections: [
        {
          title: 'Projets réalisés',
          items: [
            '<span class="font-semibold">TRUMPF – Villepinte :</span> Immeuble de bureaux (phase exécution)',
            '<span class="font-semibold">Marignan – Montreuil :</span> Ensemble mixte bureaux / logements',
            '<span class="font-semibold">SEQENS – Marly-le-Roi :</span> Résidence de 18 logements',
          ],
        },
        {
          title: 'Missions principales',
          items: [
            "Modélisation des structures béton armé selon les plans d'exécution",
            'Coordination interdisciplinaire avec les autres corps d\'état techniques',
            'Extraction et mise en forme des plans de coffrage et coupes à partir des maquettes numériques',
            'Participation aux réunions de synthèse et gestion des échanges techniques',
            'Contribution à la mise en place des bonnes pratiques de modélisation au sein du BET',
          ],
        },
        {
          title: 'Compétences mobilisées',
          items: [
            'Maîtrise avancée de Revit pour la modélisation structurelle',
            'Gestion de la cohérence et des interactions entre disciplines',
            "Lecture et interprétation des plans de conception et d'exécution",
            'Communication technique et travail collaboratif',
            'Production documentaire conforme aux standards internes',
          ],
        },
        {
          title: 'Outils et environnement',
          items: ['Revit', 'AutoCAD', 'Navisworks', 'Autodesk Construction Cloud (ACC)'],
        },
      ],
      note: "Cette expérience m'a permis de renforcer mes compétences en modélisation et en coordination BIM, d'acquérir une vision complète du cycle de production en exécution, et de collaborer efficacement avec les différents intervenants pour garantir la qualité et la cohérence des livrables.",
    },
  },

  /* ══════════════════════════════════════════════════
     SLIDER OVERLAYS — projets
  ══════════════════════════════════════════════════ */
  sliders: {
    coffraTools: {
      labels: ['AutoPlan','AutoCoupe','AutoCote Plan','AutoCote Coupe','AutoNuméro','AutoÉtiquette Coupe','AutoCoffrage','AutoCarnet','ManuPlan','ManuCoupe','Multi-version Revit'],
      slides: [
        { title: 'AutoPlan',             video: 'assets/video/coffraBIM_AutoPlan.mp4',             desc: "Création rapide des vues de plans avec application des gabarits et structuration automatique." },
        { title: 'AutoCoupe',            video: 'assets/video/coffraBIM_AutoCoupe.mp4',            desc: "Création automatique de coupes sur les éléments du modèle, avec paramétrage avancé." },
        { title: 'AutoCote Plan',        video: 'assets/video/coffraBIM_AutoCote_Plan.mp4',        desc: "Cotation automatique sur les vues en plan." },
        { title: 'AutoCote Coupe',       video: 'assets/video/coffraBIM_AutoCote_Coupe.mp4',       desc: "Cotation automatique sur les vues en coupe." },
        { title: 'AutoNuméro',           video: 'assets/video/coffraBIM_AutoNumero.mp4',           desc: "Numérotation automatique des éléments selon plusieurs logiques définies." },
        { title: 'AutoÉtiquette Coupe',  video: 'assets/video/coffraBIM_AutoEtiquette_Coupe.mp4', desc: "Étiquetage automatique des éléments dans les vues de coupe." },
        { title: 'AutoCoffrage',         video: 'assets/video/coffraBIM_AutoCoffrage.mp4',         desc: "Superposition automatique des vues de plans (fonds de plans et impacts) pour le coffrage." },
        { title: 'AutoCarnet',           video: 'assets/video/coffraBIM_AutoCarnet.mp4',           desc: "Placement automatique des coupes sur des feuilles pour générer un carnet de coupes organisé." },
        { title: 'ManuPlan',             video: 'assets/video/coffraBIM_ManuPlan.mp4',             desc: "Faciliter le placement des vues de plan sur des feuilles existantes ou à créer, sans navigation manuelle dans l'arborescence." },
        { title: 'ManuCoupe',            video: 'assets/video/coffraBIM_ManuCoupe.mp4',            desc: "Faciliter le placement des coupes sur des feuilles existantes ou à créer, de manière automatisée." },
        { title: 'Multi-version Revit',  video: 'assets/video/coffraBIM_Multi_Version.mp4',       desc: "CoffraBIM est disponible sur plusieurs versions de Revit (gestion du multi-versioning)." },
      ],
    },

    biossVideo: {
      labels: ['Plateforme BIOSS'],
      slides: [
        { title: 'Plateforme BIOSS', video: 'assets/video/coffraBIM_Plateforme_Bioss.mp4', desc: "Une plateforme conçue pour accompagner l'adoption de CoffraBIM et soutenir la transition numérique." },
      ],
    },

    cotatviewVideo: {
      labels: ['Cot-At-View'],
      slides: [
        { title: 'Cot-At-View (MVP)', video: 'assets/video/video_mvp_CotAtView.mp4', videoMobile: true, desc: "Application mobile pour consulter des plans PDF sur chantier, annoter/coter manuellement et gérer la documentation." },
      ],
    },

    cotatviewImage: {
      labels: ['Cot-At-View'],
      slides: [
        { title: 'Prototype visuel', image: 'assets/image/mvp_CotAtView.png', imageAlt: 'Cot-At-View MVP', desc: "Aperçu visuel du MVP : écran de chargement illustrant l'identité graphique de l'application." },
      ],
    },

    fs10: {
      labels: ['M1 - Fondations POO','M2 - Collections & LINQ','M3 - SOLID & Patterns','M4 - ASP.NET Core MVC','M4.5 - Fondamentaux SQL','M5 - SQL & EF Core','M6 - Auth & Sécurité','M7 - API REST, Swagger & JWT','M8 - Front-end','M9 - Qualité & Tests','M10 - DevOps & Déploiement'],
      slides: [
        {
          type: 'module',
          objectives: [
            'Concevoir des <strong>classes &amp; objets</strong> (état + comportements)',
            '<strong>Encapsulation</strong> : propriétés contrôlées',
            '<strong>Héritage &amp; polymorphisme</strong>',
            '<strong>Interfaces &amp; classes abstraites</strong>',
            'Gestion des <strong>exceptions</strong> &amp; <strong>validation</strong> des entrées',
          ],
          exercises: [
            { label: 'ex01 - classes &amp; objects',                  url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/exercices/ex01-classes-and-objects/src/ClassesAndObjects.App' },
            { label: 'ex02 - encapsulation &amp; validation',         url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/exercices/ex02-encapsulation-and-validation/src/EncapsulationAndValidation.App' },
            { label: 'ex03 - inheritance &amp; polymorphism',         url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/exercices/ex03-inheritance-and-polymorphism/src/InheritanceAndPolymorphism.App' },
            { label: 'ex04 - interfaces &amp; abstract classes',      url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/exercices/ex04-interfaces-and-abstract-classes/src/InterfacesAndAbstractClasses.App' },
            { label: 'ex05 - advanced polymorphism &amp; collections', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/exercices/ex05-advanced-polymorphism-and-collections/src/AdvancedPolymorphismAndCollections.App' },
            { label: 'ex06 - exceptions &amp; validation',            url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/exercices/ex06-exceptions-and-validation/src/ExceptionsAndValidation.App' },
          ],
          project: { label: 'Projet « Bibliothèque » (console)', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/01-poo/project/src/OopFundamentals.App', desc: '— gestion de livres, emprunts, règles simples' },
        },
        {
          type: 'module',
          objectives: [
            'Collections .NET : <strong>List</strong>, <strong>Dictionary</strong>, <strong>HashSet</strong>',
            '<strong>Égalité &amp; hashcode</strong> (<code>Equals</code>/<code>GetHashCode</code>)',
            '<strong>LINQ</strong> : <code>Where</code>, <code>Select</code>, <code>GroupBy</code>, <code>OrderBy</code>…',
          ],
          exercises: [
            { label: 'ex01 - list manipulation',    url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/02-collections-linq/exercices/ex01-list-manipulation/src/ListManipulation.App' },
            { label: 'ex02 - dictionary basics',    url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/02-collections-linq/exercices/ex02-dictionary-basics/src/DictionaryBasics.App' },
            { label: 'ex03 - hashset &amp; equality', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/02-collections-linq/exercices/ex03-hashset-and-equality/src/HashSetAndEquality.App' },
            { label: 'ex04 - LINQ introduction',    url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/02-collections-linq/exercices/ex03-hashset-and-equality/src/HashSetAndEquality.App' },
            { label: 'ex05 - LINQ practice',        url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/02-collections-linq/exercices/ex05-linq-practice/src/LinqPractice.App' },
          ],
          project: { label: 'Projet « Catalogue » (console)', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/02-collections-linq/project/src/MovieCatalog.App', desc: '— tri, recherche et stats via LINQ' },
        },
        {
          type: 'module',
          objectives: [
            'Principes <strong>SOLID</strong> : SRP, OCP, LSP, ISP, DIP',
            '<strong>Strategy</strong> : remises panier',
            '<strong>Decorator</strong> : options supplémentaires',
            '<strong>Factory Method</strong> : création expéditeur',
            '<strong>Adapter</strong> : lecture CSV/XML',
            '<strong>Repository &amp; Unit of Work</strong> : persistance bug-tracker',
          ],
          exercises: [
            { label: 'ex01 - SOLID refactor (movie catalog)',      url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/exercices/ex01-solid-refactor-movie-catalog/src/SolidRefactorMovieCatalog.App' },
            { label: 'ex02 - Pattern Strategy',                    url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/exercices/ex02-pattern-strategy/src/PatternStrategy.App' },
            { label: 'ex03 - Pattern Decorator',                   url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/exercices/ex03-pattern-decorator/src/PatternDecorator.App' },
            { label: 'ex04 - Pattern Factory Method',              url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/exercices/ex04-pattern-factory-method/src/PatternFactoryMethod.App' },
            { label: 'ex05 - Pattern Repository &amp; Unit of Work', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/exercices/ex05-repository-and-unit-of-work/src/RepositoryAndUnitOfWork.App' },
            { label: 'ex06 - Pattern Adapter',                     url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/exercices/ex06-pattern-adapter/src/PatternAdapter.App' },
          ],
          project: { label: 'Projet « Panier E-commerce »', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/03-solid-patterns/project/src/EcommerceCart.App', desc: '— remises, livraisons, persistance (mock)' },
        },
        {
          type: 'module',
          objectives: [
            '<strong>ASP.NET Core MVC</strong> : pipeline HTTP, contrôleurs, Razor views, routing',
            '<strong>Formulaires</strong> : model binding, validation, DataAnnotations',
            '<strong>ViewModels</strong> : séparation saisie / domaine',
            '<strong>TempData &amp; PRG</strong> : redirections et messages flash',
            '<strong>Tag Helpers</strong> &amp; <strong>Partials</strong> : factorisation Razor',
            '<strong>Injection de dépendances</strong> : services In-Memory (DI)',
            '<strong>Architecture MVC complète</strong> : Controllers / Views / ViewModels / Services',
          ],
          exercises: [
            { label: 'ex01 - Hello MVC',                      url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04-aspnet-mvc/exercices/ex01-hello-mvc' },
            { label: 'ex02 - Routing &amp; Parameters',       url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04-aspnet-mvc/exercices/ex02-routing-and-parameters' },
            { label: 'ex03 - Forms &amp; DataAnnotations',    url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04-aspnet-mvc/exercices/ex03-forms-and-dataannotations' },
            { label: 'ex04 - ViewModels &amp; Server Validation', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04-aspnet-mvc/exercices/ex04-viewmodels-and-server-validation' },
            { label: 'ex05 - Partials &amp; Tag Helpers',     url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04-aspnet-mvc/exercices/ex05-partials-and-tag-helpers' },
          ],
          project: { label: 'Projet « E-commerce MVC »', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04-aspnet-mvc/project/src/CatalogueMvc.App', desc: "— adaptation d'une application console en plateforme web MVC, intégrant les patterns (Repository, Unit of Work, Strategy, Decorator, Adapter)" },
        },
        {
          type: 'module',
          objectives: [
            '<strong>SQL Server Fundamentals</strong> : création et gestion de bases de données',
            '<strong>Modélisation relationnelle</strong> : relations 1→N entre <code>Authors</code>, <code>Books</code> et <code>Loans</code>',
            '<strong>Langage SQL</strong> : <code>SELECT</code>, <code>JOIN</code>, <code>WHERE</code>, <code>GROUP BY</code>, agrégations',
            '<strong>CRUD complet</strong> : insertion, lecture, mise à jour et suppression avec logique métier',
            '<strong>Clés étrangères</strong> &amp; contraintes : intégrité référentielle et dépendances',
            '<strong>Indexation</strong> : création d\'un index non-clustered pour optimiser les recherches',
            '<strong>Plans d\'exécution</strong> : analyse du passage de <em>Clustered Scan</em> à <em>Index Seek</em>',
          ],
          exercises: [
            { label: 'ex01 - DB Structure Basics',         url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04.5-sql-fundamentals/exercises/ex01-db-structure-basics' },
            { label: 'ex02 - Create Tables',               url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04.5-sql-fundamentals/exercises/ex02-create-tables' },
            { label: 'ex03 - CRUD Operations',             url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04.5-sql-fundamentals/exercises/ex03-crud-operations' },
            { label: 'ex04 - Joins &amp; Relations',       url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04.5-sql-fundamentals/exercises/ex04-joins-and-relations' },
            { label: 'ex05 - Indexes &amp; Optimization',  url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04.5-sql-fundamentals/exercises/ex05-indexes-and-optimization' },
          ],
          project: { label: 'Projet « Library Management System »', url: 'https://github.com/Sajed4537/fullstack-csharp-modules/tree/main/modules/04.5-sql-fundamentals/project', desc: "— création d'une base complète de gestion de bibliothèque avec schéma relationnel, opérations CRUD, indexation et optimisation des performances dans SQL Server Management Studio (SSMS)." },
        },
        { type: 'wip' },
        { type: 'wip' },
        { type: 'wip' },
        { type: 'wip' },
        { type: 'wip' },
        { type: 'wip' },
      ],
    },
  },

  /* ══════════════════════════════════════════════════
     À PROPOS — tuiles
  ══════════════════════════════════════════════════ */
  apropos: [
    { title: 'Compétences (Informatique)', desc: 'Langages, frameworks, bases de données, outils…', key: 'infoSkills' },
    { title: 'Compétences (BTP/BIM)',      desc: 'Logiciels BIM/SIG',                               key: 'bimSkills'  },
    { title: 'Langues',                    desc: 'Mes langues',                                      key: 'langues'    },
    { title: 'Soft skills',                desc: 'Mes soft skills',                                  key: 'softSkills' },
    { title: 'Hobbies',                    desc: 'Mes hobbies',                                      key: 'hobbies'    },
  ],

  /* ══════════════════════════════════════════════════
     SKILL SLIDERS
  ══════════════════════════════════════════════════ */
  skillSliders: {
    infoSkills: {
      title: 'Compétences — Informatique',
      labels: ['Langages','Frameworks & bibliothèques','Bases de données','Outils','Types de développement','Cloud','API & extensions','Architecture','Version Control'],
      slides: [
        {
          title: 'Langages Informatiques',
          logos: [
            { src: 'assets/image/c.png',          alt: 'C#'         },
            { src: 'assets/image/python.png',      alt: 'Python'     },
            { src: 'assets/image/javascript.png',  alt: 'JavaScript' },
            { src: 'assets/image/html.png',        alt: 'HTML'       },
            { src: 'assets/image/css.png',         alt: 'CSS'        },
            { src: 'assets/image/xaml.png',        alt: 'XAML'       },
          ],
          items: ['C#', 'Python', 'JavaScript', 'HTML', 'CSS', 'XAML'],
        },
        {
          title: 'Frameworks & bibliothèques',
          logos: [
            { src: 'assets/image/net.png',           alt: '.NET'             },
            { src: 'assets/image/net_core.png',      alt: '.NET Core'        },
            { src: 'assets/image/maui.png',          alt: '.NET MAUI'        },
            { src: 'assets/image/asp_net.png',       alt: 'ASP.NET'          },
            { src: 'assets/image/windows_forms.png', alt: 'Windows Forms'    },
            { src: 'assets/image/entity.png',        alt: 'Entity Framework' },
          ],
          items: ['.NET', '.NET Core', '.NET MAUI', 'ASP.NET', 'Razor Pages', 'Windows Forms', 'Entity Framework'],
        },
        {
          title: 'Bases de données',
          logos: [
            { src: 'assets/image/sql_lite.png',   alt: 'SQLite',     bg: true },
            { src: 'assets/image/sql_server.png', alt: 'SQL Server', bg: true },
          ],
          items: ['SQLite', 'SQL Server'],
        },
        {
          title: 'Outils',
          logos: [
            { src: 'assets/image/visual_studio.png', alt: 'Visual Studio',      bg: true },
            { src: 'assets/image/vscode.png',        alt: 'Visual Studio Code', bg: true },
            { src: 'assets/image/inno_setup.png',    alt: 'Inno Setup',         bg: true },
          ],
          items: ['Visual Studio', 'Visual Studio Code', 'Inno Setup'],
        },
        {
          title: 'Types de développement',
          logos: [
            { src: 'assets/image/web.png',     alt: 'Web',           bg: true },
            { src: 'assets/image/desktop.png', alt: 'Desktop (.exe)', bg: true },
            { src: 'assets/image/mobile.png',  alt: 'Mobile',        bg: true },
          ],
          items: ['Web', 'Desktop (.exe)', 'Mobile'],
        },
        {
          title: 'Cloud',
          logos: [
            { src: 'assets/image/azure.png', alt: 'Azure', bg: true },
          ],
          items: ['Azure'],
        },
        {
          title: 'API & extensions',
          logos: [
            { src: 'assets/image/revit_api.png', alt: 'Revit API', bg: true },
            { src: 'assets/image/pyrevit.png',   alt: 'pyRevit',   bg: true },
            { src: 'assets/image/rest_api.png',  alt: 'API REST',  bg: true },
          ],
          items: ['Revit API', 'pyRevit', 'API REST'],
        },
        {
          title: 'Architecture (CF Module 3)',
          logos: [
            { src: 'assets/image/SOLID.png',          alt: 'SOLID',           bg: true },
            { src: 'assets/image/DesignPatterns.png',  alt: 'Design Patterns', bg: true },
          ],
          items: ['SOLID', 'Design Patterns : Adapter, Strategy, Decorator, Repository + Unit of Work, Factory Method'],
        },
        {
          title: 'Version Control & Collaboration',
          logos: [
            { src: 'assets/image/Git.png',    alt: 'Git',    bg: true },
            { src: 'assets/image/GitHub.png', alt: 'GitHub', bg: true },
          ],
          items: ['Git', 'GitHub'],
        },
      ],
    },

    bimSkills: {
      title: 'Compétences — BIM & BTP',
      labels: ['Logiciels BIM & CAO', 'Logiciels SIG'],
      slides: [
        {
          title: 'Logiciels BIM & CAO',
          intro: 'Maîtrise des outils de modélisation, coordination et production BIM :',
          logos: [
            { src: 'assets/image/revit.png',      alt: 'Revit',                      bg: true },
            { src: 'assets/image/dynamo.png',     alt: 'Dynamo',                     bg: true },
            { src: 'assets/image/autocad.png',    alt: 'AutoCAD',                    bg: true },
            { src: 'assets/image/navisworks.png', alt: 'Navisworks',                 bg: true },
            { src: 'assets/image/acc.png',        alt: 'Autodesk Construction Cloud', bg: true },
          ],
          items: [
            '<span class="font-semibold">Revit :</span> Modélisation structurelle, création de gabarits et extraction documentaire',
            '<span class="font-semibold">Dynamo :</span> Automatisation de tâches et scripts de paramétrage',
            '<span class="font-semibold">AutoCAD :</span> Production de détails techniques et mise en plan 2D',
            '<span class="font-semibold">Navisworks :</span> Coordination interdisciplinaire et détection de conflits',
            '<span class="font-semibold">Autodesk Construction Cloud (ACC) :</span> Gestion documentaire collaborative',
          ],
        },
        {
          title: 'Logiciels SIG',
          intro: "Compétences dans la gestion et l'analyse de données géospatiales appliquées aux projets techniques :",
          logos: [
            { src: 'assets/image/arcgis_pro.png',    alt: 'ArcGIS Pro',    bg: true },
            { src: 'assets/image/arcgis_online.png', alt: 'ArcGIS Online', bg: true },
            { src: 'assets/image/qgis.png',          alt: 'QGIS',          bg: true },
          ],
          items: [
            '<span class="font-semibold">ArcGIS Pro :</span> Analyse spatiale, création de cartes et gestion de couches de données',
            '<span class="font-semibold">ArcGIS Online :</span> Publication et partage de données géographiques en ligne',
            '<span class="font-semibold">QGIS :</span> Traitement et exploitation de données topographiques',
          ],
        },
      ],
    },

    langues: {
      title: 'Langues',
      labels: ['Langues'],
      slides: [
        {
          title: 'Compétences linguistiques',
          image: 'assets/image/langues.jpg',
          imageAlt: 'Langues',
          items: [
            'Français — <span class="font-semibold">Langue maternelle</span>',
            'Anglais — <span class="font-semibold">C1</span> (professionnel)',
            'Arabe littéraire — <span class="font-semibold">Langue maternelle</span>',
          ],
        },
      ],
    },

    softSkills: {
      title: 'Soft skills',
      labels: ['Soft skills'],
      slides: [
        {
          title: 'Soft skills',
          image: 'assets/image/softskills.jpg',
          imageAlt: 'Soft skills',
          items: [
            'Analyse &amp; résolution de problèmes',
            'Autonomie &amp; responsabilités',
            'Curiosité &amp; veille technologique',
            'Organisation &amp; priorisation',
            'Travail en équipe',
          ],
        },
      ],
    },

    hobbies: {
      title: 'Hobbies',
      labels: ['Sport', 'Jeux vidéo', 'Code & programmation', 'Lecture'],
      slides: [
        {
          title: 'Sport',
          images: [
            { src: 'assets/image/gym.jpg',   alt: 'Gym'   },
            { src: 'assets/image/muscu.jpg', alt: 'Muscu' },
          ],
          desc: 'Gymnastique & musculation',
        },
        {
          title: 'Jeux vidéo',
          image: 'assets/image/ps5.jpg',
          imageAlt: 'Jeux vidéo',
          desc: 'PlayStation : expérience multijoueur et campagnes en mode histoire',
        },
        {
          title: 'Code & programmation',
          image: 'assets/image/code.jpg',
          imageAlt: 'Programmation',
          desc: "Expérimentation d'outils, side projects, automatisations.",
        },
        {
          title: 'Lecture',
          image: 'assets/image/lecture.jpg',
          imageAlt: 'Lecture',
          desc: 'Lecture : philosophie, culture générale, technologies, informatique, économie…',
        },
      ],
    },
  },
};
