import { Check } from "lucide-react";
import productImage from "../assets/trimmex-product.jpeg";
import OrderModal from "./OrderModal";
import React, { useState } from "react";

function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderSubmit = (orderData) => {
    console.log("Order submitted:", orderData);
    setIsModalOpen(false);
  };
  const handleOrderClick = (tier) => {
    setIsModalOpen(true);
  };
  const products = [
    {
      id: 15000,
      name: "1 Pack",
      price: "₦15,000",
      promotion: "Lose Weight Naturally",
      description: [
        {
          name: "1 Week Supply",
          value: "1 Pack",
        },
        {
          name: "Free Delivery",
          value: "Yes",
        },
        {
          name: "Pay on Delivery",
          value: "Yes",
        },
        {
          name: "Free Weight Loss Guide",
          value: "Yes",
        },
      ],
      image: productImage,
    },
    {
      id: 20000,
      name: "Buy 2 Get 1 Free",
      price: "₦20,000",
      promotion: "Save ₦10,000!",
      description: [
        {
          name: "3 Weeks Supply",
          value: "2 Pack",
        },
        {
          name: "Free Delivery",
          value: "Yes",
        },
        {
          name: "Pay on Delivery",
          value: "Yes",
        },
        {
          name: "Free Weight Loss Guide",
          value: "Yes",
        },
      ],
      image: productImage,
    },
    {
      id: 30000,
      name: "Buy 3 Get 1 Free",
      price: "₦30,000",
      promotion: "Save ₦20,000!",
      description: [
        {
          name: "4 Weeks Supply",
          value: "3 Pack",
        },
        {
          name: "Free Weight Loss Guide",
          value: "Yes",
        },
        {
          name: "Free Delivery",
          value: "Yes",
        },
        {
          name: "Pay on Delivery",
          value: "Yes",
        },
      ],
      image: productImage,
    },
  ];
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Affordable Packages for Your Weight Loss Journey
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Choose the package that suits your needs and start your
            transformation today
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Package 1 */}
          {products.map((product, index) => (
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4">
                <img
                  src={productImage || "/placeholder.svg"}
                  alt="Trimmex Green Coffee Product"
                  className="mx-auto h-auto w-full rounded-lg"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                {product.name}
              </h3>
              <div className="mb-4 text-3xl font-bold text-green-600">
                {product.price}
              </div>
              <p className="mb-6 text-gray-600">{product.promotion}</p>
              <ul className="mb-8 space-y-3">
                {product.description.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{item.name}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleOrderClick(product)}
                className="block w-full rounded-full bg-green-600 py-3 text-center font-medium text-white transition hover:bg-green-700"
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
}

export default Pricing;
