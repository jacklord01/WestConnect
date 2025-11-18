import { School, Trophy, Users, Heart, ArrowRight, CheckCircle, Quote, Music, Book } from "lucide-react";

interface FamilyIntegrationProps {
  onBookingClick: () => void;
}

export function FamilyIntegration({ onBookingClick }: FamilyIntegrationProps) {
  const supportAreas = [
    {
      icon: School,
      title: "School Enrolment & Education Pathways",
      items: [
        "Help choosing the right school",
        "Support with enrolment forms and documentation",
        "Guidance on parent–teacher communication",
        "Understanding school subjects, uniforms, books, after-school programmes"
      ]
    },
    {
      icon: Trophy,
      title: "Integration Through Sports & Activities",
      description: "Sports are one of the fastest, easiest and happiest ways for migrant children to feel included.",
      subtitle: "We connect families to:",
      items: [
        "GAA clubs",
        "Rugby teams",
        "Soccer teams",
        "Basketball groups",
        "Swimming programmes",
        "Music groups",
        "Community youth clubs"
      ]
    },
    {
      icon: Users,
      title: "Youth Coaching & Mentorship",
      description: "We support young people by:",
      items: [
        "Linking them with coaching groups",
        "Introducing them to mentors",
        "Helping them build confidence, teamwork and friendships",
        "Assisting with local club registration"
      ]
    },
    {
      icon: Heart,
      title: "Community Belonging",
      description: "We help families connect with:",
      items: [
        "Community centres",
        "Libraries",
        "Local events",
        "Parent groups",
        "Church youth programmes",
        "Homework clubs"
      ]
    },
    {
      icon: Heart,
      title: "Support for Undocumented Families",
      description: "Every child deserves opportunities, regardless of paperwork.",
      subtitle: "We provide:",
      items: [
        "Non-judgmental, confidential support",
        "Safe guidance",
        "School and sports navigation",
        "Quiet integration pathways"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "WestConnect helped my son join the local GAA team. He made friends instantly and feels like he belongs again.",
      author: "Parent from Ukraine"
    },
    {
      quote: "As a single father from Brazil, I didn't know how to start. WestConnect found a soccer club for my boys within days. It changed everything.",
      author: "Brazilian parent, Castlebar"
    },
    {
      quote: "Our daughter struggled with the Irish school system. WestConnect helped us speak to her teachers and find a homework club. She's thriving now.",
      author: "Nigerian family in Mayo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="family" className="relative bg-gradient-to-br from-[#0A375A] via-[#1D7F63] to-[#4DC8D3] text-white overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <circle cx="900" cy="150" r="120" fill="white" opacity="0.3" />
            <circle cx="200" cy="600" r="180" fill="white" opacity="0.25" />
            <path d="M100,400 Q300,300 500,400 T900,400" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-white/90 text-sm sm:text-base">Sports • Schools • Community • Belonging</p>
          </div>
          
          <h1 
            className="text-white mb-6 text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.1]" 
            style={{ fontWeight: 800, letterSpacing: '-0.5px' }}
          >
            Family & Children Integration Support
          </h1>
          
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.90)' }}>
            At WestConnect, we believe that helping migrants settle in Ireland means supporting the whole family. 
            Children deserve stability, friendship, activity and belonging — and parents deserve clarity, guidance and confidence.
          </p>
          
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            We help families make meaningful connections across schools, sports, youth programmes and local communities.
          </p>

          <button
            onClick={onBookingClick}
            className="bg-[#F2C94C] text-[#0A375A] px-10 py-5 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5d563] inline-flex items-center gap-3 shadow-lg"
            style={{ fontWeight: 600 }}
          >
            Book Family Support Session
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* How We Support Families Section */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">How We Support Families</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-3">
              Comprehensive support to help your family thrive in Ireland
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
              Many families, including those with unclear or difficult immigration situations, simply need friendly guidance to help their children settle into school, sports and community life.
            </p>
          </div>

          <div className="space-y-8">
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
                      
                      {area.subtitle && (
                        <p className="text-gray-700 mb-3 leading-relaxed">{area.subtitle}</p>
                      )}
                      
                      {area.items && (
                        <ul className="space-y-2">
                          {area.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-[#2C8F66] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">Real Stories from Families We've Helped</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from parents who found support, community, and belonging through WestConnect
            </p>
          </div>

          {/* Main Featured Testimonial */}
          <div className="bg-gradient-to-br from-white to-[#F2C94C]/5 rounded-2xl p-8 sm:p-10 mb-6 border-l-4 border-[#F2C94C] shadow-md">
            <div className="flex items-start gap-4">
              <Quote className="w-10 h-10 text-[#F2C94C] flex-shrink-0" />
              <div>
                <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mb-4 italic">
                  {testimonials[0].quote}
                </p>
                <p className="text-gray-600">— {testimonials[0].author}</p>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-[#2C8F66] mb-4" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 italic">
                  {testimonial.quote}
                </p>
                <p className="text-gray-500 text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#244C75] to-[#1D7F63]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white mb-8">
            <h2 className="text-white mb-6">Every Family Deserves Belonging</h2>
            <p className="text-xl mb-3 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Every child deserves a chance to shine.
            </p>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Let us help your family connect, integrate, and thrive in your new community.
            </p>
          </div>

          <button
            onClick={onBookingClick}
            className="bg-[#F2C94C] text-[#0A375A] px-12 py-6 rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5d563] inline-flex items-center gap-3 shadow-2xl"
            style={{ fontWeight: 600, fontSize: '18px' }}
          >
            Contact Us for Family Support
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-white/70 text-sm mt-6">
            Free consultation • Confidential • Available in multiple languages
          </p>
        </div>
      </section>

      {/* Quick Sports Connection Icons */}
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-6">We connect families to:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "GAA", icon: Trophy },
              { name: "Soccer", icon: Trophy },
              { name: "Rugby", icon: Trophy },
              { name: "Basketball", icon: Trophy },
              { name: "Swimming", icon: Heart },
              { name: "Music", icon: Music },
              { name: "Youth Clubs", icon: Users }
            ].map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#2C8F66]/10 rounded-full flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-[#2C8F66]" />
                  </div>
                  <span className="text-gray-700 text-sm text-center">{activity.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
