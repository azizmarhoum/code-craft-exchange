
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { User, Download, Upload, Heart, Settings, Star } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('purchases');

  const tabs = [
    { id: 'purchases', label: 'Purchases', icon: Download },
    { id: 'uploads', label: 'My Products', icon: Upload },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const purchases = [
    {
      id: '1',
      title: 'Modern E-commerce Website Template',
      author: 'WebStudio Pro',
      price: 49,
      purchaseDate: '2024-01-15',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop',
      status: 'completed'
    },
    {
      id: '2',
      title: 'React Native Fitness App',
      author: 'AppCraft Studio',
      price: 89,
      purchaseDate: '2024-01-10',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop',
      status: 'completed'
    }
  ];

  const uploads = [
    {
      id: '1',
      title: 'Portfolio Website Template',
      price: 35,
      sales: 24,
      revenue: 840,
      rating: 4.7,
      status: 'active'
    },
    {
      id: '2',
      title: 'Blog Theme Package',
      price: 25,
      sales: 18,
      revenue: 450,
      rating: 4.5,
      status: 'active'
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
            <p className="text-gray-600 mt-2">Manage your purchases, uploads, and account settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'purchases' && (
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">Purchase History</h2>
                  </div>
                  <div className="divide-y">
                    {purchases.map((purchase) => (
                      <div key={purchase.id} className="p-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={purchase.thumbnail}
                            alt={purchase.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">{purchase.title}</h3>
                            <p className="text-sm text-gray-500">by {purchase.author}</p>
                            <p className="text-sm text-gray-500">Purchased on {purchase.purchaseDate}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${purchase.price}</p>
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1">
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'uploads' && (
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">My Products</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Upload New Product
                    </button>
                  </div>
                  <div className="divide-y">
                    {uploads.map((upload) => (
                      <div key={upload.id} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-medium text-gray-900">{upload.title}</h3>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span>Price: ${upload.price}</span>
                              <span>Sales: {upload.sales}</span>
                              <span>Revenue: ${upload.revenue}</span>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            upload.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {upload.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(upload.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{upload.rating}</span>
                          </div>
                          <div className="space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              Edit
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                              Analytics
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Favorite Products</h2>
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No favorites yet</p>
                    <p className="text-sm text-gray-400 mt-1">Save products you love to find them easily later</p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Update Profile
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                          <span className="ml-2 text-gray-700">Email notifications for new products</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                          <span className="ml-2 text-gray-700">Purchase confirmations</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                          <span className="ml-2 text-gray-700">Marketing emails</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                          <span className="ml-2 text-gray-700">Make my profile public</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                          <span className="ml-2 text-gray-700">Show my purchase history</span>
                        </label>
                      </div>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Save Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
