export default {
  site: {
    title: 'Context Nexus',
    description:
      "Un système de connaissance vivant, co-construit par des humains et des agents IA — le cœur systémique que toute l'équipe alimente par l'intention, et que l'IA enrichit par l'observation.",
  },

  nav: {
    home: 'Accueil',
    concepts: 'Concepts',
    registers: 'Registres',
    implementation: 'Implémentation',
    example: 'Exemple',
    langLabel: 'EN',
    langHref: '/en',
    knowledge: 'Knowledge',
    intent: 'Intent',
    contracts: 'Contracts',
    operations: 'Operations',
  },

  footer: {
    copy: '© 2026 Context Nexus · Un framework par Zenika · Pas un produit officiel.',
    links: [
      { label: 'Concepts', href: '/fr/concepts' },
      { label: 'Implémentation', href: '/fr/implementation' },
      { label: 'Exemple', href: '/fr/example' },
    ],
  },

  // ── Page d'accueil ─────────────────────────────────────────
  home: {
    meta: {
      title: 'Context Nexus — Les intentions partagées comme source unique de vérité',
    },
    hero: {
      label: "Développement augmenté par l'IA",
      title: 'Context Nexus',
      tagline: 'Les intentions partagées comme source unique de vérité.',
      description:
        "Un système de connaissance vivant, co-construit par des humains et des agents IA. Le cœur systémique que toute l'équipe alimente par l'intention, et que l'IA enrichit par l'observation.",
      cta1: 'Découvrir les concepts',
      cta1Href: '/fr/concepts',
      cta2: 'Démarrer en 2 heures',
      cta2Href: '/fr/implementation#bootstrap',
    },
    problem: {
      label: 'Pourquoi ça existe',
      title: 'La documentation était du poids mort.',
      body: `Les entreprises sont assises sur une montagne de connaissance accumulée : décisions prises, règles métier codifiées, intentions de demain. Une montagne largement inexploitée et peu structurée.

Dans un contexte où des agents IA participent activement à la construction et à l'exploitation des systèmes, la documentation change de nature fondamentalement. Elle n'est plus un <em>output</em> du travail — quelque chose qu'on produit après avoir codé. Elle devient un <em>input</em> : le matériau brut que les agents consomment pour produire, et la mémoire active que les humains enrichissent à chaque itération.`,
    },
    solution: {
      label: 'La réponse',
      title: 'Le Context Nexus.',
      body: `Ce n'est pas un outil ni un format : c'est un système de connaissance opérationnelle, structuré et vivant, co-construit par des acteurs humains et des agents IA. Sa qualité détermine la qualité de tout ce qui en sort.

Conçu pour opérer à l'échelle d'une <strong>two pizza team</strong> — une équipe pluridisciplinaire autonome réunissant produit, UX, engineering et data — il se compose à l'échelle d'une organisation via une logique d'héritage.`,
      invariant:
        "La définition de ce qu'on veut construire et de ce qu'on exige reste toujours une responsabilité humaine. Les agents peuvent proposer, observer, signaler — jamais formuler l'intention ni fixer les exigences.",
    },
    registers: {
      label: 'Quatre registres',
      title: 'Un système, quatre registres.',
      subtitle:
        "Chaque registre capture une nature de connaissance distincte, avec des modes d'interaction spécifiques selon le type d'acteur.",
      knowledge: {
        label: 'Knowledge',
        sublabel: "Ce qu'on sait",
        desc: "Domain knowledge, architecture, décisions passées, conventions. La mémoire dans laquelle les agents s'ancrent pour ne pas halluciner et produire du code cohérent.",
      },
      intent: {
        label: 'Intent',
        sublabel: "Ce qu'on veut",
        desc: 'Specs, Decision Directives, roadmap, hypothèses produit. Les instructions précises que les agents exécutent pour générer du code, des tests et des composants.',
      },
      contracts: {
        label: 'Contracts',
        sublabel: "Ce qu'on exige",
        desc: "Assertions vérifiables avec seuils : quality gates, SLAs de performance, standards d'accessibilité, règles data. Les agents valident leur propre output avant de proposer.",
      },
      operations: {
        label: 'Operations',
        sublabel: "Ce qu'on fait",
        desc: "Runbooks, playbooks, procédures de déploiement, protocoles d'incident. Les workflows que les agents exécutent de façon autonome quand les conditions sont réunies.",
      },
    },
    maturity: {
      label: 'Adoption progressive',
      title: 'Commencez simplement. Grandissez avec votre équipe.',
      subtitle:
        "Le Context Nexus n'impose pas une mise en place complète dès le premier jour. Il suit une progression naturelle.",
      day1: {
        day: 'Jour 1',
        title: 'Markdown dans le repo',
        desc: 'Quelques fichiers rules.md et contracts.md. Pas de RAG, pas de MCP. Le contexte est passé manuellement dans les prompts. Suffisant pour structurer les premières intentions et conventions.',
      },
      day30: {
        day: 'Jour 30',
        title: 'RAG opérationnel',
        desc: 'La knowledge est indexée. Les agents récupèrent les Decision Contexts automatiquement. Les specs dans Intent sont structurées en task briefs. Le Context Assembler est une fonction simple.',
      },
      day90: {
        day: 'Jour 90',
        title: 'Skills MCP',
        desc: 'Les runbooks répétables sont encapsulés en MCP tools. Les quality gates sont exécutables (pas seulement connus). Le registre org des skills est alimenté.',
      },
      day180: {
        day: 'Jour 180',
        title: 'Orchestration multi-agents',
        desc: "Le Context Assembler est lui-même un agent. Les agent cards (protocole A2A) permettent la découverte dynamique des skills. Les boucles de feedback IA (ship, sync, discovery) alimentent les registres automatiquement.",
      },
    },
    cta: {
      title: 'Prêt à aller plus loin ?',
      subtitle: "Commencez par les concepts, explorez le guide technique, ou suivez l'histoire de team-search chez MarketPlace SA.",
      btn1: 'Concepts →',
      btn1Href: '/fr/concepts',
      btn2: 'Implémentation →',
      btn2Href: '/fr/implementation',
      btn3: 'Exemple →',
      btn3Href: '/fr/example',
    },
  },

  // ── Page Concepts ──────────────────────────────────────────
  concepts: {
    meta: {
      title: 'Concepts — Context Nexus',
    },
    header: {
      breadcrumb: 'Accueil',
      title: 'Le Framework',
      desc: "Context Nexus organisé en quatre registres, liés par l'héritage et consommés par les agents IA selon quatre modes distincts.",
    },
    intro: {
      label: 'Définition',
      title: "Qu'est-ce que le Context Nexus ?",
      body: `Le Context Nexus réunit en un seul système de connaissance tout ce que l'équipe sait, veut, exige et fait — structuré pour être consommable par des agents IA autant que lisible par des humains.

Il se distingue d'une documentation classique sur deux points. D'abord, il est orienté vers le futur autant que vers le passé : il capture l'<em>intention</em> (ce qu'on veut construire) autant que la <em>mémoire</em> (ce qui a été décidé). Ensuite, il n'est pas figé : il se cultive et s'affine à chaque itération, nourri par les contributions humaines et les observations des agents en run, en test et en discovery.`,
    },
    actors: {
      title: "Deux acteurs, deux modes d'interaction",
      human: {
        actor: 'Humains',
        text: "Conceptualisent et alimentent par l'intention — specs, décisions d'architecture, contrats de qualité, procédures. Intent et Contracts sont toujours définis par des humains.",
      },
      ai: {
        actor: 'Agents IA',
        text: "Exploitent et enrichissent par l'observation — consomment le contexte pour produire, remontent leurs observations pour affiner les registres.",
      },
    },
    registers: {
      title: 'Les quatre registres',
      subtitle: "Cliquez sur un registre pour l'explorer en profondeur.",
    },
    loops: {
      label: 'Propriétés systémiques',
      title: 'Les registres se nourrissent mutuellement.',
      body: `Les quatre registres ne sont pas indépendants — ils se nourrissent mutuellement selon une logique circulaire :

<strong>Knowledge → Intent :</strong> la connaissance du domaine (conventions, Decision Contexts) contraint et précise les intentions avant même qu'un agent commence à produire.

<strong>Intent → Contracts :</strong> les specs et hypothèses produit déterminent le contrat de qualité : les critères d'acceptance deviennent des assertions vérifiables, les SLAs se précisent à mesure que les intentions s'affinent.

<strong>Contracts → Operations :</strong> les contrats produisent des runbooks, des playbooks d'incident et des protocoles qui opérationnalisent les exigences.

<strong>Operations → Knowledge :</strong> chaque incident résolu, chaque procédure exécutée devient de la connaissance collective capitalisée dans le registre Knowledge.`,
      aiLoopsTitle: 'Boucles de feedback IA',
      aiLoopsBody: `Au-delà des boucles entre registres, les agents IA enrichissent le Context Nexus en continu par leurs observations — en test, en run et en discovery :

<strong>En test (Ship) :</strong> l'agent observe les résultats du mutation scoring. Un score insuffisant remonte dans Contracts et dans Knowledge.

<strong>En run (Sync) :</strong> l'agent observe les métriques de production : latence, anomalies, patterns d'usage. Ces observations alimentent Knowledge, Operations et Contracts.

<strong>En discovery (Shape) :</strong> l'agent analyse les feedbacks utilisateurs et les données d'usage. Ces signaux alimentent Intent : les specs et hypothèses produit se mettent à jour en fonction de ce que la réalité apprend à l'équipe.`,
    },
    consumption: {
      label: 'Modèle de consommation IA',
      title: 'Quatre façons de consommer la connaissance.',
      system: {
        title: 'System Prompt / Rules',
        desc: "Injecté à l'initialisation de l'agent. Toujours actif, toujours vrai. Faible volume, haute densité, zéro ambiguïté. Ce que l'agent doit savoir avant de commencer à travailler.",
      },
      rag: {
        title: 'RAG',
        desc: 'Récupéré à la demande par similarité sémantique. Le bon mode pour les grandes bases de connaissance où seule une fraction est pertinente à chaque tâche. Exige un chunking soigné et des métadonnées riches.',
      },
      context: {
        title: 'Context Injection',
        desc: "Assemblé et passé explicitement pour une tâche spécifique. Ni trop tôt (system prompt), ni à la demande (RAG) — c'est le contexte de mission : la spec en cours, les Decision Directives applicables à ce ticket.",
      },
      skill: {
        title: 'Skills / Tools (MCP)',
        desc: "Des procédures appelables. L'agent ne lit pas un runbook — il l'exécute. Le quality gate n'est pas seulement une règle connue, c'est une fonction qui retourne pass/fail.",
      },
    },
    inheritance: {
      label: "Packaging à l'échelle",
      title: "N niveaux, une logique d'héritage.",
      body: `Une two pizza team n'opère jamais directement sous une organisation. Elle s'inscrit dans une BU, un programme, un contexte produit particulier. Le Context Nexus reflète cette réalité avec un modèle d'héritage à N niveaux configurables.

La structure par défaut à trois niveaux : <strong>Nexus Org</strong> (racine : non-négociables) → <strong>Nexus Intermédiaire</strong> (BU / Tribe / Programme, optionnel) → <strong>Nexus Team</strong> (nœud feuille, là où Intent vit exclusivement).

Chaque niveau hérite de son parent et peut l'étendre. Il ne peut jamais le remplacer. Une team ne peut pas remplacer un contract intermédiaire ou org — elle peut seulement l'étendre ou, sous conditions explicites, y déclarer une exception.`,
      enforcement: {
        title: "Mécanisme d'enforcement",
        body: "Chaque contract porte un champ <code>exception-to</code> optionnel. Sans ce champ : extension pure (toujours autorisée). Avec ce champ : exception déclarée, exigeant un champ <code>exception-approved-by</code> validé par l'owner du niveau parent. Le Context Assembler bloque tout bypass silencieux.",
      },
    },
    governance: {
      label: 'Gouvernance',
      title: 'La mise à jour comme chemin de moindre résistance.',
      body: 'Toute base de connaissance meurt de la même façon : les contributions deviennent volontaires, les owners changent de poste, le contenu dérive silencieusement. La gouvernance du Context Nexus est conçue pour que la mise à jour soit le chemin de moindre résistance, pas une discipline supplémentaire.',
      statuses: "Chaque artefact porte des métadonnées de cycle de vie : <code>draft</code> → <code>active</code> → <code>stale</code> → <code>deprecated</code> / <code>superseded</code>. Un artefact au statut stale est signalé mais pas supprimé — il est exclu du system prompt et du RAG au-delà d'un seuil configurable.",
    },
    maturity: {
      label: 'Progression de maturité',
      title: 'Démarrez dès le jour un.',
    },
  },

  // ── Registres ──────────────────────────────────────────────
  registers: {
    knowledge: {
      meta: { title: 'Registre Knowledge — Context Nexus' },
      header: {
        label: 'Registre Knowledge',
        sublabel: "Ce qu'on sait",
        desc: "Domain knowledge, architecture, conventions et mémoire des décisions passées. Le registre dans lequel les agents s'ancrent pour ne pas halluciner et produire du code cohérent.",
      },
      what: {
        title: 'Que contient Knowledge ?',
        body: 'Domain knowledge · Glossaire métier · Architecture map · Conventions & patterns · Anti-patterns · Contraintes réglementaires · <strong>Decision Contexts</strong> · Conséquences observées des décisions passées.',
        decisionContext: {
          title: "L'artefact Decision Context",
          body: "Issu du découpage de l'ADR classique. Il capture la situation qui a motivé une décision architecturale, les alternatives considérées et la justification de leur rejet, et les conséquences observées post-implémentation. C'est de la mémoire, pas une directive.",
        },
      },
      asymmetry: {
        humanActor: 'Humain',
        humanText: "Se réfère pour comprendre le contexte, juger de la pertinence d'une décision, onboarder rapidement, éviter de répéter les erreurs passées.",
        aiActor: 'Agent IA',
        aiText: "S'ancre dans le domaine pour ne pas halluciner, produit du code cohérent avec l'existant et respectueux des conventions sans qu'on les lui rappelle.",
        label: 'Asymétrie : jugement vs cohérence.',
      },
      consumption: {
        title: 'Modes de consommation',
        systemPrompt: 'Les conventions universelles et anti-patterns absolus vont dans le <strong>system prompt</strong>. Courts, sans nuance, toujours vrais.',
        rag: "Les Decision Contexts, l'architecture map et le glossaire métier vont dans l'<strong>index vectoriel</strong>. Trop volumineux pour le system prompt, récupérés par RAG à la demande.",
      },
      artifact: {
        title: "Structure d'un artefact",
        body: 'Chaque artefact Knowledge est un fichier markdown avec un frontmatter YAML définissant son registre, niveau, owner, statut et mode de consommation.',
      },
      crossref: { label: 'Voir en pratique' },
    },

    intent: {
      meta: { title: 'Registre Intent — Context Nexus' },
      header: {
        label: 'Registre Intent',
        sublabel: "Ce qu'on veut",
        desc: 'Specs, Decision Directives, roadmap et hypothèses produit. Les instructions précises que les agents IA exécutent pour générer du code, des tests et des composants.',
      },
      what: {
        title: 'Que contient Intent ?',
        body: "Specs & user stories · Critères d'acceptance · Maquettes · <strong>Decision Directives</strong> · OKRs & roadmap · Personas · Hypothèses produit.",
        decisionDirective: {
          title: "L'artefact Decision Directive",
          body: "Issu du découpage de l'ADR classique. Il capture la règle d'exécution issue d'une décision architecturale, formulée comme une contrainte positive et directement applicable. C'est une instruction, pas une explication. Elle référence son Decision Context dans Knowledge. Exemple : « Tout service de ce bounded context doit exposer un event stream. »",
        },
      },
      invariant: {
        title: "L'invariante fondamentale",
        body: "Ce registre est couvert par l'invariante fondamentale : son contenu est <strong>toujours défini par des humains</strong>. Un agent exécute l'Intent ; il ne le formule jamais.",
      },
      asymmetry: {
        humanActor: 'Humain',
        humanText: "Formule l'intention, aligne l'équipe sur ce qu'on construit, priorise, décide les arbitrages.",
        aiActor: 'Agent IA',
        aiText: "Consomme comme instruction directe pour générer du code, des tests, des composants, des migrations. La précision de ce registre détermine directement la qualité de l'output.",
        label: 'Asymétrie : formulation vs exécution.',
      },
      consumption: {
        title: 'Modes de consommation',
        systemPrompt: 'Les Decision Directives universelles (applicables à tous les tickets) vont dans le <strong>system prompt</strong>.',
        context: 'La spec en cours, les user stories et les Decision Directives task-specific sont passées par <strong>context injection</strong>.',
      },
      crossref: { label: 'Voir en pratique' },
    },

    contracts: {
      meta: { title: 'Registre Contracts — Context Nexus' },
      header: {
        label: 'Registre Contracts',
        sublabel: "Ce qu'on exige",
        desc: 'Assertions vérifiables avec seuils : engineering, produit, UX et data. Les règles que les agents valident avant de proposer un merge.',
      },
      what: {
        title: 'Que contient Contracts ?',
        body: "Chaque entrée du registre Contracts est une <strong>assertion vérifiable</strong>, associée à un seuil, qui peut être évaluée sans jugement humain. C'est ce critère — la vérifiabilité automatisable — qui définit ce qui appartient à Contracts plutôt qu'à Intent ou Knowledge.",
        domains: {
          engineering: 'Quality gates · Mutation scoring rules · Taux de couverture · Definition of Done · Politiques de sécurité · SLAs de performance · Règles de review & merge',
          product: "Critères d'acceptance liés aux specs · Seuils de métriques produit (conversion, rétention) · Seuils de significativité A/B · Règles de feature flag",
          ux: "Conformité design system (tokens, composants) · Standards d'accessibilité (niveau WCAG cible) · Core Web Vitals thresholds · Critères de validation utilisateur",
          data: 'Complétude (taux de données manquantes acceptables) · Fraîcheur (SLA de latence des pipelines) · Exactitude (règles de validation schéma) · Traçabilité',
        },
      },
      invariant: {
        title: "L'invariante fondamentale",
        body: "Ce registre est couvert par l'invariante fondamentale : son contenu est <strong>toujours défini par des humains</strong>. Les agents valident contre les Contracts ; ils ne les définissent jamais.",
      },
      asymmetry: {
        humanActor: 'Humain',
        humanText: 'Définit les contrats par domaine, fait évoluer les seuils selon la maturité du produit, arbitre les exceptions.',
        aiActor: 'Agent IA',
        aiText: "Valide son propre output avant de proposer un merge, s'auto-corrige quand un contrat n'est pas atteint, exécute les outils de vérification.",
        label: 'Asymétrie : définition vs conformité.',
      },
      consumption: {
        title: 'Modes de consommation',
        systemPrompt: "L'ensemble des assertions vérifiables (toujours applicables) vont dans le <strong>system prompt</strong>.",
        skills: 'Les outils de vérification (run tests, check accessibilité, valider schéma) sont exposés comme <strong>MCP Skills</strong>.',
      },
      exception: {
        title: 'Extension vs exception vs override',
        body: "Trois situations possibles quand un contract de niveau inférieur touche au même périmètre qu'un contract parent :",
        extension: "<strong>Extension :</strong> ajoute des assertions sur un périmètre non couvert par le parent. Toujours autorisée, pas de validation requise.",
        exception: "<strong>Exception :</strong> dévie explicitement d'une assertion parente, avec <code>exception-to</code> renseigné et <code>exception-approved-by</code> validé par l'owner du niveau parent.",
        override: "<strong>Override non déclaré :</strong> contredit une assertion parente sans champ <code>exception-to</code>. Détecté par le Context Assembler, bloqué et signalé.",
      },
      crossref: { label: 'Voir en pratique' },
    },

    operations: {
      meta: { title: 'Registre Operations — Context Nexus' },
      header: {
        label: 'Registre Operations',
        sublabel: "Ce qu'on fait",
        desc: "Runbooks, playbooks, procédures de déploiement et protocoles d'incident. Les workflows que les agents exécutent de façon autonome.",
      },
      what: {
        title: 'Que contient Operations ?',
        body: "Runbooks · Playbooks d'incident · How-to guides · Procédures de déploiement · Protocoles de rollback · Recettes d'observabilité · Escalade & alerting",
      },
      asymmetry: {
        humanActor: 'Humain',
        humanText: 'Se guide en situation de crise, capitalise sur les incidents résolus, onboarde sur les opérations courantes.',
        aiActor: 'Agent IA',
        aiText: "Automatise les actions répétables, exécute des playbooks de manière autonome, génère des runbooks depuis les autres registres, propose des mises à jour après chaque incident.",
        label: 'Asymétrie : guidance vs automatisation.',
      },
      consumption: {
        title: 'Modes de consommation',
        rag: "Recherche d'incident et récupération de contexte opérationnel par <strong>RAG</strong>.",
        skills: 'Runbooks et playbooks répétables encapsulés comme <strong>MCP Skills</strong> exécutables.',
      },
      mcp: {
        title: 'Runbooks comme MCP Skills',
        body: "Les runbooks ne sont pas seulement documentés : ils sont encapsulés comme des outils appelables. L'agent n'en fait pas une lecture linéaire — il les invoque avec des paramètres et reçoit un résultat structuré.",
      },
      crossref: { label: 'Voir en pratique' },
    },
  },

  // ── Implémentation ─────────────────────────────────────────
  implementation: {
    meta: { title: 'Implémentation — Context Nexus' },
    header: {
      breadcrumb: 'Accueil',
      title: 'Guide technique',
      desc: 'Architecture, stack recommandée, composants clés et progression du POC vers la production.',
    },
    architecture: {
      label: 'Architecture technique',
      title: 'Cinq composants, un système cohérent.',
      components: [
        { name: 'Stockage documentaire', desc: 'Les registres sous forme de fichiers versionnés dans Git. La source de vérité. Simple, auditables, diffables, compatibles avec tous les workflows CI/CD existants.' },
        { name: 'Index vectoriel', desc: 'Les artefacts Knowledge découpés en chunks, embarqués et indexés pour la récupération sémantique. Le moteur du mode RAG.' },
        { name: 'Runtime agent', desc: "Le moteur d'exécution des agents. Gère la boucle plan–outil–observation, la mémoire de session et les appels aux Skills MCP." },
        { name: 'Context Assembler', desc: "La couche d'orchestration propre au Context Nexus. Traverse la chaîne d'héritage, valide les Contracts, assemble le task brief et le passe au runtime agent." },
        { name: 'Observabilité', desc: 'La traçabilité des décisions et des sorties des agents. Indispensable pour détecter les dérives de qualité et calibrer les registres.' },
      ],
    },
    poc: {
      label: 'Stack recommandée — POC',
      title: 'Développement local',
    },
    production: {
      label: 'Stack recommandée — Production',
      title: 'Prêt pour la production',
    },
    assembler: {
      label: 'Context Assembler',
      title: 'Le composant central.',
      body: "Le Context Assembler prend une tâche en entrée et produit un task brief structuré en sortie. Ce brief est tout ce dont l'agent a besoin pour travailler.",
    },
    observability: {
      label: 'Observabilité',
      title: 'Trois dimensions avec Langfuse.',
      assembly: { title: "Décisions d'assemblage", desc: "Quels Contracts ont été chargés, quels artefacts exclus (exceptions non approuvées, artefacts stale), quels résultats RAG récupérés. Ces traces permettent de détecter les dérives de contexte avant qu'elles n'affectent les sorties." },
      gates: { title: 'Résultats des quality gates', desc: "Chaque appel à un Skill de vérification Contracts est tracé avec son résultat pass/fail et les métriques associées. Un taux d'échec en hausse sur un gate précis signale soit une régression dans le code généré, soit un gate mal calibré." },
      rag: { title: 'Qualité RAG', desc: "Les chunks récupérés pour chaque requête sont tracés avec leur score de similarité. Un score moyen en baisse indique que la Knowledge n'est plus bien alignée avec les requêtes des agents." },
    },
    multiagent: {
      label: 'Architecture avancée',
      title: 'Architecture multi-agents.',
      body: "Dans un contexte multi-agents, le Context Assembler devient un agent orchestrateur. Il reçoit une tâche complexe, la décompose, crée un task brief spécialisé pour chaque sous-tâche, et délègue à des agents workers. Chaque worker opère avec son propre contexte isolé — exactement le mode de fonctionnement de Deep Agents.",
    },
    bootstrap: {
      label: 'Bootstrap',
      title: 'Démarrer en 2 heures.',
      subtitle: 'Le minimum viable pour tester le Context Nexus sur un vrai projet.',
      fileTree: 'Structure de fichiers à créer',
      install: 'Installation',
      langfuse: 'Lancer Langfuse en local',
      firstAgent: 'Premier agent fonctionnel',
      note: "L'implémentation ne fait pas le framework. Ce guide donne la plomberie. La valeur vient de la qualité des artefacts que l'équipe alimente dans les registres.",
    },
    crossref: { label: 'Registres associés' },
  },

  // ── Exemple ────────────────────────────────────────────────
  example: {
    meta: { title: 'Fil rouge — Context Nexus' },
    header: {
      breadcrumb: 'Accueil',
      title: 'Le Framework en Action',
      desc: "team-search @ MarketPlace SA — L'histoire réelle d'une équipe en quatre épisodes : un ADR, un sprint, un incident, et un signal produit.",
    },
    scene: {
      label: 'La scène',
      title: 'MarketPlace SA',
      body: 'Une plateforme de réservation en ligne : hôtels, expériences, transports. 80 000 établissements en Europe.',
      org: "<strong>L'organisation</strong> dispose d'un Nexus Org qui porte les standards non-négociables : conformité PCI-DSS, accessibilité WCAG AA, SLA de performance baseline. La BU Digital Products ajoute un niveau intermédiaire avec ses standards UX et son design system. Trois niveaux d'héritage au total.",
      team: "<strong>team-search</strong> est la two pizza team responsable du moteur de recherche et de la page de résultats. Sept personnes : Sophie (PM), Marcus (Tech Lead), deux ingénieures backend, un ingénieur frontend, une designer UX et une ingénieure data/ML. La team opère son propre Nexus Team, héritier des deux niveaux parents.",
    },
    episodes: {
      ep1: {
        num: 'Épisode 1',
        title: "L'ADR",
        registers: ['knowledge', 'intent'],
        situation: {
          title: 'La situation',
          body: "Depuis trois semaines, les ingénieures backend observent des pics de latence en production lors des mises à jour massives du catalogue. Quand un opérateur hôtelier met à jour simultanément plusieurs centaines de fiches, les écritures synchrones vers Elasticsearch saturent le thread pool. La P95 monte à 1,8 secondes pendant ces fenêtres. Marcus lance un spike de deux jours. L'équipe évalue deux options : CQRS avec read model séparé, ou indexation event-driven via Kafka. CQRS est écarté : le coût de maintenance dépasse la capacité actuelle de la team, et deux incidents documentés ont montré la fragilité du pattern. La décision : passer à une indexation asynchrone event-driven pour tous les updates catalogue.",
        },
        knowledge: {
          title: 'Ce qui entre dans Knowledge',
          body: 'Marcus ouvre un Decision Context. Il documente la situation qui a rendu la décision nécessaire, les deux options évaluées, et les raisons précises du rejet de CQRS.',
        },
        intent: {
          title: 'Ce qui entre dans Intent',
          body: 'Marcus crée la Decision Directive correspondante. Courte, directement applicable, sans narration.',
        },
        insight: "L'ADR classique aurait produit un seul document mêlant rationale et règle. La Decision Directive est ce que l'agent lit pour générer du code. La Decision Context est ce que Marcus consulte six mois plus tard quand un nouveau membre de la team demande pourquoi CQRS n'a pas été retenu. Deux consommateurs différents, deux artefacts distincts.",
      },
      ep2: {
        num: 'Épisode 2',
        title: 'Le sprint',
        registers: ['intent', 'contracts'],
        situation: {
          title: 'La situation',
          body: "Sophie crée le ticket SEARCH-89 : réduire la latence P95 de la page de résultats à moins de 200ms. Un agent est assigné à l'implémentation du pipeline d'indexation.",
        },
        assembler: {
          title: 'Le Context Assembler entre en jeu',
          body: "Avant que l'agent commence, le Context Assembler constitue le task brief en puisant dans tous les registres applicables et la chaîne d'héritage.",
        },
        gate: {
          title: 'Le quality gate échoue',
          body: "L'agent génère le pipeline. Il invoque le skill performance-test.mcp avant de proposer le code. La P95 est à 340ms — au-dessus du seuil de 200ms. Goulot d'étranglement identifié : écriture synchrone par message vers Elasticsearch dans le consumer Kafka. L'agent ne propose pas le code. Il remonte l'observation et propose une correction : passer à un bulk write avec fenêtre de 50ms et batch de 100 documents. Marcus valide. L'agent génère le code corrigé, relance le test, obtient P95 = 138ms. Le gate passe.",
        },
        contracts: {
          title: "Une mise à jour Contracts s'ensuit",
          body: 'Marcus constate que le seuil de 200ms dans Contracts était calibré pour des pipelines synchrones. Il ne tient pas compte de la latence de flush propre aux bulk writers asynchrones. Il met à jour le Contracts de la team pour ajouter un seuil P95 ≤ 80ms pour le bulk writer seul.',
        },
        insight: "L'agent n'a pas soumis de code défaillant. Il a vérifié avant de proposer, s'est corrigé seul, et a bloqué jusqu'à conformité. Le Contracts n'était pas parfait : un gate mal calibré a été identifié et corrigé. C'est la boucle en test (Ship) : l'observation remonte dans Contracts.",
      },
      ep3: {
        num: 'Épisode 3',
        title: "L'incident",
        registers: ['operations', 'knowledge'],
        situation: {
          title: 'La situation',
          body: 'Trois semaines après la mise en production, une alerte Datadog se déclenche un mardi matin à 8h47. Les résultats de recherche affichent des hôtels avec des disponibilités périmées. Le consumer Kafka est en backpressure : 12 000 messages en attente dans la partition. Un opérateur vient de mettre à jour 3 400 fiches simultanément.',
        },
        runbook: {
          title: "L'agent exécute le runbook",
          body: "L'agent recherche dans le registre Operations par similarité sémantique. Le runbook le plus proche est catalog-indexation-lag.md. Il l'exécute : diagnostique le lag (12 847 messages, dernière écriture ES il y a 4m32s), scale le consumer group de 2 à 6 instances, attend la résorption. Lag résorbé en 8 minutes. Durée totale de l'incident : 23 minutes. L'agent notifie Sophie et Marcus via Slack.",
        },
        postmortem: {
          title: 'Le post-mortem alimente Knowledge et Operations',
          body: "Marcus organise le post-mortem 48h plus tard. L'agent produit un draft structuré à partir des logs et de l'exécution du runbook. Deux artefacts sont créés ou mis à jour : le runbook dans Operations gagne une nouvelle cause connue (backpressure Elasticsearch), et un nouveau Decision Context est ajouté à Knowledge documentant le pattern de fragilité des bursts opérateurs.",
        },
        insight: "L'incident a traversé deux registres. Operations a permis la résolution rapide via le runbook. La résolution a enrichi Knowledge d'un pattern de fragilité documenté. C'est la boucle en run (Sync) : l'observation remonte dans Knowledge et Operations.",
      },
      ep4: {
        num: 'Épisode 4',
        title: 'Le signal produit',
        registers: ['intent', 'contracts'],
        situation: {
          title: 'La situation',
          body: "Deux semaines après l'incident, l'ingénieure data/ML livre une analyse sur deux mois de données d'usage. Les résultats sont clairs : les utilisateurs qui obtiennent des résultats avec une précision de pertinence supérieure à 0,75 convertissent 3,4 fois plus. L'hypothèse initiale dans Intent posait que la vitesse était le premier levier de conversion. L'analyse la contredit.",
        },
        intent: {
          title: 'Intent est mis à jour',
          body: "Sophie révise l'hypothèse produit dans Intent : la pertinence des résultats est le premier levier de conversion, devant la vitesse d'affichage. Implication sur la roadmap : prioriser l'amélioration de l'algorithme de ranking sur le sprint S+1. Accepter une latence P95 plus haute pour les requêtes avec boosting complexe.",
        },
        tension: {
          title: 'La tension avec Contracts',
          body: 'Cette révision crée une tension directe avec le Contracts org de performance (P95 < 200ms pour toutes les requêtes). Les requêtes avec boosting multi-critères dépassent structurellement ce seuil : leur P95 observé est de 320ms. La team ne peut pas simplement modifier le Contracts org — elle doit déclarer une exception.',
        },
        exception: {
          title: "Le workflow d'exception",
          body: "Marcus prépare le contract team avec exception-to pointant vers org/contracts/performance.md. Le Context Assembler détecte que exception-approved-by est null — il bloque l'inclusion de ce contract dans le system prompt jusqu'à validation. Marcus le soumet au responsable qualité de la BU Digital Products. Trois jours plus tard, le responsable BU valide. Le Context Assembler inclut désormais l'exception dans le contexte des agents de la team-search.",
        },
        insight: "Une observation de discovery (Shape) a modifié une hypothèse produit dans Intent. Cette modification a créé une tension avec un Contracts parent. L'enforcement a joué son rôle : pas de bypass silencieux, une exception documentée et approuvée. L'org garde la visibilité. La team garde l'autonomie dans le périmètre de ce qui est explicitement négocié.",
      },
    },
    summary: {
      title: 'Ce que les quatre épisodes traversent',
      mechanism: 'Mécanisme',
      episode: 'Épisode',
      rows: [
        ['ADR splitté en Decision Context + Decision Directive', '1'],
        ['Knowledge alimenté par la mémoire des décisions', '1'],
        ['Context Assembler assemblant le task brief', '2'],
        ["Quality gate Contracts déclenché par l'agent", '2'],
        ['Auto-correction avant soumission', '2'],
        ['Boucle Ship → mise à jour Contracts', '2'],
        ["Runbook Operations exécuté par l'agent", '3'],
        ['Boucle Sync → enrichissement Knowledge + Operations', '3'],
        ['Hypothèse produit révisée dans Intent (Shape)', '4'],
        ["Mécanisme d'enforcement : extension vs exception", '4'],
        ['Validation cross-niveaux (team → BU)', '4'],
        ['Context Assembler bloquant un contract non approuvé', '4'],
      ],
      insight: "Le fil rouge ne montre pas un cas idéal. Il montre un cas réel : une équipe qui décide, se trompe sur un seuil, subit un incident, révise une hypothèse. Le Context Nexus n'empêche pas ces situations. Il fait en sorte que chaque événement enrichisse le système plutôt que de se perdre.",
    },
    crossref: { label: 'Explorer les registres en profondeur' },
  },
} as const
