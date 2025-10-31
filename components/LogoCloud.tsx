"use client"

import { MotionFadeIn } from "./MotionFadeIn"

const logos = [
  "Acme Corp",
  "TechFlow",
  "DataSync",
  "CloudScale",
  "NextGen",
  "PrimeSys",
]

export function LogoCloud() {
  return (
    <MotionFadeIn>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            {logo}
          </div>
        ))}
      </div>
    </MotionFadeIn>
  )
}

