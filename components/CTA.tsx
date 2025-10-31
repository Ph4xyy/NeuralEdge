"use client"

import { Button } from "@/components/ui/button"
import { NewsletterForm } from "./NewsletterForm"
import { copy } from "@/lib/copy"

export function CTA() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{copy.cta.title}</h2>
      <p className="text-muted-foreground mb-8">{copy.cta.subtitle}</p>
      <div className="flex justify-center mb-8">
        <NewsletterForm />
      </div>
      <Button size="lg" asChild>
        <a href="#request-access">{copy.cta.button}</a>
      </Button>
    </div>
  )
}

