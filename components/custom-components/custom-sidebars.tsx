"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  User,
  Settings,
  Mail,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  LayoutDashboardIcon as Dashboard,
  FileText,
  Users,
  BarChart3,
  Calendar,
  Folder,
  Star,
  Archive,
} from "lucide-react"

export function CustomSidebars() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [activeSidebar, setActiveSidebar] = useState("dashboard")

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  return (
    <div className="space-y-8">
      {/* Modern Dashboard Sidebar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Dashboard Sidebar</h4>
        <div className="flex bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden" style={{ height: "400px" }}>
          <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Dashboard className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg">Dashboard</span>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeSidebar === "dashboard" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSidebar("dashboard")}
                >
                  <Home className="mr-3 h-4 w-4" />
                  Overview
                </Button>

                <Button
                  variant={activeSidebar === "analytics" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSidebar("analytics")}
                >
                  <BarChart3 className="mr-3 h-4 w-4" />
                  Analytics
                  <Badge className="ml-auto" variant="secondary">
                    New
                  </Badge>
                </Button>

                <div>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => toggleExpanded("projects")}>
                    <Folder className="mr-3 h-4 w-4" />
                    Projects
                    {expandedItems.includes("projects") ? (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </Button>
                  {expandedItems.includes("projects") && (
                    <div className="ml-6 mt-1 space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                        Active Projects
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                        Completed
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                        Archived
                      </Button>
                    </div>
                  )}
                </div>

                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-3 h-4 w-4" />
                  Team
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-3 h-4 w-4" />
                  Calendar
                </Button>

                <Separator className="my-4" />

                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-3 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div className="text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold mb-2">Main Content</h3>
              <p>Selected: {activeSidebar}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Sidebar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Minimal Sidebar</h4>
        <div className="flex bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden" style={{ height: "300px" }}>
          <div className="w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>

            <Separator className="w-8 bg-gray-700" />

            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Bell className="h-5 w-5" />
            </Button>

            <div className="flex-1"></div>

            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 p-6">
            <div className="text-gray-500 dark:text-gray-400">Minimal sidebar content</div>
          </div>
        </div>
      </div>

      {/* Collapsible Sidebar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Collapsible Sidebar</h4>
        <div className="flex bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden" style={{ height: "350px" }}>
          <div className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-lg">Navigation</span>
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Main
                </div>

                <Button variant="ghost" className="w-full justify-start">
                  <Home className="mr-3 h-4 w-4" />
                  Dashboard
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-3 h-4 w-4" />
                  Documents
                  <Badge className="ml-auto" variant="outline">
                    12
                  </Badge>
                </Button>

                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 mt-4">
                  Workspace
                </div>

                <Button variant="ghost" className="w-full justify-start">
                  <Star className="mr-3 h-4 w-4" />
                  Favorites
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Archive className="mr-3 h-4 w-4" />
                  Archive
                </Button>

                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 mt-4">
                  Account
                </div>

                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-3 h-4 w-4" />
                  Profile
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-3 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div className="text-gray-500 dark:text-gray-400">Collapsible sidebar content</div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Mobile Sidebar</h4>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4" style={{ height: "300px" }}>
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Mobile View</span>
            <Button variant="outline" size="sm">
              <Menu className="h-4 w-4 mr-2" />
              Menu
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Menu</span>
              <Button variant="ghost" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-3 h-4 w-4" />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-3 h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="mr-3 h-4 w-4" />
                Messages
                <Badge className="ml-auto" variant="destructive">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Floating Sidebar */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Floating Sidebar</h4>
        <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg p-4" style={{ height: "300px" }}>
          <div className="absolute left-4 top-4 bottom-4 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold">Floating Menu</span>
            </div>

            <nav className="space-y-1">
              <Button variant="default" className="w-full justify-start">
                <Home className="mr-3 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-3 h-4 w-4" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-3 h-4 w-4" />
                Team
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-3 h-4 w-4" />
                Calendar
              </Button>
            </nav>
          </div>

          <div className="ml-72 p-4">
            <div className="text-gray-500 dark:text-gray-400">Content area with floating sidebar</div>
          </div>
        </div>
      </div>
    </div>
  )
}
