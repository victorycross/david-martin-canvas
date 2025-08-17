import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

export default function Writing() {
  const posts = [
    {
      title: "AI Governance in Financial Services",
      description: "Exploring the regulatory landscape and best practices for implementing AI in financial institutions.",
      date: "2024-01-15",
      platform: "LinkedIn",
      tags: ["AI Governance", "Financial Services", "Risk Management"],
      link: "#",
      featured: true
    },
    {
      title: "Building Resilient Crisis Management Systems",
      description: "Lessons learned from developing crisis management applications for enterprise environments.",
      date: "2024-01-08",
      platform: "Medium",
      tags: ["Crisis Management", "Enterprise Software", "Technology"],
      link: "#",
    },
    {
      title: "The Future of Technology Risk",
      description: "Insights into emerging risks and opportunities in the evolving technology landscape.",
      date: "2023-12-20",
      platform: "LinkedIn",
      tags: ["Technology Risk", "Future Trends", "Innovation"],
      link: "#",
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Writing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on technology risk, AI governance, and insights from the intersection 
              of innovation and responsibility.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <Card key={index} className={`p-6 hover:shadow-medium transition-all duration-medium ${post.featured ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      {post.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      <Badge variant="outline" className="text-xs">
                        {post.platform}
                      </Badge>
                      
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="shrink-0"
                    asChild
                  >
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}