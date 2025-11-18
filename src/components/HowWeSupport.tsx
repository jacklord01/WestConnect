import { MessageCircle, FileText, Home, Users } from "lucide-react";
import { Card } from "./ui/card";

export function HowWeSupport() {
  return (
    <section id="how-we-support" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#244C75] mb-4">How We Support You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            WestConnect offers practical, non-legal support to help you feel safer, more informed and more connected in Ireland.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: One-to-one support */}
          <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C8F66] to-[#1D6F50] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#244C75] mb-3">One-to-one support & listening</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confidential conversations about your situation, by WhatsApp or in person.
              </p>
            </div>
          </Card>

          {/* Card 2: Immigration guidance */}
          <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#244C75] to-[#1A3756] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#244C75] mb-3">Immigration & status guidance (non-legal)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Help understanding letters, gathering background information and preparing to speak with a solicitor or NGO.
              </p>
            </div>
          </Card>

          {/* Card 3: Housing, work & daily life */}
          <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F3BE4B] to-[#E5A829] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#244C75] mb-3">Housing, work & daily life support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support with housing challenges, work issues, accessing services and navigating daily life.
              </p>
            </div>
          </Card>

          {/* Card 4: Family & sports integration */}
          <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C8F66] to-[#1D6F50] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#244C75] mb-3">Family, children & sports integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connecting children and families to schools, clubs, youth groups and local sports.
              </p>
            </div>
          </Card>

        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All our support is <strong className="text-[#244C75]">free, confidential and non-legal</strong>. 
            We work alongside you to help you access the right services and feel more connected in your community.
          </p>
        </div>
      </div>
    </section>
  );
}
