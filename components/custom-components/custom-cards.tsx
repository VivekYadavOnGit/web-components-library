"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Share2,
  MessageCircle,
  Star,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Download,
  Play,
  MoreHorizontal,
} from "lucide-react"

export function CustomCards() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="space-y-8">
      {/* Product Cards */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Product Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 relative">
              <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current text-red-500" : ""}`} />
              </Button>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Premium Headphones</h3>
              <p className="text-sm text-muted-foreground mb-3">
                High-quality wireless headphones with noise cancellation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold">$199</span>
                  <span className="text-sm text-muted-foreground line-through">$299</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-sm">4.8</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 relative">
              <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Smart Watch</h3>
              <p className="text-sm text-muted-foreground mb-3">Track your fitness and stay connected</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$299</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-sm">4.6</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" variant="outline">
                View Details
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-400"></div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Wireless Speaker</h3>
              <p className="text-sm text-muted-foreground mb-3">Portable speaker with amazing sound quality</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$149</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-sm">4.9</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Profile Cards */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Profile Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>VY</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg mb-1">Vivek Yadav</h3>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-4 mb-4">
                <div className="text-center">
                  <div className="font-semibold">1.2k</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">856</div>
                  <div className="text-xs text-muted-foreground">Following</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">42</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">Follow</Button>
                <Button variant="outline" className="flex-1">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground mb-2">UI/UX Designer</p>
                  <p className="text-sm mb-3">Passionate about creating beautiful and functional user experiences.</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Joined 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Cards */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Statistics Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">$45,231</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +20.1% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">2,350</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +180.1% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                  <p className="text-2xl font-bold">12,234</p>
                  <p className="text-xs text-purple-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +19% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-bold">573</p>
                  <p className="text-xs text-orange-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +201 since last hour
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Cards */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Content Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-400 relative">
              <Button variant="ghost" size="sm" className="absolute inset-0 text-white hover:bg-black/20">
                <Play className="h-8 w-8" />
              </Button>
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">5:42</div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">React Tutorial Series</h3>
              <p className="text-sm text-muted-foreground mb-3">Learn React from basics to advanced concepts</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>1.2k views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>2 days ago</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>VY</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold">Vivek Yadav</h4>
                    <span className="text-sm text-muted-foreground">@vivekyadav</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">2h</span>
                  </div>
                  <p className="text-sm mb-3">
                    Just launched my new React component library! 🚀 It includes 50+ customizable components built with
                    TypeScript and Tailwind CSS. Perfect for building modern web applications.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      12
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <Heart className="h-4 w-4 mr-1" />
                      48
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Progress Cards */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Progress Cards</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Progress</CardTitle>
              <CardDescription>Website Redesign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Design Phase</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Development</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Testing</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Deployment</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                <span>Due: Dec 31, 2024</span>
                <span>3 team members</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Goals</CardTitle>
              <CardDescription>November 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Revenue Target</span>
                    <span>$45,231 / $50,000</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>New Customers</span>
                    <span>234 / 300</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Product Launches</span>
                    <span>2 / 3</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-muted-foreground">Great progress! Keep up the momentum.</div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
