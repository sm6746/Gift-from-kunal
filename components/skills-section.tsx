import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50',
      borderColor: 'border-blue-500',
      glowClass: 'glow-blue',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 
        'Tailwind CSS', 'Redux', 'React Query', 'Zustand'
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50',
      borderColor: 'border-green-500',
      glowClass: 'glow-green',
      skills: [
        'Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 
        'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'
      ],
    },
    {
      title: 'Tools & Technologies',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50',
      borderColor: 'border-purple-500',
      glowClass: 'glow-purple',
      skills: [
        'Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Jest', 
        'Webpack', 'Vite', 'Postman', 'VS Code'
      ],
    },
    {
      title: 'Latest & Learning',
      color: 'from-orange-500 via-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50',
      borderColor: 'border-orange-500',
      glowClass: 'glow-orange',
      skills: [
        'AI Integration', 'Web3', 'Three.js', 'Framer Motion', 
        'tRPC', 'Turborepo', 'Astro', 'Bun'
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Technical Skills
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-16 text-xl font-medium">
            Modern technologies I work with to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">amazing applications</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-4 ${category.borderColor} ${category.bgColor} overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="relative">
                  <CardTitle className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent flex items-center gap-3`}>
                    <span className="text-4xl">✨</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`px-5 py-3 text-base font-bold hover:scale-125 transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800 hover:shadow-2xl border-3 hover:border-current transform hover:-rotate-3 ${category.glowClass}`}
                      >
                        {skill}
                      </Badge>
                    ))}
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
