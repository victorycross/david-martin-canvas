import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SpotifyEmbed } from "@/components/ui/spotify-embed"
import { Music, Image as ImageIcon, ExternalLink } from "lucide-react"

export default function Creative() {
  const musicProjects = [
    {
      title: "Coding Flow",
      description: "Perfect background music for focused programming sessions and creative work.",
      genre: "Electronic/Ambient",
      tracks: "50+ tracks",
      embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator",
    },
    {
      title: "Creative Inspiration",
      description: "An eclectic mix of genres to spark creativity and keep the energy flowing.",
      genre: "Multi-Genre",
      tracks: "80+ tracks", 
      embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1s9knjP51Oa?utm_source=generator",
    },
    {
      title: "Chill Vibes",
      description: "Relaxed tunes for unwinding and contemplative moments.",
      genre: "Indie/Alternative",
      tracks: "40+ tracks",
      embed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator",
    }
  ]

  const artProjects = [
    {
      title: "Visual Art Portfolio",
      description: "Digital art and creative explorations coming soon. Working on AI-generated and traditional pieces.",
      medium: "Coming Soon",
      year: "2024",
      image: "/placeholder-art.jpg",
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Creative Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of musical compositions, visual art, and creative explorations 
              at the intersection of technology and artistic expression.
            </p>
          </div>

          <Tabs defaultValue="music" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Music
              </TabsTrigger>
              <TabsTrigger value="art" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Visual Art
              </TabsTrigger>
            </TabsList>

            <TabsContent value="music" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {musicProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-medium">
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant="secondary">{project.genre}</Badge>
                            <span className="text-sm text-muted-foreground">{project.tracks}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="px-6 pb-6">
                      <SpotifyEmbed 
                        src={project.embed}
                        title={project.title}
                        compact={true}
                      />
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    Discover more playlists and musical interests through the embedded players above
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="art" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-medium group">
                    <div className="aspect-square bg-gradient-surface relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-16 w-16 mb-3 opacity-50" />
                        <p className="text-sm text-center">Artwork coming soon</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {project.medium}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-muted-foreground">Full gallery coming soon</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
