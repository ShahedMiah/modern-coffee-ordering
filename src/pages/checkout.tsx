import React from 'react';
import { Button } from '@/components/ui/button';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <Button className="w-full">Place Order</Button>
      </div>
    </div>
  );
};

export default CheckoutPage;