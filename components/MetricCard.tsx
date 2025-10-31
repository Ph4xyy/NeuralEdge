import { MotionFadeIn } from "./MotionFadeIn"

interface MetricCardProps {
  value: string
  label: string
  delay?: number
}

export function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <MotionFadeIn delay={delay}>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          {value}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </MotionFadeIn>
  )
}

