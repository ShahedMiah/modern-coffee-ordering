import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Coffee, ShoppingCart } from 'lucide-react';
import MenuPage from '@/pages/menu';
import CartPage from '@/pages/cart';
import CheckoutPage from '@/pages/checkout';
import { Button } from '@/components/ui/button';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <nav className="border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                  <Coffee className="w-6 h-6" />
                  <span className="text-xl font-bold">Coffee Shop</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" asChild>
                    <Link to="/menu">Menu</Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link to="/cart" className="flex items-center space-x-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Cart</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<MenuPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>

          <footer className="border-t mt-auto">
            <div className="container mx-auto px-4 py-6">
              <p className="text-center text-sm text-muted-foreground">
                © 2024 Coffee Shop. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;