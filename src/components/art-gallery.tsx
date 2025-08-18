import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Calendar, Palette, Eye } from "lucide-react"
import { artworkService, type Artwork } from "@/lib/artwork-service"
import { toast } from "sonner"


interface ArtGalleryProps {
  refreshTrigger?: number
}

export function ArtGallery({ refreshTrigger }: ArtGalleryProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  const fetchArtworks = async () => {
    try {
      const data = await artworkService.getArtworks()
      setArtworks(data)
    } catch (error) {
      console.error('Error fetching artworks:', error)
      toast.error("Failed to load artworks")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArtworks()
  }, [refreshTrigger])

  const handleViewArtwork = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
    setViewDialogOpen(true)
  }

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-square bg-muted animate-pulse" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-3 bg-muted animate-pulse rounded w-2/3" />
            </div>
          </Card>
        ))}
      </div>
    )
  }

  if (artworks.length === 0) {
    return (
      <div className="text-center py-12">
        <Palette className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold mb-2">No Artworks Yet</h3>
        <p className="text-muted-foreground">
          Upload your first artwork to get started with your portfolio.
        </p>
      </div>
    )
  }

  // Featured carousel for large screens
  const featuredArtworks = artworks.slice(0, 6)

  return (
    <>
      {/* Featured Carousel */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Featured Works</h3>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredArtworks.map((artwork) => (
              <CarouselItem key={artwork.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group cursor-pointer hover:shadow-medium transition-all duration-medium">
                  <div 
                    className="aspect-square bg-gradient-surface relative overflow-hidden"
                    onClick={() => handleViewArtwork(artwork)}
                  >
                    <img
                      src={artwork.image_url}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold line-clamp-1">{artwork.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {artwork.year}
                      </Badge>
                    </div>
                    
                    {artwork.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {artwork.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {artwork.medium}
                      </Badge>
                      {artwork.category && (
                        <span className="text-xs text-muted-foreground">
                          {artwork.category}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Full Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <Card key={artwork.id} className="overflow-hidden group cursor-pointer hover:shadow-medium transition-all duration-medium">
            <div 
              className="aspect-square bg-gradient-surface relative overflow-hidden"
              onClick={() => handleViewArtwork(artwork)}
            >
              <img
                src={artwork.image_url}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold line-clamp-1">{artwork.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {artwork.year}
                </Badge>
              </div>
              
              {artwork.description && (
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {artwork.description}
                </p>
              )}
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {artwork.medium}
                </Badge>
                {artwork.category && (
                  <span className="text-xs text-muted-foreground">
                    {artwork.category}
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Artwork Detail Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedArtwork.title}</DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-surface relative overflow-hidden rounded-lg">
                  <img
                    src={selectedArtwork.image_url}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  {selectedArtwork.description && (
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedArtwork.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Medium:</strong> {selectedArtwork.medium}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Year:</strong> {selectedArtwork.year}
                      </span>
                    </div>
                    
                    {selectedArtwork.category && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          <strong>Category:</strong> {selectedArtwork.category}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" asChild>
                      <a 
                        href={selectedArtwork.image_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Full Size
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}