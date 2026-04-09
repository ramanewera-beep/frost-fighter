import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from './data/products';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';

const Hero = () => (
  <section className="relative h-[80vh] w-full overflow-hidden bg-slate-900">
    <img 
      src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=2000" 
      alt="Winter landscape" 
      className="absolute inset-0 w-full h-full object-cover opacity-60"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-6"
      >
        <Badge variant="outline" className="text-white border-white/40 uppercase tracking-[0.2em] px-4 py-1">
          New Arrival
        </Badge>
        <h1 className="text-6xl md:text-8xl font-serif leading-tight">
          Master the <br /> <span className="italic">Winter Chill</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 font-light max-w-lg leading-relaxed">
          Introducing the Frost Fighter Hybrid Series. Quiet power, zero emissions, and the torque to move mountains of snow.
        </p>
        <div className="pt-4">
          <Button size="lg" className="bg-white text-black hover:bg-slate-200 rounded-none px-10 py-7 uppercase tracking-widest text-xs font-bold">
            Shop the Collection
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group border-none shadow-none rounded-none overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 text-black hover:bg-white/90 rounded-none border-none uppercase text-[10px] tracking-widest px-3">
                {product.model}
              </Badge>
            </div>
          </div>
        </Link>
        <CardContent className="pt-6 px-0">
          <div className="flex justify-between items-start mb-2">
            <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
              <h3 className="font-serif text-xl">{product.name}</h3>
            </Link>
            <span className="font-medium">${product.price.toLocaleString()}</span>
          </div>
          <p className="text-sm text-secondary line-clamp-2 font-light mb-4">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div 
              className="w-4 h-4 rounded-full border border-slate-200" 
              style={{ backgroundColor: product.colorHex }}
            />
            <span className="text-[10px] uppercase tracking-widest text-secondary">{product.color}</span>
          </div>
        </CardContent>
        <CardFooter className="px-0 pb-6">
          <Button 
            onClick={() => addToCart(product)}
            variant="outline" 
            className="w-full rounded-none uppercase text-[10px] tracking-widest font-bold py-6 hover:bg-primary hover:text-white transition-all"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function HomePage() {
  const [filter, setFilter] = useState<string>('All');
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.model === filter);

  const categories = ['All', 'Pro Series', 'Compact', 'Heavy Duty', 'Eco Hybrid'];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">The Collection</h2>
            <p className="text-secondary max-w-md font-light">
              Explore our range of high-performance hybrid snowblowers, engineered for every driveway and every storm.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-all ${
                  filter === cat ? 'border-accent text-primary' : 'border-transparent text-secondary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=2000" 
          alt="Snowy mountains" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Engineered for <span className="italic">Perfection</span>
            </h2>
            <div className="space-y-6 text-slate-200 font-light leading-relaxed text-lg">
              <p>
                Our hybrid technology combines the raw power of traditional engines with the precision and silence of electric motors. The result is a machine that starts instantly in sub-zero temperatures and clears heavy, wet snow with ease.
              </p>
              <p>
                Every Frost Fighter is built with premium materials and undergoes rigorous testing in the harshest Arctic conditions to ensure reliability when you need it most.
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-slate-200 rounded-none uppercase text-xs tracking-widest font-bold px-8 py-6 group">
              Learn about our technology <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
