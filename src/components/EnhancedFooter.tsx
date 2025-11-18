import { Handshake, ExternalLink } from "lucide-react";

interface EnhancedFooterProps {
  onNavigateHome: () => void;
  onNavigateUndocumented: () => void;
  onNavigateFamily: () => void;
  onNavigateAbout: () => void;
  onNavigatePrivacy: () => void;
  onNavigateTerms: () => void;
  onNavigateSupport: () => void;
  onNavigateSafeguarding?: () => void;
}

export function EnhancedFooter({
  onNavigateHome,
  onNavigateUndocumented,
  onNavigateFamily,
  onNavigateAbout,
  onNavigatePrivacy,
  onNavigateTerms,
  onNavigateSupport,
  onNavigateSafeguarding
}: EnhancedFooterProps) {
  const languages = [
    { code: "EN", flag: "🇬🇧", name: "English" },
    { code: "FR", flag: "🇫🇷", name: "Français" },
    { code: "AR", flag: "🇦🇪", name: "العربية" },
    { code: "UK", flag: "🇺🇦", name: "Українська" },
    { code: "PT", flag: "🇵🇹", name: "Português" },
    { code: "KA", flag: "🇬🇪", name: "ქართული" },
    { code: "BN", flag: "🇧🇩", name: "বাংলা" },
    { code: "HI", flag: "🇮🇳", name: "हिन्दी" }
  ];

  return (
    <footer className="bg-[#0B2447] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1 - Brand Block */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-5 justify-center md:justify-start">
              <Handshake className="w-10 h-10 text-[#2C8F66]" />
              <span className="text-xl" style={{ fontWeight: 600 }}>WestConnect</span>
            </div>
            <p className="text-white/90 leading-relaxed mb-4">
              Community support for migrants & families in the West of Ireland.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Safe, confidential guidance for asylum seekers, undocumented individuals, workers, students, and families building new lives in Ireland.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white mb-5" style={{ fontWeight: 600 }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={onNavigateHome}
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  Home
                </button>
              </li>
              <li>
                <a 
                  href="#who"
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  Who We Support
                </a>
              </li>
              <li>
                <button 
                  onClick={onNavigateFamily}
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  Family Integration
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateUndocumented}
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  Undocumented Support
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateAbout}
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateSupport}
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  Support Our Work
                </button>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-white/80 hover:text-white hover:underline transition-colors inline-block"
                  style={{ lineHeight: 1.6 }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Languages */}
          <div className="text-center md:text-left">
            <h3 className="text-white mb-5" style={{ fontWeight: 600 }}>Languages</h3>
            <div className="grid grid-cols-4 gap-3 mb-4 max-w-xs mx-auto md:mx-0">
              {languages.map((lang) => (
                <div 
                  key={lang.code}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={lang.name}
                  title={lang.name}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-xs text-white/80" style={{ fontWeight: 500 }}>{lang.code}</span>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your browser can translate this page automatically.
            </p>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="mb-10 pb-10 border-b border-white/15">
          <details className="group">
            <summary className="cursor-pointer text-white/60 text-xs hover:text-white/80 transition-colors list-none flex items-center gap-2">
              <span className="transform group-open:rotate-90 transition-transform">▶</span>
              <span>About WestConnect Services</span>
            </summary>
            <div className="mt-4 text-white/70 text-xs leading-relaxed max-w-4xl">
              WestConnect Migrant Support provides confidential, non-legal support to migrants, asylum seekers, undocumented people, workers, students and families in Ireland. We help with housing, work, education, integration, family support, community connection and access to trusted services across the West of Ireland. Our community-driven approach ensures migrants receive guidance from people who understand the journey. Services include immigration guidance, employment support, housing assistance, educational resources, family integration programs, sports and community activities, mental health signposting, and connections to legal practitioners when needed.
            </div>
          </details>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © 2025 WestConnect Migrant Support. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <button 
                onClick={onNavigatePrivacy}
                className="text-white/70 hover:text-white hover:underline transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onNavigateTerms}
                className="text-white/70 hover:text-white hover:underline transition-colors"
              >
                Terms of Use
              </button>
              {onNavigateSafeguarding && (
                <button 
                  onClick={onNavigateSafeguarding}
                  className="text-white/70 hover:text-white hover:underline transition-colors"
                >
                  Safeguarding
                </button>
              )}
              <a 
                href="https://wa.me/353861570550" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
              >
                WhatsApp Support
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
