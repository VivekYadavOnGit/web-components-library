"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Heart } from "lucide-react"

export function CustomFooters() {
  return (
    <div className="space-y-8">
      {/* Modern Footer */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Modern Footer</h4>
        <footer className="bg-gray-900 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Brand</h3>
                <p className="text-gray-400 text-sm">
                  Building amazing digital experiences with modern web technologies.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Services</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Consulting
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Newsletter</h4>
                <p className="text-gray-400 text-sm">Subscribe to get updates</p>
                <div className="flex space-x-2">
                  <Input placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>

            <Separator className="my-6 bg-gray-700" />

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2024 Vivek Yadav. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Minimal Footer */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Minimal Footer</h4>
        <footer className="border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by Vivek Yadav</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Contact Footer */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Footer</h4>
        <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>vivek@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Follow Me</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="secondary" size="sm" className="justify-start">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="secondary" size="sm" className="justify-start">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="secondary" size="sm" className="justify-start">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="secondary" size="sm" className="justify-start">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Quick Message</h4>
                <div className="space-y-2">
                  <Input
                    placeholder="Your message"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button variant="secondary" className="w-full">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Creative Footer */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Creative Footer</h4>
        <footer className="bg-black text-white rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
          <div className="relative px-6 py-8">
            <div className="text-center space-y-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </div>
              <p className="text-gray-400 max-w-md mx-auto">
                Ready to bring your ideas to life? Let's collaborate and build something extraordinary together.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Start a Project
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
              <div className="flex justify-center space-x-6 pt-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Simple Footer */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Simple Footer</h4>
        <footer className="bg-gray-50 dark:bg-gray-800 rounded-lg py-4 px-6">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 Vivek Yadav • Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
