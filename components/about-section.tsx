"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Target, Award, BookOpen } from "lucide-react"

const benefits = [
  "Personalized attention with small batch sizes",
  "Regular assessments and progress tracking",
  "Doubt clearing sessions after every class",
  "Study materials included in course fee",
  "Parent-teacher meetings for updates",
  "Flexible timing options available",
]

const features = [
  {
    icon: Target,
    title: "Goal-Oriented Learning",
    description: "Curriculum designed to help students achieve academic excellence and competitive exam success.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 95% of our students have achieved distinction in board exams and competitive tests.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    description: "Well-researched notes, practice papers, and reference materials provided to all students.",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img src="/AB-classes/indian-teacher-teaching-students-in-classroom-with.jpg" alt="AB Classes classroom" className="rounded-2xl shadow-xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-balance">
                Nurturing Minds, Building Futures Since 2009
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              AB Classes was founded with a vision to provide quality education accessible to all students. Our
              experienced faculty combines traditional teaching methods with modern techniques to ensure comprehensive
              understanding of concepts.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We believe every student has unique potential, and our personalized approach helps unlock their
              capabilities. From board exam preparation to competitive tests, we provide holistic academic support.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
