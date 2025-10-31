"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks"

interface MotionFadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function MotionFadeIn({ children, delay = 0, className }: MotionFadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

