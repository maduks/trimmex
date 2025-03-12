import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Mail, ArrowLeft, Check, X } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  city: string;
  numberOfPacks: number;
  status: "pending" | "accepted" | "rejected";
  date: string;
  amount: number;
  address?: string;
  email?: string;
  notes?: string;
}

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dispatchEmail, setDispatchEmail] = useState('');
  const [showDispatchForm, setShowDispatchForm] = useState(false);

  console.log('OrderDetails component - Order ID:', id);

  const { data: order, isLoading, error } = useQuery<Order>({
    queryKey: ['order', id],
    queryFn: async () => {
      console.log('Fetching order data for ID:', id);
      // Replace with your actual API call
      return {
        id: id || "1",
        customerName: "John Doe",
        phoneNumber: "+234123456789",
        city: "Lagos",
        numberOfPacks: 2,
        status: "pending",
        date: "2024-03-15",
        amount: 15000,
        address: "123 Example Street, Lagos",
        email: "john@example.com",
        notes: "Please deliver in the morning"
      } as Order;
    }
  });

  const handleUpdateStatus = async (newStatus: "accepted" | "rejected") => {
    try {
      // Replace with your actual API call
      console.log(`Updating order ${id} to ${newStatus}`);
      // After successful update
      navigate('/admin/orders');
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your actual email sending logic
      const emailContent = `
        New Delivery Order
        ------------------
        Order ID: ${order?.id}
        Customer: ${order?.customerName}
        Address: ${order?.address}
        City: ${order?.city}
        Phone: ${order?.phoneNumber}
        Number of Packs: ${order?.numberOfPacks}
        Amount: ₦${order?.amount}
        Notes: ${order?.notes || 'N/A'}
      `;
      
      console.log('Sending dispatch email to:', dispatchEmail);
      console.log('Email content:', emailContent);
      
      // After successful email send
      alert('Dispatch request sent successfully!');
      setShowDispatchForm(false);
      navigate('/admin/orders');
    } catch (error) {
      console.error('Failed to send dispatch email:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading order details</div>;
  if (!order) return <div>Order not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/admin/orders')}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Orders
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold">Order #{order.id}</h1>
          <div className="flex gap-2">
            {order.status === "pending" && (
              <>
                <button
                  onClick={() => handleUpdateStatus("accepted")}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <Check className="w-4 h-4" />
                  Accept
                </button>
                <button
                  onClick={() => handleUpdateStatus("rejected")}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  <X className="w-4 h-4" />
                  Reject
                </button>
              </>
            )}
            {order.status === "accepted" && !showDispatchForm && (
              <button
                onClick={() => setShowDispatchForm(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <Mail className="w-4 h-4" />
                Send to Dispatch
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
            <div className="space-y-3">
              <p><span className="font-medium">Name:</span> {order.customerName}</p>
              <p><span className="font-medium">Phone:</span> {order.phoneNumber}</p>
              <p><span className="font-medium">Email:</span> {order.email}</p>
              <p><span className="font-medium">Address:</span> {order.address}</p>
              <p><span className="font-medium">City:</span> {order.city}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Order Information</h2>
            <div className="space-y-3">
              <p><span className="font-medium">Date:</span> {order.date}</p>
              <p><span className="font-medium">Number of Packs:</span> {order.numberOfPacks}</p>
              <p><span className="font-medium">Amount:</span> ₦{order.amount.toLocaleString()}</p>
              <p><span className="font-medium">Status:</span> 
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                  order.status === "accepted" ? "bg-green-100 text-green-800" :
                  order.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </p>
            </div>
          </div>
        </div>

        {order.notes && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Notes</h2>
            <p className="text-gray-700">{order.notes}</p>
          </div>
        )}

        {showDispatchForm && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Send to Dispatch Rider</h2>
            <form onSubmit={handleDispatch} className="space-y-4">
              <div>
                <label htmlFor="dispatchEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Dispatch Rider's Email
                </label>
                <input
                  type="email"
                  id="dispatchEmail"
                  value={dispatchEmail}
                  onChange={(e) => setDispatchEmail(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter dispatch rider's email"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setShowDispatchForm(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails; 