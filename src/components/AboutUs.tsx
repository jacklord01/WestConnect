import { Heart, Users, Globe, Shield, Handshake, Home, Briefcase, GraduationCap, Baby, MessageCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface AboutUsProps {
  onBookingClick: () => void;
}

export function AboutUs({ onBookingClick }: AboutUsProps) {
  const supportGroups = [
    { icon: Users, label: "Asylum Seekers", color: "#2C8F66" },
    { icon: Shield, label: "Undocumented", color: "#244C75" },
    { icon: Briefcase, label: "Workers", color: "#2C8F66" },
    { icon: GraduationCap, label: "Students", color: "#244C75" },
    { icon: Home, label: "Ukrainian IRP", color: "#2C8F66" },
    { icon: Baby, label: "Families", color: "#244C75" }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Community-Led Guidance",
      description: "Support from people who understand the migrant journey firsthand."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Available in 8 languages to ensure clear communication."
    },
    {
      icon: Baby,
      title: "Child & Family Integration",
      description: "Special focus on helping families and children settle in Ireland."
    },
    {
      icon: Shield,
      title: "Confidential & Trusted",
      description: "All conversations are safe, private, and GDPR compliant."
    }
  ];

  const testimonials = [
    {
      quote: "WestConnect helped me understand my rights and connect with a solicitor. I felt heard and supported.",
      name: "Ahmed",
      country: "Syria",
      initial: "A"
    },
    {
      quote: "They helped my children join the local football club. Now they have friends and feel at home in Ireland.",
      name: "Olena",
      country: "Ukraine",
      initial: "O"
    },
    {
      quote: "I was afraid to ask for help. WestConnect made me feel safe and gave me clear guidance in my own language.",
      name: "Maria",
      country: "Brazil",
      initial: "M"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#244C75] to-[#2C8F66] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <circle cx="200" cy="150" r="120" fill="white" opacity="0.4" />
            <circle cx="900" cy="600" r="180" fill="white" opacity="0.3" />
            <path d="M0,300 Q300,200 600,300 T1200,300" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Heart className="w-5 h-5 text-white/90" />
            <span className="text-white/90 text-sm">Our Story</span>
          </div>
          
          <h1 className="text-white mb-6">About WestConnect</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Community-driven support for migrants & families in the West of Ireland
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-[#E8F5F1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12 bg-white shadow-lg border-2 border-[#2C8F66]/20">
            <div className="text-center mb-8">
              <h2 className="text-[#244C75] mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-[#2C8F66] mx-auto rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              WestConnect exists to provide safe, supportive, and migrant-led guidance to individuals and families navigating life in Ireland. We believe everyone deserves dignity, clarity, and community support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2C8F66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#2C8F66]" />
                </div>
                <h4 className="text-[#244C75] mb-2">Support</h4>
                <p className="text-gray-600 text-sm">Guidance you can trust</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#244C75]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[#244C75]" />
                </div>
                <h4 className="text-[#244C75] mb-2">Stability</h4>
                <p className="text-gray-600 text-sm">Building secure futures</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2C8F66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#2C8F66]" />
                </div>
                <h4 className="text-[#244C75] mb-2">Community</h4>
                <p className="text-gray-600 text-sm">Connection and belonging</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#244C75] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  WestConnect was founded from lived experience — by people who understand firsthand the challenges of navigating a new country, language barriers, complex immigration systems, and the isolation that can come with displacement.
                </p>
                <p>
                  We saw a gap in local migrant support access across the West of Ireland. Families were struggling alone. People didn't know where to turn. Community members wanted to help but didn't have the infrastructure.
                </p>
                <p>
                  That's why WestConnect exists: to be a bridge. Built on volunteerism, compassion, and community care, we provide the kind of support that makes people feel <em>seen</em>, <em>heard</em>, and <em>valued</em>.
                </p>
                <p className="text-[#2C8F66]" style={{ fontWeight: 600 }}>
                  We're not just a service — we're your neighbors, your advocates, and your friends.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#E8F5F1] to-[#F0F9FF] rounded-3xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                    <Handshake className="w-16 h-16 text-[#2C8F66]" />
                  </div>
                  <p className="text-[#244C75] text-lg" style={{ fontWeight: 600 }}>
                    Community. Compassion. Connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              WestConnect is built on the values that matter most: trust, understanding, and human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="w-12 h-12 bg-[#2C8F66]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2C8F66]" />
                  </div>
                  <h4 className="text-[#244C75] mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">Who We Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              WestConnect is here for migrants, families, and individuals from all backgrounds and immigration pathways.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div key={index} className="text-center">
                  <div 
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3 shadow-md"
                    style={{ backgroundColor: `${group.color}15` }}
                  >
                    <Icon className="w-10 h-10" style={{ color: group.color }} />
                  </div>
                  <p className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>
                    {group.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-[#E8F5F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#244C75] mb-4">Real Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from the people we've supported across the West of Ireland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2C8F66] to-[#244C75] rounded-full flex items-center justify-center text-white text-xl" style={{ fontWeight: 600 }}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-gray-800" style={{ fontWeight: 600 }}>{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-10 lg:p-14 bg-gradient-to-br from-[#244C75] to-[#2C8F66] text-white shadow-xl">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-white mb-4">Need help? We're here to listen.</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a free, confidential support session with our team. Available in 8 languages.
            </p>
            <Button 
              onClick={onBookingClick}
              size="lg"
              className="bg-white text-[#244C75] hover:bg-gray-100 px-8"
            >
              Book Free Support Session
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
