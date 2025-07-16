import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, MessageSquare, BarChart3, Building2, MapPin, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Tracking",
      description: "GPS check-ins, offline sync, and real-time notifications keep everyone connected."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Smart Feedback System",
      description: "Automated surveys, multi-media feedback, and anonymous reporting options."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Instant Analytics",
      description: "Real-time dashboards, predictive insights, and custom reports for all stakeholders."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Industry Portal",
      description: "Dedicated dashboards for companies managing multiple students and supervisors."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location Tracking",
      description: "GPS check-ins, offline sync, and real-time notifications keep everyone connected."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Seamless Integration",
      description: "Connect with existing student systems and automate administrative workflows."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need in one platform
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

