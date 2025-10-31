"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie-consent="))
    
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    document.cookie = "cookie-consent=accepted; path=/; max-age=31536000"
    setShow(false)
  }

  const handleManage = () => {
    // Placeholder for cookie preferences modal
    console.log("Manage preferences")
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleManage}>
              Manage Preferences
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShow(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

