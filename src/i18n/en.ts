export default {
  site: {
    title: 'Context Nexus',
    description:
      'A living knowledge system co-built by humans and AI agents — the systemic core every team feeds with intention, and every AI enriches with observation.',
  },

  nav: {
    home: 'Home',
    concepts: 'Concepts',
    registers: 'Registers',
    implementation: 'Implementation',
    example: 'Example',
    langLabel: 'FR',
    langHref: '/fr',
    knowledge: 'Knowledge',
    intent: 'Intent',
    contracts: 'Contracts',
    operations: 'Operations',
  },

  footer: {
    copy: '© 2026 Context Nexus · A framework by Zenika · Not an official product.',
    links: [
      { label: 'Concepts', href: '/en/concepts' },
      { label: 'Implementation', href: '/en/implementation' },
      { label: 'Example', href: '/en/example' },
    ],
  },

  // ── Home page ──────────────────────────────────────────────
  home: {
    meta: {
      title: 'Context Nexus — Shared intents as single source of truth',
    },
    hero: {
      label: 'AI-Augmented Development',
      title: 'Context Nexus',
      tagline: 'Shared intents as single source of truth.',
      description:
        'A living knowledge system co-built by humans and AI agents. The systemic core every team feeds with intention, and that AI enriches with observation.',
      cta1: 'Read the concepts',
      cta1Href: '/en/concepts',
      cta2: 'Start in 2 hours',
      cta2Href: '/en/implementation#bootstrap',
    },
    problem: {
      label: 'Why it exists',
      title: 'Documentation was dead weight.',
      body: `Organizations sit on mountains of accumulated knowledge: past decisions, codified business rules, tomorrow's intentions. Mostly unstructured, inaccessible, and unused.

In a world where AI agents actively participate in building and operating systems, documentation changes in nature. It is no longer an <em>output</em> of work — something produced after coding. It becomes an <em>input</em>: the raw material agents consume to produce, and the active memory humans enrich at each iteration.`,
    },
    solution: {
      label: 'The answer',
      title: 'Context Nexus.',
      body: `Not a tool, not a format — a structured, living operational knowledge system, co-built by human actors and AI agents. Its quality determines the quality of everything that emerges from it.

Designed for <strong>two pizza teams</strong> — autonomous, cross-functional groups bringing together product, UX, engineering, and data — it scales across an organization through an inheritance model.`,
      invariant:
        'The definition of what we want to build and what we require remains always a human responsibility. Agents can propose, observe, signal — never formulate intent nor set requirements.',
    },
    registers: {
      label: 'Four registers',
      title: 'One system, four registers.',
      subtitle:
        'Each register captures a distinct nature of knowledge, with specific interaction modes for humans and AI agents.',
      knowledge: {
        label: 'Knowledge',
        sublabel: 'What we know',
        desc: 'Domain knowledge, architecture, past decisions, conventions. The memory agents anchor on to avoid hallucinating and produce consistent code.',
      },
      intent: {
        label: 'Intent',
        sublabel: 'What we want',
        desc: 'Specs, Decision Directives, roadmap, product hypotheses. The precise instructions agents execute to generate code, tests, and components.',
      },
      contracts: {
        label: 'Contracts',
        sublabel: 'What we require',
        desc: 'Verifiable assertions with thresholds: quality gates, performance SLAs, accessibility standards, data rules. Agents validate their own output against them.',
      },
      operations: {
        label: 'Operations',
        sublabel: 'What we do',
        desc: 'Runbooks, playbooks, deployment procedures, incident protocols. Workflows agents execute autonomously when conditions are met.',
      },
    },
    maturity: {
      label: 'Progressive adoption',
      title: 'Start simple. Grow with your team.',
      subtitle:
        'Context Nexus does not require a full setup on day one. It follows a natural maturity progression.',
      day1: {
        day: 'Day 1',
        title: 'Markdown in the repo',
        desc: 'A few rules.md and contracts.md files. No RAG, no MCP. Context passed manually in prompts. Enough to structure first intentions and conventions.',
      },
      day30: {
        day: 'Day 30',
        title: 'RAG operational',
        desc: 'Knowledge is indexed. Agents automatically retrieve Decision Contexts. Specs in Intent are structured as task briefs. The Context Assembler is a simple function.',
      },
      day90: {
        day: 'Day 90',
        title: 'MCP Skills',
        desc: 'Repeatable runbooks are encapsulated as MCP tools. Quality gates are executable (not just known). The org skills registry is populated.',
      },
      day180: {
        day: 'Day 180',
        title: 'Multi-agent orchestration',
        desc: 'The Context Assembler is itself an agent. Agent cards (A2A protocol) enable dynamic skill discovery. AI feedback loops (ship, sync, discovery) automatically feed the registers.',
      },
    },
    cta: {
      title: 'Ready to dive in?',
      subtitle: 'Start with the concepts, explore the technical implementation, or follow the story of team-search at MarketPlace SA.',
      btn1: 'Concepts →',
      btn1Href: '/en/concepts',
      btn2: 'Implementation →',
      btn2Href: '/en/implementation',
      btn3: 'Example →',
      btn3Href: '/en/example',
    },
  },

  // ── Concepts page ──────────────────────────────────────────
  concepts: {
    meta: {
      title: 'Concepts — Context Nexus',
    },
    header: {
      breadcrumb: 'Home',
      title: 'The Framework',
      desc: 'Context Nexus organized into four registers, linked by inheritance and consumed by AI agents in four distinct modes.',
    },
    intro: {
      label: 'Definition',
      title: 'What is Context Nexus?',
      body: `Context Nexus brings together in a single knowledge system everything a team knows, wants, requires, and does — structured to be consumable by AI agents as much as readable by humans.

It distinguishes itself from classic documentation on two points. First, it is oriented toward the future as much as the past: it captures <em>intent</em> (what we want to build) as much as <em>memory</em> (what has been decided). Second, it is not frozen: it is cultivated and refined at each iteration, fed by human contributions and by agents' observations in run, test, and discovery.`,
    },
    actors: {
      title: 'Two actors, two modes of interaction',
      human: {
        actor: 'Humans',
        text: 'Conceptualize and feed by intention — specs, architecture decisions, quality contracts, procedures. Intent and Contracts are always authored by humans.',
      },
      ai: {
        actor: 'AI Agents',
        text: 'Exploit and enrich by observation — consume context to produce, return observations to refine the registers.',
      },
    },
    registers: {
      title: 'The four registers',
      subtitle: 'Click any register to explore it in depth.',
    },
    loops: {
      label: 'Systemic properties',
      title: 'The registers feed each other.',
      body: `The four registers are not independent — they nourish each other in a circular logic:

<strong>Knowledge → Intent:</strong> domain knowledge (conventions, Decision Contexts) constrains and refines intentions before an agent begins to produce.

<strong>Intent → Contracts:</strong> specs and product hypotheses determine the quality contract: acceptance criteria become verifiable assertions, SLAs are refined as intentions sharpen.

<strong>Contracts → Operations:</strong> contracts produce runbooks, incident playbooks, and protocols that operationalize requirements.

<strong>Operations → Knowledge:</strong> each resolved incident, each executed procedure becomes collective knowledge capitalized in the Knowledge register.`,
      aiLoopsTitle: 'AI feedback loops',
      aiLoopsBody: `Beyond register loops, AI agents enrich Context Nexus continuously through their observations — in test, in run, and in discovery:

<strong>In test (Ship):</strong> the agent observes mutation scoring results. An insufficient score bubbles up into Contracts and Knowledge.

<strong>In run (Sync):</strong> the agent observes production metrics: latency, anomalies, usage patterns. Observations feed Knowledge, Operations, and Contracts.

<strong>In discovery (Shape):</strong> the agent analyzes user feedback and usage data. Signals feed Intent: specs and product hypotheses update based on what reality teaches the team.`,
    },
    consumption: {
      label: 'AI consumption model',
      title: 'Four ways to consume knowledge.',
      system: {
        title: 'System Prompt / Rules',
        desc: 'Injected at agent initialization. Always active, always true. Low volume, high density, zero ambiguity. What the agent must know before beginning to work.',
      },
      rag: {
        title: 'RAG',
        desc: 'Retrieved on demand by semantic similarity. The right mode for large knowledge bases where only a fraction is relevant per task. Requires careful chunking and rich metadata.',
      },
      context: {
        title: 'Context Injection',
        desc: 'Assembled and passed explicitly for a specific task. Neither too early (system prompt), nor on demand (RAG) — the mission context: the current spec, applicable Decision Directives for this ticket.',
      },
      skill: {
        title: 'Skills / Tools (MCP)',
        desc: "Callable procedures. The agent doesn't read a runbook — it executes it. The quality gate isn't just a known rule — it's a function that returns pass/fail.",
      },
    },
    inheritance: {
      label: 'Packaging at scale',
      title: 'N levels, one inheritance logic.',
      body: `A two pizza team never operates directly under an organization. It sits within a BU, a program, a particular product context. Context Nexus reflects this reality with a configurable N-level inheritance model.

The default three-level structure: <strong>Nexus Org</strong> (root: non-negotiables) → <strong>Nexus Intermediate</strong> (BU / Tribe / Programme, optional) → <strong>Nexus Team</strong> (leaf node, where Intent lives exclusively).

Each level inherits from its parent and can extend it. It can never replace it. A team cannot replace an intermediate or org contract — it can only extend it or, under explicit conditions, declare an exception.`,
      enforcement: {
        title: 'Enforcement mechanism',
        body: 'Each contract carries an optional <code>exception-to</code> field. Without it: pure extension (always allowed). With it: a declared exception, requiring an <code>exception-approved-by</code> field validated by the parent level owner. The Context Assembler blocks any silent bypass.',
      },
    },
    governance: {
      label: 'Governance',
      title: 'Update as the path of least resistance.',
      body: 'Every knowledge base dies the same way: contributions become voluntary, owners change roles, content silently drifts. Context Nexus governance is designed so that updating is the path of least resistance — not an additional discipline.',
      statuses: 'Each artifact carries lifecycle metadata: <code>draft</code> → <code>active</code> → <code>stale</code> → <code>deprecated</code> / <code>superseded</code>. A stale artifact is flagged but not deleted — it is excluded from system prompts and RAG beyond a configurable threshold.',
    },
    maturity: {
      label: 'Maturity progression',
      title: 'Start on day one.',
    },
  },

  // ── Register pages (shared keys) ───────────────────────────
  registers: {
    knowledge: {
      meta: { title: 'Knowledge register — Context Nexus' },
      header: {
        label: 'Knowledge register',
        sublabel: 'What we know',
        desc: 'Domain knowledge, architecture, conventions, and the memory of past decisions. The register AI agents anchor on to avoid hallucinating and produce coherent output.',
      },
      what: {
        title: 'What does Knowledge contain?',
        body: 'Domain knowledge · Business glossary · Architecture map · Conventions & patterns · Anti-patterns · Regulatory constraints · <strong>Decision Contexts</strong> · Observed consequences of past decisions.',
        decisionContext: {
          title: 'The Decision Context artifact',
          body: 'An artifact derived from splitting the classic ADR. It captures the situation that motivated an architectural decision, the alternatives considered and the justification for their rejection, and the consequences observed post-implementation. It is <em>memory</em>, not a directive.',
        },
      },
      asymmetry: {
        humanActor: 'Human',
        humanText: 'Refers to it to understand context, judge the relevance of a decision, onboard quickly, avoid repeating past mistakes.',
        aiActor: 'AI Agent',
        aiText: 'Anchors in the domain to avoid hallucinating, produces code coherent with the existing codebase and respectful of conventions without being reminded.',
        label: 'Asymmetry: judgment vs. coherence.',
      },
      consumption: {
        title: 'Consumption modes',
        systemPrompt: 'Universal conventions and absolute anti-patterns go in the <strong>system prompt</strong>. Short, unambiguous, always true.',
        rag: 'Decision Contexts, architecture maps, and business glossary go in the <strong>vector index</strong>. Too voluminous for the system prompt, retrieved by RAG on demand.',
      },
      artifact: {
        title: 'Artifact structure',
        body: 'Each Knowledge artifact is a markdown file with a YAML frontmatter block defining its register, level, owner, status, and consumption mode.',
      },
      crossref: {
        label: 'See in practice',
      },
    },

    intent: {
      meta: { title: 'Intent register — Context Nexus' },
      header: {
        label: 'Intent register',
        sublabel: 'What we want',
        desc: 'Specs, Decision Directives, roadmap, and product hypotheses. The precise instructions AI agents execute to generate code, tests, and components.',
      },
      what: {
        title: 'What does Intent contain?',
        body: 'Specs & user stories · Acceptance criteria · Mockups · <strong>Decision Directives</strong> · OKRs & roadmap · Personas · Product hypotheses.',
        decisionDirective: {
          title: 'The Decision Directive artifact',
          body: "An artifact derived from splitting the classic ADR. It captures the execution rule from an architectural decision, formulated as a positive, directly applicable constraint. It is an instruction, not an explanation. It references its Decision Context in Knowledge. Example: \"All services in this bounded context must expose an event stream.\"",
        },
      },
      invariant: {
        title: 'The fundamental invariant',
        body: 'This register is covered by the fundamental invariant: its content is <strong>always defined by humans</strong>. An agent executes Intent; it never formulates it.',
      },
      asymmetry: {
        humanActor: 'Human',
        humanText: 'Formulates intent, aligns the team on what is being built, prioritizes, decides trade-offs.',
        aiActor: 'AI Agent',
        aiText: 'Consumes as direct instruction to generate code, tests, components, migrations. The precision of this register directly determines output quality.',
        label: 'Asymmetry: formulation vs. execution.',
      },
      consumption: {
        title: 'Consumption modes',
        systemPrompt: 'Universal Decision Directives (applicable to all tickets) go in the <strong>system prompt</strong>.',
        context: 'The current spec, user stories, and task-specific Decision Directives are passed by <strong>context injection</strong>.',
      },
      crossref: { label: 'See in practice' },
    },

    contracts: {
      meta: { title: 'Contracts register — Context Nexus' },
      header: {
        label: 'Contracts register',
        sublabel: 'What we require',
        desc: 'Verifiable assertions with thresholds across engineering, product, UX, and data. The rules agents validate their output against before proposing a merge.',
      },
      what: {
        title: 'What does Contracts contain?',
        body: 'Each Contracts entry is a <strong>verifiable assertion</strong>, associated with a threshold, that can be evaluated without human judgment. This criterion — automatable verifiability — defines what belongs to Contracts rather than Intent or Knowledge.',
        domains: {
          engineering: 'Quality gates · Mutation scoring rules · Code coverage thresholds · Definition of Done · Security policies · Performance SLAs · Review & merge rules',
          product: 'Acceptance criteria linked to specs · Product metric thresholds (conversion, retention, activation) · A/B significance thresholds · Feature flag rules',
          ux: 'Design system compliance (tokens, components, patterns) · Accessibility standards (WCAG target level) · Core Web Vitals thresholds · User validation criteria',
          data: 'Completeness (acceptable missing data rates) · Freshness (pipeline latency SLA) · Accuracy (schema validation rules) · Traceability (data lineage requirements)',
        },
      },
      invariant: {
        title: 'The fundamental invariant',
        body: 'This register is covered by the fundamental invariant: its content is <strong>always defined by humans</strong>. Agents validate against contracts; they never define them.',
      },
      asymmetry: {
        humanActor: 'Human',
        humanText: 'Defines contracts by domain, evolves thresholds as product matures, arbitrates exceptions.',
        aiActor: 'AI Agent',
        aiText: 'Validates its own output before proposing a merge, self-corrects when a contract is not met, executes the verification tools.',
        label: 'Asymmetry: definition vs. compliance.',
      },
      consumption: {
        title: 'Consumption modes',
        systemPrompt: 'All verifiable assertions (always applicable) go in the <strong>system prompt</strong>.',
        skills: 'Verification tools (run tests, check accessibility, validate schema) are exposed as <strong>MCP Skills</strong>.',
      },
      exception: {
        title: 'Extension vs. exception vs. override',
        body: 'Three situations arise when a lower-level contract touches the same scope as a parent contract:',
        extension: '<strong>Extension:</strong> adds assertions on a scope not covered by the parent. Always allowed, no validation required.',
        exception: '<strong>Exception:</strong> explicitly deviates from a parent assertion, with <code>exception-to</code> set and <code>exception-approved-by</code> validated by the parent level owner.',
        override: '<strong>Undeclared override:</strong> contradicts a parent assertion without <code>exception-to</code>. Detected by the Context Assembler, blocked, and flagged.',
      },
      crossref: { label: 'See in practice' },
    },

    operations: {
      meta: { title: 'Operations register — Context Nexus' },
      header: {
        label: 'Operations register',
        sublabel: 'What we do',
        desc: 'Runbooks, playbooks, deployment procedures, and incident protocols. Workflows agents can execute autonomously when conditions are met.',
      },
      what: {
        title: 'What does Operations contain?',
        body: 'Runbooks · Incident playbooks · How-to guides · Deployment procedures · Rollback protocols · Observability recipes · Escalation & alerting',
      },
      asymmetry: {
        humanActor: 'Human',
        humanText: 'Guides in crisis situations, capitalizes on resolved incidents, onboards on routine operations.',
        aiActor: 'AI Agent',
        aiText: 'Automates repeatable actions, executes playbooks autonomously, generates runbooks from other registers, proposes updates after each incident.',
        label: 'Asymmetry: guidance vs. automation.',
      },
      consumption: {
        title: 'Consumption modes',
        rag: 'Incident search and operational context retrieval via <strong>RAG</strong>.',
        skills: 'Repeatable runbooks and playbooks encapsulated as executable <strong>MCP Skills</strong>.',
      },
      mcp: {
        title: 'Runbooks as MCP Skills',
        body: 'Runbooks are not just documented — they are encapsulated as callable tools. The agent does not read a runbook linearly — it invokes it with parameters and gets back a structured result.',
      },
      crossref: { label: 'See in practice' },
    },
  },

  // ── Implementation page ────────────────────────────────────
  implementation: {
    meta: { title: 'Implementation — Context Nexus' },
    header: {
      breadcrumb: 'Home',
      title: 'Technical Guide',
      desc: 'Architecture, recommended stack, key components, and the path from POC to production.',
    },
    architecture: {
      label: 'Technical architecture',
      title: 'Five components, one coherent system.',
      components: [
        { name: 'Document storage', desc: 'Registers as Git-versioned files. The source of truth. Simple, auditable, diffable, compatible with all existing CI/CD workflows.' },
        { name: 'Vector index', desc: 'Knowledge artifacts split into chunks, embedded, and indexed for semantic retrieval. The engine of RAG mode.' },
        { name: 'Agent runtime', desc: 'The agent execution engine. Manages the plan–tool–observation loop, session memory, and MCP Skill calls.' },
        { name: 'Context Assembler', desc: 'The orchestration layer specific to Context Nexus. Traverses the inheritance chain, validates Contracts, assembles the task brief, and passes it to the agent runtime.' },
        { name: 'Observability', desc: 'Traceability of agent decisions and outputs. Essential for detecting quality drift and calibrating the registers.' },
      ],
    },
    poc: {
      label: 'Recommended stack — POC',
      title: 'Local development',
    },
    production: {
      label: 'Recommended stack — Production',
      title: 'Production-grade',
    },
    assembler: {
      label: 'Context Assembler',
      title: 'The central component.',
      body: 'The Context Assembler takes a task as input and produces a structured task brief as output. This brief is all the agent needs to work.',
    },
    observability: {
      label: 'Observability',
      title: 'Three dimensions with Langfuse.',
      assembly: { title: 'Assembly decisions', desc: 'Which Contracts were loaded, which artifacts excluded (unapproved exceptions, stale artifacts), which RAG results retrieved. These traces detect context drift before it affects outputs.' },
      gates: { title: 'Quality gate results', desc: 'Each call to a Contracts verification Skill is traced with its pass/fail result and associated metrics. A rising failure rate on a specific gate signals a regression in generated code — or a poorly calibrated gate.' },
      rag: { title: 'RAG quality', desc: 'Chunks retrieved for each query are traced with their similarity score. A declining average score indicates Knowledge is no longer aligned with agent queries: artifacts may be stale or chunking needs review.' },
    },
    multiagent: {
      label: 'Advanced',
      title: 'Multi-agent architecture.',
      body: 'In a multi-agent context, the Context Assembler becomes an orchestrating agent. It receives a complex task, decomposes it, creates a specialized task brief for each sub-task, and delegates to worker agents. Each worker operates with its own isolated context — exactly Deep Agents mode: sub-agents see only final results, not intermediate steps of others.',
    },
    bootstrap: {
      label: 'Bootstrap',
      title: 'Start in 2 hours.',
      subtitle: 'The minimum viable setup to test Context Nexus on a real project.',
      fileTree: 'File structure to create',
      install: 'Install',
      langfuse: 'Start Langfuse locally',
      firstAgent: 'First working agent',
      note: "The implementation doesn't make the framework. This guide provides the plumbing. The value comes from the quality of the artifacts the team feeds into the registers.",
    },
    crossref: { label: 'Related registers' },
  },

  // ── Example page ───────────────────────────────────────────
  example: {
    meta: { title: 'Fil rouge — Context Nexus' },
    header: {
      breadcrumb: 'Home',
      title: 'The Framework in Action',
      desc: 'team-search @ MarketPlace SA — A real team story spanning four episodes: an ADR, a sprint, an incident, and a product signal.',
    },
    scene: {
      label: 'The scene',
      title: 'MarketPlace SA',
      body: 'An online booking platform: hotels, experiences, transport. 80,000 establishments across Europe.',
      org: '<strong>The organization</strong> has a Nexus Org carrying non-negotiable standards: PCI-DSS compliance, WCAG AA accessibility, baseline performance SLA. The BU Digital Products adds an intermediate level with its UX standards and design system. Three inheritance levels total.',
      team: '<strong>team-search</strong> is the two pizza team responsible for the search engine and results page. Seven people: Sophie (PM), Marcus (Tech Lead), two backend engineers, one frontend engineer, one UX designer, one data/ML engineer. They operate their own Nexus Team, heir to the two parent levels.',
    },
    episodes: {
      ep1: {
        num: 'Episode 1',
        title: "The ADR",
        registers: ['knowledge', 'intent'],
        situation: {
          title: 'The situation',
          body: 'For three weeks, the backend engineers have been observing production latency spikes during massive catalogue updates. When a hotel operator simultaneously updates several hundred listings, synchronous writes to Elasticsearch saturate the thread pool. P95 climbs to 1.8 seconds during these windows. Marcus launches a two-day spike. The team evaluates two options: CQRS with a separate read model, or event-driven indexation via Kafka. CQRS is ruled out: maintenance cost exceeds the team\'s current capacity, and two documented incidents on a similar system showed the pattern\'s fragility under high catalogue volume. The decision: switch to asynchronous event-driven indexation for all catalogue updates.',
        },
        knowledge: {
          title: 'What enters Knowledge',
          body: 'Marcus opens a Decision Context. He documents the situation that made the decision necessary, the two options evaluated, and the precise reasons for rejecting CQRS.',
        },
        intent: {
          title: 'What enters Intent',
          body: 'Marcus creates the corresponding Decision Directive. Short, directly applicable, no narration.',
        },
        insight: 'A classic ADR would have produced one document mixing rationale and rule. The Decision Directive is what the agent reads to generate code. The Decision Context is what Marcus consults six months later when a new team member asks why CQRS was not chosen. Two different consumers, two distinct artifacts.',
      },
      ep2: {
        num: 'Episode 2',
        title: 'The Sprint',
        registers: ['intent', 'contracts'],
        situation: {
          title: 'The situation',
          body: 'Sophie creates ticket SEARCH-89: reduce the P95 latency of the results page to under 200ms for standard queries. An agent is assigned to implement the indexation pipeline.',
        },
        assembler: {
          title: 'The Context Assembler assembles the task brief',
          body: 'Before the agent begins, the Context Assembler constitutes the task brief, pulling from all applicable registers and the inheritance chain.',
        },
        gate: {
          title: 'The quality gate fails',
          body: "The agent generates the pipeline. It invokes the performance-test.mcp skill before proposing the code. P95 reads 340ms — above the 200ms threshold. Bottleneck identified: synchronous per-document writes to Elasticsearch in the Kafka consumer. The agent does not propose the code. It raises the observation and proposes a correction: switch to bulk writes with a 50ms flush window and 100-document batch. Marcus validates. The agent generates the corrected code, reruns the test, obtains P95 = 138ms. The gate passes.",
        },
        contracts: {
          title: 'A Contracts update follows',
          body: 'Marcus notices the 200ms threshold in Contracts was calibrated for synchronous pipelines. It does not account for the flush latency inherent to asynchronous bulk writers. He updates the team\'s Contracts to add a separate P95 ≤ 80ms threshold for the bulk writer alone — leaving a 120ms budget for Kafka transit.',
        },
        insight: "The agent did not submit failing code. It verified before proposing, self-corrected, and blocked until compliance. The Contracts were not perfect: a miscalibrated gate was identified and corrected. This is the Ship loop: the observation bubbles up into Contracts.",
      },
      ep3: {
        num: 'Episode 3',
        title: 'The Incident',
        registers: ['operations', 'knowledge'],
        situation: {
          title: 'The situation',
          body: 'Three weeks after production deployment, a Datadog alert fires on a Tuesday morning at 8:47am. Search results show hotels with expired availability. The initial investigation shows the Kafka consumer is under backpressure: 12,000 messages queued in the partition. An operator just updated 3,400 listings simultaneously.',
        },
        runbook: {
          title: 'The agent executes the runbook',
          body: 'The agent searches the Operations register by semantic similarity. The closest runbook is catalog-indexation-lag.md. It executes it: diagnoses the lag (12,847 messages, last ES write 4m32s ago), scales the consumer group from 2 to 6 instances, waits for resorption. Lag resolves in 8 minutes. Total incident duration: 23 minutes. The agent notifies Sophie and Marcus via Slack.',
        },
        postmortem: {
          title: 'The post-mortem feeds Knowledge and Operations',
          body: "Marcus organizes the post-mortem 48h later. The agent drafts a structured summary from logs and runbook execution. Marcus and Sophie enrich it. Two artifacts are created or updated: the runbook in Operations gains a new known cause (Elasticsearch backpressure), and a new Decision Context is added to Knowledge documenting the fragility pattern of large-operator bursts.",
        },
        insight: 'The incident traversed two registers. Operations enabled rapid resolution via the runbook. The resolution enriched Knowledge with a documented fragility pattern. This is the Sync loop: observations bubble up into Knowledge and Operations.',
      },
      ep4: {
        num: 'Episode 4',
        title: 'The Product Signal',
        registers: ['intent', 'contracts'],
        situation: {
          title: 'The situation',
          body: "Two weeks after the incident, the data/ML engineer delivers an analysis on two months of usage data. The results are clear: users who get results with a relevance precision above 0.75 convert 3.4× more than those who get fast but less relevant results. The initial hypothesis in Intent held that speed was the primary conversion lever. The analysis contradicts it.",
        },
        intent: {
          title: 'Intent is updated',
          body: 'Sophie revises the product hypothesis in Intent: relevance precision is the primary conversion lever, ahead of display speed. Implication on the roadmap: prioritize ranking algorithm improvement on sprint S+1. Accept higher P95 latency for requests with complex boosting.',
        },
        tension: {
          title: 'The tension with Contracts',
          body: "This revision creates a direct tension with the org performance Contracts (P95 < 200ms for all requests). Requests with multi-criteria boosting structurally exceed this threshold: their observed P95 is 320ms. The team cannot simply modify the org Contracts — they must declare an exception.",
        },
        exception: {
          title: 'The exception workflow',
          body: "Marcus prepares the team contract with exception-to pointing to org/contracts/performance.md. The Context Assembler detects that exception-approved-by is null — it blocks inclusion of this contract in the system prompt until validation. Marcus submits it to the BU Digital Products quality lead. Three days later, the BU lead validates. The Context Assembler now includes the exception in the context of team-search agents.",
        },
        insight: "A discovery observation (Shape) modified a product hypothesis in Intent. This modification created a tension with a parent Contract. Enforcement played its role: no silent bypass, a documented and approved exception. The org retains visibility. The team retains autonomy within the explicitly negotiated scope.",
      },
    },
    summary: {
      title: 'What the four episodes traverse',
      mechanism: 'Mechanism',
      episode: 'Episode',
      rows: [
        ['ADR split into Decision Context + Decision Directive', '1'],
        ['Knowledge fed by decision memory', '1'],
        ['Context Assembler assembling the task brief', '2'],
        ['Contracts quality gate triggered by agent', '2'],
        ['Self-correction before submission', '2'],
        ['Ship loop → Contracts update', '2'],
        ['Operations runbook executed by agent', '3'],
        ['Sync loop → Knowledge + Operations enrichment', '3'],
        ['Product hypothesis revised in Intent (Shape)', '4'],
        ['Enforcement mechanism: extension vs. exception', '4'],
        ['Cross-level validation (team → BU)', '4'],
        ['Context Assembler blocking an unapproved contract', '4'],
      ],
      insight: "The example does not show an ideal case. It shows a real one: a team that decides, miscalibrates a threshold, suffers an incident, revises a hypothesis. Context Nexus doesn't prevent these situations. It ensures each event enriches the system rather than getting lost.",
    },
    crossref: { label: 'Dig deeper into the registers' },
  },
} as const
