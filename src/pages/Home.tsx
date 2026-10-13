import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '../data/products'
import SEOHead from '../components/SEOHead'
import { useEffect, useRef, useState } from 'react'

const welcomeText = "Welcome to Blue One General Trading."

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  // Welcome message using native Web Speech API
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(welcomeText)
    utterance.lang = navigator.language || 'en-US'
    utterance.rate = 1.0
    utterance.pitch = 1.0

    // Speak on mount (browsers may block autoplay)
    window.speechSynthesis.speak(utterance)

    // Fallback: speak on first user interaction if autoplay was blocked
    const handleClick = () => {
      window.speechSynthesis.speak(utterance)
      document.removeEventListener('click', handleClick)
    }
    document.addEventListener('click', handleClick, { once: true })
  }, [])

  return (
    <>
      <SEOHead 
        title="Blue One General Trading LLC - Global Food Exporter | Premium Raw Materials"
        description="Leading global exporter of premium raw food materials. We ship fresh fruits, vegetables, grains, spices, and nuts worldwide in containers by trucks and ships."
        keywords="food export, raw materials, global shipping, containers, fresh fruits, vegetables, grains, spices, nuts, UAE, Dubai, Blue One"
      />

      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Featured Products */}
      <FeaturedProductsSection products={featuredProducts} />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* CTA Section */}
      <CTASection />
    </>
  )
}

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null); // ⬅️ Create a ref for the video element

  useEffect(() => {
    const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
    setShowVideo(isLargeScreen);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; // ⬅️ Set speed to 0.25x
    }
  }, [showVideo]); // Run when video is added to DOM

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#05245369] to-[#C19643]">
      {/* 🎥 Background Video */}
      {showVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="none" // lazy load video
          poster='/images/container-load.jpg'
        >
          <source src="/videos/container-load.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!showVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/container-load.jpg')" }}
        />
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-[#C19643] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title text-[var(--primary)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Global Partner
            <span className="block text-[#C19643]">In Food Excellence</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium raw food materials shipped worldwide in containers by trucks and ships. 
            From fresh fruits to exotic spices, we deliver quality that feeds the world.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/products" className="btn-primary text-lg px-8 py-4">
              Explore Products
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-8 py-4">
              Get Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Product Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/5 right-8 text-6xl"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🍎
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 text-5xl"
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            🌾
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/6 text-4xl"
            animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          >
            🥕
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-2 text-5xl"
            animate={{ y: [0, -18, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            🌶️
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: '🚢',
      title: 'Global Shipping',
      description: 'Worldwide delivery via containers, trucks, and ships to ensure fresh products reach every corner of the globe.'
    },
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Hand-selected raw materials meeting international standards with rigorous quality control processes.'
    },
    {
      icon: '📦',
      title: 'Container Export',
      description: 'Efficient container packaging and logistics ensuring products maintain freshness during long journeys.'
    },
    {
      icon: '🌍',
      title: 'Worldwide Reach',
      description: 'Serving customers across continents with reliable supply chains and timely deliveries.'
    }
  ]

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-[var(--primary)]">Why Choose Blue One</h2>
          <p className="section-subtitle">
            Leading the global food export industry with excellence, reliability, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProductsSection({ products }: { products: any[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-[var(--primary)]">Featured Products</h2>
          <p className="section-subtitle">
            Discover our premium selection of raw food materials ready for global export
          </p>
        </motion.div>

        <div className="product-grid">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="card-product">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-[#E6CE8F] to-[#E6CE8F] flex items-center justify-center bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}  
                    >
                      {!product.image && (
                        <span className="text-6xl">
                        {product.category === 'Fresh Fruits' ? '🍎' :
                         product.category === 'Grains & Cereals' ? '🌾' :
                         product.category === 'Nuts & Seeds' ? '🥜' :
                         product.category === 'Spices & Herbs' ? '🌶️' : '🥕'}
                        </span>
                      )}
                    </div>
                    {product.hasSpecialOffer && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Special Offer
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#C19643] font-medium">{product.category}</span>
                      <span className="text-[var(--primary)] font-bold">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/products" className="btn-primary text-lg px-8 py-4">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { number: '50+', label: 'Countries Served' },
    { number: '1000+', label: 'Containers Shipped' },
    { number: '100+', label: 'Product Varieties' },
    { number: '24/7', label: 'Customer Support' }
  ]

  return (
    <section className="section-padding gradient-primary text-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-white">Our Global Impact</h2>
          <p className="section-subtitle text-blue-100">
            Numbers that speak to our commitment to excellence and global reach
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl lg:text-6xl font-bold text-[#C19643] mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-lg lg:text-xl text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-[#E6CE8F]" ref={ref}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-[var(--primary)] mb-6">Ready to Start Exporting?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers worldwide. Get a custom quote for your bulk food material needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Custom Quote
            </Link>
            <Link to="/products" className="btn-outline text-lg px-8 py-4">
              Browse Catalog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
