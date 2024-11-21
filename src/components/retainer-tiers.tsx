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
  tooltipContent: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

const RetainerTiers: React.FC = () => {
  const features: RetainerFeature[] = [
    {
      name: "Monthly Support Hours",
      description: "Dedicated support and development hours per month",
      tooltipContent: `• Additional hours will be available past the monthly 10 hours at $50 an hour.
      - Flexible scheduling for optimal support coverage`,
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
    // {
    //   name: "Custom Development Projects",
    //   description: "Dedicated time for new development projects",
    //   tooltipContent: `• Custom feature development
    //   - New system implementations
    //   - Third-party integrations
    //   - System expansion projects
    //   - Technology upgrades`,
    //   basic: false,
    //   standard: false,
    //   premium: true,
    // },
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
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl">Monthly Retainer</CardTitle>
        </CardHeader>
        <CardContent className="p-2 sm:p-6">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="grid grid-cols-4 gap-4 min-w-[800px]">
                {/* Features Column */}
                <div className="space-y-4 mt-6">
                  <div className="h-24"></div>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 pr-4 min-h-[28px]">
                      <span className="font-medium text-sm sm:text-base whitespace-nowrap">{feature.name}</span>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div className="inline-flex flex-shrink-0 cursor-help">
                            <HelpCircle size={16} className="text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="max-w-xs">
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

                {/* Basic Tier */}
              {/*  <div className="space-y-4">
                  <div className="text-center p-1 bg-gray-50 rounded-lg h-26 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold">Basic</h3>
                    <p className="text-xl sm:text-2xl font-bold mt-2">$500</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">per month</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">10+ Hours</p>
                  </div>
                  {features.map((feature, index) => (
                    <div key={index} className="flex justify-center min-h-[28px] items-center">
                      {renderCheck(feature.basic)}
                    </div>
                  ))}
                </div> */}

                {/* Standard Tier */}
              {/* <div className="space-y-4">
                  <div className="text-center p-1 bg-blue-50 rounded-lg border-2 border-blue-200 h-26 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-600">Standard</h3>
                    <p className="text-xl sm:text-2xl font-bold mt-2">$750</p>
                    <p className="text-xs sm:text-sm text-blue-600 mt-1">per month</p>
                    <p className="text-xs sm:text-sm font-medium text-blue-600">20+ Hours</p>
                  </div>
                  {features.map((feature, index) => (
                    <div key={index} className="flex justify-center min-h-[28px] items-center">
                      {renderCheck(feature.standard)}
                    </div>
                  ))}
                </div> */} 

                {/* Premium Tier */}
                <div className="space-y-4">
                  <div className="text-center p-1 bg-purple-50 rounded-lg border-2 border-purple-200 h-26 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-600">Advanced</h3>
                    <p className="text-xl sm:text-2xl font-bold mt-2">$1,000</p>
                    <p className="text-xs sm:text-sm text-purple-600 mt-1">per month</p>
                    <p className="text-xs sm:text-sm font-medium text-purple-600">10 Hours</p>
                  </div>
                  {features.map((feature, index) => (
                    <div key={index} className="flex justify-center min-h-[28px] items-center">
                      {renderCheck(feature.premium)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2">Additional Notes:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">Monthly retainer includes feature enhancements and smaller feature expansion/development</li>
              <li className="text-sm">Larger development/feature expansion will be structured through future software development contracts</li>
              <li className="text-sm">Additional hours available at standard hourly rate</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default RetainerTiers;