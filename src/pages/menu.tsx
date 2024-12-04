import React from 'react';
import CoffeeCard from '@/components/coffee-card';

const coffeeMenu = [
  {
    id: '1',
    name: 'Espresso',
    description: 'Strong and pure coffee shot',
    price: 2.99,
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam',
    price: 3.99,
  },
  {
    id: '3',
    name: 'Latte',
    description: 'Espresso with steamed milk and light foam',
    price: 4.29,
  },
  {
    id: '4',
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: 4.49,
  },
];

const MenuPage = () => {
  const handleAddToCart = (coffeeId: string) => {
    // Implementation will be added later
    console.log('Adding to cart:', coffeeId);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Coffee Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeMenu.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            onAdd={() => handleAddToCart(coffee.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;