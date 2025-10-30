import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useState } from 'react';

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      image: '/assets/images/default.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with beautiful charts and real-time data updates.',
      image: '/assets/images/default.svg',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
      category: 'Frontend',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API with authentication, role-based access control, and comprehensive documentation.',
      image: '/assets/images/default.svg',
      tags: ['NestJS', 'PostgreSQL', 'JWT', 'Swagger'],
      category: 'Backend',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location search, 7-day forecast, and interactive maps.',
      image: '/assets/images/default.svg',
      tags: ['React', 'Tailwind', 'OpenWeather API'],
      category: 'Frontend',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Blog CMS',
      description: 'Content management system with markdown support, SEO optimization, and comment system.',
      image: '/assets/images/default.svg',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'MDX'],
      category: 'Full Stack',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'SaaS platform for creating customizable portfolios with drag-and-drop interface.',
      image: '/assets/images/default.svg',
      tags: ['React', 'Express', 'MongoDB', 'AWS S3'],
      category: 'Full Stack',
      gradient: 'from-red-500 via-pink-500 to-purple-500',
      github: '#',
      demo: '#',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Featured Projects
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 text-xl font-medium">
            Check out some of my <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">recent work</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className={`px-8 py-6 text-lg font-bold transform hover:scale-110 transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl glow-purple'
                    : 'border-3 border-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-4 border-transparent hover:border-purple-500 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} h-52 group-hover:h-56 transition-all duration-500`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-black text-white/30 group-hover:text-white/50 group-hover:scale-125 transition-all duration-500">
                      {project.title[0]}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-sm font-semibold px-3 py-1 hover:scale-110 transition-transform">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 font-bold"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 font-bold shadow-lg glow-purple"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Demo
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
