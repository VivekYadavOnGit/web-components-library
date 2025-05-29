"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  X,
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Star,
  Heart,
  Share2,
} from "lucide-react"

export function CustomDialogs() {
  const [profileOpen, setProfileOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Basic Dialogs */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Basic Dialog Variants</h4>
        <div className="flex flex-wrap gap-4">
          {/* Profile Dialog */}
          <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">View Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>User Profile</span>
                </DialogTitle>
                <DialogDescription>View and edit your profile information</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>VY</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Vivek Yadav</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    <Badge className="mt-1">Pro Member</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>vivek@example.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Joined Dec 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Last seen 2h ago</span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setProfileOpen(false)}>
                  Close
                </Button>
                <Button>Edit Profile</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Settings Dialog */}
          <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Account Settings</DialogTitle>
                <DialogDescription>Manage your account preferences and settings</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Vivek Yadav" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="vivek@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    defaultValue="Passionate full-stack developer with expertise in React, Node.js, and modern web technologies."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSettingsOpen(false)}>
                  Cancel
                </Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Contact Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Contact Us</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Get in Touch</DialogTitle>
                <DialogDescription>Send us a message and we'll get back to you soon</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Alert Dialogs */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Alert Dialog Variants</h4>
        <div className="flex flex-wrap gap-4">
          {/* Delete Confirmation */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span>Are you absolutely sure?</span>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the item and remove all associated data
                  from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-red-500 hover:bg-red-600">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Success Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                Success Message
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Success!</span>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Your changes have been saved successfully. The updates will be reflected across all your devices.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-green-500 hover:bg-green-600">Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Info Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Information
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  <span>Important Information</span>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  We've updated our privacy policy to better protect your data. Please review the changes to understand
                  how we handle your information.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Later</AlertDialogCancel>
                <AlertDialogAction className="bg-blue-500 hover:bg-blue-600">Review Now</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Custom Styled Dialogs */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Custom Styled Dialogs</h4>
        <div className="flex flex-wrap gap-4">
          {/* Product Preview Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Product Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 relative">
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-white hover:bg-white/20">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Premium Headphones</h3>
                  <p className="text-muted-foreground">High-quality wireless headphones with noise cancellation</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold">$199</span>
                    <span className="text-sm text-muted-foreground line-through">$299</span>
                    <Badge className="bg-red-500">33% OFF</Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Newsletter Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Newsletter Signup</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Stay in the loop</h3>
                  <p className="text-muted-foreground">
                    Get the latest updates and exclusive content delivered to your inbox.
                  </p>
                </div>
                <div className="space-y-3">
                  <Input placeholder="Enter your email address" type="email" />
                  <Button className="w-full">Subscribe Now</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our privacy policy. Unsubscribe at any time.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Feedback Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Give Feedback</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>We'd love your feedback!</DialogTitle>
                <DialogDescription>Help us improve by sharing your thoughts</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">How would you rate your experience?</Label>
                  <div className="flex space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button key={star} variant="ghost" size="sm" className="p-1">
                        <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400" />
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your feedback</Label>
                  <Textarea id="feedback" placeholder="Tell us what you think..." className="min-h-[100px]" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Skip</Button>
                <Button>Submit Feedback</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
