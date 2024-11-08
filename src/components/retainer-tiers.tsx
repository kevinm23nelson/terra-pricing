import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RetainerFeature {
  name: string;
  description: string;
  tooltipContent: string; // Detailed explanation for tooltip
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const RetainerTiers: React.FC = () => {
  const features: RetainerFeature[] = [
    {
      name: "Monthly Support Hours",
      description: "Dedicated support and development hours per month",
      tooltipContent: `• Basic: 10+ hours per month
      - Standard: 20+ hours per month
      - Premium: 30+ hours per month
      - Flexible scheduling for optimal support coverage
      - Unused hours do not roll over`,
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Security Updates & Patches",
      description: "Regular security updates and dependency maintenance",
      tooltipContent: `• Regular security audits
      - Dependency updates and maintenance
      - Security patch implementation
      - Vulnerability assessments
      - Security best practices implementation`,
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Bug Fixes & Maintenance",
      description: "Resolution of bugs and general maintenance tasks",
      tooltipContent: `• Quick response to critical bugs
      - Regular system maintenance
      - Performance optimization
      - Code quality maintenance
      - Documentation updates`,
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Performance Monitoring",
      description: "Regular monitoring and optimization of system performance",
      tooltipContent: `• 24/7 system monitoring
      - Performance metrics tracking
      - Resource usage optimization
      - Load time optimization
      - Server health monitoring`,
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Monthly Progress Reports",
      description: "Detailed reports on work completed and system health",
      tooltipContent: `• Comprehensive monthly reports
      - Work completed summaries
      - Performance statistics
      - Resource utilization metrics
      - Recommendations for improvements`,
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Priority Response Time",
      description: "24-hour response time for critical issues",
      tooltipContent: `• Guaranteed 24-hour response time
      - Priority ticket handling
      - Direct access to support team
      - Issue escalation system
      - Emergency response protocol`,
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Weekend Support",
      description: "Support availability during weekends for urgent issues",
      tooltipContent: `• Weekend emergency support
      - Extended support hours
      - Critical issue resolution
      - After-hours monitoring
      - Holiday coverage available`,
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Feature Enhancements",
      description: "Minor improvements and feature enhancements",
      tooltipContent: `• UI/UX improvements
      - Performance enhancements
      - Feature optimization
      - User feedback implementation
      - Regular system updates`,
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "New Feature Development",
      description: "Development of new major features and integrations",
      tooltipContent: `• Custom feature development
      - New integration implementation
      - Major system enhancements
      - Feature planning and design
      - User testing and deployment`,
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "System Architecture Reviews",
      description: "Regular reviews and optimization of system architecture",
      tooltipContent: `• Quarterly architecture reviews
      - Scalability assessment
      - Infrastructure optimization
      - Performance tuning
      - Technology stack updates`,
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "Custom Development Projects",
      description: "Dedicated time for new development projects",
      tooltipContent: `• Custom feature development
      - New system implementations
      - Third-party integrations
      - System expansion projects
      - Technology upgrades`,
      basic: false,
      standard: false,
      premium: true,
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
    <TooltipProvider>
      <Card className="w-full max-w-6xl mt-8">
        <CardHeader>
          <CardTitle>Monthly Retainer Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {/* Features Column */}
            <div className="space-y-4">
              {/* Adjust this height to match the pricing card headers */}
              <div className="h-[132px]"></div>{" "}
              {/* Changed from h-20 to h-[132px] */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 min-h-[28px]"
                >
                  <span className="font-medium">{feature.name}</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="inline-flex cursor-help">
                        <HelpCircle size={16} className="text-gray-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <div className="space-y-2">
                        <p className="font-medium">{feature.description}</p>
                        <div className="text-sm text-gray-600 whitespace-pre-line">
                          {feature.tooltipContent}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>

            {/* Basic Tier */}
            <div className="space-y-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold">Basic</h3>
                <p className="text-2xl font-bold mt-2">$500</p>
                <p className="text-sm text-gray-600 mt-1">per month</p>
                <p className="text-sm font-medium text-gray-600 mt-1">
                  10+ Hours
                </p>
              </div>
              {features.map((feature, index) => (
                <div key={index} className="flex justify-center min-h-[28px]">
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
                <p className="text-sm font-medium text-blue-600 mt-1">
                  20+ Hours
                </p>
              </div>
              {features.map((feature, index) => (
                <div key={index} className="flex justify-center min-h-[28px]">
                  {" "}
                  {/* Added min-h-[28px] */}
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
                <p className="text-sm font-medium text-purple-600 mt-1">
                  30+ Hours
                </p>
              </div>
              {features.map((feature, index) => (
                <div key={index} className="flex justify-center min-h-[28px]">
                  {" "}
                  {/* Added min-h-[28px] */}
                  {renderCheck(feature.premium)}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2">Additional Notes:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                All tiers include monthly detailed reports of work completed
              </li>
              <li>Unused hours do not roll over to the next month</li>
              <li>Additional hours available at standard hourly rate</li>
              <li>Premium tier includes priority handling for all requests</li>
              <li>
                24/7 emergency support available for Standard and Premium tiers
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default RetainerTiers;
