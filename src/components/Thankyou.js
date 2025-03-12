import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been received, Our customer service representative will
        call you to confirm the order within 24 hours. Please note that delivery
        takes 1-3 days to be brought to your door step.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Please note that if you dont pay, Mrs Kristabel cafon will use thunder
        on you oh!.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
