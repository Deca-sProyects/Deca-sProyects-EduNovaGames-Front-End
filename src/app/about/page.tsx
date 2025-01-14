'use client'

import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Users, Target, Award, BookOpen, Gamepad2, Brain, TrendingUp, Star, Heart, Lightbulb, Zap } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A16]" ref={containerRef}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-10 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#6366F1] via-[#22D3EE] to-[#FF3B9A] text-transparent bg-clip-text"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            From a simple idea to revolutionizing educational gaming
          </motion.p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A16] via-transparent to-[#0A0A16]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 via-[#22D3EE]/20 to-[#FF3B9A]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Origin Story Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Beginning</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              In 2018, Dr. Sarah Johnson, a Computer Science professor, noticed a recurring pattern: students were struggling to stay engaged with traditional learning methods, yet spent countless hours mastering complex video games. This observation sparked an idea that would eventually become EduNova Games.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <h3 className="text-xl font-bold">The Vision</h3>
                </div>
                <p className="text-gray-400 pl-16">
                  Dr. Johnson envisioned a platform where learning felt as natural and engaging as playing a favorite video game. She assembled a team of educators, game designers, and technologists who shared her passion for transforming education.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <h3 className="text-xl font-bold">First Breakthrough</h3>
                </div>
                <p className="text-gray-400 pl-16">
                  Our first game, "QuizQuest," was tested with a small group of students at Metropolitan University. The results were extraordinary: student engagement increased by 80%, and test scores improved by 40%.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="EduNova Games Early Days"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#22D3EE] to-[#FF3B9A]" />
            
            {[
              {
                year: "2018",
                title: "The Foundation",
                description: "EduNova Games was founded with a mission to revolutionize education through gaming."
              },
              {
                year: "2019",
                title: "First Major Partnership",
                description: "Partnered with Metropolitan School District, reaching 10,000 students."
              },
              {
                year: "2020",
                title: "Global Expansion",
                description: "Expanded to 50+ educational institutions worldwide during remote learning."
              },
              {
                year: "2021",
                title: "AI Integration",
                description: "Launched adaptive learning algorithms to personalize student experiences."
              },
              {
                year: "2022",
                title: "Award Recognition",
                description: "Received the Educational Innovation of the Year award."
              },
              {
                year: "2023",
                title: "Platform Evolution",
                description: "Reached 1 million active students and launched enterprise solutions."
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative grid grid-cols-[1fr_auto_1fr] gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:grid-cols-[1fr_auto_1fr]' : 'md:grid-cols-[1fr_auto_1fr]'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'text-right' : 'md:col-start-3'} space-y-2`}>
                  <div className={`text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-transparent bg-clip-text`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:col-start-3' : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="relative py-32 bg-gradient-to-b from-transparent to-[#0A0A16]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              As we look to the future, our vision extends beyond traditional educational boundaries. We're developing new technologies that will make learning not just engaging, but truly transformative. From AI-powered personalization to virtual reality experiences, we're committed to pushing the boundaries of what's possible in educational technology.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI Evolution",
                  description: "Advanced AI systems that adapt to each student's unique learning style"
                },
                {
                  icon: Star,
                  title: "Global Impact",
                  description: "Expanding our reach to empower learners worldwide"
                },
                {
                  icon: Heart,
                  title: "Community Focus",
                  description: "Building stronger educational communities through collaboration"
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366F1]/20 to-[#22D3EE]/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-[#22D3EE]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

