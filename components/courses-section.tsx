"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, BookOpen, ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Mathematics Foundation",
    description: "Master fundamental concepts, algebra, geometry, and problem-solving techniques for classes 8-10.",
    duration: "2 Months",
    batchSize: "15 Students",
    level: "Foundation",
    fee: "₹3,000",
    color: "primary",
    topics: ["Algebra", "Geometry", "Arithmetic", "Statistics"],
  },
  {
    title: "Science Advanced",
    description:
      "In-depth coverage of Physics, Chemistry, and Biology with practical experiments and real-world applications.",
    duration: "3 Months",
    batchSize: "12 Students",
    level: "Advanced",
    fee: "₹4,500",
    color: "secondary",
    topics: ["Physics", "Chemistry", "Biology", "Lab Practicals"],
  },
  {
    title: "English Communication",
    description: "Improve spoken English, grammar, writing skills, and develop confidence in communication.",
    duration: "1.5 Months",
    batchSize: "10 Students",
    level: "All Levels",
    fee: "₹2,500",
    color: "accent",
    topics: ["Grammar", "Speaking", "Writing", "Vocabulary"],
  },
  {
    title: "JEE/NEET Foundation",
    description: "Early preparation for competitive exams with concept building and problem-solving practice.",
    duration: "6 Months",
    batchSize: "20 Students",
    level: "Competitive",
    fee: "₹12,000",
    color: "primary",
    topics: ["Physics", "Chemistry", "Mathematics", "Mock Tests"],
  },
  {
    title: "Board Exam Crash Course",
    description: "Intensive revision program for Class 10 & 12 board exams with previous year paper analysis.",
    duration: "2 Months",
    batchSize: "25 Students",
    level: "Intensive",
    fee: "₹5,000",
    color: "secondary",
    topics: ["All Subjects", "Revision", "Sample Papers", "Time Management"],
  },
  {
    title: "Olympiad Preparation",
    description: "Specialized training for Science and Mathematics Olympiads with advanced problem-solving.",
    duration: "3 Months",
    batchSize: "8 Students",
    level: "Expert",
    fee: "₹6,000",
    color: "accent",
    topics: ["Advanced Math", "Science", "Logical Reasoning", "Previous Years"],
  },
]

export function CoursesSection() {
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
    <section id="courses" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Courses</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-balance">
            Comprehensive Academic Programs
          </h2>
          <p className="text-muted-foreground mt-4">
            Choose from our range of carefully designed courses to match your academic goals and learning pace.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-border overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className={`${
                      course.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : course.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                    }`}
                  >
                    {course.level}
                  </Badge>
                  <span className="text-2xl font-bold text-primary">{course.fee}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm">{course.description}</p>

                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.batchSize}
                  </div>
                </div>

                <Button
                  className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  variant="outline"
                  onClick={handleEnroll}
                >
                  <BookOpen className="w-4 h-4" />
                  Enroll Now
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
