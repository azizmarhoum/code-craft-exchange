
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
    { value: 'ui-kits', label: 'UI Kits' },
    { value: 'graphics', label: 'Graphics & Templates' },
    { value: 'ebooks', label: 'eBooks' },
    { value: 'marketing-tools', label: 'Marketing Tools' },
    { value: 'scripts', label: 'Scripts & Snippets' },
    { value: 'audio', label: 'Audio Files' },
    { value: 'video', label: 'Video Assets' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  // Extended sample products with diverse categories
  const allProducts = [
    {
      id: '1',
      title: 'Modern E-commerce Website Template',
      category: 'Website',
      price: 49,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      author: 'WebStudio Pro'
    },
    {
      id: '2',
      title: 'Complete SaaS UI Kit',
      category: 'UI Kit',
      price: 89,
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=240&fit=crop',
      author: 'DesignCraft Studio'
    },
    {
      id: '3',
      title: '2D Platformer Game Kit',
      category: 'Game',
      price: 35,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop',
      author: 'GameDev Masters'
    },
    {
      id: '4',
      title: 'Complete Web Development Course',
      category: 'Course',
      price: 199,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
      author: 'CodeAcademy Plus'
    },
    {
      id: '5',
      title: 'Social Media Graphics Bundle',
      category: 'Graphics',
      price: 25,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
      author: 'Creative Masters'
    },
    {
      id: '6',
      title: 'Instagram Story Templates',
      category: 'Graphics',
      price: 19,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
      author: 'Social Solutions'
    },
    {
      id: '7',
      title: 'The Complete Digital Marketing Guide',
      category: 'eBook',
      price: 29,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      author: 'Marketing Guru'
    },
    {
      id: '8',
      title: 'Email Marketing Automation Tools',
      category: 'Marketing Tool',
      price: 75,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop',
      author: 'AutoMarketing Pro'
    },
    {
      id: '9',
      title: 'React Component Library',
      category: 'Script',
      price: 65,
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=240&fit=crop',
      author: 'CodeLibrary'
    },
    {
      id: '10',
      title: 'Royalty-Free Music Pack',
      category: 'Audio',
      price: 45,
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=240&fit=crop',
      author: 'Audio Solutions'
    },
    {
      id: '11',
      title: 'Motion Graphics Templates',
      category: 'Video',
      price: 89,
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=240&fit=crop',
      author: 'Video Pro'
    },
    {
      id: '12',
      title: 'Dashboard UI Kit for Analytics',
      category: 'UI Kit',
      price: 120,
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=240&fit=crop',
      author: 'Analytics Design'
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
