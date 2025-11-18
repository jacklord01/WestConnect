import { MessageCircle, Shield, Globe, ExternalLink, FileText } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ContactForm() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#244C75] mb-4">Contact WestConnect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A safe, confidential way to ask for help.
          </p>
        </div>

        {/* Introduction Text */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <p className="text-gray-700 leading-relaxed text-lg">
            If you need help or support, you can message us on WhatsApp or use our secure online forms. All information is treated with care and kept confidential.
          </p>
        </div>

        {/* WhatsApp Contact - Centered */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="p-6 border-2 border-[#2C8F66] bg-[#F8FFF8]">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#2C8F66] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-[#244C75] mb-1">WhatsApp Contact</h4>
                <a 
                  href="https://wa.me/353861570550" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-[#2C8F66] hover:text-[#247558] transition-colors block"
                  style={{ fontWeight: 600 }}
                >
                  +353 86 157 0550
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Background Form Link & Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[#244C75] mb-4">Applicant Background Form</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are seeking immigration or residency-related support (non-legal), you can complete our Applicant Background Form. This helps us understand your situation better.
              </p>
            </div>

            {/* Background Form Button */}
            <Card className="p-6 bg-gradient-to-br from-[#E8F5F1] to-[#F0F9FF] border-2 border-[#2C8F66]">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#2C8F66] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#244C75] mb-2">Complete Background Form</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    This comprehensive form collects information about your immigration status, family situation, and support needs.
                  </p>
                </div>
              </div>
              
              <a 
                href="https://forms.gle/vRUjvco5RHYHtTUU9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="w-full bg-[#2C8F66] hover:bg-[#247558] text-white"
                  size="lg"
                >
                  WestConnect Migrant Support – Applicant Background Form
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                Opens secure Google Form in a new tab
              </p>
            </Card>

            {/* Translation Note */}
            <div className="flex items-start gap-3 p-5 bg-[#FFF9E6] rounded-lg border-l-4 border-[#F3BE4B]">
              <Globe className="w-5 h-5 text-[#F3BE4B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  You can write in <strong>English, Français, العربية, Українська, Português, ქართული, বাংলা or हिन्दी</strong>. Your browser can translate this page automatically.
                </p>
              </div>
            </div>

            {/* Confidentiality Assurance */}
            <div className="flex items-start gap-3 p-5 bg-[#E8F5F1] rounded-lg border-l-4 border-[#2C8F66]">
              <Shield className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-[#244C75]">100% Confidential.</strong> All conversations and information are kept strictly confidential in accordance with GDPR.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Embedded Support Request Form */}
          <div>
            <div className="mb-4">
              <h3 className="text-[#244C75] mb-2">Request Support Online</h3>
              <p className="text-gray-600 text-sm">
                Use this quick form to request support. We'll respond within 24 hours.
              </p>
            </div>

            <Card className="overflow-hidden shadow-xl border-2 border-gray-200 rounded-2xl bg-white">
              {/* Embedded Google Form */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSejP4mnAOmcjUyHiKY_7N9GzngKyoefers6hKdPYZNmvYJErw/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="WestConnect Support Request Form"
                className="w-full"
                style={{ border: 'none' }}
              >
                Loading…
              </iframe>
            </Card>

            {/* Privacy Note Below Form */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 leading-relaxed flex items-start gap-2">
                <Shield className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2C8F66]" />
                <span>
                  Your information is encrypted and stored securely. We will never share your details with anyone without your permission.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
