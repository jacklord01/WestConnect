import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "353861570550";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all hover:scale-110 group"
            aria-label="Chat with WestConnect on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          </button>
        )}

        {/* Expanded Chat Panel */}
        {isOpen && (
          <Card className="w-80 sm:w-96 shadow-2xl border-2 border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white" style={{ fontWeight: 600 }}>Need help?</h4>
                  <p className="text-white/90 text-xs">Chat with WestConnect</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-white">
              <div className="mb-6">
                <div className="bg-[#E8F5F1] rounded-2xl rounded-tl-none p-4 mb-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    👋 Hello! You can message us privately on WhatsApp. We will reply as soon as possible.
                  </p>
                </div>
                <div className="bg-[#E8F5F1] rounded-2xl rounded-tl-none p-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    All conversations are confidential and GDPR compliant.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-2"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </Button>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Available in: <strong>English, Français, العربية, Українська, Português, ქართული, বাংলা, हिन्दी</strong>
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 px-6 py-3 text-center">
              <p className="text-xs text-gray-600">
                WhatsApp: +353 86 157 0550
              </p>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}
