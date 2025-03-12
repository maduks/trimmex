import React from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const statsCards = [
  {
    title: 'Total Revenue',
    value: '₦150,000',
    icon: <DollarSign className="w-6 h-6" />,
    change: '+12.5%',
  },
  {
    title: 'Total Orders',
    value: '156',
    icon: <ShoppingBag className="w-6 h-6" />,
    change: '+8.2%',
  },
  {
    title: 'Total Customers',
    value: '89',
    icon: <Users className="w-6 h-6" />,
    change: '+15.3%',
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    icon: <TrendingUp className="w-6 h-6" />,
    change: '+2.4%',
  },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-green-600 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample order data - replace with actual data */}
              <tr className="border-b">
                <td className="py-3 px-4">#12345</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">Trimmex Pack (1 Month)</td>
                <td className="py-3 px-4">₦15,000</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Delivered
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 