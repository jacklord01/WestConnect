import { Heart, RefreshCw, Users, ArrowRight, Shield, Home, Lightbulb } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function SupportUs() {
  const impactAreas = [
    {
      icon: Home,
      title: "Community Support",
      description: "Direct assistance to families and individuals"
    },
    {
      icon: Users,
      title: "Integration Programs",
      description: "Sports, education, and social connection activities"
    },
    {
      icon: Lightbulb,
      title: "Outreach & Education",
      description: "Translation help and rights awareness"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C8F66] to-[#244C75] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <circle cx="300" cy="200" r="150" fill="white" opacity="0.4" />
            <circle cx="900" cy="500" r="200" fill="white" opacity="0.3" />
            <path d="M0,400 Q300,300 600,400 T1200,400" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Heart className="w-5 h-5 text-white/90" />
            <span className="text-white/90 text-sm">Make a Difference</span>
          </div>
          
          <h1 className="text-white mb-6">Support Our Work</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Help us continue providing free support to migrants, families and individuals across the West of Ireland
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Message */}
            <div>
              <h2 className="text-[#244C75] mb-6">Your Support Changes Lives</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  WestConnect is a community-driven initiative built on volunteerism and compassion. Every contribution helps us provide guidance, support, and connection to migrants who need it most.
                </p>
                <p>
                  Whether you donate once, become a monthly supporter, or volunteer your time and skills, you're helping create a more welcoming Ireland.
                </p>
              </div>

              <Card className="p-5 bg-[#FFF9E6] border-l-4 border-[#F3BE4B] mt-6">
                <p className="text-gray-800 text-sm leading-relaxed">
                  <strong>100% of your contribution</strong> goes directly toward community support activities, family integration, outreach, translation help and advocacy.
                </p>
              </Card>
            </div>

            {/* Right: Illustration */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#E8F5F1] to-[#FFF9E6] rounded-3xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                    <Heart className="w-16 h-16 text-[#2C8F66]" />
                  </div>
                  <p className="text-[#244C75] text-lg" style={{ fontWeight: 600 }}>
                    Every donation helps build community
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Options Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Option 1 - One-time Donation */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-2 border-gray-100 hover:border-[#2C8F66]/30">
              <div className="w-16 h-16 bg-[#F3BE4B]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-[#F3BE4B]" />
              </div>
              <h3 className="text-[#244C75] text-center mb-4">One-Time Donation</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Make a single contribution to support our current programs and immediate community needs.
              </p>
              <Button 
                className="w-full bg-[#2C8F66] hover:bg-[#247558]"
                onClick={() => window.open('https://donate.stripe.com/test_placeholder', '_blank')}
              >
                Donate Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Option 2 - Monthly Supporter */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-gradient-to-br from-[#2C8F66] to-[#247558] text-white border-2 border-[#2C8F66] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F3BE4B] text-[#244C75] text-xs px-3 py-1 rounded-bl-lg" style={{ fontWeight: 600 }}>
                Most Impact
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-center mb-4">Monthly Supporter</h3>
              <p className="text-white/90 text-center leading-relaxed mb-6">
                Help sustain long-term assistance with a recurring monthly contribution. Cancel anytime.
              </p>
              <Button 
                className="w-full bg-white text-[#2C8F66] hover:bg-gray-100"
                onClick={() => window.open('https://donate.stripe.com/test_placeholder', '_blank')}
              >
                Become a Supporter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Option 3 - Volunteer */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-2 border-gray-100 hover:border-[#244C75]/30">
              <div className="w-16 h-16 bg-[#244C75]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-[#244C75]" />
              </div>
              <h3 className="text-[#244C75] text-center mb-4">Volunteer With Us</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Share your time, skills, or translation help to support our community programs.
              </p>
              <Button 
                className="w-full bg-[#244C75] hover:bg-[#1a3a5c]"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Involved
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>

          {/* Where Your Support Goes */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[#244C75] mb-4">Where Your Support Goes</h2>
              <p className="text-gray-600">
                Every contribution directly supports our community programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="p-6 bg-[#F8F9FA] border-none">
                    <div className="w-12 h-12 bg-[#2C8F66]/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#2C8F66]" />
                    </div>
                    <h4 className="text-[#244C75] mb-2">{area.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Trust Badge */}
          <Card className="p-8 bg-[#E8F5F1] border-2 border-[#2C8F66]/20 max-w-3xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Shield className="w-10 h-10 text-[#2C8F66]" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-[#244C75] mb-2">Transparent & Accountable</h4>
                <p className="text-gray-700 leading-relaxed">
                  WestConnect is committed to transparency. We provide regular updates on how donations are used and the impact they create in our community.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#244C75] mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            We're happy to discuss how you can support WestConnect or answer any questions about our programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/353861570550" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
            >
              WhatsApp Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#244C75] border-2 border-[#244C75] rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Form
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
