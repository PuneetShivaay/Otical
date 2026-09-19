/**
 * The 9 Otical services. Fixed set — see docs/00-PROJECT-BRIEF.md.
 *
 * Adding a service = adding one object here. The /services/[service] route
 * resolves by `slug`, so no new files are needed.
 *
 * `icon` is a STRING (a lucide-react export name), not JSX, so this file stays
 * plain serializable data. It is resolved at render time by components/ui/Icon.
 *
 * SCHEMA
 * ------
 * slug          string    URL segment, permanent once live
 * title         string
 * icon          string    lucide-react name; must exist in components/ui/Icon
 * summary       string    one line, used on cards
 * description   string    paragraph, page intro + meta description
 * pillar        string    build | design | intelligence | infrastructure
 * outcomes      string[]  what the client gets — benefits, not features
 * capabilities  {title, description}[]
 * stack         string[]  tools we typically reach for
 * faqs          {question, answer}[]
 *
 * ⚠️ COPY STATUS: outcomes / capabilities / stack / faqs are an Otical-written
 * first draft pending client review. Keep claims factual — no invented client
 * names, numbers or guarantees.
 */

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'Globe',
    summary: 'Responsive, scalable web applications built for performance.',
    description:
      'We build responsive and scalable web applications tailored to your business needs, from marketing sites to complex platforms — engineered for speed, accessibility and long-term maintainability.',
    pillar: 'build',
    outcomes: [
      'A site that loads fast on real devices and real networks',
      'Code your next developer can actually pick up',
      'Search-ready markup, structured data and clean URLs',
      'A foundation that scales as traffic and features grow',
    ],
    capabilities: [
      {
        title: 'Marketing and brand sites',
        description:
          'Fast, accessible sites with content structured so your team can update it without a developer.',
      },
      {
        title: 'Web applications',
        description:
          'Dashboards, portals and internal tools with authentication, roles and real-time data.',
      },
      {
        title: 'E-commerce',
        description:
          'Storefronts, checkout flows and payment integration built around conversion.',
      },
      {
        title: 'Performance engineering',
        description:
          'Core Web Vitals work — image strategy, bundle reduction, caching and rendering choices.',
      },
      {
        title: 'API and systems integration',
        description:
          'Connecting your site to CRMs, payment providers, ERPs and third-party services.',
      },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    faqs: [
      {
        question: 'How long does a typical web project take?',
        answer:
          'A focused marketing site is usually a few weeks; a full application is measured in months. We scope properly before quoting, and deliver in reviewable increments rather than one long silence.',
      },
      {
        question: 'Can you work with our existing codebase?',
        answer:
          'Yes. We regularly take over existing projects, starting with an audit so you get an honest assessment of what is worth keeping and what is costing you money.',
      },
      {
        question: 'Do you handle hosting and maintenance?',
        answer:
          'Yes — see our DevOps & Cloud service. We can deploy, monitor and maintain what we build, or hand it over cleanly to your team with documentation.',
      },
    ],
  },

  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'Smartphone',
    summary: 'Native-quality iOS and Android apps from one codebase.',
    description:
      'We create intuitive mobile apps for iOS and Android, helping you reach customers on the devices they actually use — with the performance and polish people expect from an app store.',
    pillar: 'build',
    outcomes: [
      'One codebase shipping to both iOS and Android',
      'Apps that feel native, not like a wrapped website',
      'Store submission handled, including review requirements',
      'Crash reporting and analytics from day one',
    ],
    capabilities: [
      {
        title: 'Cross-platform apps',
        description:
          "React Native and Flutter builds that share logic across platforms while respecting each one's conventions.",
      },
      {
        title: 'Offline-first experiences',
        description:
          'Local storage and sync so the app keeps working on poor connections.',
      },
      {
        title: 'Device integrations',
        description:
          'Camera, location, biometrics, push notifications and background tasks.',
      },
      {
        title: 'App store release',
        description:
          'Store listings, build pipelines, phased rollout and update strategy.',
      },
    ],
    stack: ['React Native', 'Flutter', 'Firebase', 'REST & GraphQL APIs'],
    faqs: [
      {
        question: 'Native or cross-platform?',
        answer:
          'Cross-platform suits most products and roughly halves build and maintenance cost. We recommend native when an app leans heavily on device hardware or demands maximum graphics performance — and we will tell you which case you are in.',
      },
      {
        question: 'Do you publish to the App Store and Play Store?',
        answer:
          'Yes. We handle build configuration, store listings and the review process, including the rejections that often come first time.',
      },
      {
        question: 'Can you build the backend too?',
        answer:
          'Yes. Most apps need an API, database and admin panel — we build those in the same engagement so nothing is left dangling.',
      },
    ],
  },

  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'PenTool',
    // Graphic design is delivered here — it is not a separate service.
    summary: 'Product, interface and brand design that earns trust.',
    description:
      'We design user-centric interfaces that are both considered and easy to use — covering product design, design systems, and the brand and graphic work that surrounds them.',
    pillar: 'design',
    outcomes: [
      'Interfaces people can use without being taught',
      'A design system that keeps future screens consistent',
      'Designs handed over ready to build, not just pretty pictures',
      'Consistent brand presence across product and marketing',
    ],
    capabilities: [
      {
        title: 'Product and interface design',
        description:
          'User flows, wireframes and high-fidelity screens for web and mobile.',
      },
      {
        title: 'Design systems',
        description:
          'Reusable components, tokens and documentation so the product stays coherent as it grows.',
      },
      {
        title: 'Brand and graphic design',
        description:
          'Logos, visual identity, marketing collateral and social assets.',
      },
      {
        title: 'Accessibility',
        description:
          'Colour contrast, keyboard navigation and screen-reader support treated as requirements, not extras.',
      },
      {
        title: 'Prototyping',
        description:
          'Clickable prototypes to test ideas with real users before committing to a build.',
      },
    ],
    stack: ['Figma', 'Design tokens', 'WCAG 2.1 AA'],
    faqs: [
      {
        question: 'Can you design without building?',
        answer:
          'Yes. We deliver developer-ready files and a documented design system your own team can implement.',
      },
      {
        question: 'Do you do logos and branding?',
        answer:
          'Yes — graphic and brand design sit inside this service, handled by our design team alongside product work.',
      },
      {
        question: 'How do you know the design works?',
        answer:
          'We prototype and test with real users before building. Fixing a flow in Figma costs hours; fixing it in production costs weeks.',
      },
    ],
  },

  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    summary: 'Practical AI that automates work and surfaces insight.',
    description:
      'We apply AI and machine learning to automate repetitive processes, extract insight from your data, and build intelligent features — focused on measurable value rather than novelty.',
    pillar: 'intelligence',
    outcomes: [
      'Manual, repetitive work automated',
      'Answers from data you already hold',
      'AI features shipped into production, not stuck in a notebook',
      'A clear view of running costs before you commit',
    ],
    capabilities: [
      {
        title: 'LLM applications',
        description:
          'Assistants, summarisation and document understanding built on current language models.',
      },
      {
        title: 'Retrieval-augmented generation',
        description:
          'Grounding model responses in your own documents so answers are accurate and cite sources.',
      },
      {
        title: 'Predictive models',
        description:
          'Forecasting, classification and recommendation trained on your historical data.',
      },
      {
        title: 'Computer vision',
        description:
          'Image classification, detection and OCR for inspection and document workflows.',
      },
      {
        title: 'MLOps',
        description:
          'Deployment, monitoring and retraining so models keep working after launch.',
      },
    ],
    stack: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI API', 'LangChain', 'Vector databases'],
    faqs: [
      {
        question: 'Do we need our own data?',
        answer:
          'Not always. Many useful applications run on pre-trained models plus your documents. Custom training needs data, and we will assess honestly whether you have enough before you spend anything.',
      },
      {
        question: 'How do you handle accuracy and hallucination?',
        answer:
          'We ground responses in your own sources, cite them, and design for human review where correctness matters. We will also tell you when AI is the wrong tool for a problem.',
      },
      {
        question: 'What does it cost to run?',
        answer:
          'Model usage is an ongoing cost, not a one-off. We estimate it during scoping and design around your budget — including smaller or self-hosted models where they fit.',
      },
    ],
  },

  {
    slug: 'blockchain-technology',
    title: 'Blockchain Technology',
    icon: 'Blocks',
    summary: 'Smart contracts and decentralised applications.',
    description:
      'We provide consulting and development for decentralised applications, smart contracts and blockchain-based systems — starting with whether a blockchain is genuinely the right answer.',
    pillar: 'intelligence',
    outcomes: [
      'An honest answer on whether you need a blockchain at all',
      'Audited contracts before any value moves through them',
      'Wallet flows ordinary users can complete',
      'Gas and transaction costs understood up front',
    ],
    capabilities: [
      {
        title: 'Smart contract development',
        description:
          'Solidity contracts written with testing and security review built into the process.',
      },
      {
        title: 'Decentralised applications',
        description:
          'Web interfaces with wallet connection and on-chain interaction that non-technical users can follow.',
      },
      {
        title: 'Token systems',
        description:
          'Fungible and non-fungible token standards, minting and distribution.',
      },
      {
        title: 'Integration',
        description:
          'Bridging on-chain activity with conventional backends, payments and reporting.',
      },
    ],
    stack: ['Solidity', 'Ethereum', 'Hardhat', 'ethers.js', 'IPFS'],
    faqs: [
      {
        question: 'Do we actually need a blockchain?',
        answer:
          'Often not. Without a need for trustless verification between parties who do not trust each other, a database is cheaper, faster and simpler. We would rather tell you that early than build something you do not need.',
      },
      {
        question: 'How do you handle security?',
        answer:
          'Contracts are immutable once deployed, so testing and review come before deployment, not after. For contracts holding significant value we recommend an independent third-party audit.',
      },
    ],
  },

  {
    slug: 'iot-projects',
    title: 'IOT Projects',
    icon: 'Cpu',
    summary: 'Connected devices, telemetry and remote control.',
    description:
      'We design and build custom IOT solutions that connect and automate devices — enabling data collection, monitoring and remote control across industrial and consumer applications.',
    pillar: 'intelligence',
    outcomes: [
      'Live visibility of equipment you currently check manually',
      'Alerts when something goes wrong, not after',
      'Historical data you can analyse and act on',
      'Devices that keep working when the network does not',
    ],
    capabilities: [
      {
        title: 'Device firmware',
        description:
          'Embedded software for microcontrollers, built around power and reliability constraints.',
      },
      {
        title: 'Connectivity',
        description:
          'MQTT, BLE, LoRaWAN and cellular, chosen for range, power draw and cost.',
      },
      {
        title: 'Telemetry platforms',
        description:
          'Ingestion, time-series storage and dashboards for fleets of devices.',
      },
      {
        title: 'Control and automation',
        description:
          'Remote commands, scheduling and rules with the safety interlocks that need to sit around them.',
      },
    ],
    stack: ['ESP32', 'Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'InfluxDB', 'Grafana'],
    faqs: [
      {
        question: 'Can you work with our existing hardware?',
        answer:
          'Usually yes. Many deployments involve connecting equipment that is already installed rather than replacing it.',
      },
      {
        question: 'What happens when connectivity drops?',
        answer:
          'We design for it. Devices buffer readings locally and sync when the connection returns, so you do not lose data during an outage.',
      },
    ],
  },

  {
    slug: 'devops-cloud',
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    summary: 'Reliable infrastructure and automated delivery.',
    description:
      'We streamline how your software is built, deployed and run — with infrastructure as code, automated pipelines and monitoring that tells you about problems before your customers do.',
    pillar: 'infrastructure',
    outcomes: [
      'Deployments that take minutes and can be rolled back',
      'Infrastructure defined in code, not configured by memory',
      'Alerts before customers notice, not after they complain',
      'Cloud spend you can explain line by line',
    ],
    capabilities: [
      {
        title: 'CI/CD pipelines',
        description:
          'Automated build, test and deploy so releases stop being events people dread.',
      },
      {
        title: 'Infrastructure as code',
        description:
          'Reproducible environments in Terraform — no undocumented manual setup.',
      },
      {
        title: 'Containers and orchestration',
        description:
          'Docker and Kubernetes where the complexity is justified, simpler platforms where it is not.',
      },
      {
        title: 'Observability',
        description:
          'Logging, metrics, tracing and alerting that point at causes rather than symptoms.',
      },
      {
        title: 'Cost optimisation',
        description:
          'Right-sizing, autoscaling and removing the resources nobody remembers creating.',
      },
    ],
    stack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Vercel'],
    faqs: [
      {
        question: 'Can you migrate us to the cloud?',
        answer:
          'Yes. We assess what you run today, plan a staged migration, and move workloads with rollback available at each step rather than in one risky cutover.',
      },
      {
        question: 'Can you reduce our cloud bill?',
        answer:
          'Usually. Most bills contain over-provisioned instances, forgotten resources and storage nobody owns. We start with an audit so you can see the numbers before committing to work.',
      },
    ],
  },

  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'ShieldCheck',
    summary: 'Assessments, hardening and threat monitoring.',
    description:
      'We help protect your digital assets through vulnerability assessment, penetration testing, secure architecture review and ongoing monitoring — findings explained in plain language, with fixes prioritised by real risk.',
    pillar: 'infrastructure',
    outcomes: [
      'A clear picture of where you are actually exposed',
      'Fixes ranked by real risk, not scanner severity',
      'Evidence you can show customers and auditors',
      'Your team better able to spot problems themselves',
    ],
    capabilities: [
      {
        title: 'Vulnerability assessment',
        description:
          'Systematic review of applications and infrastructure, with findings verified by hand rather than dumped from a scanner.',
      },
      {
        title: 'Penetration testing',
        description:
          'Controlled testing of web, mobile and network targets, with clear reproduction steps.',
      },
      {
        title: 'Secure architecture review',
        description:
          'Authentication, authorisation, secrets handling and data flow examined before problems ship.',
      },
      {
        title: 'Incident response',
        description:
          'Containment, investigation and recovery support when something has already gone wrong.',
      },
      {
        title: 'Security awareness',
        description: 'Practical training for the teams who click the links.',
      },
    ],
    stack: ['OWASP Top 10', 'Burp Suite', 'Nmap', 'Metasploit', 'SIEM tooling'],
    faqs: [
      {
        question: 'How disruptive is a penetration test?',
        answer:
          'Scope and timing are agreed in advance, and testing normally runs against a staging environment. Where production testing is necessary, we schedule it with you and stay in contact throughout.',
      },
      {
        question: 'What do we get at the end?',
        answer:
          'A report with an executive summary, technical detail, reproduction steps and prioritised remediation guidance — plus a retest once fixes are in place.',
      },
    ],
  },

  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    icon: 'Compass',
    summary: 'Strategic guidance from people who also build.',
    description:
      'Our consultants provide strategic guidance to help you navigate technology decisions — grounded in delivery experience, because we build the things we recommend.',
    pillar: 'infrastructure',
    outcomes: [
      'Decisions backed by reasoning you can review',
      'A roadmap that survives contact with reality',
      'Independent assessment of vendors and platforms',
      'Advice from people who will also do the work',
    ],
    capabilities: [
      {
        title: 'Technology strategy',
        description:
          'Platform and architecture decisions aligned to where your business is going, not just where it is.',
      },
      {
        title: 'Technical due diligence',
        description:
          'Assessment of a codebase, team or product ahead of investment or acquisition.',
      },
      {
        title: 'Architecture review',
        description:
          'Independent review of an existing system, with prioritised, practical recommendations.',
      },
      {
        title: 'Digital transformation',
        description:
          'Modernising legacy systems in stages, without stopping the business to do it.',
      },
      {
        title: 'Team and process',
        description:
          'Hiring guidance, delivery process and engineering practice for growing teams.',
      },
    ],
    stack: [],
    faqs: [
      {
        question: 'Do we have to hire you to build it afterwards?',
        answer:
          'No. Consulting engagements stand alone, and we are happy to hand recommendations to your team or another vendor. Advice you can only act on by buying more from us is not advice.',
      },
      {
        question: 'How do engagements work?',
        answer:
          'Anything from a short focused review to an ongoing advisory retainer. We scope to the decision you need to make rather than selling a fixed package.',
      },
    ],
  },
];

/**
 * Pillars group the 9 services so breadth reads as integrated capability
 * rather than a scattered list. See docs/00-PROJECT-BRIEF.md.
 */
export const servicePillars = [
  { id: 'build', title: 'Build', description: 'Web and mobile products, engineered to last.' },
  { id: 'design', title: 'Design', description: 'Product, interface and brand design.' },
  { id: 'intelligence', title: 'Intelligence', description: 'AI, blockchain and connected devices.' },
  { id: 'infrastructure', title: 'Infrastructure', description: 'Cloud, security and strategy.' },
];

/** Helper used by the dynamic route. Returns undefined when not found. */
export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

/** Convenience for building links without hardcoding the URL shape. */
export const serviceHref = (slug) => `/services/${slug}`;
