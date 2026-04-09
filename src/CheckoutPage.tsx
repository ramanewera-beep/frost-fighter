import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import { CreditCard, CheckCircle2 } from 'lucide-react';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-8">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
        </motion.div>
        <div className="space-y-2">
          <h2 className="text-4xl font-serif">Order Confirmed</h2>
          <p className="text-secondary font-light max-w-md mx-auto">
            Thank you for your purchase! Your Frost Fighter is being prepared for shipment. You will receive a confirmation email shortly.
          </p>
        </div>
        <Button 
          onClick={() => navigate('/')}
          variant="outline" 
          className="rounded-none uppercase tracking-widest text-xs px-10 py-6"
        >
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif mb-12 text-center">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-xl font-serif border-b pb-4">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[10px] uppercase tracking-widest font-bold">First Name</Label>
                  <Input id="firstName" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[10px] uppercase tracking-widest font-bold">Last Name</Label>
                  <Input id="lastName" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold">Email Address</Label>
                <Input id="email" type="email" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold">Phone Number</Label>
                <Input id="phone" type="tel" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-[10px] uppercase tracking-widest font-bold">Shipping Address</Label>
                <Input id="address" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[10px] uppercase tracking-widest font-bold">City</Label>
                  <Input id="city" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-[10px] uppercase tracking-widest font-bold">Zip Code</Label>
                  <Input id="zip" required className="rounded-none border-slate-200 focus-visible:ring-accent" />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-serif border-b pb-4">Payment Method</h2>
              <div className="p-6 border-2 border-accent bg-accent/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-white border flex items-center justify-center rounded">
                    <span className="text-blue-800 font-bold italic text-xs">PayPal</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">PayPal Checkout</p>
                    <p className="text-[10px] text-secondary uppercase tracking-widest">Fast and secure payment</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-4 border-accent" />
              </div>
              <p className="text-[10px] text-secondary uppercase tracking-widest text-center">
                You will be redirected to PayPal to complete your purchase securely.
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 space-y-6 sticky top-32">
              <h2 className="text-xl font-serif">Order Summary</h2>
              <div className="space-y-4 max-h-[300px] overflow-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-white border overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-[10px] text-secondary uppercase tracking-widest">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium mt-1">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Shipping</span>
                  <span className="text-accent uppercase text-[10px] font-bold tracking-widest">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isProcessing}
                className="w-full py-8 rounded-none uppercase tracking-[0.2em] text-xs font-bold"
              >
                {isProcessing ? 'Processing...' : `Pay $${cartTotal.toLocaleString()} with PayPal`}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
