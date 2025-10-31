import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MotionFadeIn } from "./MotionFadeIn"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  price: string
  unit: string
  features: string[]
  popular?: boolean
  delay?: number
}

export function PricingCard({ name, price, unit, features, popular = false, delay = 0 }: PricingCardProps) {
  return (
    <MotionFadeIn delay={delay}>
      <div
        className={cn(
          "relative p-8 rounded-2xl border bg-card/50 backdrop-blur-sm",
          popular ? "border-primary/50 shadow-lg" : "border-border/50"
        )}
      >
        {popular && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
        )}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground">{unit}</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={popular ? "default" : "outline"}
          className="w-full"
          asChild
        >
          <a href="#request-access">
            {name === "Enterprise" ? "Contact Sales" : "Get Started"}
          </a>
        </Button>
      </div>
    </MotionFadeIn>
  )
}

