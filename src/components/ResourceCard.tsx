import { ExternalLink, ImageIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Resource } from "@/types/resource"

interface ResourceCardProps {
  resource: Resource
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        {resource.image_url ? (
          <img
            src={resource.image_url}
            alt={resource.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
            <ImageIcon className="h-12 w-12 text-muted-foreground/40" />
          </div>
        )}

        {/* Category badge overlay */}
        {resource.category && (
          <div className="absolute top-3 left-3">
            <Badge className="shadow-sm backdrop-blur-sm bg-primary/90 text-[11px]">
              {resource.category}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold leading-snug line-clamp-2">
          {resource.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* URL preview */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-primary hover:underline truncate"
        >
          <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">
            {resource.url.replace(/^https?:\/\//, "").split("/")[0]}
          </span>
        </a>

        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{resource.user_email ?? "Anonymous"}</span>
          <span>{new Date(resource.created_at).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  )
}
