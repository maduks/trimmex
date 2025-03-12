import React, { useState } from 'react';
import { Check } from 'lucide-react';
import OrderModal from './OrderModal';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  productDetails: {
    quantity: number;
    duration: string;
    benefits: string[];
  };
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter Pack",
    price: 7500,
    description: "Perfect for beginners starting their wellness journey",
    features: [
      "1 Pack of Trimmex",
      "Basic wellness guide",
      "Email support",
      "30-day money-back guarantee"
    ],
    productDetails: {
      quantity: 1,
      duration: "1 Month",
      benefits: [
        "Natural weight management",
        "Improved energy levels",
        "Basic wellness support",
        "Standard delivery"
      ]
    }
  },
  {
    name: "Value Pack",
    price: 15000,
    description: "Most popular choice for regular users",
    features: [
      "2 Packs of Trimmex",
      "Comprehensive wellness guide",
      "Priority email support",
      "60-day money-back guarantee",
      "Free shipping"
    ],
    productDetails: {
      quantity: 2,
      duration: "2 Months",
      benefits: [
        "Enhanced weight management",
        "Sustained energy boost",
        "Priority wellness support",
        "Free express shipping",
        "Exclusive wellness tips"
      ]
    }
  },
  {
    name: "Premium Pack",
    price: 22500,
    description: "Best value for committed users",
    features: [
      "3 Packs of Trimmex",
      "Premium wellness guide",
      "24/7 priority support",
      "90-day money-back guarantee",
      "Free express shipping",
      "Exclusive wellness tips"
    ],
    productDetails: {
      quantity: 3,
      duration: "3 Months",
      benefits: [
        "Maximum weight management results",
        "Long-lasting energy enhancement",
        "Premium wellness support",
        "Free express shipping",
        "Exclusive wellness tips",
        "Personalized wellness consultation"
      ]
    }
  }
];

const Pricing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const handleOrderClick = (tier: PricingTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleOrderSubmit = async (orderData: any) => {
    try {
      // Here you would typically send the order data to your backend
      const orderPayload = {
        ...orderData,
        selectedTier: selectedTier?.name,
        totalAmount: selectedTier ? selectedTier.price * orderData.numberOfPacks : 0,
        orderDate: new Date().toISOString(),
        productDetails: selectedTier?.productDetails,
      };

      // Replace this with your actual API call
      console.log('Submitting order:', orderPayload);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert('Order placed successfully! We will contact you shortly.');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your wellness journey. All plans include our premium Trimmex product with different levels of support and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <div className="text-3xl font-bold mb-6">
                ₦{tier.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-600">/pack</span>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Duration:</span> {tier.productDetails.duration}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Quantity:</span> {tier.productDetails.quantity} pack{tier.productDetails.quantity > 1 ? 's' : ''}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Product Benefits:</h4>
                <ul className="space-y-2">
                  {tier.productDetails.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Additional Features:</h4>
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleOrderClick(tier)}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors mt-auto"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleOrderSubmit}
      />
    </section>
  );
};

export default Pricing; 