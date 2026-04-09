import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Wind, Thermometer } from 'lucide-react';

export function TechnologyPage() {
  const features = [
    {
      icon: Zap,
      title: 'Hybrid Drive System',
      description: 'Our patented dual-motor system combines high-torque electric motors for precision with a fuel-efficient engine for sustained power.'
    },
    {
      icon: Shield,
      title: 'Smart-Track Traction',
      description: 'Advanced sensors monitor surface conditions in real-time, automatically adjusting torque to prevent slipping on ice.'
    },
    {
      icon: Wind,
      title: 'High-Velocity Impeller',
      description: 'Aerodynamically optimized discharge system throws snow up to 50 feet with minimal energy loss.'
    },
    {
      icon: Thermometer,
      title: 'Arctic-Start Tech',
      description: 'Integrated battery heaters ensure instant starts even in temperatures as low as -40°F.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-serif">The Technology</h1>
            <p className="text-secondary font-light max-w-2xl mx-auto">
              Behind every Frost Fighter is a decade of engineering excellence. Discover the innovations that make us the leader in hybrid snow removal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 space-y-4"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-serif">{feature.title}</h3>
                <p className="text-sm text-secondary font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative h-[500px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
              alt="Engineering detail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-12 max-w-lg text-center space-y-4">
                <h2 className="text-3xl font-serif">Built for the Extreme</h2>
                <p className="text-sm text-secondary font-light">
                  Our components are crafted from reinforced steel and high-impact polymers, ensuring your Frost Fighter survives the most demanding winters year after year.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif">Efficiency Without Compromise</h2>
              <p className="text-secondary font-light leading-relaxed">
                By utilizing regenerative braking and intelligent load sensing, our hybrid snowblowers consume up to 40% less fuel than traditional gas models while delivering 20% more clearing torque.
              </p>
              <ul className="space-y-3">
                {['Zero-emission electric mode', 'Whisper-quiet operation', 'Reduced maintenance costs', 'Extended service intervals'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video bg-slate-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Testing phase" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
