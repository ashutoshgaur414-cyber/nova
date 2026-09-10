export const nav = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const trustedBy = [
  "Arclight", "Ferro Systems", "Northbeam", "Quill & Co.", "Vantree",
  "Harbor Labs", "Meridian", "Coalstack",
];

export const features = [
  {
    title: "Auto-planning",
    body: "Describe an outcome in plain language and NOVA drafts the task list, owners and dates.",
    tag: "Planning",
  },
  {
    title: "Smart automations",
    body: "Rules that watch your work and handle the busywork — status updates, reminders, handoffs.",
    tag: "Automation",
  },
  {
    title: "Live workload view",
    body: "See who's stretched thin and who has room, updated as work moves, not once a week.",
    tag: "Visibility",
  },
  {
    title: "Meeting notes to tasks",
    body: "Drop in a transcript and NOVA pulls out the decisions and assigns the follow-ups.",
    tag: "Automation",
  },
  {
    title: "Cross-team dependencies",
    body: "Flags work that's blocked by another team before it becomes a missed deadline.",
    tag: "Planning",
  },
  {
    title: "Reporting, written for you",
    body: "A plain-English status update generated from real activity, ready to send up the chain.",
    tag: "Visibility",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Connect your tools",
    body: "Link your calendar, docs and chat. NOVA reads context, it doesn't ask you to re-enter it.",
  },
  {
    step: "02",
    title: "Set the outcome",
    body: "Tell NOVA what you're trying to ship. It proposes a plan you can edit before anything moves.",
  },
  {
    step: "03",
    title: "Let automations run",
    body: "Approved rules handle the routine parts — updates, reminders, routing — in the background.",
  },
  {
    step: "04",
    title: "Review what changed",
    body: "A daily digest shows what NOVA did and what needs a human call. Nothing moves silently.",
  },
];

export const stats = [
  { value: 6200, suffix: "+", label: "Teams running on NOVA" },
  { value: 41, suffix: "%", label: "Fewer status meetings, on average" },
  { value: 18, suffix: "hrs", label: "Saved per person, monthly" },
  { value: 99.95, suffix: "%", label: "Platform uptime, trailing 12mo", decimals: 2 },
];

export const solutions = [
  {
    title: "Product teams",
    body: "Turn roadmap reviews into shipped work. NOVA keeps specs, tickets and standups in sync.",
  },
  {
    title: "Operations",
    body: "Standardize recurring processes — onboarding, vendor reviews, audits — without a rebuild each time.",
  },
  {
    title: "Agencies",
    body: "Run client work on shared timelines with automatic status pages instead of manual updates.",
  },
  {
    title: "Engineering leads",
    body: "Surface blocked work and stalled reviews before they slip the sprint, not after standup.",
  },
];

export const testimonials = [
  {
    quote: "We cut our Monday status meeting from 45 minutes to nothing. NOVA already wrote the update.",
    name: "Priya Raman",
    role: "Head of Ops, Northbeam",
  },
  {
    quote: "The workload view is the first thing I check before I assign anything new. It's saved us from burnout twice this quarter.",
    name: "Daniel Osei",
    role: "Engineering Manager, Ferro Systems",
  },
  {
    quote: "Meeting notes turning into tracked tasks sounds small until you realize how much used to fall through the cracks.",
    name: "Lena Vogt",
    role: "Product Lead, Vantree",
  },
  {
    quote: "Setup took an afternoon. Within a week the automations were doing more than our old PM tool ever did.",
    name: "Marcus Webb",
    role: "Founder, Coalstack",
  },
];

export const pricing = [
  {
    name: "Starter",
    monthly: 0,
    annual: 0,
    tagline: "For small teams trying NOVA out.",
    features: [
      "Up to 5 members",
      "Auto-planning (limited)",
      "1 connected tool",
      "7-day activity history",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Team",
    monthly: 24,
    annual: 19,
    tagline: "For teams shipping work every week.",
    features: [
      "Up to 50 members",
      "Unlimited auto-planning",
      "Unlimited connected tools",
      "Smart automations",
      "90-day activity history",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Scale",
    monthly: 48,
    annual: 39,
    tagline: "For organizations with multiple teams.",
    features: [
      "Unlimited members",
      "Cross-team dependency view",
      "Custom automations",
      "SSO & audit logs",
      "Unlimited activity history",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export const faq = [
  {
    q: "Does NOVA replace our project management tool?",
    a: "It can, or it can sit on top of the one you already use. Most teams start by connecting NOVA to their existing tools and migrate fully once the automations prove out.",
  },
  {
    q: "What does NOVA actually automate?",
    a: "Status updates, task creation from meeting notes, reminders for stalled work, and routing tasks to the right owner. Every automation is visible and editable — nothing runs as a black box.",
  },
  {
    q: "Is our data used to train models?",
    a: "No. Your workspace data is used only to run your workspace. It's never used to train models shared across customers.",
  },
  {
    q: "Can I control what NOVA is allowed to do automatically?",
    a: "Yes. Every automation has an approval mode — fully automatic, or draft-and-review, where NOVA prepares the action and a teammate confirms it before it goes out.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are running their first automation within an hour of connecting a tool. Full rollout across a team typically takes a week.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep export access to your data for 90 days after cancellation. No lock-in, no penalty for leaving.",
  },
];
