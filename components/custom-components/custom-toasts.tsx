"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, AlertCircle, Info, X, AlertTriangle, Download, Upload, Mail, Bell, Heart } from "lucide-react"

export function CustomToasts() {
  const { toast } = useToast()

  const showSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Your changes have been saved successfully.",
      duration: 3000,
    })
  }

  const showErrorToast = () => {
    toast({
      variant: "destructive",
      title: "Error occurred",
      description: "Something went wrong. Please try again.",
      duration: 4000,
    })
  }

  const showWarningToast = () => {
    toast({
      title: "Warning",
      description: "Please review your input before proceeding.",
      duration: 3000,
    })
  }

  const showInfoToast = () => {
    toast({
      title: "Information",
      description: "New features are now available in your dashboard.",
      duration: 3000,
    })
  }

  const showCustomToast = () => {
    toast({
      title: "Custom Toast",
      description: "This is a custom styled toast message with extended content.",
      duration: 5000,
    })
  }

  return (
    <div className="space-y-8">
      {/* Basic Toast Variants */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Basic Toast Variants</h4>
        <div className="flex flex-wrap gap-4">
          <Button onClick={showSuccessToast} className="bg-green-500 hover:bg-green-600">
            <CheckCircle className="mr-2 h-4 w-4" />
            Success Toast
          </Button>

          <Button onClick={showErrorToast} variant="destructive">
            <AlertCircle className="mr-2 h-4 w-4" />
            Error Toast
          </Button>

          <Button onClick={showWarningToast} className="bg-yellow-500 hover:bg-yellow-600">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Warning Toast
          </Button>

          <Button onClick={showInfoToast} className="bg-blue-500 hover:bg-blue-600">
            <Info className="mr-2 h-4 w-4" />
            Info Toast
          </Button>
        </div>
      </div>

      {/* Action Toasts */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Action Toast Examples</h4>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() =>
              toast({
                title: "Download Started",
                description: "Your file is being downloaded...",
                duration: 3000,
              })
            }
            variant="outline"
          >
            <Download className="mr-2 h-4 w-4" />
            Download File
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Upload Complete",
                description: "Your file has been uploaded successfully.",
                duration: 3000,
              })
            }
            variant="outline"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload File
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Message Sent",
                description: "Your message has been delivered.",
                duration: 3000,
              })
            }
            variant="outline"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Notification Enabled",
                description: "You'll now receive push notifications.",
                duration: 3000,
              })
            }
            variant="outline"
          >
            <Bell className="mr-2 h-4 w-4" />
            Enable Notifications
          </Button>
        </div>
      </div>

      {/* Interactive Toasts */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Interactive Toast Examples</h4>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() =>
              toast({
                title: "Item added to favorites",
                description: "You can view it in your favorites list.",
                action: (
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                ),
                duration: 5000,
              })
            }
            variant="outline"
          >
            <Heart className="mr-2 h-4 w-4" />
            Add to Favorites
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Profile updated",
                description: "Your profile changes have been saved.",
                action: (
                  <Button size="sm" variant="outline">
                    Undo
                  </Button>
                ),
                duration: 5000,
              })
            }
            variant="outline"
          >
            Update Profile
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Connection lost",
                description: "Attempting to reconnect...",
                action: (
                  <Button size="sm" variant="outline">
                    Retry
                  </Button>
                ),
                duration: 0, // Persistent until dismissed
              })
            }
            variant="outline"
          >
            Simulate Connection Loss
          </Button>
        </div>
      </div>

      {/* Custom Duration Toasts */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Custom Duration Examples</h4>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() =>
              toast({
                title: "Quick message",
                description: "This disappears in 1 second",
                duration: 1000,
              })
            }
            variant="outline"
          >
            1 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Standard message",
                description: "This disappears in 3 seconds",
                duration: 3000,
              })
            }
            variant="outline"
          >
            3 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Long message",
                description: "This stays for 10 seconds to give you time to read",
                duration: 10000,
              })
            }
            variant="outline"
          >
            10 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Persistent message",
                description: "This stays until you dismiss it manually",
                duration: 0,
              })
            }
            variant="outline"
          >
            Persistent Toast
          </Button>
        </div>
      </div>

      {/* Toast Preview Examples */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Toast Preview Examples</h4>
        <div className="space-y-4">
          {/* Success Toast Preview */}
          <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="flex-1">
                <div className="font-semibold text-green-900 dark:text-green-100">Success!</div>
                <div className="text-sm text-green-700 dark:text-green-300">
                  Your changes have been saved successfully.
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-600">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Error Toast Preview */}
          <div className="border rounded-lg p-4 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div className="flex-1">
                <div className="font-semibold text-red-900 dark:text-red-100">Error occurred</div>
                <div className="text-sm text-red-700 dark:text-red-300">Something went wrong. Please try again.</div>
              </div>
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Warning Toast Preview */}
          <div className="border rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div className="flex-1">
                <div className="font-semibold text-yellow-900 dark:text-yellow-100">Warning</div>
                <div className="text-sm text-yellow-700 dark:text-yellow-300">
                  Please review your input before proceeding.
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-600">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Info Toast Preview */}
          <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-500 mt-0.5" />
              <div className="flex-1">
                <div className="font-semibold text-blue-900 dark:text-blue-100">Information</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  New features are now available in your dashboard.
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
