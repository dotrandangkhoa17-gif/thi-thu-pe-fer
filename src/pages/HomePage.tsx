import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import ResourceCard from "@/components/ResourceCard"
import type { Resource, Category } from "@/types/resource"
import { CATEGORIES } from "@/types/resource"

/* ── Mock data (sẽ thay bằng Supabase sau) ────────────────────────── */
const MOCK_RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Next.js 14 – The Complete Guide to Server Components",
    url: "https://nextjs.org/docs",
    category: "Next.js",
    image_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    created_at: "2026-03-10T08:00:00Z",
    user_id: "u1",
    user_email: "alice@fpt.edu.vn",
  },
  {
    id: "2",
    title: "Introduction to Artificial Intelligence with Python",
    url: "https://cs50.harvard.edu/ai/",
    category: "AI",
    image_url: "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=400&h=300&fit=crop",
    created_at: "2026-03-09T12:30:00Z",
    user_id: "u2",
    user_email: "bob@fpt.edu.vn",
  },
  {
    id: "3",
    title: "Figma UI/UX Design Essentials – Beginner to Pro",
    url: "https://www.figma.com/resources/learn-design/",
    category: "UI/UX",
    image_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    created_at: "2026-03-08T09:15:00Z",
    user_id: "u3",
    user_email: "charlie@fpt.edu.vn",
  },
  {
    id: "4",
    title: "React – Official Documentation & Tutorial",
    url: "https://react.dev/",
    category: "React",
    image_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    created_at: "2026-03-07T15:00:00Z",
    user_id: "u1",
    user_email: "alice@fpt.edu.vn",
  },
  {
    id: "5",
    title: "TypeScript Handbook – Advanced Types & Generics",
    url: "https://www.typescriptlang.org/docs/handbook/",
    category: "TypeScript",
    image_url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    created_at: "2026-03-06T10:00:00Z",
    user_id: "u4",
    user_email: "dan@fpt.edu.vn",
  },
  {
    id: "6",
    title: "Modern CSS – Container Queries, Subgrid & More",
    url: "https://web.dev/blog/css-wrapped-2024",
    category: "CSS",
    image_url: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=300&fit=crop",
    created_at: "2026-03-05T14:45:00Z",
    user_id: "u2",
    user_email: "bob@fpt.edu.vn",
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered = useMemo(() => {
    return MOCK_RESOURCES.filter((r) => {
      const matchSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.url.toLowerCase().includes(searchQuery.toLowerCase())
      const matchCategory =
        activeCategory === "All" || r.category === activeCategory
      return matchSearch && matchCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <main className="flex-1">
      {/* ── Hero section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-900 dark:via-background dark:to-background">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-800/20" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20" />

        <div className="container relative z-10 py-16 text-center lg:py-24">
          <div className="mx-auto flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              FPT University – FER202
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Study{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Discover and share curated learning resources with the community.
            Sign in to add your own!
          </p>

          {/* ── Search bar ──────────────────────────── */}
          <div className="mx-auto mt-8 flex max-w-lg items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search resources…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-11 rounded-lg shadow-sm"
              />
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-lg border bg-background shadow-sm hover:bg-accent transition-colors">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Category filter pills ────────────────────────────────── */}
      <section className="border-b bg-background/60 backdrop-blur-sm">
        <div className="container flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0"
            >
              <Badge
                variant={activeCategory === cat ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1.5 text-xs transition-all ${
                  activeCategory === cat
                    ? "shadow-sm"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </Badge>
            </button>
          ))}
        </div>
      </section>

      {/* ── Resource grid ────────────────────────────────────────── */}
      <section className="container py-10">
        {filtered.length > 0 ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                resource{filtered.length !== 1 && "s"}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">No resources found</h3>
            <p className="mt-1 text-sm text-muted-foreground max-w-sm">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
