import { Card, CardContent } from '@/components/ui/card';
import { Award, Code2, Briefcase, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '15+', color: 'from-blue-500 via-cyan-500 to-teal-500', bgColor: 'bg-blue-100 dark:bg-blue-950', glowClass: 'glow-blue' },
    { icon: Award, label: 'Certifications', value: '8', color: 'from-purple-500 via-pink-500 to-rose-500', bgColor: 'bg-purple-100 dark:bg-purple-950', glowClass: 'glow-purple' },
    { icon: Briefcase, label: 'Months Experience', value: '6', color: 'from-green-500 via-emerald-500 to-teal-500', bgColor: 'bg-green-100 dark:bg-green-950', glowClass: 'glow-green' },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            About Me
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto text-xl leading-relaxed">
            I'm a recent computer science graduate with a passion for building <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">web applications</span>. 
            I love learning new technologies and creating solutions that <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">make a difference</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 border-4 border-transparent hover:border-current overflow-hidden ${stat.bgColor} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} p-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl ${stat.glowClass}`}>
                    <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                      <stat.icon className="h-10 w-10 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  <h3 className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg">{stat.label}</p>
                  <Sparkles className="absolute top-2 right-2 h-6 w-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-4 border-purple-500 shadow-2xl bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-950/30 dark:to-pink-950/30 hover:scale-105 transition-all duration-500 glow-purple">
            <CardContent className="p-8">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                As a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">recent graduate</span>, I bring fresh perspectives and up-to-date knowledge of modern web development practices. 
                My journey in tech started with a curiosity about how websites work, and it has evolved into a passion for 
                creating <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">seamless user experiences</span>. I specialize in <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">React, TypeScript, and Node.js</span>, and I'm always eager to 
                learn new frameworks and tools. During my studies and internships, I've built responsive web applications, 
                REST APIs, and worked with various databases. I believe in writing <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">clean, maintainable code</span> and following 
                best practices to deliver high-quality solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
