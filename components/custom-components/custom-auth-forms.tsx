"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, Phone, Github, Chrome, Apple, ArrowLeft, Shield } from "lucide-react"

export function CustomAuthForms() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentForm, setCurrentForm] = useState("login")

  return (
    <div className="space-y-8">
      {/* Login Forms */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Login Form Variants</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simple Login */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="p-0 h-auto text-sm">
                  Forgot password?
                </Button>
              </div>
              <Button className="w-full">Sign In</Button>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button variant="link" className="p-0 h-auto">
                  Sign up
                </Button>
              </p>
            </CardFooter>
          </Card>

          {/* Social Login */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Choose your preferred sign in method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="w-full">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full">
                  <Chrome className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full">
                  <Apple className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="space-y-3">
                <Input type="email" placeholder="Email address" />
                <Input type="password" placeholder="Password" />
                <Button className="w-full">Sign In</Button>
              </div>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-muted-foreground">
                New to our platform?{" "}
                <Button variant="link" className="p-0 h-auto">
                  Create account
                </Button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Registration Forms */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Registration Form Variants</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simple Registration */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Join us today and get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="pl-10 pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="pl-10 pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Button variant="link" className="p-0 h-auto text-sm">
                    Terms of Service
                  </Button>
                </Label>
              </div>
              <Button className="w-full">Create Account</Button>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Button variant="link" className="p-0 h-auto">
                  Sign in
                </Button>
              </p>
            </CardFooter>
          </Card>

          {/* Multi-step Registration */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Join Our Platform</CardTitle>
              <CardDescription>Step 1 of 3: Basic Information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center space-x-2 mb-6">
                <div className="w-8 h-2 bg-primary rounded-full"></div>
                <div className="w-8 h-2 bg-muted rounded-full"></div>
                <div className="w-8 h-2 bg-muted rounded-full"></div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="username" placeholder="Choose username" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="your@email.com" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="pl-10" />
                </div>
              </div>
              <Button className="w-full">Continue</Button>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-muted-foreground">
                Already registered?{" "}
                <Button variant="link" className="p-0 h-auto">
                  Sign in here
                </Button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Password Reset Forms */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Password Reset Forms</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Forgot Password */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Forgot Password?</CardTitle>
              <CardDescription>Enter your email to reset your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resetEmail">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="resetEmail" type="email" placeholder="Enter your email" className="pl-10" />
                </div>
              </div>
              <Button className="w-full">Send Reset Link</Button>
            </CardContent>
            <CardFooter className="text-center">
              <Button variant="link" className="p-0 h-auto text-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Button>
            </CardFooter>
          </Card>

          {/* Email Verification */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Check Your Email</CardTitle>
              <CardDescription>We've sent a password reset link to your email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm text-muted-foreground">
                Please check your email and click the reset link to continue.
              </p>
              <Button variant="outline" className="w-full">
                Resend Email
              </Button>
            </CardContent>
            <CardFooter className="text-center">
              <Button variant="link" className="p-0 h-auto text-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Button>
            </CardFooter>
          </Card>

          {/* Reset Password */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>Enter your new password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    className="pl-10 pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmNewPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    className="pl-10 pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">
                  Password requirements:
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>At least 8 characters</li>
                    <li>One uppercase letter</li>
                    <li>One lowercase letter</li>
                    <li>One number</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full">Reset Password</Button>
            </CardContent>
            <CardFooter className="text-center">
              <Button variant="link" className="p-0 h-auto text-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Two-Factor Authentication</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2FA Setup */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Enable 2FA</CardTitle>
              <CardDescription>Secure your account with two-factor authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">Scan this QR code with your authenticator app</p>
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">QR Code</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Or enter this code manually: <code className="bg-muted px-1 rounded">ABCD EFGH IJKL</code>
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Verification Code</Label>
                <Input id="verificationCode" placeholder="Enter 6-digit code" maxLength={6} />
              </div>
              <Button className="w-full">Enable 2FA</Button>
            </CardContent>
          </Card>

          {/* 2FA Login */}
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Enter the code from your authenticator app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Please enter the 6-digit code from your authenticator app
                </p>
              </div>
              <div className="space-y-2">
                <Label>Authentication Code</Label>
                <div className="flex gap-2 justify-center">
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
              <Button className="w-full">Verify & Continue</Button>
              <div className="text-center">
                <Button variant="link" className="text-sm">
                  Use backup code instead
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
