import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Your Cart</h2>
      </div>
      
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={onCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;