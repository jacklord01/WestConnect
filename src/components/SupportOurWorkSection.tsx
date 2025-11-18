import { Heart, Clock, Handshake, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function SupportOurWorkSection() {
  return (
    <section id="support-our-work" className="py-16 lg:py-24 bg-gradient-to-br from-[#F7F9FB] to-[#E8F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#244C75] mb-4">Support Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us continue providing free, community-based support to migrants and families in the West of Ireland.
          </p>
        </div>

        {/* Main Content Container */}
        <Card className="p-8 lg:p-12 bg-white rounded-3xl shadow-xl border-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Column - Text & Ways to Support */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  WestConnect is a small, community-led initiative. We rely on people who are willing to give time, skills or resources so that we can keep helping those who need it most.
                </p>
              </div>

              {/* Ways to Support Cards */}
              <div className="space-y-5">
                
                {/* Donate (future) */}
                <Card className="p-5 bg-gradient-to-br from-[#FFF9E6] to-[#FFF3CC] border-l-4 border-[#F3BE4B]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F3BE4B] rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#244C75] mb-2">Donate (future)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        In future, we will add secure options to donate and help cover basic costs for support, transport, translation and outreach.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Volunteer your time */}
                <Card className="p-5 bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE5] border-l-4 border-[#2C8F66]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#2C8F66] rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#244C75] mb-2">Volunteer your time</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        You can support by offering translation, mentoring, youth coaching or general volunteering.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Partner with us */}
                <Card className="p-5 bg-gradient-to-br from-[#E8F0FF] to-[#D1E0FF] border-l-4 border-[#244C75]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#244C75] rounded-full flex items-center justify-center">
                      <Handshake className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#244C75] mb-2">Partner with us</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Organisations, clubs and community groups can link with us to support migrants and families locally.
                      </p>
                    </div>
                  </div>
                </Card>

              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="https://wa.me/353861570550?text=Hi%2C%20I%27d%20like%20to%20support%20WestConnect" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-[#2C8F66] hover:bg-[#247558] text-white py-6 rounded-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    I'd Like to Support WestConnect
                  </Button>
                </a>
                <p className="text-xs text-gray-500 text-center mt-3">
                  This will open WhatsApp. You can also email us to discuss how to help.
                </p>
              </div>
            </div>

            {/* Right Column - Illustration/Icon Group */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Abstract community illustration using CSS */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
                    {/* Central heart */}
                    <g transform="translate(150, 140)">
                      <path 
                        d="M0,-20 C-5,-30 -15,-30 -20,-20 C-25,-10 -25,0 -15,10 L0,25 L15,10 C25,0 25,-10 20,-20 C15,-30 5,-30 0,-20 Z" 
                        fill="#2C8F66" 
                        opacity="0.9"
                      />
                    </g>
                    
                    {/* People circles around the heart - community */}
                    <circle cx="150" cy="60" r="18" fill="#244C75" opacity="0.8" />
                    <circle cx="240" cy="110" r="16" fill="#F3BE4B" opacity="0.8" />
                    <circle cx="230" cy="190" r="17" fill="#2C8F66" opacity="0.8" />
                    <circle cx="150" cy="240" r="15" fill="#244C75" opacity="0.8" />
                    <circle cx="70" cy="190" r="16" fill="#F3BE4B" opacity="0.8" />
                    <circle cx="60" cy="110" r="17" fill="#2C8F66" opacity="0.8" />
                    
                    {/* Connecting lines - community bonds */}
                    <line x1="150" y1="60" x2="150" y2="115" stroke="#E4E6EA" strokeWidth="3" opacity="0.6" />
                    <line x1="240" y1="110" x2="170" y2="130" stroke="#E4E6EA" strokeWidth="3" opacity="0.6" />
                    <line x1="230" y1="190" x2="170" y2="155" stroke="#E4E6EA" strokeWidth="3" opacity="0.6" />
                    <line x1="150" y1="240" x2="150" y2="165" stroke="#E4E6EA" strokeWidth="3" opacity="0.6" />
                    <line x1="70" y1="190" x2="130" y2="155" stroke="#E4E6EA" strokeWidth="3" opacity="0.6" />
                    <line x1="60" y1="110" x2="130" y2="130" stroke="#E4E6EA" strokeWidth="3" opacity="0.6" />
                    
                    {/* Outer glow circles */}
                    <circle cx="150" cy="150" r="120" stroke="#2C8F66" strokeWidth="2" fill="none" opacity="0.15" strokeDasharray="10,5" />
                    <circle cx="150" cy="150" r="140" stroke="#244C75" strokeWidth="1.5" fill="none" opacity="0.1" strokeDasharray="8,8" />
                  </svg>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-[#2C8F66]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-16 left-10 w-20 h-20 bg-[#F3BE4B]/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#244C75]/5 rounded-full blur-2xl"></div>
              </div>
            </div>

          </div>
        </Card>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every contribution — whether time, skills or partnership — helps us reach more families and create stronger, more welcoming communities.
          </p>
        </div>
      </div>
    </section>
  );
}
