"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Code2, FileText, Palette, Layers } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CodeViewerProps {
  title: string
  description?: string
  component: React.ReactNode
  codes: {
    react?: string
    jsx?: string
    html?: string
    css?: string
    tailwind?: string
  }
  tags?: string[]
}

export function CodeViewer({ title, description, component, codes, tags = [] }: CodeViewerProps) {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)
  const { toast } = useToast()

  const copyToClipboard = async (code: string, format: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedTab(format)
      toast({
        title: "Copied!",
        description: `${format.toUpperCase()} code copied to clipboard`,
        duration: 2000,
      })
      setTimeout(() => setCopiedTab(null), 2000)
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Please try again",
        duration: 2000,
      })
    }
  }

  const formatOptions = [
    { key: "react", label: "React", icon: Code2, available: !!codes.react },
    { key: "jsx", label: "JSX", icon: FileText, available: !!codes.jsx },
    { key: "html", label: "HTML", icon: Layers, available: !!codes.html },
    { key: "css", label: "CSS", icon: Palette, available: !!codes.css },
    { key: "tailwind", label: "Tailwind", icon: Palette, available: !!codes.tailwind },
  ]

  const availableFormats = formatOptions.filter((format) => format.available)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              {title}
              <Badge variant="secondary" className="text-xs">
                {availableFormats.length} formats
              </Badge>
            </CardTitle>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Component Preview */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Preview</h4>
          <div className="border rounded-lg p-6 bg-muted/30">{component}</div>
        </div>

        {/* Code Tabs */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Code</h4>
          <Tabs defaultValue={availableFormats[0]?.key} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {formatOptions.map((format) => (
                <TabsTrigger
                  key={format.key}
                  value={format.key}
                  disabled={!format.available}
                  className="flex items-center gap-1"
                >
                  <format.icon className="h-3 w-3" />
                  {format.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {availableFormats.map((format) => (
              <TabsContent key={format.key} value={format.key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{format.label}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(codes[format.key as keyof typeof codes] || "", format.label)}
                    className="gap-2"
                  >
                    {copiedTab === format.label ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copiedTab === format.label ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{codes[format.key as keyof typeof codes]}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
