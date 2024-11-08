import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, HelpCircle } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  basic: boolean;
  standard: boolean;
  advanced: boolean;
}

const ServiceTiers: React.FC = () => {
  const features: Feature[] = [
    {
      name: "User Authentication System",
      description: "OAuth 2.0 with role-based access control",
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "GraphQL Apollo Server Integration",
      description: "Unified API gateway for data sources",
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "Live Data Dashboard",
      description: "Real-time monitoring of Foreman & HiveOS metrics",
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "QuickBooks Integration",
      description: "Financial data synchronization and reporting",
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "Financial Reports",
      description: "Financial reporting and data exports",
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "Support Ticket System",
      description: "Client support ticket submission and tracking",
      basic: false,
      standard: true,
      advanced: true,
    },
    {
      name: "Live Chat Support",
      description: "Real-time chat with support staff or AI bot",
      basic: false,
      standard: true,
      advanced: true,
    },
    {
      name: "Message Center",
      description: "Centralized communication hub for clients",
      basic: false,
      standard: true,
      advanced: true,
    },
    {
      name: "Historical Data Analytics",
      description: "Trend analysis with custom time ranges",
      basic: false,
      standard: false,
      advanced: true,
    },
    {
      name: "Advanced Visualization",
      description: "Interactive charts and graphs for historical data",
      basic: false,
      standard: false,
      advanced: true,
    },
    {
      name: "Custom Report Generation",
      description: "Export and schedule custom performance reports",
      basic: false,
      standard: false,
      advanced: true,
    },
  ];

  const renderCheck = (included: boolean): JSX.Element => {
    return included ? (
      <Check className="text-green-500" size={20} />
    ) : (
      <X className="text-gray-300" size={20} />
    );
  };

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle>Terra Hosting Client Portal - Service Tiers</CardTitle>
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
                  title={feature.description} // This will show a native browser tooltip
                >
                  <HelpCircle size={16} className="text-gray-400 cursor-help" />
                </div>
              </div>
            ))}
          </div>

          {/* Basic Tier */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-2xl font-bold mt-2">$10,000</p>
              <p className="text-sm text-gray-600 mt-1">Essential Features</p>
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
              <p className="text-2xl font-bold mt-2">$12,000</p>
              <p className="text-sm text-blue-600 mt-1">Enhanced Support</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                {renderCheck(feature.standard)}
              </div>
            ))}
          </div>

          {/* Advanced Tier */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-600">Advanced</h3>
              <p className="text-2xl font-bold mt-2">$15,000</p>
              <p className="text-sm text-purple-600 mt-1">Analytics Suite</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                {renderCheck(feature.advanced)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">Additional Notes:</h4>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Basic tier includes full financial integration and reporting
              capabilities
            </li>
            <li>
              Standard tier adds comprehensive support features with ticketing
              and live chat
            </li>
            <li>
              Advanced tier includes historical data storage with 12 months
              retention
            </li>
            <li>
              All tiers include core infrastructure setup, monitoring, and
              documentation
            </li>
            <li>
              Historical analytics in Advanced tier covers all integrated data
              sources
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTiers;
