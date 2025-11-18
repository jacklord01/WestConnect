import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languages = [
    { name: "English", nativeName: "English", flag: "🇬🇧", code: "EN" },
    { name: "French", nativeName: "Français", flag: "🇫🇷", code: "FR" },
    { name: "Arabic", nativeName: "العربية", flag: "🇸🇦", code: "AR", dir: "rtl" },
    { name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", code: "UK" },
    { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", code: "PT" },
    { name: "Georgian", nativeName: "ქართული", flag: "🇬🇪", code: "GE" },
    { name: "Bangla", nativeName: "বাংলা", flag: "🇧🇩", code: "BN" },
    { name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", code: "HI" }
  ];

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#2E8E79] hover:bg-gray-50 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E8E79] focus:ring-offset-2"
        aria-label="Language selector - Your browser will translate automatically"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 text-[#2E8E79]" />
        <span className="text-sm text-[#0B2447]" style={{ fontWeight: 500 }}>{selectedLanguage}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown Menu */}
          <div 
            className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            role="menu"
            aria-orientation="vertical"
          >
            {/* Helper Text */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#2E8E79] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Your browser will translate this page automatically.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Select your language below.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Language Options */}
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className="w-full text-left px-4 py-3 hover:bg-[#F8F9FA] transition-colors flex items-center gap-3 group focus:outline-none focus:bg-[#F8F9FA] focus:ring-2 focus:ring-inset focus:ring-[#2C8F66]"
                  role="menuitem"
                  dir={language.dir}
                >
                  {/* Flag */}
                  <span className="text-xl flex-shrink-0" role="img" aria-label={`${language.name} flag`}>
                    {language.flag}
                  </span>
                  
                  {/* Language Name */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-700 group-hover:text-[#244C75]">
                      {language.nativeName}
                    </div>
                    <div className="text-xs text-gray-400">
                      {language.name}
                    </div>
                  </div>
                  
                  {/* Selected Indicator */}
                  {selectedLanguage === language.code && (
                    <div className="w-2 h-2 rounded-full bg-[#2E8E79] flex-shrink-0" aria-label="Selected"></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Bottom Note */}
            <div className="px-4 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                No manual translation needed
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
