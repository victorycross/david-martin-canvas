import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, Brain, MessageSquare, Target, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AISection() {
  const { toast } = useToast()

  const promptCategories = [
    {
      category: "Productivity & Decision-Making",
      icon: <Target className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-600",
      prompts: [
        {
          prompt: "Summarize this long memo into 3 bullet points that a senior leader can act on.",
          usage: "When you need to cut through detail and highlight the essentials for executives."
        },
        {
          prompt: "Create a decision register entry with clear options, risks, and a recommendation.",
          usage: "To record business or risk decisions in a structured and auditable way."
        },
        {
          prompt: "Design a simple risk scoring model starting at 100 and adjusting up or down based on given factors.",
          usage: "When you want to quickly quantify risk or priority in a repeatable way."
        }
      ]
    },
    {
      category: "Business Communication",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600",
      prompts: [
        {
          prompt: "Rewrite this email to make it clear, concise, and professional.",
          usage: "For improving tone and clarity in day-to-day correspondence."
        },
        {
          prompt: "Turn this agenda into talking points for a meeting that keeps people engaged.",
          usage: "When preparing to lead or participate in a meeting."
        },
        {
          prompt: "Draft a short, thoughtful comment I can leave on a colleague's post to show support.",
          usage: "To build presence and strengthen professional relationships on social platforms."
        }
      ]
    },
    {
      category: "AI for Learning & Workflows",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600",
      prompts: [
        {
          prompt: "Explain this technical concept as if I am new to the field, then give me an advanced explanation.",
          usage: "When learning a new topic and wanting both beginner and expert views."
        },
        {
          prompt: "Suggest five prompts I could use with Copilot (or another AI tool) to check if a new technology meets company standards.",
          usage: "To accelerate due diligence when exploring new tools."
        },
        {
          prompt: "Describe a workflow where a form submission triggers an AI-generated analysis that is formatted for leadership review.",
          usage: "For mapping out automation ideas that combine AI and business processes."
        }
      ]
    },
    {
      category: "Personal Wellness & Reflection",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-rose-500/10 text-rose-600",
      prompts: [
        {
          prompt: "Write a short meditation script based on a simple phrase like 'Be still, and know that I am God'.",
          usage: "When you want to create space for reflection or grounding during the day."
        },
        {
          prompt: "Create a daily routine with a warm-up, focused work period, and wind-down that helps manage attention.",
          usage: "To build consistency and structure in your day, especially if you struggle with focus."
        },
        {
          prompt: "Turn this reflection or journal entry into a structured set of takeaways I can act on.",
          usage: "When journaling or brainstorming and wanting to extract next steps."
        }
      ]
    }
  ]

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt)
    toast({
      title: "Prompt copied!",
      description: "The prompt has been copied to your clipboard.",
    })
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">AI Prompt Library</h3>
            <CardDescription className="text-base">
              Practical Prompts for Business, Learning, and Reflection
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 p-4 bg-white/10 rounded-lg">
          <p className="text-muted-foreground leading-relaxed">
            AI works best when you give it a clear, focused prompt. Below is a set of tested prompts you can copy and use directly. 
            They cover productivity, communication, learning, workflows, and personal wellness.
          </p>
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('#', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Explore More AI Tools & Prompts
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {promptCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold">{category.category}</h4>
              </div>
              
              <div className="space-y-4">
                {category.prompts.map((item, promptIndex) => (
                  <Card key={promptIndex} className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-foreground leading-relaxed">
                            "{item.prompt}"
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyPrompt(item.prompt)}
                          className="flex-shrink-0"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        <strong>When to use:</strong> {item.usage}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white/5 rounded-lg">
          <h4 className="font-semibold mb-3 text-lg">Best Practices for AI Prompts</h4>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p>Be specific about the format you want (bullet points, table, paragraph, etc.)</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p>Provide context about your role and the audience for the output</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p>Include examples when you want a specific style or tone</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p>Iterate and refine - AI responds well to follow-up questions</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}