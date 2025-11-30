"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Foundation Package",
    price: "₹5,000",
    duration: "3 Months",
    description: "Perfect for building strong basics in any subject",
    features: [
      "Any single subject",
      "Weekly tests",
      "Doubt clearing sessions",
      "Study materials included",
      "Progress reports",
      "Parent-teacher meetings",
    ],
    popular: false,
  },
  {
    name: "Comprehensive Package",
    price: "₹12,000",
    duration: "6 Months",
    description: "Complete preparation for board exams",
    features: [
      "All core subjects included",
      "Daily practice tests",
      "Unlimited doubt sessions",
      "Complete study kit",
      "Mock board exams",
      "1-on-1 mentoring",
      "Career counseling",
      "Scholarship opportunity",
    ],
    popular: true,
  },
  {
    name: "Competitive Exam Package",
    price: "₹20,000",
    duration: "12 Months",
    description: "Intensive preparation for JEE/NEET",
    features: [
      "Full syllabus coverage",
      "Daily MCQ practice",
      "Previous year analysis",
      "All India mock tests",
      "Performance analytics",
      "Expert faculty access",
      "Weekend special classes",
      "Interview preparation",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleEnroll = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing Plans</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-balance">Affordable Quality Education</h2>
          <p className="text-muted-foreground mt-4">
            Choose a plan that fits your academic goals. All prices are in Indian Rupees (₹) with no hidden charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 ${
                plan.popular ? "border-primary shadow-xl scale-105" : "border-border hover:shadow-lg"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                  onClick={handleEnroll}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          * EMI options available. Contact us for customized payment plans.
          <br />
          Sibling discount: 10% off on second enrollment.
        </p>
      </div>
    </section>
  )
}
