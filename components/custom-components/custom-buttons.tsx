"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Download, ShoppingCart, Send, Loader2 } from "lucide-react"

export function CustomButtons() {
  const [loading, setLoading] = useState(false)

  const handleAsyncAction = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Button Variants</h4>
        <div className="flex flex-wrap gap-4">
          {/* Gradient Button */}
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Gradient Button
          </Button>

          {/* Animated Button */}
          <Button className="group relative overflow-hidden">
            <span className="relative z-10">Hover Effect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Button>

          {/* Icon Buttons */}
          <Button variant="outline" className="gap-2">
            <Heart className="h-4 w-4" />
            Like
          </Button>

          <Button variant="secondary" className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>

          {/* Loading Button */}
          <Button onClick={handleAsyncAction} disabled={loading} className="gap-2">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Special Buttons</h4>
        <div className="flex flex-wrap gap-4">
          {/* Neon Button */}
          <Button className="bg-black text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#00ffff] transition-all duration-300">
            Neon Effect
          </Button>

          {/* 3D Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
            3D Button
          </Button>

          {/* Ripple Effect Button */}
          <Button className="relative overflow-hidden bg-green-500 hover:bg-green-600 active:bg-green-700">
            <span className="relative z-10">Ripple Effect</span>
          </Button>

          {/* Glass Morphism Button */}
          <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30">
            Glass Button
          </Button>

          {/* Shopping Cart Button */}
          <Button className="bg-red-500 hover:bg-red-600 gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
