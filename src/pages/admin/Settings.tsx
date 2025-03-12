import React, { useState } from 'react';
import { Save } from 'lucide-react';
import ChangePassword from '../../components/admin/ChangePassword';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Trimmex',
    adminEmail: 'admin@trimmex.com.ng',
    currency: 'NGN',
    phoneNumber: '+234 902 050 0088',
    address: '123 Health Street, Wellness City,Abuja',
    enableNotifications: true,
    enableOrderEmails: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your settings update logic here
    alert('Settings updated successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">General Settings</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  value={settings.adminEmail}
                  onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={settings.currency}
                  onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                >
                  <option value="NGN">Nigerian Naira (NGN)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-md"
                  value={settings.phoneNumber}
                  onChange={(e) => setSettings({ ...settings, phoneNumber: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Address
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableNotifications"
                  className="h-4 w-4 text-green-600 rounded border-gray-300"
                  checked={settings.enableNotifications}
                  onChange={(e) =>
                    setSettings({ ...settings, enableNotifications: e.target.checked })
                  }
                />
                <label htmlFor="enableNotifications" className="ml-2 text-sm text-gray-700">
                  Enable Admin Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableOrderEmails"
                  className="h-4 w-4 text-green-600 rounded border-gray-300"
                  checked={settings.enableOrderEmails}
                  onChange={(e) =>
                    setSettings({ ...settings, enableOrderEmails: e.target.checked })
                  }
                />
                <label htmlFor="enableOrderEmails" className="ml-2 text-sm text-gray-700">
                  Send Order Confirmation Emails
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Password Change Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Settings; 