"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const faculty = [
  {
    name: "Dr. Anil Sharma",
    role: "Mathematics Expert",
    experience: "18 Years",
    qualification: "Ph.D. Mathematics, IIT Delhi",
    specialization: "JEE/Olympiad Math",
    image: "/AB-classes/indian-male-professor-mathematics-teacher-with-gla.jpg",
    achievements: ["100+ JEE selections", "3 Olympiad gold medalists"],
  },
  {
    name: "Mrs. Priya Gupta",
    role: "Physics Faculty",
    experience: "12 Years",
    qualification: "M.Sc. Physics, DU",
    specialization: "NEET/JEE Physics",
    image: "/AB-classes/indian-female-physics-teacher-professional.jpg",
    achievements: ["NEET specialist", "95% success rate"],
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Chemistry Expert",
    experience: "15 Years",
    qualification: "M.Sc. Chemistry, BHU",
    specialization: "Organic Chemistry",
    image: "/AB-classes/indian-male-chemistry-teacher-in-lab-coat.jpg",
    achievements: ["Author of 3 books", "Ex-CBSE examiner"],
  },
  {
    name: "Ms. Sneha Verma",
    role: "English Language",
    experience: "10 Years",
    qualification: "M.A. English Literature",
    specialization: "Communication Skills",
    image: "/AB-classes/indian-female-english-teacher-professional-young.jpg",
    achievements: ["IELTS certified", "Debate coach"],
  },
]

export function FacultySection() {
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
    <section id="faculty" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Faculty</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-balance">Learn from the Best Educators</h2>
          <p className="text-muted-foreground mt-4">
            Our team of experienced teachers brings passion and expertise to help every student succeed.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/AB-classes/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <Badge className="bg-primary text-primary-foreground">{member.experience}</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 flex-shrink-0" />
                  <span>{member.qualification}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  <span>{member.specialization}</span>
                </div>

                <div className="pt-3 border-t border-border space-y-2">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-secondary">
                      <Award className="w-3 h-3" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
