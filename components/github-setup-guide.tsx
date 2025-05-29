"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, GitBranch, Star, Download, Code2, FileText, Folder } from "lucide-react"

export function GitHubSetupGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">GitHub Repository Setup Guide</h1>
        <p className="text-muted-foreground">
          Complete guide to set up your React Component Library repository on GitHub
        </p>
      </div>

      <div className="space-y-8">
        {/* Repository Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Folder className="h-5 w-5" />
              Repository Structure
            </CardTitle>
            <CardDescription>Recommended folder structure for your component library</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div>📁 react-component-library/</div>
                <div className="ml-4">├── 📁 components/</div>
                <div className="ml-8">├── 📁 ui/ (shadcn components)</div>
                <div className="ml-8">├── 📁 custom/</div>
                <div className="ml-12">├── 📄 buttons.tsx</div>
                <div className="ml-12">├── 📄 forms.tsx</div>
                <div className="ml-12">├── 📄 cards.tsx</div>
                <div className="ml-12">└── 📄 ...</div>
                <div className="ml-4">├── 📁 docs/</div>
                <div className="ml-8">├── 📄 installation.md</div>
                <div className="ml-8">├── 📄 usage.md</div>
                <div className="ml-8">└── 📄 components.md</div>
                <div className="ml-4">├── 📁 examples/</div>
                <div className="ml-4">├── 📁 assets/</div>
                <div className="ml-4">├── 📄 README.md</div>
                <div className="ml-4">├── 📄 package.json</div>
                <div className="ml-4">├── 📄 LICENSE</div>
                <div className="ml-4">└── 📄 .gitignore</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* README Template */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              README.md Template
            </CardTitle>
            <CardDescription>Professional README template for your component library</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap">{`# React Component Library by Vivek Yadav

A comprehensive collection of 50+ reusable React components built with TypeScript, Tailwind CSS, and modern best practices.

## 🚀 Features

- 🎨 **50+ Components** - Buttons, Forms, Cards, Navigation, and more
- 📱 **Fully Responsive** - Works on all devices
- 🎯 **TypeScript Support** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- ♿ **Accessible** - WCAG compliant
- 📖 **Well Documented** - Comprehensive docs and examples
- 🔧 **Customizable** - Easy to customize and extend

## 📦 Installation

\`\`\`bash
npm install react-component-library-vivek
# or
yarn add react-component-library-vivek
\`\`\`

## 🎯 Quick Start

\`\`\`jsx
import { Button, Card, Input } from 'react-component-library-vivek';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button>Get Started</Button>
    </Card>
  );
}
\`\`\`

## 📚 Components

### Buttons
- Gradient Button
- Icon Button
- Loading Button
- Animated Button
- Glass Button

### Forms
- Login Form
- Registration Form
- Password Reset
- Two-Factor Auth
- Contact Form

### Navigation
- Modern Navbar
- Sidebar
- Breadcrumbs
- Pagination
- Tabs

[View all components →](./docs/components.md)

## 🛠️ Development

\`\`\`bash
# Clone the repository
git clone https://github.com/vivekyadav/react-component-library.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📖 Documentation

- [Installation Guide](./docs/installation.md)
- [Usage Examples](./docs/usage.md)
- [Component API](./docs/components.md)
- [Customization](./docs/customization.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👨‍💻 Author

**Vivek Yadav**
- GitHub: [@vivekyadav](https://github.com/vivekyadav)
- LinkedIn: [Vivek Yadav](https://linkedin.com/in/vivekyadav)
- Portfolio: [vivekyadav.dev](https://vivekyadav.dev)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/vivekyadav/react-component-library)
![GitHub forks](https://img.shields.io/github/forks/vivekyadav/react-component-library)
![GitHub issues](https://img.shields.io/github/issues/vivekyadav/react-component-library)
![GitHub license](https://img.shields.io/github/license/vivekyadav/react-component-library)`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Package.json Template */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              package.json Template
            </CardTitle>
            <CardDescription>Package configuration for npm publishing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap">{`{
  "name": "react-component-library-vivek",
  "version": "1.0.0",
  "description": "A comprehensive React component library by Vivek Yadav",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "test": "jest",
    "lint": "eslint src/**/*.{ts,tsx}",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "keywords": [
    "react",
    "components",
    "ui",
    "typescript",
    "tailwind",
    "library",
    "vivek-yadav"
  ],
  "author": {
    "name": "Vivek Yadav",
    "email": "vivek@example.com",
    "url": "https://vivekyadav.dev"
  },
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/vivekyadav/react-component-library.git"
  },
  "bugs": {
    "url": "https://github.com/vivekyadav/react-component-library/issues"
  },
  "homepage": "https://github.com/vivekyadav/react-component-library#readme",
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.9.0",
    "tailwindcss": "^3.0.0"
  }
}`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* GitHub Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              GitHub Actions CI/CD
            </CardTitle>
            <CardDescription>Automated testing and deployment workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap">{`# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linting
      run: npm run lint
    
    - name: Build library
      run: npm run build

  publish:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        registry-url: 'https://registry.npmjs.org'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Publish to NPM
      run: npm publish
      env:
        NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Setup Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Setup Steps
            </CardTitle>
            <CardDescription>Step-by-step guide to create your repository</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className="w-8 h-8 rounded-full flex items-center justify-center">1</Badge>
                  <div>
                    <h4 className="font-semibold">Create Repository</h4>
                    <p className="text-sm text-muted-foreground">
                      Create a new repository on GitHub with the name "react-component-library"
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge className="w-8 h-8 rounded-full flex items-center justify-center">2</Badge>
                  <div>
                    <h4 className="font-semibold">Initialize Project</h4>
                    <p className="text-sm text-muted-foreground">
                      Clone the repository and set up the initial project structure
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge className="w-8 h-8 rounded-full flex items-center justify-center">3</Badge>
                  <div>
                    <h4 className="font-semibold">Add Components</h4>
                    <p className="text-sm text-muted-foreground">
                      Copy your component files into the appropriate directories
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge className="w-8 h-8 rounded-full flex items-center justify-center">4</Badge>
                  <div>
                    <h4 className="font-semibold">Documentation</h4>
                    <p className="text-sm text-muted-foreground">Create comprehensive documentation and examples</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge className="w-8 h-8 rounded-full flex items-center justify-center">5</Badge>
                  <div>
                    <h4 className="font-semibold">GitHub Pages</h4>
                    <p className="text-sm text-muted-foreground">Set up GitHub Pages for live demo and documentation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge className="w-8 h-8 rounded-full flex items-center justify-center">6</Badge>
                  <div>
                    <h4 className="font-semibold">NPM Publishing</h4>
                    <p className="text-sm text-muted-foreground">Publish your library to NPM for easy installation</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Portfolio Integration
            </CardTitle>
            <CardDescription>How to showcase this in your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Project Highlights</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 50+ reusable React components</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Comprehensive documentation</li>
                    <li>• Live demo and examples</li>
                    <li>• NPM package published</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Technical Skills</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• React & TypeScript</li>
                    <li>• Component Architecture</li>
                    <li>• UI/UX Design</li>
                    <li>• Package Publishing</li>
                    <li>• Documentation Writing</li>
                    <li>• Open Source Development</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Portfolio Description Template</h4>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <p className="italic">
                    "Developed a comprehensive React component library featuring 50+ reusable components built with
                    TypeScript and Tailwind CSS. The library includes authentication forms, navigation components,
                    cards, buttons, and more. Published as an NPM package with full documentation and live examples.
                    Demonstrates expertise in component architecture, TypeScript, and modern React patterns."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-4">
              Follow this guide to create your own component library repository and showcase your skills to the world!
            </p>
            <div className="flex justify-center gap-4">
              <Button className="gap-2">
                <Github className="h-4 w-4" />
                Create Repository
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Template
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
