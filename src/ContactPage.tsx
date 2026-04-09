import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl font-serif">Contact Us</h1>
            <p className="text-secondary font-light max-w-2xl mx-auto">
              Have questions about our hybrid technology or need help choosing the right model? Our winter experts are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-xl font-serif">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold">Call Us</p>
                      <p className="text-sm text-secondary">1-800-FROST-FIX</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">Mon-Fri: 8am - 8pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold">Email Us</p>
                      <p className="text-sm text-secondary">support@frostfighter.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold">Headquarters</p>
                      <p className="text-sm text-secondary">123 Arctic Way<br />Minneapolis, MN 55401</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 text-white space-y-4">
                <MessageSquare className="h-8 w-8 text-accent" />
                <h3 className="text-lg font-serif">Live Chat</h3>
                <p className="text-sm text-slate-400 font-light">
                  Need immediate assistance? Our agents are online and ready to chat.
                </p>
                <Button className="w-full bg-white text-black hover:bg-slate-200 rounded-none uppercase text-[10px] tracking-widest font-bold py-6">
                  Start Chat
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form className="space-y-8 bg-slate-50 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="rounded-none border-slate-200 bg-white focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-none border-slate-200 bg-white focus-visible:ring-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold">Subject</Label>
                  <Input id="subject" placeholder="Product Inquiry" className="rounded-none border-slate-200 bg-white focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="rounded-none border-slate-200 bg-white focus-visible:ring-accent min-h-[150px]" />
                </div>
                <Button className="w-full py-8 rounded-none uppercase tracking-[0.2em] text-xs font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
