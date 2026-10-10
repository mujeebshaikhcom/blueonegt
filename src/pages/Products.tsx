import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getVisibleProducts, getProductsByCategory, categories } from '../data/products'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const products = getProductsByCategory(selectedCategory)

  return (
    <>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[#05245369] to-[#C19643]">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title text-[var(--primary)] mb-6">Our Premium Products</h1>
              <p className="section-subtitle">
                Discover our extensive range of high-quality raw food materials, 
                carefully sourced and prepared for global export in containers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b" ref={ref}>
          <div className="container-custom">
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="product-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    layout
                  >
                    <Link to={`/products/${product.id}`}>
                      <div className="card-product group">
                        <div className="relative overflow-hidden">
                          <div className="w-full h-64 bg-gradient-to-br from-[#E6CE8F] to-[#E6CE8F] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <motion.span
                              className="text-6xl"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {getProductIcon(product.category)}
                            </motion.span>
                          </div>
                          
                          {/* Special Offer Badge */}
                          {product.hasSpecialOffer && (
                            <motion.div
                              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3, type: "spring" }}
                            >
                              Special Offer
                            </motion.div>
                          )}

                          {/* Featured Badge */}
                          {product.isFeatured && (
                            <div className="absolute top-4 left-4 bg-[#C19643] text-white px-3 py-1 rounded-full text-sm font-bold">
                              Featured
                            </div>
                          )}

                          {/* Hover Overlay */}

                          <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${product.image})`,
                          }}  
                          >
                          <div className="absolute inset-0 bg-black/30 z-0" />
                            <motion.div
                              className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={{ y: 20 }}
                              whileHover={{ y: 0 }}
                            >
                              View Details
                            </motion.div>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-[var(--primary)] group-hover:text-[#C19643] transition-colors">
                              {product.name}
                            </h3>
                            {product.hasSpecialOffer && (
                              <span className="text-xs text-red-600 font-bold">OFFER</span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                          
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-[#C19643] font-medium bg-[#E6CE8F] px-3 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-sm text-gray-500">
                              Min: {product.specifications.minimumOrder}
                            </span>
                          </div>

                          {/* Special Offer Text */}
                          {product.hasSpecialOffer && product.specialOfferText && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                              <p className="text-red-700 text-sm font-medium">
                                🎉 {product.specialOfferText}
                              </p>
                            </div>
                          )}

                          <div className="flex justify-between items-center">
                            <span className="text-[var(--primary)] font-bold group-hover:text-[#C19643] transition-colors">
                              Learn More →
                            </span>
                            <div className="flex space-x-1">
                              {product.features.slice(0, 2).map((feature, i) => (
                                <span key={i} className="w-2 h-2 bg-green-400 rounded-full"></span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {products.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Custom Products or Bulk Orders?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We specialize in custom sourcing and bulk export solutions. 
                Contact us for personalized quotes and product specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                  Request Custom Quote
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-8 py-4">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

function getProductIcon(category: string): string {
  const icons: { [key: string]: string } = {
    'Fresh Fruits': '🍎',
    'Vegetables': '🥕',
    'Grains & Cereals': '🌾',
    'Spices & Herbs': '🌶️',
    'Nuts & Seeds': '🥜',
    'Dried Fruits': '🍇'
  }
  return icons[category] || '🥕'
}
