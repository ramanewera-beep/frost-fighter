import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-serif hover:text-accent transition-colors">Snowblowers</Link>
                <Link to="/technology" className="text-lg font-serif hover:text-accent transition-colors">Technology</Link>
                <Link to="/contact" className="text-lg font-serif hover:text-accent transition-colors">Contact Us</Link>
                <Link to="/support" className="text-lg font-serif hover:text-accent transition-colors">Support</Link>
                <Link to="/about" className="text-lg font-serif hover:text-accent transition-colors">About</Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-primary">
            FROST FIGHTER
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Snowblowers</Link>
            <Link to="/technology" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Technology</Link>
            <Link to="/contact" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Contact Us</Link>
            <Link to="/support" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">Support</Link>
            <Link to="/about" className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100 cursor-pointer transition-colors">
            <Search className="h-5 w-5" />
          </div>
          <Link 
            to="/cart"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">FROST FIGHTER</h3>
            <p className="text-sm text-secondary leading-relaxed">
              Pioneering hybrid snow removal technology for a cleaner, quieter, and more powerful winter experience.
            </p>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Support</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-widest text-xs mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><Link to="/" className="hover:text-primary transition-colors">User Manuals</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Warranty</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Service Centers</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-widest text-xs mb-6">Newsletter</h4>
            <p className="text-sm text-secondary mb-4">Sign up for winter tips and product updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <Button variant="outline" className="uppercase text-[10px] tracking-widest">Join</Button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-[10px] uppercase tracking-widest text-secondary">
          © 2026 Frost Fighter Hybrid Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
