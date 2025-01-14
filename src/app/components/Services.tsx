"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  BookOpen,
  Users,
  BarChart3,
  Zap,
  Brain,
  Trophy,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "AI-Powered Learning Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to create personalized learning experiences that adapt to each student's needs.",
    icon: Brain,
    features: [
      "Adaptive learning algorithms",
      "Real-time performance tracking",
      "Personalized content delivery",
      "Smart progress analysis",
    ],
    color: "#6366F1",
  },
  {
    title: "Educational Game Development",
    description:
      "Custom educational games designed to make learning engaging, interactive, and measurably effective.",
    icon: Trophy,
    features: [
      "Custom game mechanics",
      "Learning objective alignment",
      "Progress tracking systems",
      "Engagement analytics",
    ],
    color: "#22D3EE",
  },
  {
    title: "Enterprise Integration",
    description:
      "Seamlessly integrate our educational gaming platform with your existing learning management systems.",
    icon: Zap,
    features: [
      "LMS integration",
      "Single sign-on",
      "Data synchronization",
      "Custom API access",
    ],
    color: "#FF3B9A",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Comprehensive analytics and reporting tools to track student progress and identify areas for improvement.",
    icon: BarChart3,
    features: [
      "Performance dashboards",
      "Custom report generation",
      "Data visualization",
      "Trend analysis",
    ],
    color: "#10B981",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive educational gaming solutions designed to transform
            learning through technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/#contact" scroll={false}>
            <Button
              variant="gradient"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
