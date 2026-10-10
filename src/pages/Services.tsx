import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>

      <div className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Services */}
        <MainServicesSection />
        
        {/* Process Section */}
        <ProcessSection />
        
        {/* Additional Services */}
        <AdditionalServicesSection />
        
        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#05245369] to-[#C19643]">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title text-[var(--primary)] mb-6">Our Export Services</h1>
          <p className="section-subtitle">
            Comprehensive solutions for global food export, from sourcing to delivery. 
            We handle every aspect of international trade to ensure your success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function MainServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: '🚢',
      title: 'Container Shipping',
      description: 'Full container load (FCL) and less than container load (LCL) shipping solutions worldwide.',
      features: [
        'Refrigerated container options',
        'Real-time tracking',
        'Insurance coverage',
        'Port-to-port delivery'
      ]
    },
    {
      icon: '🏭',
      title: 'Quality Control',
      description: 'Rigorous quality assurance processes to ensure products meet international standards.',
      features: [
        'Pre-shipment inspection',
        'Laboratory testing',
        'Certification compliance',
        'Quality documentation'
      ]
    },
    {
      icon: '📦',
      title: 'Custom Packaging',
      description: 'Tailored packaging solutions to maintain product freshness during long journeys.',
      features: [
        'Moisture control packaging',
        'Custom labeling',
        'Bulk packaging options',
        'Eco-friendly materials'
      ]
    },
    {
      icon: '🌍',
      title: 'Global Logistics',
      description: 'End-to-end logistics management from origin to destination worldwide.',
      features: [
        'Multi-modal transport',
        'Customs clearance',
        'Documentation handling',
        'Delivery coordination'
      ]
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
          <h2 className="section-title text-[var(--primary)]">Core Services</h2>
          <p className="section-subtitle">
            Everything you need for successful international food trade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#C19643]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We understand your requirements and provide expert recommendations.'
    },
    {
      number: '02',
      title: 'Sourcing',
      description: 'Premium quality products sourced from trusted suppliers worldwide.'
    },
    {
      number: '03',
      title: 'Quality Check',
      description: 'Rigorous inspection and testing to ensure international standards.'
    },
    {
      number: '04',
      title: 'Packaging',
      description: 'Custom packaging solutions to maintain freshness during transport.'
    },
    {
      number: '05',
      title: 'Shipping',
      description: 'Efficient container shipping with real-time tracking capabilities.'
    },
    {
      number: '06',
      title: 'Delivery',
      description: 'Safe delivery to your destination with complete documentation.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-[var(--primary)]">Our Process</h2>
          <p className="section-subtitle">
            A streamlined approach that ensures quality and efficiency at every step
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card p-8 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#C19643] to-[#C19643] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[var(--primary)]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#C19643] transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdditionalServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const additionalServices = [
    {
      title: 'Custom Sourcing',
      description: 'Specialized sourcing for unique product requirements and specifications.',
      icon: '🔍'
    },
    {
      title: 'Market Research',
      description: 'Comprehensive market analysis and trend insights for informed decisions.',
      icon: '📊'
    },
    {
      title: 'Documentation Support',
      description: 'Complete assistance with export documentation and regulatory compliance.',
      icon: '📋'
    },
    {
      title: 'Storage Solutions',
      description: 'Temperature-controlled storage facilities for optimal product preservation.',
      icon: '🏪'
    },
    {
      title: 'Financial Services',
      description: 'Flexible payment terms and trade financing options for your convenience.',
      icon: '💳'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your export needs.',
      icon: '🕐'
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
          <h2 className="section-title text-[var(--primary)]">Additional Services</h2>
          <p className="section-subtitle">
            Comprehensive support services to enhance your export experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-[var(--primary)] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
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
    <section className="section-padding gradient-primary text-white" ref={ref}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-white mb-6">Ready to Export?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our expert team handle your food export needs. From sourcing to delivery, 
            we provide end-to-end solutions that ensure your success in global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-8 py-4">
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
