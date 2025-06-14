
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Search, Filter, Grid, List } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'websites', label: 'Websites' },
    { value: 'mobile-apps', label: 'Mobile Apps' },
    { value: 'games', label: 'Games' },
    { value: 'courses', label: 'Online Courses' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  // Extended sample products
  const allProducts = [
    {
      id: '1',
      title: 'Modern E-commerce Website Template',
      category: 'Website',
      price: 49,
      rating: 4.8,
      reviewCount: 124,
      viewCount: 2340,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      author: 'WebStudio Pro'
    },
    {
      id: '2',
      title: 'React Native Fitness App',
      category: 'Mobile App',
      price: 89,
      rating: 4.9,
      reviewCount: 89,
      viewCount: 1850,
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=240&fit=crop',
      author: 'AppCraft Studio'
    },
    {
      id: '3',
      title: '2D Platformer Game Kit',
      category: 'Game',
      price: 35,
      rating: 4.7,
      reviewCount: 156,
      viewCount: 3200,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop',
      author: 'GameDev Masters'
    },
    {
      id: '4',
      title: 'Complete Web Development Course',
      category: 'Course',
      price: 199,
      rating: 4.9,
      reviewCount: 2340,
      viewCount: 8750,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
      author: 'CodeAcademy Plus'
    },
    {
      id: '5',
      title: 'Cryptocurrency Portfolio Tracker',
      category: 'Website',
      price: 75,
      rating: 4.6,
      reviewCount: 67,
      viewCount: 1420,
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=240&fit=crop',
      author: 'CryptoUI'
    },
    {
      id: '6',
      title: 'Social Media Management App',
      category: 'Mobile App',
      price: 120,
      rating: 4.8,
      reviewCount: 203,
      viewCount: 2890,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
      author: 'Social Solutions'
    },
    {
      id: '7',
      title: 'Restaurant Website Template',
      category: 'Website',
      price: 65,
      rating: 4.5,
      reviewCount: 98,
      viewCount: 1650,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      author: 'DesignCraft'
    },
    {
      id: '8',
      title: 'Unity 3D Racing Game',
      category: 'Game',
      price: 150,
      rating: 4.7,
      reviewCount: 76,
      viewCount: 2100,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop',
      author: 'Unity Masters'
    },
    {
      id: '9',
      title: 'Digital Marketing Masterclass',
      category: 'Course',
      price: 129,
      rating: 4.8,
      reviewCount: 567,
      viewCount: 4320,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
      author: 'Marketing Guru'
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">All Products</h1>
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                Showing {allProducts.length} products
              </p>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
