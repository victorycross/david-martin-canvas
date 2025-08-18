// Mock artwork service - replace with Supabase integration
export interface Artwork {
  id: string
  title: string
  description: string | null
  medium: string
  year: number
  category: string | null
  image_url: string
  created_at: string
}

// Sample artwork data - replace with actual Supabase data
const sampleArtworks: Artwork[] = [
  {
    id: "1",
    title: "Digital Horizon",
    description: "An AI-generated landscape exploring the intersection of natural beauty and digital artistry.",
    medium: "AI Generated (MidJourney)",
    year: 2024,
    category: "Landscape",
    image_url: "/lovable-uploads/09d913d1-2fe9-4193-ac0e-46d503d86008.png",
    created_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "2", 
    title: "Abstract Reflection",
    description: "A mixed media piece combining traditional techniques with digital manipulation.",
    medium: "Mixed Media",
    year: 2023,
    category: "Abstract",
    image_url: "/lovable-uploads/2ca0d6d3-64d7-437c-aa35-243da50437b9.png",
    created_at: "2023-11-20T14:15:00Z"
  },
  {
    id: "3",
    title: "Urban Dreams",
    description: "Street photography meets digital art in this exploration of city life.",
    medium: "Photography",
    year: 2024,
    category: "Urban",
    image_url: "/lovable-uploads/4341aa23-8e7d-428d-bc52-0cf88f62e31c.png", 
    created_at: "2024-02-08T16:45:00Z"
  },
  {
    id: "4",
    title: "Ethereal Portrait",
    description: "An experimental portrait series pushing the boundaries of digital manipulation.",
    medium: "Digital Art",
    year: 2023,
    category: "Portrait",
    image_url: "/lovable-uploads/54f0764f-7c11-44aa-9d2a-e7c9c2650e2d.png",
    created_at: "2023-09-12T11:20:00Z"
  },
  {
    id: "5",
    title: "Geometric Flow",
    description: "Mathematical beauty expressed through algorithmic art generation.",
    medium: "AI Generated (MidJourney)",
    year: 2024,
    category: "Abstract",
    image_url: "/lovable-uploads/c1970e61-dbda-436b-884a-18ab3fb5b8f7.png",
    created_at: "2024-03-22T09:10:00Z"
  },
  {
    id: "6",
    title: "Nature Synthesis",
    description: "Combining organic forms with synthetic textures in a harmony of old and new.",
    medium: "3D Modeling",
    year: 2023,
    category: "Conceptual",
    image_url: "/lovable-uploads/c89f9cc9-32ac-4ed7-bfa2-6b1856f74894.png",
    created_at: "2023-07-30T13:55:00Z"
  }
]

export const artworkService = {
  async getArtworks(): Promise<Artwork[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return [...sampleArtworks].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  },

  async uploadArtwork(formData: {
    title: string
    description: string
    medium: string
    year: number
    category: string
    file: File
  }): Promise<Artwork> {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Create mock artwork entry
    const newArtwork: Artwork = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description || null,
      medium: formData.medium,
      year: formData.year,
      category: formData.category || null,
      image_url: URL.createObjectURL(formData.file), // Temporary URL for demo
      created_at: new Date().toISOString()
    }
    
    // Add to mock data
    sampleArtworks.unshift(newArtwork)
    
    return newArtwork
  }
}