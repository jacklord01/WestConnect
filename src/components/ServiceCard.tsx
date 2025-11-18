import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export function ServiceCard({ icon: Icon, title, description, items }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#2C8F66]/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#2C8F66]" />
        </div>
        <div className="flex-1">
          <h3 className="text-[#244C75] mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#2C8F66] mt-1">•</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
