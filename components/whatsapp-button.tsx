"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const whatsappNumber = "919876543210"
  const message = encodeURIComponent("Hello! I'm interested in learning more about AB Classes courses.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-4 max-w-xs animate-in slide-in-from-right-5 border border-border">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            aria-label="Close tooltip"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm font-medium mb-1">Need help?</p>
          <p className="text-xs text-muted-foreground mb-3">Chat with us on WhatsApp for instant assistance!</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            +91 98765 43210
          </a>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        className="group"
      >
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </a>

      {/* Pulse Animation */}
      <style jsx global>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
