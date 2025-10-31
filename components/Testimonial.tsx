import { MotionFadeIn } from "./MotionFadeIn"
import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  role: string
  delay?: number
}

export function Testimonial({ quote, name, role, delay = 0 }: TestimonialProps) {
  return (
    <MotionFadeIn delay={delay}>
      <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <p className="text-muted-foreground mb-6">{quote}</p>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </MotionFadeIn>
  )
}

