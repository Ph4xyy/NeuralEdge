import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className={cn("container max-w-screen-xl mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

