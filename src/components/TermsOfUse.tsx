import { Scale, AlertTriangle, FileText, Users, ExternalLink, Phone, Mail, Shield } from "lucide-react";
import { Card } from "./ui/card";

interface TermsOfUseProps {
  onBookingClick: () => void;
}

export function TermsOfUse({ onBookingClick }: TermsOfUseProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#244C75] to-[#2C8F66] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Scale className="w-5 h-5 text-white/90" />
            <span className="text-white/90 text-sm">Terms of Use & Disclaimer</span>
          </div>
          
          <h1 className="text-white mb-4">Terms of Use & Disclaimer</h1>
          <p className="text-lg text-white/90 mb-2">
            WestConnect Migrant Support
          </p>
          <p className="text-sm text-white/75 mt-4">
            Last updated: November 15, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <Card className="p-6 bg-[#FFF9E6] border-l-4 border-[#F3BE4B]">
              <p className="text-gray-800 leading-relaxed">
                <strong>Please read these terms carefully before using our website or requesting support.</strong>
              </p>
            </Card>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">1</span>
              About WestConnect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              WestConnect Migrant Support is a community-based non-profit offering non-legal guidance, community connection, family integration support and signposting to trusted services.
            </p>
            <Card className="p-5 bg-red-50 border-l-4 border-red-500">
              <p className="text-gray-800">
                <strong>We are not a law firm, do not give legal advice, and do not represent people legally.</strong>
              </p>
            </Card>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">2</span>
              Non-Legal Support
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All information we provide is:
            </p>
            <Card className="p-6 bg-[#FFF9E6] border-l-4 border-[#F3BE4B]">
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span><strong>Non-legal</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span><strong>Best-effort</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span><strong>Based on community knowledge and publicly available sources</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span><strong>Not a replacement for legal or professional advice</strong></span>
                </li>
              </ul>
            </Card>
            <p className="text-gray-700 leading-relaxed mt-4">
              For immigration, asylum, or residency matters, we may recommend contacting a qualified solicitor or NGO.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">3</span>
              Website Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We make every effort to keep information accurate and up to date; however:
            </p>
            
            <Card className="p-5 bg-gray-50 border-l-4 border-gray-400">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Immigration rules and public services change</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Information may not always be complete or current</span>
                </li>
              </ul>
            </Card>
            <p className="text-gray-700 leading-relaxed mt-4">
              Use official Government websites to verify critical information.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">4</span>
              No Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              WestConnect is not responsible for:
            </p>
            <Card className="p-6 bg-blue-50 border-l-4 border-[#244C75]">
              <ul className="space-y-3 text-gray-800 text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#244C75] mt-0.5 flex-shrink-0" />
                  <span>Decisions made by IPO, IPAS, INIS, DCEDIY or other authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#244C75] mt-0.5 flex-shrink-0" />
                  <span>Outcomes of visa/immigration applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#244C75] mt-0.5 flex-shrink-0" />
                  <span>Actions taken based on information on this website</span>
                </li>
              </ul>
            </Card>
            <p className="text-gray-700 leading-relaxed mt-4 italic">
              You are responsible for your own decisions.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">5</span>
              Referrals
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may recommend NGOs, community services, or legal professionals. We do not control their services and cannot accept responsibility for their actions.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">6</span>
              Safeguarding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If we believe someone is at immediate risk of harm, we may share information with appropriate agencies.
            </p>
            <Card className="p-5 bg-red-50 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-800">
                    <strong>For emergencies, call 999 or 112.</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">7</span>
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update these terms at any time. Please review them periodically.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">8</span>
              Contact
            </h2>
            
            <Card className="p-6 bg-gradient-to-br from-[#E8F5F1] to-[#F0F9FF] border-2 border-[#2C8F66]">
              <h4 className="text-[#244C75] mb-4">WestConnect Migrant Support</h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#2C8F66]" />
                  <strong>Email:</strong> <span className="text-gray-600">[insert email]</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#2C8F66]" />
                  <strong>WhatsApp / Phone:</strong> 
                  <a href="https://wa.me/353861570550" className="text-[#2C8F66] hover:underline">
                    +353 86 157 0550
                  </a>
                </p>
              </div>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}
