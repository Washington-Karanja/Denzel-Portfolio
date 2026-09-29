export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
}

export const posts: Post[] = [
  {
    slug: 'invisible-interface',
    title: 'The Invisible Interface',
    date: '2024-11-08',
    excerpt:
      'The best interfaces are the ones users stop noticing. A look at cognitive load reduction in enterprise UIs — and why complexity is always a design failure, not a user problem.',
    readingTime: '6 min',
    tags: ['Design', 'UX'],
    sections: [
      {
        paragraphs: [
          'The interfaces I admire most rarely announce themselves. They make the next action obvious, keep the important context close, and then get out of the way. The user remembers finishing the task, not navigating the software.',
          'That kind of simplicity is not the absence of design. It is the result of careful decisions about hierarchy, defaults, language, and what can safely remain hidden until it is needed.',
        ],
      },
      {
        heading: 'Complexity has to live somewhere',
        paragraphs: [
          'Enterprise products often reflect the structure of the organizations that built them. Every team adds a field, every edge case earns a setting, and every permission becomes another branch in the interface. The product may be technically complete while becoming harder to understand with every release.',
          'Removing that burden from the user does not mean removing capability. It means moving complexity into the system: choosing useful defaults, grouping related actions, remembering context, and revealing advanced controls progressively.',
        ],
      },
      {
        heading: 'Design for recognition',
        paragraphs: [
          'People are better at recognizing a clear option than recalling a command or reconstructing where they left off. Consistent placement, plain language, and immediate feedback reduce the amount of information a person must hold in working memory.',
          'A useful review question is: what does someone need to remember to complete this screen? Every answer is an opportunity to add context, improve a label, or remove a decision.',
        ],
      },
      {
        heading: 'The interface should earn its quiet',
        paragraphs: [
          'An invisible interface is not visually empty. It is calm because its hierarchy is doing the work. Important actions have emphasis, related information is grouped, and exceptional states appear only when they become relevant.',
          'The goal is not fewer pixels. The goal is fewer moments of hesitation. When a product feels obvious, it is usually because a team spent time understanding where uncertainty begins and designed it away.',
        ],
      },
    ],
  },
  {
    slug: 'cra-to-vite',
    title: 'Why I Migrated from CRA to Vite',
    date: '2024-08-14',
    excerpt:
      'Create React App quietly became a liability. Here is what I learned moving a production codebase to Vite — the real performance wins, the footguns, and whether the pain was worth it.',
    readingTime: '8 min',
    tags: ['Tooling', 'Performance'],
    sections: [
      {
        paragraphs: [
          'Create React App gave React teams a dependable default for years. It removed configuration decisions and let us focus on the product. But as our application and tooling needs grew, that convenience started to work against us.',
          'Local startup became slow, configuration overrides became fragile, and upgrading the hidden build stack felt riskier than owning a smaller configuration ourselves. Vite offered a way to simplify rather than add another layer.',
        ],
      },
      {
        heading: 'Start with an inventory',
        paragraphs: [
          'The migration was easiest once we stopped treating it as a bundler swap and documented everything the old setup was doing. Environment variables, path aliases, SVG handling, test globals, proxy rules, and production asset paths all needed an explicit home.',
          'That inventory also exposed configuration we no longer needed. Deleting obsolete transforms and overrides reduced the surface area of the migration before any Vite code was written.',
        ],
      },
      {
        heading: 'The wins were immediate',
        paragraphs: [
          'The development server became available almost instantly and updates felt direct even in the oldest parts of the application. The larger improvement was clarity: our Vite configuration was short enough to read in one sitting, and each plugin had a visible purpose.',
          'Production performance did not change by magic. We still had to inspect chunks, lazy-load expensive screens, and be disciplined about dependencies. Vite made that work easier to see, but it did not replace it.',
        ],
      },
      {
        heading: 'The footguns',
        paragraphs: [
          'The biggest source of surprises was the boundary between CommonJS and ES modules. A few older packages behaved differently in development and production, so a full production build remained part of every migration step.',
          'Environment variables were another intentional breaking point. Moving from process.env to import.meta.env required a careful audit, but the explicit VITE_ prefix made it much harder to expose a server-only value accidentally.',
        ],
      },
      {
        heading: 'Was it worth it?',
        paragraphs: [
          'Yes, but not only because Vite is faster. The migration replaced an opaque, aging abstraction with a small configuration the team understands. That lowered the cost of future upgrades and made build behavior easier to debug.',
          'For a stable application with no tooling pain, migration for its own sake may not be valuable. For us, the daily feedback loop and simpler ownership model paid back the work quickly.',
        ],
      },
    ],
  },
  {
    slug: 'composing-tailwind',
    title: 'Composing with Tailwind CSS',
    date: '2024-05-22',
    excerpt:
      "Utility-first CSS at scale doesn't mean inline soup. How I build maintainable, consistent design systems on top of Tailwind without losing the design team's sanity.",
    readingTime: '7 min',
    tags: ['CSS', 'Design Systems'],
    sections: [
      {
        paragraphs: [
          'Tailwind works best when utilities remain the implementation detail of a clear component system. The problem is not a long class list by itself; it is repeating product decisions without naming or constraining them.',
          'At scale, the goal is to keep the speed of composing utilities while giving typography, spacing, color, and interaction states a shared vocabulary.',
        ],
      },
      {
        heading: 'Begin with tokens, not components',
        paragraphs: [
          'A useful Tailwind setup starts by mapping the design language into a focused set of theme values. Semantic color roles, a deliberate spacing rhythm, type styles, radii, and shadows create guardrails before a component library exists.',
          'Tokens should describe purpose rather than a particular screen. When a value has a clear role, teams can evolve the visual language without searching through every feature for arbitrary declarations.',
        ],
      },
      {
        heading: 'Extract decisions, not every pattern',
        paragraphs: [
          'Repeated markup does not automatically deserve a component. I extract a component when it owns behavior, accessibility, variants, or a durable product concept. A one-off layout can remain local and readable.',
          'This keeps the component API from becoming a second styling language. The best primitives expose a small set of meaningful choices and keep unsupported combinations difficult to create.',
        ],
      },
      {
        heading: 'Keep composition close',
        paragraphs: [
          'Utilities are especially effective for page-level composition because the relationship between markup and layout stays visible. A developer can understand responsive behavior without jumping between a template and a distant stylesheet.',
          'When a class list becomes difficult to scan, small layout components or a variant helper can restore clarity. The test is whether the abstraction communicates intent, not whether it makes the JSX shorter.',
        ],
      },
      {
        heading: 'Consistency is a team practice',
        paragraphs: [
          'No tool can create a design system on its own. Shared review standards, documented examples, and regular collaboration between design and engineering are what keep the implementation coherent.',
          'Tailwind gives that collaboration a practical medium: constraints are explicit, exceptions are visible, and the system can evolve alongside the product instead of living in a separate document.',
        ],
      },
    ],
  },
];
