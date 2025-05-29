"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink, User, Code2, Search } from "lucide-react"
import { CodeViewer } from "./code-viewer"

// Import all our custom components
import { CustomButtons } from "./custom-components/custom-buttons"
import { CustomInputs } from "./custom-components/custom-inputs"
import { CustomNavbars } from "./custom-components/custom-navbars"
import { CustomFooters } from "./custom-components/custom-footers"
import { CustomSidebars } from "./custom-components/custom-sidebars"
import { CustomCards } from "./custom-components/custom-cards"
import { CustomHeroSections } from "./custom-components/custom-hero-sections"
import { CustomDialogs } from "./custom-components/custom-dialogs"
import { CustomToasts } from "./custom-components/custom-toasts"
import { CustomAuthForms } from "./custom-components/custom-auth-forms"

// Sample component codes for demonstration
const sampleCodes = {
  button: {
    react: `import React from 'react';

const GradientButton = () => {
  return (
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
      Gradient Button
    </button>
  );
};

export default GradientButton;`,
    jsx: `const GradientButton = () => {
  return (
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
      Gradient Button
    </button>
  );
};`,
    html: `<button class="gradient-button">
  Gradient Button
</button>`,
    css: `.gradient-button {
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gradient-button:hover {
  background: linear-gradient(to right, #7c3aed, #db2777);
}`,
    tailwind: `<button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
  Gradient Button
</button>`,
  },
  loginForm: {
    react: `import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;`,
    jsx: `const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        {/* Form content */}
      </div>
    </div>
  );
};`,
    html: `<div class="login-form">
  <div class="form-container">
    <div class="form-header">
      <h2>Welcome Back</h2>
      <p>Sign in to your account</p>
    </div>
    
    <form class="login-form-content">
      <div class="form-group">
        <label>Email</label>
        <div class="input-group">
          <input type="email" placeholder="Enter your email" />
          <span class="input-icon">📧</span>
        </div>
      </div>
      
      <div class="form-group">
        <label>Password</label>
        <div class="input-group">
          <input type="password" placeholder="Enter your password" />
          <span class="input-icon">🔒</span>
          <button type="button" class="toggle-password">👁️</button>
        </div>
      </div>
      
      <div class="form-options">
        <label class="checkbox-label">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>
      
      <button type="submit" class="submit-button">Sign In</button>
    </form>
    
    <div class="form-footer">
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
  </div>
</div>`,
    css: `.login-form {
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
}

.form-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.form-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #6b7280;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.input-group {
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.input-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.toggle-password {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
}

.checkbox-label input {
  margin-right: 0.5rem;
}

.forgot-link {
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.submit-button {
  width: 100%;
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #2563eb;
}

.form-footer {
  text-align: center;
  margin-top: 1rem;
}

.form-footer p {
  font-size: 0.875rem;
  color: #6b7280;
}

.form-footer a {
  color: #3b82f6;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}`,
    tailwind: `<div class="w-full max-w-md mx-auto">
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold">Welcome Back</h2>
      <p class="text-gray-600">Sign in to your account</p>
    </div>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-2">Email</label>
        <div class="relative">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg class="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-2">Password</label>
        <div class="relative">
          <input
            type="password"
            placeholder="Enter your password"
            class="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg class="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <button type="button" class="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
            Show
          </button>
        </div>
      </div>
      
      <div class="flex items-center justify-between">
        <label class="flex items-center">
          <input type="checkbox" class="mr-2 rounded" />
          <span class="text-sm">Remember me</span>
        </label>
        <a href="#" class="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>
      
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Sign In
      </button>
    </form>
    
    <div class="text-center mt-4">
      <p class="text-sm text-gray-600">
        Don't have an account?
        <a href="#" class="text-blue-600 hover:underline ml-1">Sign up</a>
      </p>
    </div>
  </div>
</div>`,
  },
}

const componentCategories = [
  { id: "buttons", name: "Buttons", component: CustomButtons, count: 5 },
  { id: "inputs", name: "Input Fields", component: CustomInputs, count: 5 },
  { id: "navbars", name: "Navigation Bars", component: CustomNavbars, count: 5 },
  { id: "footers", name: "Footers", component: CustomFooters, count: 5 },
  { id: "sidebars", name: "Sidebars", component: CustomSidebars, count: 5 },
  { id: "cards", name: "Cards", component: CustomCards, count: 5 },
  { id: "heroes", name: "Hero Sections", component: CustomHeroSections, count: 5 },
  { id: "dialogs", name: "Dialog Boxes", component: CustomDialogs, count: 5 },
  { id: "toasts", name: "Toast Messages", component: CustomToasts, count: 5 },
  { id: "auth", name: "Auth Forms", component: CustomAuthForms, count: 5 },
]

export function ComponentShowcase() {
  const [activeCategory, setActiveCategory] = useState("buttons")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"showcase" | "code">("showcase")

  const ActiveComponent = componentCategories.find((cat) => cat.id === activeCategory)?.component

  const filteredCategories = componentCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            React Component Library
          </h1>
        </div>
        <p className="text-xl text-muted-foreground mb-4">A comprehensive collection of reusable React components</p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span>
            Created by <strong>Vivek Yadav</strong>
          </span>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="default" className="gap-2">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "showcase" ? "default" : "outline"}
            onClick={() => setViewMode("showcase")}
            size="sm"
          >
            Showcase
          </Button>
          <Button variant={viewMode === "code" ? "default" : "outline"} onClick={() => setViewMode("code")} size="sm">
            <Code2 className="h-4 w-4 mr-2" />
            Code View
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary">10</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Code Formats</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary">TS</div>
            <div className="text-sm text-muted-foreground">TypeScript</div>
          </CardContent>
        </Card>
      </div>

      {/* Component Categories */}
      {viewMode === "showcase" ? (
        <Card>
          <CardHeader>
            <CardTitle>Component Categories</CardTitle>
            <CardDescription>
              Browse through different categories of components. Each category contains 5 unique variants.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-5 lg:grid-cols-10 mb-6">
                {filteredCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {filteredCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">{category.name}</h3>
                      <Badge variant="secondary">{category.count} variants</Badge>
                    </div>
                    <div className="border rounded-lg p-6 bg-muted/30">{ActiveComponent && <ActiveComponent />}</div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {/* Code View Examples */}
          <CodeViewer
            title="Gradient Button"
            description="A beautiful gradient button with hover effects"
            component={
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
                Gradient Button
              </button>
            }
            codes={sampleCodes.button}
            tags={["button", "gradient", "interactive"]}
          />

          <CodeViewer
            title="Login Form"
            description="Complete login form with validation and password toggle"
            component={
              <div className="w-full max-w-sm mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold">Welcome Back</h3>
                    <p className="text-sm text-muted-foreground">Sign in to your account</p>
                  </div>
                  <div className="space-y-3">
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button className="w-full">Sign In</Button>
                  </div>
                </div>
              </div>
            }
            codes={sampleCodes.loginForm}
            tags={["form", "authentication", "login", "validation"]}
          />
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Built with React, TypeScript, Tailwind CSS, and shadcn/ui</p>
        <p className="mt-2">© 2024 Vivek Yadav. Open source under MIT License.</p>
      </div>
    </div>
  )
}
