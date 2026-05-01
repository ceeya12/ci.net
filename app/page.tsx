"use client";

import Image from "next/image";
import {
  Accessibility,
  BrainCircuit,
  Boxes,
  Code,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  Globe,
  House,
  Layers,
  Palette,
  Shield,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const nav = [
    { id: "top", label: "Home", icon: House },
    { id: "sites", label: "Sites", icon: Globe },
    { id: "why", label: "Why me", icon: CheckCircle2 },
    { id: "ai-projects", label: "AI projects", icon: BrainCircuit },
    { id: "legacy-projects", label: "Legacy projects", icon: Layers },
    { id: "contact", label: "Contact", icon: ExternalLink },
  ] as const;

  const sitesBuilt = [
    {
      title: "Medical practice website",
      description: "Clear services, trust signals, and appointment-ready layout.",
      imageSrc: "/work/sm_orthopedics.png",
      href: "https://www.smorthopedics.com",
    },
    {
      title: "Brand / lifestyle site",
      description: "Bold visuals, simple navigation, and polished performance.",
      imageSrc: "/work/birddogdefense.png",
      href: "https://www.birddogdefense.com",
    },
    {
      title: "Local service business",
      description: "Lead-focused landing page with strong call-to-action.",
      imageSrc: "/work/frontline.png",
      href: "https://example.com/frontline",
    },
    {
      title: "Web app / dashboard",
      description: "Clean UI for users to sign in, track, and manage data.",
      imageSrc: "/work/bogeypulse.png",
      href: "https://bogeypulse.com",
    },
    {
      title: "Organization / community site",
      description: "Modern homepage layout with clear sections and updates.",
      imageSrc: "/work/npagagolf_org.png",
      href: "https://npagagolf.org",
    },
  ] as const;

  type ApiSpec = {
    style: "REST" | "GraphQL";
    highlights: string[];
    stack: string[];
  };

  type Project = {
    name: string;
    tagline: string;
    description: string;
    outcomes?: string[];
    kind: "AI" | "Legacy";
    status: "Active" | "Maintenance" | "Archived";
    tags: string[];
    apis: ApiSpec[];
    links?: { label: string; href: string; icon?: "github" | "external" }[];
  };

  const projects: Project[] = [
    {
      name: "Fairway Supply Co.",
      tagline: "Premium golf gear, tuned to how you play",
      description:
        "An online golf merchandise store with AI-powered club fitting prompts, personalized apparel picks from swing stats you choose to share, and quick reorder from past rounds.",
      outcomes: [
        "AI-guided club & ball matching",
        "Personalized bundles by handicap & climate",
        "Fewer returns with fit confidence scores",
      ],
      kind: "AI",
      status: "Active",
      tags: ["Clubs", "Apparel", "Accessories", "AI recommendations"],
      apis: [
        {
          style: "GraphQL",
          highlights: [
            "Catalog + variants with inventory-aware bundles",
            "Recommendation resolver with guardrails",
            "Persisted queries for fast PDP loads",
          ],
          stack: ["Storefront GraphQL", "Postgres"],
        },
        {
          style: "REST",
          highlights: [
            "Payments webhooks & idempotent checkout",
            "REST hooks for WMS / fulfillment systems",
            "Rate limits + signed callbacks for partner tee-sheet imports",
          ],
          stack: ["OpenAPI", "Edge caching"],
        },
      ],
    },
    {
      name: "Customer support helper",
      tagline: "Quicker replies and better organization",
      description:
        "Keeps requests organized, reduces busywork, and helps teams respond faster.",
      outcomes: ["Shorter response times", "Cleaner handoffs", "Less busywork"],
      kind: "AI",
      status: "Active",
      tags: ["Automation", "Operations", "Queueing", "Security"],
      apis: [
        {
          style: "REST",
          highlights: ["OAuth scopes", "Signed callbacks", "Bulk operations"],
          stack: ["OpenAPI", "Redis"],
        },
      ],
    },
    {
      name: "Admin & operations tool",
      tagline: "Reliable day-to-day workflows",
      description:
        "A stable internal tool with clean screens, audit trails, and predictable performance.",
      outcomes: ["Fewer mistakes", "Clear history", "Predictable performance"],
      kind: "Legacy",
      status: "Maintenance",
      tags: ["Admin UI", "Audit logs", "Imports/exports", "Dashboards"],
      apis: [
        {
          style: "REST",
          highlights: ["Versioned endpoints", "E2E contract tests"],
          stack: ["Express", "Postgres"],
        },
      ],
    },
    {
      name: "Partner / client portal",
      tagline: "Self-serve access with the right permissions",
      description:
        "A portal with access control, reporting, and reliable integrations—built to reduce back-and-forth.",
      outcomes: ["Less back-and-forth", "Cleaner reporting", "Safer access"],
      kind: "Legacy",
      status: "Maintenance",
      tags: ["Multi-tenant", "Exports", "Caching"],
      apis: [
        {
          style: "GraphQL",
          highlights: ["Schema-first design", "Persisted queries"],
          stack: ["GraphQL Yoga", "CDN"],
        },
        {
          style: "REST",
          highlights: ["HATEOAS-ish links", "ETag caching"],
          stack: ["OpenAPI", "Nginx"],
        },
      ],
    },
  ];

  const aiProjects = projects.filter((p) => p.kind === "AI");
  const legacyProjects = projects.filter((p) => p.kind === "Legacy");

  return (
    <TooltipProvider>
      <div className="min-h-full bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-popover focus:px-3 focus:py-2 focus:text-popover-foreground focus:shadow"
        >
          Skip to content
        </a>

        <aside className="fixed inset-y-0 left-0 z-40 flex w-16 flex-col items-center gap-3 border-r bg-background/80 px-2 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:w-20 sm:px-3 sm:py-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Boxes className="size-5" aria-hidden />
            <span className="sr-only">Portfolio</span>
          </div>

          <nav className="mt-2 flex flex-1 flex-col items-center gap-2">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <a
                      href={`#${item.id}`}
                      className="group flex size-11 items-center justify-center rounded-xl border bg-card text-card-foreground shadow-sm transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={item.label}
                    >
                      <Icon className="size-5" aria-hidden />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2">
            <a
              className="flex size-11 items-center justify-center rounded-xl border bg-card text-card-foreground shadow-sm transition hover:bg-accent hover:text-accent-foreground"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code className="size-5" aria-hidden />
            </a>
          </div>
        </aside>

        <main
          id="main"
          className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 pl-[4.5rem] sm:px-5 sm:pl-[7.5rem] md:pr-10"
        >
          <section id="top" className="relative overflow-hidden rounded-2xl border">
            <div className="absolute inset-0">
              <Image
                src="/window.svg"
                alt=""
                fill
                priority
                className="object-cover opacity-60 dark:opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
            </div>

            <div className="relative p-7 sm:p-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src="/globe.svg" alt="Your avatar" />
                    <AvatarFallback>DG</AvatarFallback>
                  </Avatar>
                  <div className="leading-tight">
                    <p className="text-sm font-medium">David Garcia Jr.</p>
                    <p className="text-xs text-muted-foreground">
                      Full-stack Developer
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Cpu className="size-3.5" aria-hidden />
                    Modern Web Applications
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Database className="size-3.5" aria-hidden />
                    Integrations & automation
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Smartphone className="size-3.5" aria-hidden />
                    Responsive & mobile-first
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Accessibility className="size-3.5" aria-hidden />
                    Accessible UX
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Palette className="size-3.5" aria-hidden />
                    UI/UX & branding
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <ShoppingCart className="size-3.5" aria-hidden />
                    E‑commerce & payments
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Shield className="size-3.5" aria-hidden />
                    Security & reliability
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Cloud className="size-3.5" aria-hidden />
                    Hosting & deployment
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Gauge className="size-3.5" aria-hidden />
                    Performance & SEO
                  </Badge>
                </div>

                <h1 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl mt-20">
                  Websites and apps that feel simple—and help your business grow.
                </h1>
                <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                  I design and build sites that look great, load fast, and make it
                  easy for customers to take the next step.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild>
                    <a href="#work">View my work</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#services">What I can build</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="mt-10 scroll-mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Landing pages that convert</CardTitle>
                  <CardDescription>
                    Clear messaging, strong CTA, and modern design.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Great for promoting a service, product, or personal brand—built
                  for speed and readability.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Web apps & dashboards</CardTitle>
                  <CardDescription>
                    Internal tools that save time and reduce errors.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Admin panels, portals, reporting, and workflows designed for
                  real day‑to‑day use.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Integrations (APIs)</CardTitle>
                  <CardDescription>
                    Payments, CRMs, analytics, email, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Stable REST and GraphQL integrations with authentication,
                  caching, and monitoring.
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="sites" className="mt-12 scroll-mt-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Websites I’ve built
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                Real screenshots from shipped work. Click any image to zoom.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sitesBuilt.map((site, idx) => (
                <Dialog key={`${site.imageSrc}-${site.title}`}>
                  <DialogTrigger asChild>
                    <Card
                      className="group cursor-pointer overflow-hidden motion-safe:animate-fade-up"
                      style={
                        {
                          animationDelay: `${idx * 70}ms`,
                        } as React.CSSProperties
                      }
                    >
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={site.imageSrc}
                          alt={site.title}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 will-change-transform group-hover:scale-[1.06] group-hover:rotate-[0.15deg]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent opacity-95" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-sm font-semibold tracking-tight text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.85)]">
                            {site.title}
                          </p>
                          <p className="mt-1 text-xs leading-snug text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.75)]">
                            {site.description}
                          </p>
                          <div className="mt-3">
                            <a
                              href={site.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-1 ring-white/25 transition hover:bg-primary/92 hover:shadow-[0_6px_18px_rgba(0,0,0,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                            >
                              Visit site
                              <ExternalLink className="size-3.5 shrink-0 opacity-95" aria-hidden />
                            </a>
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_55%)]" />
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="p-0">
                    <DialogHeader className="p-4 pb-2">
                      <DialogTitle>{site.title}</DialogTitle>
                      <DialogDescription>{site.description}</DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-xl">
                      <Image
                        src={site.imageSrc}
                        alt={site.title}
                        fill
                        sizes="(min-width: 1024px) 900px, 92vw"
                        className="object-contain bg-black"
                      />
                    </div>
                    {site.href ? (
                      <div className="flex justify-end border-t bg-muted/30 p-4">
                        <Button asChild className="rounded-full gap-1.5 px-5 shadow-sm">
                          <a href={site.href} target="_blank" rel="noreferrer">
                            Visit site
                            <ExternalLink className="size-4 opacity-90" aria-hidden />
                          </a>
                        </Button>
                      </div>
                    ) : null}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          <section id="why" className="mt-12 scroll-mt-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                What you get when you hire me
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                Most people don’t want “more tech”—they want more calls, more
                leads, more trust, and fewer headaches. Here’s how I build for
                that.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Clear messaging</CardTitle>
                  <CardDescription>Visitors understand what you do fast.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Simple copy, readable sections, and a CTA that’s always easy to
                  find.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Fast + mobile-first</CardTitle>
                  <CardDescription>Great experience on any device.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Lightweight UI, accessible patterns, and performance-minded
                  build choices.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Easy updates</CardTitle>
                  <CardDescription>You’re not locked in.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Clean structure and reusable components so your site can grow
                  with you.
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Typical deliverables</CardTitle>
                  <CardDescription>What most projects include.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="list-inside list-disc space-y-1">
                    <li>Modern design system + consistent branding</li>
                    <li>SEO-friendly structure and metadata</li>
                    <li>Contact / booking funnel setup</li>
                    <li>Analytics + conversion tracking</li>
                    <li>Performance + accessibility pass</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">A simple process</CardTitle>
                  <CardDescription>No chaos, no surprises.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ol className="list-inside list-decimal space-y-1">
                    <li>Short kickoff: goals, audience, and examples you like</li>
                    <li>Wireframe + copy direction</li>
                    <li>Build + review</li>
                    <li>Launch + handoff</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Timeline</CardTitle>
                  <CardDescription>Common ranges.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>
                    Landing page: <span className="font-medium text-foreground">1–2 weeks</span>
                    <br />
                    Multi-page site: <span className="font-medium text-foreground">2–4 weeks</span>
                    <br />
                    Web app: <span className="font-medium text-foreground">4–8+ weeks</span>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">FAQ</CardTitle>
                  <CardDescription>Quick answers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <details className="rounded-lg border bg-card p-3">
                    <summary className="cursor-pointer select-none font-medium text-foreground">
                      Can you work with my current site?
                    </summary>
                    <p className="mt-2">
                      Yes—sometimes a refresh is best, sometimes a rebuild. I’ll
                      recommend the simplest option that meets your goals.
                    </p>
                  </details>
                  <details className="rounded-lg border bg-card p-3">
                    <summary className="cursor-pointer select-none font-medium text-foreground">
                      Will my site be easy to update?
                    </summary>
                    <p className="mt-2">
                      That’s the goal. I keep structure consistent and can set
                      you up with a simple content workflow if needed.
                    </p>
                  </details>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="mt-10" id="work">
            <Tabs defaultValue="ai">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold tracking-tight">
                    My work
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Easy-to-understand results first. Technical details optional.
                  </p>
                </div>
                <TabsList>
                  <TabsTrigger value="ai">AI leveraged</TabsTrigger>
                  <TabsTrigger value="legacy">Legacy</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ai">
                <section id="ai-projects" className="scroll-mt-6">
                  <ProjectGrid projects={aiProjects} />
                </section>
              </TabsContent>

              <TabsContent value="legacy">
                <section id="legacy-projects" className="scroll-mt-6">
                  <ProjectGrid projects={legacyProjects} />
                </section>
              </TabsContent>
            </Tabs>
          </div>

          <Separator className="my-12" />

          <section id="contact" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Let’s build something</CardTitle>
                <CardDescription>
                  Replace these links with your real GitHub, email, and live
                  sites.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" asChild>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      <Code className="mr-2 size-4" aria-hidden />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="mailto:admin@ceeyasinfo.net">Email me</a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </section>
        </main>
      </div>
    </TooltipProvider>
  );
}

function ProjectGrid({
  projects,
}: {
  projects: {
    name: string;
    tagline: string;
    description: string;
    outcomes?: string[];
    status: "Active" | "Maintenance" | "Archived";
    tags: string[];
    apis: { style: "REST" | "GraphQL"; highlights: string[]; stack: string[] }[];
    links?: { label: string; href: string; icon?: "github" | "external" }[];
  }[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <Card key={p.name} className="overflow-hidden">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base sm:text-lg">{p.name}</CardTitle>
                <CardDescription>{p.tagline}</CardDescription>
              </div>
              <Badge
                variant={p.status === "Active" ? "default" : "secondary"}
                className="shrink-0"
              >
                {p.status}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">
              {p.description}
            </p>

            {p.outcomes?.length ? (
              <div className="rounded-xl border bg-card/50 p-3">
                <p className="text-xs font-medium text-foreground">
                  What it helps with
                </p>
                <div className="mt-2 grid gap-1.5">
                  {p.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-muted-foreground" aria-hidden />
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>

            <details className="rounded-xl border bg-card/50 p-3">
              <summary className="cursor-pointer select-none text-sm font-medium">
                Tech details (REST / GraphQL)
              </summary>
              <div className="mt-3 grid gap-3">
                {p.apis.map((api) => (
                  <div
                    key={`${p.name}-${api.style}`}
                    className="rounded-xl border bg-card p-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="muted">{api.style}</Badge>
                      <div className="flex flex-wrap gap-1.5">
                        {api.stack.map((s) => (
                          <Badge key={s} variant="secondary">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {api.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </CardContent>

          {p.links?.length ? (
            <CardFooter className="flex flex-wrap gap-2">
              {p.links.map((l) => (
                <Button key={l.href} variant="outline" size="sm" asChild>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.icon === "github" ? (
                      <Code className="mr-2 size-4" aria-hidden />
                    ) : l.icon === "external" ? (
                      <ExternalLink className="mr-2 size-4" aria-hidden />
                    ) : null}
                    {l.label}
                  </a>
                </Button>
              ))}
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
