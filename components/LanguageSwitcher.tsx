"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
            language === lang.code
              ? 'bg-primary text-white font-semibold'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          title={lang.label}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="hidden md:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
