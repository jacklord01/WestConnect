import { Shield, CheckCircle, FileText, Users, Home, Briefcase, Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface UndocumentedSupportProps {
  onBookingClick: () => void;
}

export function UndocumentedSupport({ onBookingClick }: UndocumentedSupportProps) {
  const supportAreas = [
    {
      icon: Shield,
      title: "Confidential conversations about your situation",
      description: "You can speak with WestConnect privately. We do not report or share your information without your explicit consent."
    },
    {
      icon: FileText,
      title: "Understanding your current status",
      details: [
        "What 'undocumented' means",
        "What options may exist",
        "How the Irish system works",
        "What supports are safe to access"
      ],
      note: "(Non-legal guidance — we do not replace a solicitor)"
    },
    {
      icon: FileText,
      title: "Background information preparation",
      description: "We can help you gather:",
      details: [
        "Your time in Ireland",
        "Employment history",
        "Community involvement",
        "Family connections",
        "Humanitarian details",
        "Personal circumstances"
      ],
      note: "This helps when speaking to solicitors, NGOs or preparing submissions."
    },
    {
      icon: Users,
      title: "Referrals to trusted organisations",
      description: "We can link you with:",
      details: [
        "Migrant Rights Centre Ireland",
        "Nasc",
        "Crosscare",
        "Legal Aid Board",
        "Community welfare contacts",
        "Educational supports"
      ]
    },
    {
      icon: Home,
      title: "Housing & Welfare Information",
      description: "We provide guidance on what supports you can safely access, and how to navigate challenges with:",
      details: [
        "Renting",
        "Overcrowding",
        "Homeless risk",
        "Family accommodation needs"
      ]
    },
    {
      icon: Briefcase,
      title: "Employment & Workplace Issues",
      description: "Undocumented individuals sometimes face unfair work conditions. We help you understand:",
      details: [
        "Your workplace rights",
        "Risks",
        "Safe options",
        "Trusted resources"
      ],
      note: "(We do not provide legal representation.)"
    },
    {
      icon: Heart,
      title: "Family & Children Integration",
      description: "We help undocumented families connect with:",
      details: [
        "Local sports clubs",
        "School enrolment information",
        "Parenting supports",
        "Community centres",
        "Youth mentorship and coaching"
      ],
      note: "Your children deserve a safe, active, supported childhood — regardless of your status."
    }
  ];

  const whoThisIsFor = [
    "People whose visas have expired",
    "People who lost their work permit",
    "People who overstayed unintentionally",
    "Individuals afraid to approach the authorities",
    "Families living quietly without status",
    "Youth who arrived here with undocumented parents"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="undocumented" className="relative bg-gradient-to-br from-[#0A375A] via-[#1D7F63] to-[#4DC8D3] text-white overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <circle cx="900" cy="150" r="120" fill="white" opacity="0.3" />
            <circle cx="200" cy="600" r="180" fill="white" opacity="0.25" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-white/90 text-sm sm:text-base">Confidential • Safe • Non-judgmental</p>
          </div>
          
          <h1 
            className="text-white mb-6 text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.1]" 
            style={{ fontWeight: 800, letterSpacing: '-0.5px' }}
          >
            Support for Undocumented & Out-of-Status Individuals
          </h1>
          
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.90)' }}>
            WestConnect provides confidential, non-judgmental support for people who are undocumented, out of status, 
            or unsure of their current immigration position. Many individuals become undocumented due to expired visas, 
            lost employment permits, family breakdown, misunderstanding of paperwork or fear of approaching authorities.
          </p>
          
          <p className="text-base sm:text-lg mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            We offer a safe, friendly space to help you understand your situation, gather your information, 
            and identify possible pathways and supports.
          </p>
          
          <div className="mt-10">
            <button
              onClick={onBookingClick}
              className="bg-[#F2C94C] text-[#0A375A] px-10 py-5 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5d563] inline-flex items-center gap-3 shadow-lg"
              style={{ fontWeight: 600 }}
            >
              Speak With Us Confidentially
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* What We Can Help With Section */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">What We Can Help You With</h2>
          </div>

          <div className="space-y-6">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1D7F63] to-[#2C8F66] rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#244C75] mb-3">{area.title}</h3>
                      {area.description && (
                        <p className="text-gray-700 mb-3 leading-relaxed">{area.description}</p>
                      )}
                      {area.details && (
                        <ul className="space-y-2 mb-3">
                          {area.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {area.note && (
                        <p className="text-gray-500 text-sm italic">{area.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Page Is For Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#244C75] mb-8 text-center">Who This Page Is For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {whoThisIsFor.map((person, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-5 bg-[#F8F9FA] rounded-xl border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{person}</span>
              </div>
            ))}
          </div>

          {/* Safe Place to Start */}
          <div className="bg-gradient-to-br from-[#244C75] to-[#1D7F63] rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="text-white mb-4">A Safe Place to Start</h3>
            <p className="text-xl mb-2 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              At WestConnect, you will never be judged or turned away.
            </p>
            <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Your conversations with us remain private and handled with care.
            </p>
            
            <button
              onClick={onBookingClick}
              className="bg-[#F2C94C] text-[#0A375A] px-10 py-5 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5d563] inline-flex items-center gap-3 shadow-lg"
              style={{ fontWeight: 600 }}
            >
              Speak With Us Confidentially
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#244C75] mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Common questions from people seeking support for undocumented or out-of-status situations.
          </p>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Is it safe to speak with WestConnect if I am undocumented?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We offer a confidential, private and judgment-free environment. 
                We do not share your information with any authority or organisation without your consent.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Can WestConnect fix my immigration status?</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We are not a legal service, so we cannot change your status. But we can:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Help you understand your options</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Prepare personal background information</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Connect you with trusted NGOs and solicitors</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Support you through the process</span>
                </li>
              </ul>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Will my information be given to immigration authorities?</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>No. Never.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Everything you share with us stays private under GDPR.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Can undocumented people get help with housing or school issues?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes — we help families understand what supports are accessible and how to navigate systems safely.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Can my children join sports or community activities even if I am undocumented?</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Absolutely. We regularly help children join:
              </p>
              <div className="grid grid-cols-2 gap-2 ml-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0" />
                  <span>GAA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0" />
                  <span>Soccer</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0" />
                  <span>Basketball</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0" />
                  <span>Music groups</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0" />
                  <span>Youth clubs</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0" />
                  <span>School programmes</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                No child is excluded because of documentation.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Can WestConnect help me with a representation for Leave to Remain?</h3>
              <p className="text-gray-700 leading-relaxed">
                We can help you gather your history, information, community involvement and circumstances. 
                We can help structure your background narrative. 
                We cannot replace a solicitor — but we provide strong non-legal guidance and referrals.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">What if I cannot afford a solicitor?</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We can direct you to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Legal Aid Board</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>MRCI (Migrant Rights Centre Ireland)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Crosscare</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Nasc</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>NGOs offering free or low-cost legal assistance</span>
                </li>
              </ul>
            </div>

            {/* FAQ 8 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">What if I am working without papers?</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We can help you understand:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Your rights</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Your risks</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Practical steps</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                  <span>Safe people and organisations to speak to</span>
                </li>
              </ul>
            </div>

            {/* FAQ 9 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">Can undocumented people access healthcare?</h3>
              <p className="text-gray-700 leading-relaxed">
                In many cases, basic and emergency healthcare is available. 
                We can explain what supports exist and how to access them safely.
              </p>
            </div>

            {/* FAQ 10 */}
            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
              <h3 className="text-[#244C75] mb-3">How do I start?</h3>
              <p className="text-gray-700 leading-relaxed">
                Just contact us. We will guide you step by step.
              </p>
            </div>
          </div>

          {/* CTA after FAQ */}
          <div className="mt-12 text-center">
            <button
              onClick={onBookingClick}
              className="bg-[#2C8F66] text-white px-10 py-5 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#247558] inline-flex items-center gap-3 shadow-lg"
              style={{ fontWeight: 600 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Confidentiality Statement Section */}
      <section className="py-16 lg:py-20 bg-[#E4E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border-l-4 border-[#244C75]">
            <h3 className="text-[#244C75] mb-6 text-center">Confidentiality & GDPR Statement</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                WestConnect Migrant Support treats all personal information with strict confidentiality. 
                We do not share your data with any person, agency or organisation without your clear and informed consent.
              </p>
              
              <p>
                All conversations, forms and records are handled in accordance with GDPR and Irish data protection law. 
                You may request access to, correction of, or deletion of your information at any time.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-[#244C75]" style={{ fontWeight: 600 }}>
                  For undocumented individuals:
                </p>
                <p className="mt-2">
                  We understand the sensitive nature of your situation. Your information stays private, safe and protected at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
