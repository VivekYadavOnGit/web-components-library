"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Users, Zap, Shield, Rocket, CheckCircle, Download, Github } from "lucide-react"

export function CustomHeroSections() {
  return (
    <div className="space-y-12">
      {/* Modern Hero */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Modern Hero Section</h4>
        <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">🚀 New Release v2.0</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Build Amazing
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Create stunning websites with our modern component library. Fast, accessible, and beautiful by default.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-300" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>10k+ developers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>50k+ downloads</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Minimal Hero */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Minimal Hero Section</h4>
        <section className="py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Simple. Powerful. Beautiful.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              The component library that helps you build faster without compromising on design quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Building</Button>
              <Button size="lg" variant="outline">
                View Components
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Feature-Rich Hero */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Feature-Rich Hero Section</h4>
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
          <div className="px-6 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    ✨ Developer Friendly
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    React Components
                    <span className="block text-primary">Made Simple</span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    A comprehensive library of 50+ React components built with TypeScript, Tailwind CSS, and modern best
                    practices. Created by Vivek Yadav.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>TypeScript support out of the box</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Fully responsive and accessible</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Easy to customize and extend</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </Button>
                    <Button size="lg" variant="outline">
                      Browse Components
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      <div className="h-8 bg-primary/20 rounded w-full"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <Rocket className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Hero */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Newsletter Hero Section</h4>
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Latest Components</h1>
              <p className="text-lg text-indigo-100 mb-8">
                Get notified when we release new components, updates, and design resources. Join 5,000+ developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-indigo-600 hover:bg-white/90">Subscribe</Button>
              </div>
              <p className="text-sm text-indigo-200 mt-4">No spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Split Hero */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Split Hero Section</h4>
        <section className="rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            <div className="bg-black text-white p-8 md:p-12 flex items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white">Open Source</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Component Library
                  <span className="block text-gray-300">for Modern Web</span>
                </h1>
                <p className="text-gray-300 mb-8 text-lg">
                  Built by developers, for developers. Every component is crafted with attention to detail and
                  performance.
                </p>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span>Fast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span>Accessible</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Explore Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">50+</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Components Ready</h2>
                <p className="text-purple-100">
                  From buttons to complex layouts, everything you need to build amazing interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
