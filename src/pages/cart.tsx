import React from 'react';
import Cart from '@/components/cart';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = React.useState([
    {
      id: '1',
      name: 'Espresso',
      price: 2.99,
      quantity: 1,
    },
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="max-w-2xl mx-auto">
        <Cart
          items={items}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate('/menu')}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;