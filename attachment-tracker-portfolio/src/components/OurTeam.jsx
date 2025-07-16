import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, User } from 'lucide-react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Eunice Nyaboke",
      role: "Front End Developer",
      description: "Passionate about creating seamless user experiences. Specializes in React development.",
      skills: ["React", "CSS", "HTML", "JavaScript"],
      social: {
        github: "https://github.com/nyaboke-Dev1",
        linkedin: "www.linkedin.com/in/eunice-nyaboke-onkundi",
        email: "enyaboke399@gmail.com"
      }
    },
    {
      name: "Peris Bosibori",
      role: "Mobile Developer",
      description: "Design and build user-friendly, responsive mobile applications for Android and/or iOS.",
      skills: ["React", "Django", "DevOps", "Flutter"],
      social: {
        github: "https://github.com/perisoseko56",
        linkedin: "https://www.linkedin.com/in/peris-bosibori22/",
        email: "poseko56@gmail.com"
      }
    },
    {
      name: "Sephania Kipkoech",
      role: "Backend Developer",
      description: "Experienced in building scalable backend architectures and database optimization. Passionate about clean code and performance.",
      skills: ["Python", "PostgreSQL", "Django", "AWS"],
      social: {
        github: "#",
        linkedin: "#",
        email: "michael@industrolink.com"
      }
    },
    {
      name: "Abdirahman Ali",
      role: "Backend Developer",
      description: "Strategic thinker with a background in educational technology. Drives product vision and ensures user needs are met.",
      skills: ["Product Strategy", "Agile", "User Analytics", "Stakeholder Management"],
      social: {
        github: "#",
        linkedin: "#",
        email: "emily@industrolink.com"
      }
    },
    {
      name: "Evelyne Wanjiru",
      role: "Data Researcher",
      description: "Expert in data analysis and machine learning, transforming raw data into actionable insights for educational outcomes.",
      skills: ["Google Forms", "Medium", "AI", "Data Researching"],
      social: {
        instagram: "wawe_.ru",
        linkedin: "#",
        email: "waweru.evelyne@students.jkuat.ac.ke"
      }
    },
    {
      name: "Stephen Olando",
      role: "Communication Specialist",
      description: "Passionate about digital communication, focused on reaching and engaging our target audience.",
      skills: ["Medium", "SEO", "Content Creation", "Social Media"],
      social: {
        github: "#",
        linkedin: "#",
        email: "stephen.olando@gmail.com"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals behind Industrolink, dedicated to transforming 
            the future of industrial attachment management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group relative backdrop-blur-sm bg-white/70 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/80"
            >
              <CardHeader className="text-center pb-4">
                {/* Avatar placeholder with glass effect */}
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </CardTitle>
                <p className="text-blue-600 font-semibold text-sm">
                  {member.role}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
                
                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100/80 text-blue-700 text-xs rounded-full backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-2">
                  <a 
                    href={member.social.github} 
                    className="p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors backdrop-blur-sm"
                  >
                    <Github className="h-4 w-4 text-gray-600" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 rounded-full bg-blue-100/80 hover:bg-blue-200/80 transition-colors backdrop-blur-sm"
                  >
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="p-2 rounded-full bg-orange-100/80 hover:bg-orange-200/80 transition-colors backdrop-blur-sm"
                  >
                    <Mail className="h-4 w-4 text-orange-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team stats with glass effect */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/60 border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-700 font-medium">Team Members</div>
          </div>
          <div className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/60 border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/60 border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

