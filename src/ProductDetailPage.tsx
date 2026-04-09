import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from './data/products';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import { ProductImage } from './components/ProductImage';
import { ChevronLeft, Truck, ShieldCheck, RotateCcw, Star } from 'lucide-react';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif mb-4">Product not found</h2>
        <Link to="/">
          <Button variant="outline">Back to Collection</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors mb-12"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
              <ProductImage 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-slate-100 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                   <ProductImage 
                    src={product.image} 
                    alt={`${product.name} view ${i}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="rounded-none uppercase text-[10px] tracking-widest border-slate-200">
                  {product.model}
                </Badge>
                <div className="flex items-center text-yellow-500">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                  <span className="text-[10px] text-secondary ml-2 uppercase tracking-widest">(24 Reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif">{product.name}</h1>
              <p className="text-2xl font-light">${product.price.toLocaleString()}</p>
            </div>

            <Separator />

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-secondary">Color: {product.color}</label>
                <div className="flex gap-3">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-primary ring-2 ring-offset-2 ring-transparent" 
                    style={{ backgroundColor: product.colorHex }}
                  />
                  {/* Mock other colors */}
                  <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-400 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-800 cursor-pointer" />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Button 
                  onClick={() => addToCart(product)}
                  className="w-full py-8 rounded-none uppercase tracking-[0.2em] text-xs font-bold"
                >
                  Add to Cart
                </Button>
                <p className="text-center text-[10px] text-secondary uppercase tracking-widest">
                  Free white-glove delivery on all orders over $1,000
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold">Description</h3>
                <p className="text-sm text-secondary font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm text-secondary font-light flex items-center">
                      <div className="w-1 h-1 bg-accent mr-3 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="text-[9px] uppercase tracking-widest text-secondary font-bold">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                <span className="text-[9px] uppercase tracking-widest text-secondary font-bold">5 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RotateCcw className="h-5 w-5 text-secondary" />
                <span className="text-[9px] uppercase tracking-widest text-secondary font-bold">30 Day Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
