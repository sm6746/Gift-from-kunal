import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div
        className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6 relative">
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              JD
            </div>
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Sparkles className="h-8 w-8 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
          John Doe
        </h1>
        
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg animate-pulse-glow">
          <Sparkles className="h-5 w-5" />
          <span className="text-xl md:text-2xl">Full Stack Web Developer</span>
          <Sparkles className="h-5 w-5" />
        </div>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Recent graduate passionate about creating <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">exceptional web experiences</span> with modern technologies. 
          Turning ideas into <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">elegant, scalable solutions</span>.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 px-8 py-6 text-lg font-bold animate-gradient glow-blue"
          >
            View My Work <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-4 border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 px-8 py-6 text-lg font-bold hover:border-pink-600"
          >
            <Download className="mr-2 h-6 w-6" />
            Download CV
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl glow-blue"
          >
            <Github className="h-7 w-7" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl glow-purple"
          >
            <Linkedin className="h-7 w-7" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white transform hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl glow-pink"
          >
            <Mail className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </section>
  );
}
