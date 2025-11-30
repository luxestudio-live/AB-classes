"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "JEE Advanced 2024 - AIR 856",
    image: "/AB-classes/indian-male-student-smiling.jpg",
    quote:
      "AB Classes transformed my understanding of Physics and Mathematics. The faculty's dedication and personalized attention helped me crack JEE Advanced. Forever grateful!",
    rating: 5,
  },
  {
    name: "Priyanka Singh",
    role: "NEET 2024 - 680/720",
    image: "/AB-classes/indian-female-student-portrait.png",
    quote:
      "The Biology and Chemistry teaching at AB Classes is exceptional. Dr. Sharma's conceptual approach and regular tests kept me exam-ready. Highly recommended for NEET aspirants!",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Class 12 CBSE - 98.4%",
    image: "/AB-classes/indian-teenage-boy-student.jpg",
    quote:
      "Best coaching institute in Delhi! The crash course for boards was incredibly helpful. The study material and mock tests were exactly what I needed.",
    rating: 5,
  },
  {
    name: "Ananya Kapoor",
    role: "Class 10 CBSE - 96%",
    image: "/AB-classes/indian-teenage-girl-student-smiling.jpg",
    quote:
      "I was struggling with Mathematics, but the teachers at AB Classes made it so easy to understand. Small batch sizes meant I could ask all my doubts freely.",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    role: "Parent",
    image: "/AB-classes/indian-middle-aged-man-parent.jpg",
    quote:
      "As a parent, I appreciate the regular updates and parent-teacher meetings. My son's confidence and grades have improved significantly since joining AB Classes.",
    rating: 5,
  },
  {
    name: "Meera Reddy",
    role: "English Olympiad Gold Medalist",
    image: "/AB-classes/indian-young-woman-student-achiever.jpg",
    quote:
      "The English communication course helped me overcome my fear of public speaking. Now I confidently participate in debates and won the state-level Olympiad!",
    rating: 5,
  },
]

export function TestimonialsSection() {
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

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-balance">What Our Students Say</h2>
          <p className="text-muted-foreground mt-4">
            Real experiences from real students and parents who trusted us with their academic journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-10 h-10 text-primary/20" />

                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/AB-classes/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
