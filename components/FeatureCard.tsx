import { ReactNode } from "react"
import { MotionFadeIn } from "./MotionFadeIn"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  desc: string
  icon?: ReactNode
  delay?: number
  className?: string
}

export function FeatureCard({ title, desc, icon, delay = 0, className }: FeatureCardProps) {
  return (
    <MotionFadeIn delay={delay}>
      <div
        className={cn(
          "group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border hover:shadow-lg transition-all",
          className
        )}
      >
        {icon && (
          <div className="mb-4 text-primary">{icon}</div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </MotionFadeIn>
  )
}

