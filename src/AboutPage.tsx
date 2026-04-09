import React from 'react';
import { motion } from 'motion/react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-serif">Our Story</h1>
            <p className="text-secondary font-light max-w-2xl mx-auto">
              Founded in the heart of the Midwest, Frost Fighter was born from a simple realization: winter shouldn't be a battle of noise and fumes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif">A New Era of Snow Removal</h2>
              <p className="text-secondary font-light leading-relaxed">
                For decades, snowblowers haven't changed much. They remained loud, difficult to maintain, and environmentally taxing. We set out to change that by integrating advanced hybrid technology into the most rugged machines on the market.
              </p>
              <p className="text-secondary font-light leading-relaxed">
                Our mission is to provide homeowners and professionals with tools that are as powerful as they are intelligent. By combining electric precision with gasoline reliability, we've created a line of snowblowers that are ready for any storm.
              </p>
            </motion.div>
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-slate-100 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczN-qlJXTi_gM2CDp-SVhyrtMIgttjbPdIW2dcUIJGu9R56Et7eSG4k35B9Fm8bn8ILB3AcP_r7gn9xrrTdgtQOrOWto54O-l1akAv0aGUxFo6u1UrpOc6iEQ0X7WQpfE7jYLUuOaQm4RCemrmKPH3ea=w404-h873-s-no-gm?authuser=0" 
                  alt="Our Founder Rama Surya" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-secondary text-center">Our Founder Rama Surya</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-16 border-y">
            <div className="space-y-2">
              <h3 className="text-4xl font-serif text-accent">15+</h3>
              <p className="text-xs uppercase tracking-widest font-bold">Years of Innovation</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-serif text-accent">50k+</h3>
              <p className="text-xs uppercase tracking-widest font-bold">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-serif text-accent">100%</h3>
              <p className="text-xs uppercase tracking-widest font-bold">Arctic Tested</p>
            </div>
          </div>

          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-serif">Committed to Quality</h2>
            <p className="text-secondary font-light max-w-2xl mx-auto leading-relaxed">
              Every Frost Fighter is assembled with precision and care. We believe in building products that last, which is why we offer the industry's most comprehensive warranty and support network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
