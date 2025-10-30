import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dec 2024',
      credentialId: 'AWS-12345',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      glowClass: 'glow-orange',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'Nov 2024',
      credentialId: 'META-67890',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      glowClass: 'glow-blue',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'Oct 2024',
      credentialId: 'MDB-54321',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      glowClass: 'glow-green',
    },
    {
      title: 'TypeScript Advanced Concepts',
      issuer: 'Udemy',
      date: 'Sep 2024',
      credentialId: 'UC-ABCDEFGH',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      glowClass: 'glow-blue',
    },
    {
      title: 'Docker & Kubernetes',
      issuer: 'Linux Foundation',
      date: 'Aug 2024',
      credentialId: 'LF-98765',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      glowClass: 'glow-blue',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: 'Jul 2024',
      credentialId: 'COURSERA-123456',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      glowClass: 'glow-purple',
    },
    {
      title: 'GraphQL Fundamentals',
      issuer: 'Apollo',
      date: 'Jun 2024',
      credentialId: 'APOLLO-11223',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      glowClass: 'glow-pink',
    },
    {
      title: 'Git & GitHub Mastery',
      issuer: 'GitHub Learning Lab',
      date: 'May 2024',
      credentialId: 'GH-44556',
      gradient: 'from-gray-700 via-gray-800 to-gray-900',
      glowClass: 'glow-blue',
    },
  ];

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Certifications
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-16 text-xl font-medium">
            Professional certifications and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">continuous learning achievements</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 border-4 border-transparent hover:border-current overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-3 bg-gradient-to-r ${cert.gradient}`}></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${cert.gradient} p-1 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl ${cert.glowClass}`}>
                    <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                      <Award className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-600 fill-yellow-600" />
                    <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">Verified</span>
                  </div>
                  <CardTitle className={`text-xl font-bold text-center group-hover:bg-gradient-to-r ${cert.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-center font-semibold text-base">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Badge variant="outline" className={`w-full justify-center text-sm font-bold py-2 border-3 bg-gradient-to-r ${cert.gradient} text-white`}>
                      {cert.date}
                    </Badge>
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">
                      ID: {cert.credentialId}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full border-3 hover:bg-gradient-to-r ${cert.gradient} hover:text-white hover:border-transparent font-bold transform hover:scale-105 transition-all duration-300`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Credential
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
