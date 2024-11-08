import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Feature {
  name: string;
  description: string;
  tooltipContent: string; // New field for detailed tooltip content
  basic: boolean;
  standard: boolean;
  advanced: boolean;
}

const ServiceTiers: React.FC = () => {
  const features: Feature[] = [
    {
      name: "User Authentication System",
      description: "OAuth 2.0 with role-based access control",
      tooltipContent: `• Secure user authentication with OAuth 2.0
- Connects with deployed database Mongodb Atlas, to map client IDs across various APIs
- Role-based access control for different user types
- Secure password management
- Session handling and token management
- User profile management`,
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "GraphQL Apollo Server",
      description: "Unified API gateway for data sources",
      tooltipContent: `• Centralized API gateway for all data sources
- API data retrieval from HiveOS, Foreman, Recurly, QuickBooks, etc.
- Real-time data synchronization
- Efficient data fetching
- Custom resolvers for complex queries
- Automated API documentation`,
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "Live Data Dashboard",
      description: "Real-time monitoring of Foreman & HiveOS metrics",
      tooltipContent: `• Real-time monitoring dashboard
- Machine status tracking
- Performance metrics
- Error reporting
- Resource utilization metrics
- Implemented frontend using Next.js, Typescript, and Tailwind CSS`,
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "QuickBooks Integration",
      description: "Financial data synchronization and reporting",
      tooltipContent: `• Automated financial data syncing
- Real-time transaction tracking
- Invoice management
- Payment processing integration
- Custom financial reports`,
      basic: true,
      standard: true,
      advanced: true,
    },
    {
      name: "Financial Reports",
      description: "Export billing data",
      tooltipContent: `• Ability to create custom billing data exports
  - Daily billing totals
  - Monthly billing totals
  `,
      basic: true,
      standard: true,
      advanced: true,
    },
    {
        name: "Support Ticket System",
        description: "User submit tickets for issues",
        tooltipContent: `• If users have a paticular issue they need assistance with
    - Requests
    - Comments
    - Concerns
    - Issues/Errors
    `,
        basic: false,
        standard: true,
        advanced: true,
      },
      {
        name: "Message Center",
        description: "Users can directly message admin",
        tooltipContent: `• If users need direct assistance they can open message
    - Can implement an AI bot to answer basic questions
    - Can implement a waiting queue during certain hours for a Terra employee to respond directly
    `,
        basic: false,
        standard: true,
        advanced: true,
      },
      {
        name: "Historical Data Analytics",
        description: "Advanced analytics on all data over time",
        tooltipContent: `• Data Storage and Retrieval Complexity 
    - Define which metrics to store (hash rates, online status, temperatures).
    - Establish intervals and timescales for storing data in MongoDB Atlas.
    - Ensure that data retrieval is optimized for trend analysis and averages over time.
    - Data retention policies (how much historical data to keep).
    - Implement Redis for caching of common fetched data to prevent under/over fetching of network requests
    `,
        basic: false,
        standard: false,
        advanced: true,
      },
      {
        name: "Advanced Visualization",
        description: "Frontend for Historical Data Visualization",
        tooltipContent: `• Data Storage and Retrieval Complexity 
    - Increase number of meaningful/analytical graphs and charts on the client portal.
    - Build out more UI components for selectable time ranges, filtering, and averages.
    `,
        basic: false,
        standard: false,
        advanced: true,
      },
      {
        name: "Custom Report Generation",
        description: "Generate reports from data stored across the numerous aggregated APIs",
        tooltipContent: `• Admin and user ability to generate meaningful reports
    - Users and admin can select ranges of their own data they wish to export.
    `,
        basic: false,
        standard: false,
        advanced: true,
      }
    // Add tooltipContent for remaining features...
  ];

  const renderCheck = (included: boolean): JSX.Element => {
    return included ? (
      <Check className="text-green-500" size={20} />
    ) : (
      <X className="text-gray-300" size={20} />
    );
  };

  return (
    <TooltipProvider>
      <Card className="w-full max-w-6xl">
        <CardHeader>
          <CardTitle>Terra Hosting Client Portal - Development Tiers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {/* Features Column */}
            <div className="space-y-4">
              <div className="h-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="font-medium">{feature.name}</span>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <div className="inline-flex cursor-help">
                        <HelpCircle size={16} className="text-gray-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <div className="space-y-2">
                        <p className="font-medium">{feature.description}</p>
                        <div className="text-sm text-gray-800 whitespace-pre-line">
                          {feature.tooltipContent}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>

            {/* Rest of the component remains the same... */}
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
                Advanced tier includes historical data storage with 12+ months
                retention (Depending on how long you want to have hosted)
              </li>
              <li>
                Historical analytics in Advanced tier covers all integrated data
                sources
              </li>
              <li>
                All tiers include core infrastructure setup, monitoring, and
                documentation
              </li>
              <li>
                All tiers include Datadog, website analytics, for tracking vistors, new users, traffic, etc.
              </li>
              <li>
                All tiers will have their infrastructure containerized into separate containers using Docker (for bug catching and maintenance) and deployed on Google Cloud Run
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default ServiceTiers;
