"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Search, ShoppingCart, User, Bell, Home, Mail, Settings, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function CustomNavbars() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Modern Navbar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Modern Navigation</h4>
        <nav className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="text-xl font-bold text-primary">Brand</div>
                <div className="hidden md:flex space-x-6">
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Services
                  </a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button size="sm">Sign Up</Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* E-commerce Navbar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">E-commerce Navigation</h4>
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-xl font-bold">ShopLogo</div>
                <div className="hidden md:flex items-center space-x-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-white hover:bg-white/20">
                        Categories <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Electronics</DropdownMenuItem>
                      <DropdownMenuItem>Clothing</DropdownMenuItem>
                      <DropdownMenuItem>Books</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex-1 max-w-md mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="relative text-white hover:bg-white/20">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    3
                  </Badge>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Dashboard Navbar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Dashboard Navigation</h4>
        <nav className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
                <div className="text-lg font-semibold">Dashboard</div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white">
                    5
                  </Badge>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                        VY
                      </div>
                      <span className="hidden md:block">Vivek Yadav</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Minimal Navbar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Minimal Navigation</h4>
        <nav className="border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4">
            <div className="flex items-center justify-center space-x-8">
              <a
                href="#"
                className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                About
              </a>
              <div className="text-lg font-bold text-primary">LOGO</div>
              <a
                href="#"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Work
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar Navigation */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Sidebar Navigation</h4>
        <div className="flex bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden" style={{ height: "300px" }}>
          <nav className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
            <div className="space-y-2">
              <div className="text-lg font-bold text-primary mb-4">Menu</div>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-primary text-white">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Mail className="h-5 w-5" />
                <span>Messages</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </div>
          </nav>
          <div className="flex-1 p-6">
            <div className="text-gray-500 dark:text-gray-400">Main content area</div>
          </div>
        </div>
      </div>
    </div>
  )
}
