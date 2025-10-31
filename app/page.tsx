/**
 * NeuralEdge Landing Page
 * 
 * To edit all text content, modify /lib/copy.ts
 * All copy strings are centralized there for easy localization.
 */

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion } from "@/components/ui/accordion"
import {
  Users,
  Zap,
  Shield,
  Briefcase,
  Wallet,
  HeartHandshake,
  Headphones,
  FileText,
  BarChart3,
  FileSignature,
  Sparkles,
  Slack,
  Building2,
} from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"
import { MotionFadeIn } from "@/components/MotionFadeIn"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { AuroraLines } from "@/components/AuroraLines"
import { Spotlight } from "@/components/Spotlight"
import { MetricCard } from "@/components/MetricCard"
import { FeatureCard } from "@/components/FeatureCard"
import { PricingCard } from "@/components/PricingCard"
import { Testimonial } from "@/components/Testimonial"
import { FAQItem } from "@/components/FAQItem"
import { LogoCloud } from "@/components/LogoCloud"
import { CTA } from "@/components/CTA"
import { NewsletterForm } from "@/components/NewsletterForm"
import { copy } from "@/lib/copy"
import { motion } from "framer-motion"

const capabilityIcons = [
  Users,
  Briefcase,
  Wallet,
  HeartHandshake,
  Headphones,
  FileText,
  BarChart3,
  FileSignature,
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <AuroraLines />
      <Spotlight />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-24 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <MotionFadeIn>
            <Badge className="mb-6">Early Access Available</Badge>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {copy.hero.title}
            </h1>
          </MotionFadeIn>
          <MotionFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {copy.hero.subtitle}
            </p>
          </MotionFadeIn>
          <MotionFadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="#request-access">{copy.hero.ctaPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">{copy.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.4}>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading teams</p>
              <LogoCloud />
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* Metrics */}
      <Section id="metrics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {copy.metrics.map((metric, idx) => (
            <MetricCard
              key={idx}
              value={metric.value}
              label={metric.label}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Why NeuralEdge */}
      <Section id="why">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {copy.why.title}
          </h2>
        </MotionFadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {copy.why.items.map((item, idx) => {
            const icons = [Zap, Sparkles, Shield]
            const Icon = icons[idx]
            return (
              <FeatureCard
                key={idx}
                title={item.title}
                desc={item.desc}
                icon={<Icon className="h-8 w-8" />}
                delay={idx * 0.1}
              />
            )
          })}
        </div>
      </Section>

      {/* Capabilities */}
      <Section id="capabilities">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {copy.capabilities.title}
          </h2>
        </MotionFadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.capabilities.items.map((item, idx) => {
            const Icon = capabilityIcons[idx]
            return (
              <FeatureCard
                key={idx}
                title={item.title}
                desc={item.desc}
                icon={<Icon className="h-6 w-6" />}
                delay={idx * 0.05}
              />
            )
          })}
        </div>
      </Section>

      {/* AI Agents */}
      <Section id="agents" className="bg-card/30">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {copy.agents.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {copy.agents.desc}
          </p>
        </MotionFadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.agents.items.map((item, idx) => (
            <FeatureCard
              key={idx}
              title={item.title}
              desc={item.desc}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section id="integrations">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {copy.integrations.title}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {copy.integrations.desc}
          </p>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="#integrations">{copy.integrations.cta}</Link>
            </Button>
          </div>
        </MotionFadeIn>
      </Section>

      {/* Live Preview / Interactive Mock */}
      <Section id="demo" className="bg-card/30">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See NeuralEdge in Action
          </h2>
        </MotionFadeIn>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-4 rounded-lg bg-background border border-border/30 font-mono text-sm">
                Plan Q4 hiring and align budgets
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[
                "Analyzing current team capacity...",
                "Reviewing Q3 budget allocations...",
                "Identifying hiring priorities...",
                "Generating alignment plan...",
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.3 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {step}
                </motion.div>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline">View plan</Button>
              <Button>Simulate impact</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {copy.pricing.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {copy.pricing.subtitle}
          </p>
        </MotionFadeIn>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {copy.pricing.plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              name={plan.name}
              price={plan.price}
              unit={plan.unit}
              features={plan.features}
              popular={plan.name === "Enterprise"}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-card/30">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {copy.testimonials.title}
          </h2>
        </MotionFadeIn>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {copy.testimonials.items.map((testimonial, idx) => (
            <Testimonial
              key={idx}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {copy.faq.title}
          </h2>
        </MotionFadeIn>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {copy.faq.items.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.q}
                answer={item.a}
                value={`item-${idx}`}
              />
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="request-access" className="bg-card/30">
        <CTA />
      </Section>

      <Footer />
    </div>
  )
}

