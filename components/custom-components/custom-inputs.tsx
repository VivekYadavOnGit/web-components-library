"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Eye, EyeOff, User, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CustomInputs() {
  const [showPassword, setShowPassword] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h4 className="text-lg font-semibold mb-4">Input Field Variants</h4>
        <div className="space-y-6">
          {/* Floating Label Input */}
          <div className="relative">
            <Input id="floating" placeholder=" " className="peer placeholder-transparent" />
            <Label
              htmlFor="floating"
              className="absolute left-3 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
            >
              Floating Label
            </Label>
          </div>

          {/* Icon Input */}
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Username" className="pl-10" />
          </div>

          {/* Search Input with Clear */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 pr-10"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 p-0"
                onClick={() => setSearchValue("")}
              >
                ×
              </Button>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type={showPassword ? "text" : "password"} placeholder="Password" className="pl-10 pr-10" />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1 h-8 w-8 p-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>

          {/* Gradient Border Input */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md p-[1px]">
              <Input
                placeholder="Gradient border input"
                className="bg-background border-0 rounded-[calc(0.375rem-1px)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Special Input Types</h4>
        <div className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type="email" placeholder="Email address" className="pl-10" />
          </div>

          {/* Textarea with Character Count */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <div className="relative">
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-[100px] resize-none"
                maxLength={500}
              />
              <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">0/500</div>
            </div>
          </div>

          {/* File Upload Input */}
          <div className="space-y-2">
            <Label htmlFor="file">File Upload</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
              <input type="file" id="file" className="hidden" />
              <Label htmlFor="file" className="cursor-pointer">
                <div className="text-muted-foreground">
                  <div className="text-sm">Click to upload or drag and drop</div>
                  <div className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</div>
                </div>
              </Label>
            </div>
          </div>

          {/* OTP Input */}
          <div className="space-y-2">
            <Label>OTP Verification</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-lg font-semibold"
                  placeholder="0"
                />
              ))}
            </div>
          </div>

          {/* Range Input */}
          <div className="space-y-2">
            <Label>Price Range</Label>
            <div className="px-3">
              <input
                type="range"
                min="0"
                max="1000"
                defaultValue="500"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
