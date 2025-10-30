import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useState } from 'react';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'john.doe@example.com', gradient: 'from-blue-500 via-cyan-500 to-teal-500', glowClass: 'glow-blue' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', gradient: 'from-green-500 via-emerald-500 to-teal-500', glowClass: 'glow-green' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', gradient: 'from-purple-500 via-pink-500 to-rose-500', glowClass: 'glow-purple' },
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Get In Touch
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-16 text-xl font-medium">
            Let's work together on your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">next project</span>
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <Card className="border-4 border-purple-500 shadow-2xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-950/30 hover:scale-105 transition-all duration-500 glow-purple">
                <CardHeader>
                  <CardTitle className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
                    <Sparkles className="h-7 w-7 text-yellow-400 fill-yellow-400" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-5">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} p-1 shadow-lg ${info.glowClass}`}>
                          <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                            <info.icon className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase">{info.label}</p>
                          <p className="font-black text-lg text-gray-900 dark:text-gray-100">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-transparent shadow-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:scale-105 transition-all duration-500 animate-gradient glow-purple">
                <CardContent className="p-8 relative">
                  <Sparkles className="absolute top-4 right-4 h-8 w-8 text-yellow-300 fill-yellow-300 animate-pulse" />
                  <h3 className="text-3xl font-black mb-3">Available for Opportunities</h3>
                  <p className="text-white/95 text-lg leading-relaxed">
                    I'm currently open to <span className="font-bold underline">full-time positions</span>, freelance projects, and exciting collaborations. 
                    Feel free to reach out!
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-4 border-blue-500 shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-950/30 hover:scale-105 transition-all duration-500 glow-blue">
              <CardHeader>
                <CardTitle className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-3">
                    <label className="text-base font-bold text-gray-800 dark:text-gray-200">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-3 border-purple-300 focus:border-purple-600 text-lg py-6 hover:shadow-lg transition-all"
                    />
                  </div>
                  <div className="grid gap-3">
                    <label className="text-base font-bold text-gray-800 dark:text-gray-200">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-3 border-purple-300 focus:border-purple-600 text-lg py-6 hover:shadow-lg transition-all"
                    />
                  </div>
                  <div className="grid gap-3">
                    <label className="text-base font-bold text-gray-800 dark:text-gray-200">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-3 border-purple-300 focus:border-purple-600 text-lg hover:shadow-lg transition-all"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-7 text-lg font-black shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 glow-purple"
                  >
                    <Send className="h-6 w-6 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
