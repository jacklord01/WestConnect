import { Shield, Lock, Eye, UserCheck, FileText, Clock, Scale, Mail, Phone, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

interface PrivacyPolicyProps {
  onBookingClick: () => void;
}

export function PrivacyPolicy({ onBookingClick }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#244C75] to-[#2C8F66] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-white/90" />
            <span className="text-white/90 text-sm">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-white mb-4">Privacy & Data Protection Statement</h1>
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
            <Card className="p-6 bg-[#E8F5F1] border-l-4 border-[#2C8F66]">
              <p className="text-gray-800 leading-relaxed mb-3">
                WestConnect Migrant Support ("WestConnect", "we", "us") is committed to protecting your privacy and handling your personal information safely, respectfully, and in compliance with the General Data Protection Regulation (GDPR).
              </p>
              <p className="text-gray-800 leading-relaxed">
                <strong>Our service is built on trust.</strong> We only collect the information we need to support you and we will never share it without your permission unless required by law or for safeguarding reasons.
              </p>
            </Card>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">1</span>
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              WestConnect Migrant Support is a community-based non-profit organisation providing non-legal guidance and practical support for migrants, asylum seekers, undocumented people, workers, students, families, and children in the West of Ireland.
            </p>
            
            <Card className="p-6 bg-gradient-to-br from-[#E8F5F1] to-[#F0F9FF] border-2 border-[#2C8F66]">
              <h4 className="text-[#244C75] mb-4">Contact Details (Data Controller)</h4>
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
                <p className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-[#2C8F66] mt-0.5" />
                  <span><strong>Address:</strong> [insert address]</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">2</span>
              What Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you use our services or contact us, you may provide:
            </p>

            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="p-5 bg-white border-l-4 border-[#2C8F66]">
                <h4 className="text-[#244C75] mb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#2C8F66]" />
                  Contact Information
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm ml-7">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2C8F66] rounded-full"></span>
                    <span>Name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2C8F66] rounded-full"></span>
                    <span>Phone/WhatsApp number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2C8F66] rounded-full"></span>
                    <span>Email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2C8F66] rounded-full"></span>
                    <span>Preferred language</span>
                  </li>
                </ul>
              </Card>

              {/* Background Information */}
              <Card className="p-5 bg-white border-l-4 border-[#244C75]">
                <h4 className="text-[#244C75] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#244C75]" />
                  Background Information (Optional)
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm ml-7">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#244C75] rounded-full"></span>
                    <span>Immigration or residency status</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#244C75] rounded-full"></span>
                    <span>Family situation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#244C75] rounded-full"></span>
                    <span>Housing or work circumstances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#244C75] rounded-full"></span>
                    <span>Education or school needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#244C75] rounded-full"></span>
                    <span>Health or wellbeing information you choose to share</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#244C75] rounded-full"></span>
                    <span>Support needs for children or young people</span>
                  </li>
                </ul>
              </Card>

              {/* Technical Information */}
              <Card className="p-5 bg-gray-50 border-l-4 border-gray-400">
                <h4 className="text-[#244C75] mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-gray-500" />
                  Technical Information (website)
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm ml-7">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    <span>Basic usage data (pages visited, browser type)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    <span>Cookies (if used)</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-4 bg-[#FFF9E6] border-l-4 border-[#F3BE4B] mt-6">
              <p className="text-gray-800 text-sm">
                <strong>You choose how much information to give us.</strong>
              </p>
            </Card>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">3</span>
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your data to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
              <li>Respond to your request for support</li>
              <li>Understand your situation so we can help you properly</li>
              <li>Provide signposting to services, community supports, or professional organisations</li>
              <li>Follow up on your request</li>
              <li>Improve our work and plan services</li>
            </ul>
            <Card className="p-4 bg-blue-50 border-l-4 border-[#244C75]">
              <p className="text-gray-800">
                <strong>We never sell your data or use it for marketing.</strong>
              </p>
            </Card>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">4</span>
              Legal Basis Under GDPR
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your data under:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-800 mb-1"><strong>Consent</strong></p>
                <p className="text-gray-600 text-sm">You choose to contact us</p>
              </Card>
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-800 mb-1"><strong>Legitimate interest</strong></p>
                <p className="text-gray-600 text-sm">Providing community support</p>
              </Card>
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-800 mb-1"><strong>Vital interests</strong></p>
                <p className="text-gray-600 text-sm">If someone is at risk of serious harm</p>
              </Card>
              <Card className="p-4 bg-[#E8F5F1]">
                <p className="text-gray-800 mb-1"><strong>Legal obligation</strong></p>
                <p className="text-gray-600 text-sm">If required by law</p>
              </Card>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">5</span>
              Sharing Your Information
            </h2>
            <Card className="p-5 bg-blue-50 border-l-4 border-[#244C75] mb-6">
              <p className="text-gray-800">
                <strong>We do not share your information without your permission.</strong>
              </p>
            </Card>

            <p className="text-gray-700 leading-relaxed mb-4">
              With your consent, we may link you with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
              <li>NGOs</li>
              <li>Community groups</li>
              <li>Sports organisations</li>
              <li>Legal services</li>
              <li>Health or education services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We only share what is necessary.
            </p>

            <Card className="p-5 bg-red-50 border-l-4 border-red-500">
              <p className="text-gray-800 mb-3">
                <strong>In rare cases, we may share information without consent if:</strong>
              </p>
              <ul className="space-y-2 text-gray-700 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>There is an immediate risk to your safety or someone else's</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>We are legally compelled to do so</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">6</span>
              How Long We Keep Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your data only as long as needed to support you, after which we securely delete it.
            </p>
            <Card className="p-4 bg-[#FFF9E6] border-l-4 border-[#F3BE4B]">
              <p className="text-gray-800">
                <strong>You may ask us to delete your data at any time.</strong>
              </p>
            </Card>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">7</span>
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-800 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#2C8F66]" />
                  <strong>Access your data</strong>
                </p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2C8F66]" />
                  <strong>Correct inaccurate information</strong>
                </p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-800 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#2C8F66]" />
                  <strong>Delete your data</strong>
                </p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-800 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#2C8F66]" />
                  <strong>Withdraw consent</strong>
                </p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2C8F66]" />
                  <strong>Restrict processing</strong>
                </p>
              </Card>
              <Card className="p-4 bg-white border border-gray-200">
                <p className="text-gray-800 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#2C8F66]" />
                  <strong>Object to processing</strong>
                </p>
              </Card>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Contact us to exercise any right.
            </p>

            <Card className="p-5 bg-[#E8F5F1] border-2 border-[#2C8F66]">
              <p className="text-gray-800 mb-3">
                You may also contact the Data Protection Commission:
              </p>
              <a 
                href="https://www.dataprotection.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2C8F66] hover:underline inline-flex items-center gap-1"
              >
                www.dataprotection.ie
                <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-[#244C75] mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2C8F66] text-white rounded-full text-sm">8</span>
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this policy when necessary. The updated version will always be posted on our website.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
