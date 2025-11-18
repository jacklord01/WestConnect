import { Globe } from "lucide-react";

export function FooterLanguageBar() {
  const languages = [
    { name: "English", flag: "🇬🇧", ariaLabel: "UK flag" },
    { name: "Français", flag: "🇫🇷", ariaLabel: "French flag" },
    { name: "العربية", flag: "🇸🇦", ariaLabel: "Arabic flag" },
    { name: "Українська", flag: "🇺🇦", ariaLabel: "Ukrainian flag" },
    { name: "Português", flag: "🇵🇹", ariaLabel: "Portuguese flag" },
    { name: "ქართული", flag: "🇬🇪", ariaLabel: "Georgian flag" },
    { name: "বাংলা", flag: "🇧🇩", ariaLabel: "Bangladesh flag" },
    { name: "हिन्दी", flag: "🇮🇳", ariaLabel: "India flag" }
  ];

  return (
    <div className="border-t border-white/20 pt-6 pb-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3 text-white/80 text-sm flex-wrap">
        <Globe className="w-4 h-4" />
        <span className="text-white/70">Available in your language:</span>
      </div>
      <div className="flex items-center justify-center gap-3 mb-3 text-xs flex-wrap px-4">
        {languages.map((language, index) => (
          <div key={language.name} className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="text-base" role="img" aria-label={language.ariaLabel}>
                {language.flag}
              </span>
              {language.name}
            </span>
            {index < languages.length - 1 && (
              <span className="text-white/40">•</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-white/50 text-xs">
        🌐 Translate this page with your browser
      </p>
    </div>
  );
}
