import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const ProjectDescription = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Project Does
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industrolink revolutionizes how educational institutions manage industrial attachments, 
            creating seamless connections between students, supervisors, and industry partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Bridging Education and Industry
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our comprehensive platform addresses the critical gap in attachment management by providing 
              real-time tracking, automated feedback collection, and powerful analytics that benefit all stakeholders.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Streamlined Placement Process</h4>
                  <p className="text-gray-600">Automated matching of students with suitable industry partners based on skills and preferences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Stakeholder Dashboard</h4>
                  <p className="text-gray-600">Dedicated interfaces for students, supervisors, institutions, and industry partners.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="pb-3">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Monitor student progress and location with GPS-enabled check-ins and automated reporting.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="pb-3">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Smart Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Generate insights from attachment data to improve program effectiveness and student outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;

