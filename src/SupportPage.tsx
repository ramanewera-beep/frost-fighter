import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';
import { HelpCircle, Book, Shield, Wrench } from 'lucide-react';

export function SupportPage() {
  const resources = [
    {
      icon: Book,
      title: 'User Manuals',
      description: 'Download PDF guides for every Frost Fighter model.'
    },
    {
      icon: Shield,
      title: 'Warranty Info',
      description: 'Register your product and view coverage details.'
    },
    {
      icon: Wrench,
      title: 'Service Centers',
      description: 'Find authorized repair shops in your local area.'
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      description: 'Quick answers to common questions about hybrid tech.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-serif">Support Center</h1>
            <p className="text-secondary font-light">
              Everything you need to keep your Frost Fighter running at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-none border-slate-100 hover:border-accent transition-colors group cursor-pointer">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                      <res.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl">{res.title}</h3>
                      <p className="text-sm text-secondary font-light leading-relaxed">
                        {res.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-50 p-12 text-center space-y-6">
            <h2 className="text-2xl font-serif">Still need help?</h2>
            <p className="text-secondary font-light max-w-md mx-auto">
              Our support team is available 24/7 during the winter season to assist with any technical issues.
            </p>
            <Button className="rounded-none uppercase tracking-widest text-xs px-10 py-6">
              Contact Support Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
