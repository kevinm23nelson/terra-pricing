import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, X, HelpCircle } from 'lucide-react';

interface RetainerFeature {
  name: string;
  description: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const RetainerTiers: React.FC = () => {
  const features: RetainerFeature[] = [
    {
      name: "Monthly Support Hours",
      description: "Dedicated support and development hours per month",
      basic: true, // 10+ hours
      standard: true, // 20+ hours
      premium: true, // 30+ hours
    },
    {
      name: "Security Updates & Patches",
      description: "Regular security updates and dependency maintenance",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Bug Fixes & Maintenance",
      description: "Resolution of bugs and general maintenance tasks",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Performance Monitoring",
      description: "Regular monitoring and optimization of system performance",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Monthly Progress Reports",
      description: "Detailed reports on work completed and system health",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Priority Response Time",
      description: "24-hour response time for critical issues",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Weekend Support",
      description: "Support availability during weekends for urgent issues",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Feature Enhancements",
      description: "Minor improvements and feature enhancements",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "New Feature Development",
      description: "Development of new major features and integrations",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "System Architecture Reviews",
      description: "Regular reviews and optimization of system architecture",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "Custom Development Projects",
      description: "Dedicated time for new development projects",
      basic: false,
      standard: false,
      premium: true,
    }
  ];

  const renderCheck = (included: boolean): JSX.Element => {
    return included ? 
      <Check className="text-green-500" size={20} /> : 
      <X className="text-gray-300" size={20} />;
  };

  return (
    <Card className="w-full max-w-6xl mt-8">
      <CardHeader>
        <CardTitle>Monthly Retainer Options</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          {/* Features Column */}
          <div className="space-y-4">
            <div className="h-20"></div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="font-medium">{feature.name}</span>
                <div 
                  className="inline-block" 
                  aria-label={feature.description}
                  title={feature.description}
                >
                  <HelpCircle 
                    size={16} 
                    className="text-gray-400 cursor-help"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Basic Tier */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-2xl font-bold mt-2">$500</p>
              <p className="text-sm text-gray-600 mt-1">per month</p>
              <p className="text-sm font-medium text-gray-600 mt-1">10+ Hours</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                {renderCheck(feature.basic)}
              </div>
            ))}
          </div>

          {/* Standard Tier */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-600">Standard</h3>
              <p className="text-2xl font-bold mt-2">$750</p>
              <p className="text-sm text-blue-600 mt-1">per month</p>
              <p className="text-sm font-medium text-blue-600 mt-1">20+ Hours</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                {renderCheck(feature.standard)}
              </div>
            ))}
          </div>

          {/* Premium Tier */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-600">Premium</h3>
              <p className="text-2xl font-bold mt-2">$1,000</p>
              <p className="text-sm text-purple-600 mt-1">per month</p>
              <p className="text-sm font-medium text-purple-600 mt-1">30+ Hours</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                {renderCheck(feature.premium)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Additional Notes:</h4>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>All tiers include monthly detailed reports of work completed</li>
            <li>Unused hours do not roll over to the next month</li>
            <li>Additional hours available at standard hourly rate</li>
            <li>Premium tier includes priority handling for all requests</li>
            <li>24/7 emergency support available for Standard and Premium tiers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RetainerTiers;