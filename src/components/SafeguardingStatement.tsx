import { Shield, Heart, Users, AlertTriangle, FileText, Eye, Phone, ExternalLink, UserCheck } from "lucide-react";
import { Card } from "./ui/card";

interface SafeguardingStatementProps {
  onBookingClick: () => void;
}

export function SafeguardingStatement({ onBookingClick }: SafeguardingStatementProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#244C75] to-[#2C8F66] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-white/90" />
            <span className="text-white/90 text-sm">Child & Vulnerable Persons Protection</span>
          </div>
          
          <h1 className="text-white mb-4">Safeguarding Statement</h1>
          <p className="text-lg text-white/90 mb-2">
            Child & Vulnerable Persons Safeguarding
          </p>
          <p className="text-lg text-white/90 mb-4">
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
            <Card className="p-6 bg-[#E8F5F1] border-l-4 border-[#2C8F66]">
              <p className="text-gray-800 leading-relaxed mb-3">
                WestConnect Migrant Support is committed to ensuring the safety, protection and wellbeing of all children, young people, and vulnerable persons who engage with our services.
              </p>
              <p className="text-gray-800 leading-relaxed">
                <strong>We recognise our responsibility to safeguard those who may be at risk and to act in their best interests at all times.</strong>
              </p>
            </Card>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">1</span>
              Our Commitment to Safeguarding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              WestConnect will:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#2C8F66] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Provide a safe, respectful and supportive environment</span>
                </div>
              </Card>
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#2C8F66] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Treat all children and vulnerable persons with dignity and fairness</span>
                </div>
              </Card>
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#2C8F66] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Take concerns about safety or wellbeing seriously</span>
                </div>
              </Card>
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#2C8F66] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Report child protection concerns to the appropriate authorities</span>
                </div>
              </Card>
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#2C8F66] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Work alongside families, schools, sports clubs and community groups</span>
                </div>
              </Card>
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#2C8F66] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Ensure all staff/volunteers follow safe practice guidelines</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">2</span>
              Designated Safeguarding Officer (DSO)
            </h2>
            
            <Card className="p-6 bg-[#FFF9E6] border-l-4 border-[#F3BE4B] mb-6">
              <p className="text-gray-800 leading-relaxed mb-3">
                A Safeguarding Officer will be appointed once WestConnect formally registers as an organisation.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Responsibilities include:</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-700 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span>Receiving safeguarding concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span>Reporting concerns to Tusla if necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span>Keeping confidential safeguarding records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BE4B] mt-1">•</span>
                  <span>Providing guidance to staff/volunteers</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5 bg-blue-50 border-l-4 border-[#244C75]">
              <p className="text-gray-800 text-sm">
                <strong>For now, safeguarding concerns can be directed to:</strong>
              </p>
              <p className="text-gray-700 text-sm mt-2">[Insert Interim Safeguarding Contact]</p>
            </Card>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">3</span>
              When We Must Take Action
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will take action if:
            </p>
            <div className="space-y-3 mb-6">
              <Card className="p-4 bg-white border-l-4 border-red-500">
                <p className="text-gray-800 text-sm">A child or vulnerable person discloses harm or risk</p>
              </Card>
              <Card className="p-4 bg-white border-l-4 border-red-500">
                <p className="text-gray-800 text-sm">We witness concerning behaviour</p>
              </Card>
              <Card className="p-4 bg-white border-l-4 border-red-500">
                <p className="text-gray-800 text-sm">We receive information about a risk of harm</p>
              </Card>
              <Card className="p-4 bg-white border-l-4 border-red-500">
                <p className="text-gray-800 text-sm">There is immediate danger to the person or others</p>
              </Card>
            </div>

            <Card className="p-5 bg-red-50 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 mb-2">
                    <strong>In a life-threatening emergency, call 999 or 112 immediately.</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">4</span>
              How We Handle Concerns
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When a safeguarding concern arises, we will:
            </p>
            <div className="space-y-3">
              <Card className="p-4 bg-[#E8F5F1] border-l-2 border-[#2C8F66]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#2C8F66] text-white rounded-full text-xs flex-shrink-0">1</span>
                  <span className="text-gray-800 text-sm">Listen carefully and respectfully</span>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5F1] border-l-2 border-[#2C8F66]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#2C8F66] text-white rounded-full text-xs flex-shrink-0">2</span>
                  <span className="text-gray-800 text-sm">Avoid judgment or promising secrecy</span>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5F1] border-l-2 border-[#2C8F66]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#2C8F66] text-white rounded-full text-xs flex-shrink-0">3</span>
                  <span className="text-gray-800 text-sm">Record accurate notes</span>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5F1] border-l-2 border-[#2C8F66]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#2C8F66] text-white rounded-full text-xs flex-shrink-0">4</span>
                  <span className="text-gray-800 text-sm">Assess risk</span>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5F1] border-l-2 border-[#2C8F66]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#2C8F66] text-white rounded-full text-xs flex-shrink-0">5</span>
                  <span className="text-gray-800 text-sm">Refer to Tusla Child Protection Services where required</span>
                </div>
              </Card>
              <Card className="p-4 bg-[#E8F5F1] border-l-2 border-[#2C8F66]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#2C8F66] text-white rounded-full text-xs flex-shrink-0">6</span>
                  <span className="text-gray-800 text-sm">Follow up appropriately</span>
                </div>
              </Card>
            </div>

            <Card className="p-5 bg-[#E8F5F1] border-2 border-[#2C8F66] mt-6">
              <p className="text-gray-800 mb-3">
                <strong>Tusla Child & Family Agency:</strong>
              </p>
              <a 
                href="https://www.tusla.ie/children-first" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2C8F66] hover:underline inline-flex items-center gap-1"
              >
                www.tusla.ie/children-first
                <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">5</span>
              Confidentiality
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We keep information confidential and share only:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>With consent where possible</li>
              <li>With Tusla or Gardaí when required for safety</li>
              <li>With relevant professionals where appropriate</li>
            </ul>
            <Card className="p-4 bg-blue-50 border-l-4 border-[#244C75]">
              <p className="text-gray-800">
                <strong>We never share information unnecessarily.</strong>
              </p>
            </Card>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">6</span>
              Safe Interactions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              WestConnect staff/volunteers must:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-700 text-sm">✓ Maintain professional boundaries</p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-700 text-sm">✓ Avoid meeting minors alone where possible</p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-700 text-sm">✓ Avoid taking photographs or videos without consent</p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-700 text-sm">✓ Use WhatsApp/phone contact carefully and respectfully</p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200 md:col-span-2">
                <p className="text-gray-700 text-sm text-center">✓ Prioritise safety at all times</p>
              </Card>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">7</span>
              Working With Partner Organisations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For sports, school, youth, or community integration, WestConnect will:
            </p>
            <div className="space-y-3">
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-700 text-sm">✓ Collaborate only with recognised organisations</p>
              </Card>
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-700 text-sm">✓ Ensure safeguarding policies are in place</p>
              </Card>
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-700 text-sm">✓ Follow venue-specific safeguarding rules</p>
              </Card>
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-700 text-sm">✓ Encourage parents/guardians to be involved</p>
              </Card>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">8</span>
              Review
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Safeguarding Statement will be reviewed annually or sooner if legislation or best practice guidelines change.
            </p>
            <Card className="p-5 bg-[#E8F5F1] border-l-4 border-[#2C8F66]">
              <p className="text-gray-800 text-sm">
                WestConnect is committed to continuous improvement in safeguarding practices to ensure the highest standards of care and protection for all those we support.
              </p>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}
