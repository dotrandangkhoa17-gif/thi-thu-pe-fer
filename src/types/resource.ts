export interface Resource {
  id: string
  title: string
  url: string
  category?: string
  image_url?: string
  created_at: string
  user_id: string
  user_email?: string
}

export const CATEGORIES = [
  "All",
  "Next.js",
  "React",
  "AI",
  "UI/UX",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Database",
  "DevOps",
  "Other",
] as const

export type Category = (typeof CATEGORIES)[number]
