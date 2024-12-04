import React from 'react';
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

interface CoffeeCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
  onAdd: () => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  name,
  description,
  price,
  image,
  onAdd,
}) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-muted flex items-center justify-center rounded-md mb-4">
            <Coffee className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          <Button onClick={onAdd} size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;