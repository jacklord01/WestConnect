import { Users, Briefcase, Home, Globe, GraduationCap, Heart, Handshake, Shield, Menu, X, MapPin, MessageCircle, Check, Award, BookOpen, UsersRound, Sparkles, Quote, Send } from "lucide-react";
import { Button } from "./components/ui/button";
import { ServiceCard } from "./components/ServiceCard";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Card } from "./components/ui/card";
import { UndocumentedSupport } from "./components/UndocumentedSupport";
import { FamilyIntegration } from "./components/FamilyIntegration";
import { LanguageSelector } from "./components/LanguageSelector";
import { FooterLanguageBar } from "./components/FooterLanguageBar";
import { MobileLanguageSelector } from "./components/MobileLanguageSelector";
import { ContactForm } from "./components/ContactForm";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfUse } from "./components/TermsOfUse";
import { AboutUs } from "./components/AboutUs";
import { SupportUs } from "./components/SupportUs";
import { EnhancedFooter } from "./components/EnhancedFooter";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { SafeguardingStatement } from "./components/SafeguardingStatement";
import { HowWeSupport } from "./components/HowWeSupport";
import { SupportOurWorkSection } from "./components/SupportOurWorkSection";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'undocumented' | 'family' | 'privacy' | 'terms' | 'about' | 'support' | 'safeguarding'>('home');

  // SEO Metadata
  useEffect(() => {
    document.title = "WestConnect Migrant Support Ireland";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'WestConnect provides safe, confidential support for migrants, asylum seekers, undocumented individuals and families in Ireland. Non-legal help with housing, employment, schools, integration and more.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'WestConnect provides safe, confidential support for migrants, asylum seekers, undocumented individuals and families in Ireland. Non-legal help with housing, employment, schools, integration and more.';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'WestConnect Migrant Support' },
      { property: 'og:description', content: 'Confidential migrant support in Ireland.' },
      { property: 'og:image', content: '/logo.png' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }, []);

  const whoWeSupport = [
    {
      icon: Shield,
      title: "Asylum & Protection",
      description: "People in the international protection / asylum process"
    },
    {
      icon: Briefcase,
      title: "Workers / Critical Skills",
      description: "People on critical skills, work permits, and employment visas"
    },
    {
      icon: Globe,
      title: "Ukrainian & IRP",
      description: "Ukrainian beneficiaries of temporary protection and other EU schemes"
    },
    {
      icon: Users,
      title: "Students & Families",
      description: "Student visas, family reunification, and long-term residents"
    },
    {
      icon: Heart,
      title: "Undocumented & Out-of-Status Individuals",
      description: "Research suggests thousands of people in Ireland live without a secure immigration status. We offer safe, confidential support for those who feel afraid or unsure where to turn."
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: "Immigration & Status (Non-Legal Guidance)",
      description: "Understanding your permission and pathways in Ireland",
      items: [
        "Understanding your current permission (asylum, IRP, work permit, student, family, etc.)",
        "Support for undocumented individuals and those who have fallen out of status",
        "Preparing background information for humanitarian / leave to remain applications",
        "Signposting to legal aid, NGOs and specialist solicitors",
        "Safe, confidential conversations about next steps",
        "Helping you understand letters from government departments"
      ]
    },
    {
      icon: Briefcase,
      title: "Work & Employer Challenges",
      description: "Support with workplace issues and employment",
      items: [
        "Issues at work (hours, contracts, unfair treatment – non-legal guidance & referral)",
        "Understanding your work rights in Ireland",
        "Information for people working without full documentation",
        "CV help and job search support",
        "Critical Skills / work permit expectations vs reality – what you can do"
      ]
    },
    {
      icon: Home,
      title: "Accommodation & Local Life",
      description: "Housing support and community integration",
      items: [
        "Help understanding tenancy, rent, and landlord issues",
        "Guidance for undocumented families seeking safe accommodation options",
        "Finding local supports for housing problems",
        "Neighbourhood orientation: schools, GPs, public transport, community centres"
      ]
    },
    {
      icon: Globe,
      title: "Ukrainian & IRP Scheme Support",
      description: "Dedicated support for Ukrainian beneficiaries",
      items: [
        "Understanding your status and entitlements",
        "Accessing language classes and employment supports",
        "Connecting with local Ukrainian and support groups"
      ]
    },
    {
      icon: GraduationCap,
      title: "Language, Education & Finances",
      description: "Building skills and financial stability",
      items: [
        "English conversation & practice support (or pointing to free classes)",
        "Guidance on Irish education pathways for adults and children",
        "Help understanding banking, PPS, social welfare and budgeting"
      ]
    }
  ];

  const values = [
    { icon: Heart, label: "Respect" },
    { icon: Heart, label: "Compassion" },
    { icon: Shield, label: "Confidentiality" },
    { icon: Shield, label: "Integrity" },
    { icon: Globe, label: "Cultural sensitivity" },
    { icon: Handshake, label: "Empowerment" },
    { icon: Users, label: "Community unity" }
  ];

  const scrollToBooking = () => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToUndocumented = () => {
    setCurrentPage('undocumented');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFamily = () => {
    setCurrentPage('family');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacy = () => {
    setCurrentPage('privacy');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    setCurrentPage('terms');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSupport = () => {
    setCurrentPage('support');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSafeguarding = () => {
    setCurrentPage('safeguarding');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If on undocumented page, show that component
  if (currentPage === 'undocumented') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#2E8E79] border-b-2 border-[#2E8E79]" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <a href="#contact" className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Contact</a>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <a href="#contact" className="block text-[#0B2447] hover:text-[#2E8E79] px-2 py-2" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500 }}>Contact</a>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <UndocumentedSupport onBookingClick={scrollToBooking} />

        {/* Contact Form Section */}
        <ContactForm />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
          onNavigateSafeguarding={navigateToSafeguarding}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // If on family integration page, show that component
  if (currentPage === 'family') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#2E8E79] border-b-2 border-[#2E8E79]" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <FamilyIntegration onBookingClick={scrollToBooking} />

        {/* Contact Form Section */}
        <ContactForm />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
          onNavigateSafeguarding={navigateToSafeguarding}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // If on privacy page, show that component
  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <PrivacyPolicy onBookingClick={scrollToBooking} />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
          onNavigateSafeguarding={navigateToSafeguarding}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // If on terms page, show that component
  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <TermsOfUse onBookingClick={scrollToBooking} />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
          onNavigateSafeguarding={navigateToSafeguarding}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // If on about page, show that component
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity mr-12">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <AboutUs onBookingClick={scrollToBooking} />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
          onNavigateSafeguarding={navigateToSafeguarding}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // If on support page, show that component
  if (currentPage === 'support') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity mr-12">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <SupportUs />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
          onNavigateSafeguarding={navigateToSafeguarding}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // If on safeguarding page, show that component
  if (currentPage === 'safeguarding') {
    return (
      <div className="min-h-screen bg-[#E4E6EA]">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center" style={{ height: '78px' }}>
              <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity mr-12">
                <Handshake className="w-8 h-8 text-[#2C8F66]" />
                <span className="text-[#0B2447]" style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}>WestConnect Migrant Support</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={navigateToHome} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Home</button>
                <button onClick={navigateToUndocumented} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" style={{ fontWeight: 500, letterSpacing: '0.25px' }}>Family Integration</button>
                <LanguageSelector />
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)', fontSize: '14.5px' }}>
                  Book Free Support Session
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#0B2447]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3">
                <button onClick={navigateToHome} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Home</button>
                <button onClick={navigateToUndocumented} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Undocumented Support</button>
                <button onClick={navigateToFamily} className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2" style={{ fontWeight: 500 }}>Family Integration</button>
                <div className="pt-2 pb-2">
                  <MobileLanguageSelector />
                </div>
                <button onClick={scrollToBooking} className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full" style={{ fontWeight: 600, boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)' }}>
                  Book Free Support Session
                </button>
              </div>
            )}
          </div>
        </nav>

        <SafeguardingStatement onBookingClick={scrollToBooking} />

        <EnhancedFooter 
          onNavigateHome={navigateToHome}
          onNavigateUndocumented={navigateToUndocumented}
          onNavigateFamily={navigateToFamily}
          onNavigateAbout={navigateToAbout}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateSupport={navigateToSupport}
        />
        
        <WhatsAppWidget />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-[#E4E6EA]">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{ height: '78px' }}>
            {/* Logo & Organisation Name */}
            <button 
              onClick={navigateToHome} 
              className="flex items-center gap-4 hover:opacity-80 transition-opacity mr-12"
            >
              <Handshake className="w-8 h-8 text-[#2C8F66]" />
              <span 
                className="text-[#0B2447]" 
                style={{ fontSize: '17.5px', fontWeight: 600, lineHeight: 1.2 }}
              >
                WestConnect Migrant Support
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#home" 
                className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" 
                style={{ fontWeight: 500, letterSpacing: '0.25px' }}
              >
                Home
              </a>
              <a 
                href="#who" 
                className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" 
                style={{ fontWeight: 500, letterSpacing: '0.25px' }}
              >
                Who We Support
              </a>
              <button 
                onClick={navigateToFamily} 
                className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" 
                style={{ fontWeight: 500, letterSpacing: '0.25px' }}
              >
                Family Integration
              </button>
              <button 
                onClick={navigateToUndocumented} 
                className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" 
                style={{ fontWeight: 500, letterSpacing: '0.25px' }}
              >
                Undocumented Support
              </button>
              <a 
                href="#contact" 
                className="text-[#0B2447] hover:text-[#2E8E79] transition-all duration-200 hover:underline underline-offset-4" 
                style={{ fontWeight: 500, letterSpacing: '0.25px' }}
              >
                Contact
              </a>
              <LanguageSelector />
              <button
                onClick={scrollToBooking}
                className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-2.5 rounded-xl transition-all duration-200"
                style={{ 
                  fontWeight: 600, 
                  boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)',
                  fontSize: '14.5px'
                }}
              >
                Book Free Support Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#0B2447]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a 
                href="#home" 
                className="block text-[#0B2447] hover:text-[#2E8E79] px-2 py-2" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontWeight: 500 }}
              >
                Home
              </a>
              <a 
                href="#who" 
                className="block text-[#0B2447] hover:text-[#2E8E79] px-2 py-2" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontWeight: 500 }}
              >
                Who We Support
              </a>
              <button 
                onClick={navigateToFamily} 
                className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2"
                style={{ fontWeight: 500 }}
              >
                Family Integration
              </button>
              <button 
                onClick={navigateToUndocumented} 
                className="block text-[#0B2447] hover:text-[#2E8E79] w-full text-left px-2 py-2"
                style={{ fontWeight: 500 }}
              >
                Undocumented Support
              </button>
              <a 
                href="#contact" 
                className="block text-[#0B2447] hover:text-[#2E8E79] px-2 py-2" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontWeight: 500 }}
              >
                Contact
              </a>
              <div className="pt-2 pb-2">
                <MobileLanguageSelector />
              </div>
              <button
                onClick={scrollToBooking}
                className="bg-[#FDCB2A] text-[#0B2447] hover:bg-[#E6B820] px-5 py-3 rounded-xl transition-all duration-200 w-full"
                style={{ 
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(253, 203, 42, 0.25)'
                }}
              >
                Book Free Support Session
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#0A375A] via-[#1D7F63] to-[#4DC8D3] text-white overflow-hidden min-h-[650px] sm:min-h-[700px]">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft wave curves for connection */}
          <svg className="absolute top-0 right-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 Q300,100 600,200 T1200,200" stroke="white" strokeWidth="2" fill="none" />
            <path d="M0,400 Q300,300 600,400 T1200,400" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="900" cy="150" r="120" fill="white" opacity="0.3" />
            <circle cx="200" cy="600" r="180" fill="white" opacity="0.25" />
          </svg>
          
          {/* Subtle sports-inspired geometry - movement arcs */}
          <svg className="absolute bottom-10 left-10 w-64 h-64 opacity-[0.05]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="3" fill="none" strokeDasharray="5,5" />
            <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3,3" />
            <path d="M100,20 Q120,60 100,100 Q80,140 100,180" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
          
          {/* Abstract people silhouette - family connection */}
          <svg className="absolute right-20 top-1/2 transform -translate-y-1/2 w-72 h-72 opacity-[0.08] hidden lg:block" viewBox="0 0 200 200">
            <circle cx="70" cy="50" r="15" fill="white" />
            <circle cx="130" cy="50" r="15" fill="white" />
            <circle cx="100" cy="90" r="10" fill="white" />
            <path d="M70,65 L70,110 M60,85 L80,85 M70,110 L60,140 M70,110 L80,140" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M130,65 L130,110 M120,85 L140,85 M130,110 L120,140 M130,110 L140,140" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M100,100 L100,130 M95,115 L105,115 M100,130 L95,150 M100,130 L105,150" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          
          {/* Soft glowing orbs */}
          <div className="absolute top-32 right-16 w-80 h-80 bg-white/[0.06] rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 left-20 w-96 h-96 bg-white/[0.05] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-32 sm:pb-36">
          <div className="max-w-4xl">
            {/* Multilingual Welcome Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Globe className="w-4 h-4 text-white/90" />
              <span className="text-white/90 text-sm">Welcome • Bienvenue • مرحبًا • Ласкаво просимо • Bem-vindo • მოგესალმებით • স্বাগতম • स्वागत है</span>
            </div>
            
            <h1 
              className="text-white mb-4 text-[44px] sm:text-[52px] lg:text-[60px] leading-[1.1]" 
              style={{ fontWeight: 800, letterSpacing: '-0.5px', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}
            >
              WestConnect Migrant Support
            </h1>
            
            {/* Brand Tagline */}
            <div className="mb-6">
              <p 
                className="text-[#F3BE4B] text-lg sm:text-xl tracking-wide"
                style={{ fontWeight: 600, letterSpacing: '0.5px' }}
              >
                Support • Safety • Community
              </p>
            </div>
            
            <p 
              className="text-[23px] sm:text-2xl lg:text-[26px] mb-3 sm:mb-4" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.90)', 
                lineHeight: '135%',
                fontWeight: 500
              }}
            >
              Supporting asylum seekers, undocumented migrants, workers, students, families and refugees to build safe, stable lives in Ireland.
            </p>
            
            <p 
              className="text-[15px] sm:text-base mb-7 sm:mb-8" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.80)',
                fontWeight: 400
              }}
            >
              Local community-driven support led by people who understand the migrant journey.
            </p>
            
            {/* Enhanced Glass Card Feature Box */}
            <div 
              className="rounded-[28px] p-8 sm:p-10 mb-8 sm:mb-9 border border-white/20 shadow-2xl"
              style={{ 
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F2C94C] flex items-center justify-center mt-0.5 shadow-md">
                    <Check className="w-[18px] h-[18px] text-[#0A375A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white text-[15px] sm:text-base leading-relaxed">
                    Immigration & status support (non-legal guidance)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F2C94C] flex items-center justify-center mt-0.5 shadow-md">
                    <Check className="w-[18px] h-[18px] text-[#0A375A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white text-[15px] sm:text-base leading-relaxed">
                    Workplace, housing & welfare issues
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F2C94C] flex items-center justify-center mt-0.5 shadow-md">
                    <Check className="w-[18px] h-[18px] text-[#0A375A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white text-[15px] sm:text-base leading-relaxed">
                    Language, education & employment support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F2C94C] flex items-center justify-center mt-0.5 shadow-md">
                    <Check className="w-[18px] h-[18px] text-[#0A375A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white text-[15px] sm:text-base leading-relaxed">
                    Integration, community and mental wellbeing
                  </span>
                </li>
              </ul>
              
              {/* Additional services mini-row */}
              <div className="pt-5 border-t border-white/15">
                <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed mb-2">
                  + Family & children's integration support through sports and community groups
                </p>
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                  + Real-life coaching support stories from local families
                </p>
              </div>
            </div>

            {/* Confidential Support Line */}
            <p 
              className="text-sm sm:text-[15px] mb-7 sm:mb-8 mt-4" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.80)',
                fontWeight: 400
              }}
            >
              Confidential support for undocumented individuals and people facing complex status situations.
            </p>

            {/* Enhanced CTA Button */}
            <button
              onClick={scrollToBooking}
              className="bg-[#F2C94C] text-[#0A375A] px-10 py-[18px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5d563]"
              style={{ 
                fontWeight: 600,
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25), 0px 8px 24px rgba(242, 201, 76, 0.2)'
              }}
            >
              Book Free Support Session →
            </button>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-12">
              <a 
                href="#who" 
                className="inline-flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <span className="text-sm">Learn more</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-white/50 transition-colors">
                  <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Matters - Light Statistical Context */}
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[#244C75] text-2xl mb-2">Why Support Matters</h2>
            <p className="text-gray-600 text-sm">Community-based support makes a real difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#2C8F66]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#2C8F66]" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Over <strong>8,000 people</strong> applied to Ireland's recent undocumented regularisation scheme.
              </p>
              <p className="text-gray-500 text-xs text-center mt-2">Source: EMN Ireland</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#F3BE4B]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#F3BE4B]" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Ireland issued over <strong>2,400 deportation orders</strong> last year, but only a small percentage were enforced.
              </p>
              <p className="text-gray-500 text-xs text-center mt-2">Source: Oireachtas PQ</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#244C75]/10 rounded-full flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-[#244C75]" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Many individuals live with <strong>uncertainty</strong> and need safe, community-based support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section id="who" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">Who We Support</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-4">
              WestConnect Migrant Support is here for all migrants in the West of Ireland, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {whoWeSupport.map((item, index) => {
              const Icon = item.icon;
              const isUndocumented = item.title === "Undocumented & Out-of-Status Individuals";
              
              if (isUndocumented) {
                return (
                  <button
                    key={index}
                    onClick={navigateToUndocumented}
                    className="p-6 text-center hover:shadow-lg transition-all border border-[#E4E6EA] rounded-lg bg-gradient-to-br from-white to-[#F2C94C]/5 hover:scale-105"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-[#F2C94C]/20 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#244C75]" />
                      </div>
                    </div>
                    <h3 className="text-[#244C75] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <span className="text-[#2C8F66] text-sm" style={{ fontWeight: 600 }}>Learn more →</span>
                  </button>
                );
              }
              
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-[#E4E6EA]">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#2C8F66]/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#2C8F66]" />
                    </div>
                  </div>
                  <h3 className="text-[#244C75] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="bg-[#F3BE4B]/10 border-l-4 border-[#F3BE4B] rounded-r-lg p-6 max-w-4xl mx-auto">
            <p className="text-gray-700">
              Whether your issue is immigration, work, accommodation, money, language, family or community – 
              we are here to listen, guide, and connect you to the right supports.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-[#E4E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">How We Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services designed to help you navigate life in Ireland with confidence and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Family & Children Integration Section */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA] relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="#2C8F66" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M20,50 L40,30 L60,50 L80,30" stroke="#1D7F63" strokeWidth="3" strokeLinecap="round" />
            <rect x="35" y="55" width="30" height="35" stroke="#1D7F63" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-6">Family & Children Integration Support</h2>
            <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              WestConnect helps families and children adjust to life in Ireland by connecting them with local sports clubs, 
              schools, community activities and youth supports. We believe every child deserves a safe place to grow, learn 
              and belong — and every parent deserves the guidance to navigate new systems with confidence.
            </p>
          </div>

          {/* Four Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 - Sports & Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D7F63] to-[#2C8F66] rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-[#244C75] mb-3 text-center">Sports & Community Activities</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We help children join local GAA, soccer, swimming, music and other community activity groups so they feel included and active.
              </p>
            </div>

            {/* Card 2 - School Support */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D7F63] to-[#2C8F66] rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-[#244C75] mb-3 text-center">School Enrolment & Education Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Guidance on finding the right school, registration, homework support and connecting parents with teachers and community education resources.
              </p>
            </div>

            {/* Card 3 - Family Integration */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D7F63] to-[#2C8F66] rounded-2xl flex items-center justify-center shadow-lg">
                  <UsersRound className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-[#244C75] mb-3 text-center">Family & Parenting Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Support for settling into neighbourhoods, navigating GP/healthcare, community centres and finding safe spaces for children to play and grow. Quiet, confidential support for undocumented families integrating into schools and community groups.
              </p>
            </div>

            {/* Card 4 - Youth Coaching */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D7F63] to-[#2C8F66] rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-[#244C75] mb-3 text-center">Coaching & Mentoring for Young People</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Practical mentoring and sports coaching for youth to help them build confidence, friendships and healthy routines.
              </p>
            </div>
          </div>

          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-white to-[#F2C94C]/5 rounded-2xl p-8 sm:p-10 mb-6 border-l-4 border-[#F2C94C] shadow-md max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <Quote className="w-10 h-10 text-[#F2C94C] flex-shrink-0" />
              <div>
                <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mb-4 italic">
                  "WestConnect helped my son join a local GAA club. He made friends in just one week and now feels completely at home in school."
                </p>
                <p className="text-gray-600">— Parent from Ukraine</p>
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                "After arriving from Nigeria, my daughter struggled in school. WestConnect helped us find after-school support and she is now thriving."
              </p>
              <p className="text-gray-500 text-sm">— Parent, Nigeria</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                "We had no idea how to help our kids join sports. WestConnect introduced us to a local soccer coach — it changed everything."
              </p>
              <p className="text-gray-500 text-sm">— Family from Syria</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={navigateToFamily}
              className="bg-[#2C8F66] text-white px-8 py-4 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#247558] shadow-md"
              style={{ fontWeight: 600 }}
            >
              Learn More About Family Support →
            </button>
            <button
              onClick={scrollToBooking}
              className="bg-[#F2C94C] text-[#17446B] px-8 py-4 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5d563] shadow-md"
              style={{ fontWeight: 600 }}
            >
              Book Family Session
            </button>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjMyMDY0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community teamwork and support"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[#244C75] mb-6">About WestConnect</h2>
              
              <div className="mb-8">
                <h3 className="text-[#2C8F66] mb-3">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  WestConnect Migrant Support empowers migrants, asylum seekers, and refugees in the West of Ireland 
                  by providing accessible, compassionate, and practical support that promotes safety, stability, and 
                  successful integration.
                </p>
                <p className="text-gray-700">
                  In recent years, thousands of people in Ireland have sought help with status, family stability and community belonging. WestConnect exists to offer safe, human and practical support.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-[#2C8F66] mb-3">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  A welcoming West of Ireland where every migrant feels supported, informed, valued, and connected 
                  to opportunity and community life.
                </p>
              </div>

              <div className="bg-[#244C75]/5 rounded-lg p-6">
                <h3 className="text-[#244C75] mb-4">Our Values</h3>
                <div className="grid grid-cols-2 gap-3">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <Icon className="w-4 h-4 text-[#2C8F66]" />
                        <span className="text-sm">{value.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Support All Languages Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[#244C75] mb-4">We Support All Languages</h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              WestConnect welcomes everyone. No matter your background or language, your browser can translate 
              our website automatically so you can read it comfortably.
            </p>
          </div>

          {/* Language Support Icons */}
          <div className="flex items-center justify-center gap-8 mb-10 flex-wrap">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-16 h-16 bg-[#2C8F66]/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#2C8F66]" />
              </div>
              <span className="text-xs text-gray-600">Translation</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-16 h-16 bg-[#244C75]/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-[#244C75]" />
              </div>
              <span className="text-xs text-gray-600">Communication</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-16 h-16 bg-[#F3BE4B]/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#F3BE4B]" />
              </div>
              <span className="text-xs text-gray-600">Community</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-16 h-16 bg-[#2C8F66]/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#2C8F66]" />
              </div>
              <span className="text-xs text-gray-600">Support</span>
            </div>
          </div>

          {/* Translation Instructions */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#244C75]/5 rounded-full mb-4">
                <span className="text-2xl">🌐</span>
                <span className="text-sm text-gray-700">Browser Translation</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Select <strong>"Translate"</strong> in your browser to view this page in your language.
              </p>
            </div>

            {/* Welcome Messages */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇬🇧 English:</span> Welcome — We are here to help.
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇫🇷 Français:</span> Bienvenue — Nous sommes là pour vous aider.
              </p>
              <p className="text-sm text-gray-600 text-center" dir="rtl">
                <span className="text-[#2C8F66]">🇦🇪 العربية:</span> مرحبًا — نحن هنا لدعمك دائمًا.
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇺🇦 Українська:</span> Ласкаво просимо — ми тут, щоб вам допомогти.
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇵🇹 Português:</span> Bem-vindo — estamos aqui para ajudar.
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇬🇪 ქართული:</span> მოგესალმებით — ჩვენ ყოველთვის მზად ვართ დაგეხმაროთ.
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇧🇩 বাংলা:</span> স্বাগতম — আমরা আপনাকে সাহায্য করতে এখানে আছি।
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#2C8F66]">🇮🇳 हिन्दी:</span> स्वागत है — हम आपकी मदद के लिए यहाँ हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 lg:py-24 bg-[#E4E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#244C75] mb-4">Book an Appointment</h2>
          <p className="text-xl text-gray-600 mb-8">
            Simple. Confidential. Friendly.
          </p>
          <p className="text-gray-600 mb-8">
            All sessions are confidential and free or low-cost. Click below to book a support session.
          </p>
          
          <div className="bg-white rounded-lg p-8 mb-8 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#2C8F66] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-[#244C75] mb-2">Online Consultations via Google Meet</h3>
                <p className="text-gray-700">
                  All appointments are held via Google Meet, making it easy to connect with us from anywhere 
                  in Co. Mayo or beyond. You'll receive a meeting link after booking.
                </p>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-[#2C8F66] hover:bg-[#247558]"
          >
            Book Now →
          </Button>
        </div>
      </section>

      {/* How We Support You Section */}
      <HowWeSupport />

      {/* Support Our Work Section */}
      <SupportOurWorkSection />

      {/* Contact Form Section */}
      <ContactForm />

      <EnhancedFooter 
        onNavigateHome={navigateToHome}
        onNavigateUndocumented={navigateToUndocumented}
        onNavigateFamily={navigateToFamily}
        onNavigateAbout={navigateToAbout}
        onNavigatePrivacy={navigateToPrivacy}
        onNavigateTerms={navigateToTerms}
        onNavigateSupport={navigateToSupport}
        onNavigateSafeguarding={navigateToSafeguarding}
      />
      
      <WhatsAppWidget />
    </div>
  );
}
