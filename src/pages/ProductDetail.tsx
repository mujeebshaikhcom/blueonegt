import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { getProductById, getVisibleProducts } from '../data/products'
import { useValidImage } from '../hooks/useValidImage';
import RelatedProductCard from '../components/RelatedProductCard'; 


export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProductById(id) : null
  
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  
  if (!product) {
    return <Navigate to="/products" replace />
  }
  
  const products = getVisibleProducts();
  function getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  const relatedProducts = (() => {
    const others = products.filter(p => p.id !== id);
    const sameCategory = others.filter(p => p.category === product.category);
  
    if (sameCategory.length >= 3) {
      return getRandomItems(sameCategory, 3);
    }
  
    const fallback = others.filter(p => p.category !== product.category);
    const totalNeeded = 3 - sameCategory.length;
  
    return [...sameCategory, ...getRandomItems(fallback, totalNeeded)];
  })();
  
  

  const validProductImage = useValidImage(product.image);
  
  const getProductIcon = (category: string): string => {
    const icons: { [key: string]: string } = {
      'Fresh Fruits': '🍎',
      'Vegetables': '🥕',
      'Grains & Cereals': '🌾',
      'Spices & Herbs': '🌶️',
      'Nuts & Seeds': '🥜',
      'Dried Fruits': '🍇',
      'Cooking Oils': '🛢️',
      'Meat & Poultry': '🥩',
      'Fish & Seafood': '🐟'
    }
    return icons[category] || '🥕'
  }

  return (
    <>

      <div className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 bg-gray-50 border-b">
          <div className="container-custom">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-[var(--primary)]">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/products" className="text-gray-500 hover:text-[var(--primary)]">Products</Link>
              <span className="text-gray-400">/</span>
              <span className="text-[var(--primary)] font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div 
                  className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#E6CE8F] to-[#E6CE8F] rounded-2xl flex items-center justify-center shadow-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: validProductImage ? `url(${validProductImage})` : undefined,
                  }}
                >
                  {!validProductImage && (
                    <motion.span
                      className="text-9xl"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {getProductIcon(product.category)}
                    </motion.span>
                  )}
                </div>
                
                {/* Floating badges */}
                {product.hasSpecialOffer && (
                  <motion.div
                    className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    Special Offer!
                  </motion.div>
                )}
                
                {product.isFeatured && (
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-[#C19643] text-white px-4 py-2 rounded-full font-bold shadow-lg"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: "spring" }}
                  >
                    Featured
                  </motion.div>
                )}
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-[#E6CE8F] text-[#C19643] px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-6">
                  {product.name}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Special Offer */}
                {product.hasSpecialOffer && product.specialOfferText && (
                  <motion.div
                    className="bg-red-50 border-l-4 border-red-500 p-4 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎉</span>
                      <div>
                        <h3 className="text-red-800 font-bold">Limited Time Offer</h3>
                        <p className="text-red-700">{product.specialOfferText}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                    Request Quote
                  </Link>
                  <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                    Contact Sales
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[var(--primary)]">{product.specifications.minimumOrder}</div>
                    <div className="text-gray-600">Minimum Order</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[var(--primary)]">{product.specifications.shelfLife}</div>
                    <div className="text-gray-600">Shelf Life</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="section-padding bg-gray-50" ref={ref}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Key Features</h2>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#C19643]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Specifications</h2>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="space-y-6">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      >
                        <span className="text-gray-600 font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-[var(--primary)] font-bold">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-4">
                  Related Products
                </h2>
                <p className="text-xl text-gray-600">
                  Explore more premium products from our collection
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (  
                  <RelatedProductCard key={relatedProduct.id} product={relatedProduct} index={index} productIcon={getProductIcon(relatedProduct.category)}/>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Order {product.name}?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get a personalized quote for bulk orders and container shipping worldwide. 
                Our team is ready to help you with custom specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                  Get Custom Quote
                </Link>
                <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-8 py-4">
                  Browse More Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
