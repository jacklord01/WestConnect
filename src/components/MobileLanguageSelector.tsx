import { Globe } from "lucide-react";
import { useState } from "react";

export function MobileLanguageSelector() {
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
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg border border-[#E5E7EB] hover:bg-gray-100 transition-colors"
        aria-label="Language selector - Your browser will translate automatically"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#2E8E79]" />
          <span className="text-sm text-[#0B2447]" style={{ fontWeight: 500 }}>Language: {selectedLanguage}</span>
        </div>
        <span className="text-xs text-gray-500">Tap to change</span>
      </button>

      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
          {/* Helper Text */}
          <div className="px-4 py-3 bg-[#F8F9FA] border-b border-gray-200">
            <p className="text-xs text-gray-600 leading-relaxed">
              🌐 Your browser will translate this page automatically
            </p>
          </div>
          
          {/* Language Options */}
          <div className="divide-y divide-gray-100">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className="w-full px-4 py-4 hover:bg-[#F8F9FA] transition-colors flex items-center gap-3 active:bg-gray-100"
                dir={language.dir}
                style={{ minHeight: '56px' }}
              >
                {/* Flag */}
                <span className="text-2xl flex-shrink-0" role="img" aria-label={`${language.name} flag`}>
                  {language.flag}
                </span>
                
                {/* Language Name */}
                <div className="flex-1 text-left min-w-0">
                  <div className="text-sm text-gray-800">
                    {language.nativeName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {language.name}
                  </div>
                </div>
                
                {/* Selected Indicator */}
                {selectedLanguage === language.code && (
                  <div className="w-6 h-6 rounded-full bg-[#2E8E79] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
