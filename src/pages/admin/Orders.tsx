"use client"

import type React from "react"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Phone, Send, Check, X, Eye } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Order {
  id: string
  customerName: string
  phoneNumber: string
  city: string
  numberOfPacks: number
  status: "pending" | "accepted" | "rejected"
  date: string
  amount: number
}

const Orders: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">("all")
  const navigate = useNavigate();

  const fetchOrders = async (): Promise<Order[]> => {
    // Replace with your actual API call
    return [
      {
        id: "1",
        customerName: "John Doe",
        phoneNumber: "+234123456789",
        city: "Lagos",
        numberOfPacks: 2,
        status: "pending",
        date: "2024-03-15",
        amount: 15000
      },
      {
        id: "2",
        customerName: "Jane Smith",
        phoneNumber: "+234987654321",
        city: "Abuja",
        numberOfPacks: 3,
        status: "accepted",
        date: "2024-03-15",
        amount: 22500
      },
      // Add more mock data as needed
    ]
  }

  const { data: orders, isLoading, error } = useQuery<Order[], Error>({
    queryKey: ["orders"],
    queryFn: fetchOrders
  })

  const filteredOrders = orders?.filter((order) => 
    filter === "all" || order.status === filter
  )

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleWhatsApp = (order: Order) => {
    // Format the message for WhatsApp
    const message = `New Order Details:
Order ID: ${order.id}
Customer: ${order.customerName}
City: ${order.city}
Number of Packs: ${order.numberOfPacks}
Amount: ₦${order.amount}
Phone: ${order.phoneNumber}
Date: ${order.date}`

    // Replace this with your logistics company's WhatsApp number
    const logisticsWhatsAppNumber = "+234XXXXXXXXX"
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${logisticsWhatsAppNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleUpdateStatus = async (orderId: string, newStatus: "accepted" | "rejected") => {
    // Replace with your actual API call to update order status
    console.log(`Updating order ${orderId} to ${newStatus}`)
    // After successful update, invalidate and refetch orders
    // queryClient.invalidateQueries(["orders"])
  }

  const handleViewDetails = (orderId: string) => {
    console.log('Navigating to order details:', orderId);
    navigate(`/admin/orders/${orderId}`);
  };

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as "all" | "pending" | "accepted" | "rejected")}
            className="p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending Orders</option>
            <option value="accepted">Accepted Orders</option>
            <option value="rejected">Rejected Orders</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Packs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders?.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                    <div className="text-sm text-gray-500">{order.phoneNumber}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.city}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.numberOfPacks}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">₦{order.amount.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === "accepted" ? "bg-green-100 text-green-800" :
                    order.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(order.id)}
                      className="p-1 text-indigo-600 hover:text-indigo-800"
                      title="View Details"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleCall(order.phoneNumber)}
                      className="p-1 text-blue-600 hover:text-blue-800"
                      title="Call Customer"
                    >
                      <Phone className="h-5 w-5" />
                    </button>
                    
                    {order.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleUpdateStatus(order.id, "accepted")}
                          className="p-1 text-green-600 hover:text-green-800"
                          title="Accept Order"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(order.id, "rejected")}
                          className="p-1 text-red-600 hover:text-red-800"
                          title="Reject Order"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {order.status === "accepted" && (
                      <button
                        onClick={() => handleWhatsApp(order)}
                        className="p-1 text-green-600 hover:text-green-800"
                        title="Send to Logistics (WhatsApp)"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders

