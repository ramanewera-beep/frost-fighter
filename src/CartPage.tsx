import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
            <ShoppingBag className="h-10 w-10 text-slate-300" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-serif">Your cart is empty</h2>
          <p className="text-secondary font-light">Looks like you haven't added any snowblowers yet.</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="rounded-none uppercase tracking-widest text-xs px-10 py-6">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-6 pb-8 border-b"
              >
                <div className="w-full sm:w-40 aspect-square bg-slate-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-xl">{item.name}</h3>
                      <p className="text-xs text-secondary uppercase tracking-widest mt-1">{item.color} | {item.model}</p>
                    </div>
                    <p className="font-medium">${item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-slate-50 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-slate-50 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-secondary hover:text-accent transition-colors flex items-center text-xs uppercase tracking-widest font-bold"
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 space-y-6 sticky top-32">
              <h2 className="text-xl font-serif">Order Summary</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Shipping</span>
                  <span className="text-accent uppercase text-[10px] font-bold tracking-widest">Free</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Estimated Tax</span>
                  <span>$0.00</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <Link to="/checkout" className="block">
                <Button className="w-full py-8 rounded-none uppercase tracking-[0.2em] text-xs font-bold">
                  Proceed to Checkout
                </Button>
              </Link>
              <div className="pt-4 space-y-4">
                <p className="text-[10px] text-secondary text-center uppercase tracking-widest leading-relaxed">
                  Shipping and taxes calculated at checkout. <br />
                  Secure checkout powered by Frost Fighter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
