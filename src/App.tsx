import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { Navbar, Footer } from './Layout';
import { HomePage } from './HomePage';
import { ProductDetailPage } from './ProductDetailPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { ContactPage } from './ContactPage';
import { SupportPage } from './SupportPage';
import { AboutPage } from './AboutPage';
import { TechnologyPage } from './TechnologyPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
