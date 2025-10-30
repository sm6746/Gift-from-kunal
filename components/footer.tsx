import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            John Doe
          </div>
          <p className="text-gray-400 text-center max-w-md">
            Building the future, one line of code at a time. Let's create something amazing together.
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-600/20 text-gray-300 hover:text-white transition-all"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-600/20 text-gray-300 hover:text-white transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-600/20 text-gray-300 hover:text-white transition-all"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-600/20 text-gray-300 hover:text-white transition-all"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <div className="border-t border-gray-800 pt-6 w-full text-center">
            <p className="text-gray-500 text-sm">
              © 2025 John Doe. All rights reserved. Made with ❤️ and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
