import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser';


export default function Contact() {
  return (
    <>

      <div className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Contact Form & Info */}
        <ContactSection />
        
        {/* Office Locations */}
        <LocationsSection />
        
        {/* FAQ Section */}
        <FAQSection />
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title text-[var(--primary)] mb-6">Get In Touch</h1>
          <p className="section-subtitle">
            Ready to start your global food export journey? Contact our expert team 
            for personalized quotes and comprehensive export solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const initialFormData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productInterest: '',
    quantity: '',
    message: ''
  }
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState(initialFormData)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Handle form submission here
  emailjs
    .send(
      "service_ooc015g",   // e.g., "service_123abc"
      "template_nx97iwa",  // e.g., "template_xxx123"
      formData,
      "_BetQNS0DcfNIgU96"       // e.g., "public key"
    )
    .then(() => {
      alert("Thank you for your inquiry! We will contact you within 24 hours.");
      setFormData(initialFormData);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section-padding bg-white" ref={ref} id='quote-section'>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your country"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Product Interest</label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="Fresh Fruits">Fresh Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Grains & Cereals">Grains & Cereals</option>
                    <option value="Spices & Herbs">Spices & Herbs</option>
                    <option value="Nuts & Seeds">Nuts & Seeds</option>
                    <option value="Dried Fruits">Dried Fruits</option>
                    <option value="Custom Requirements">Custom Requirements</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="e.g., 20 tons, 2 containers"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Tell us about your specific requirements, delivery timeline, or any questions you have..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Office Info */}
              <div className="card p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Head Office</h3>
                  <p className="text-gray-600">Office #112 - Al-Khoory Hill Bldg</p>
                  <p className="text-gray-600">Ras-Al-Khor Ind. Area 2</p>
                  <p className="text-gray-600">Al-Manama Street</p>
                  <p className="text-gray-600">Dubai, United Arab Emirates</p>
                
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Phone Support</h3>
                    <p className="text-gray-600"><a href="tel:+971588656122">+971 58-8656122</a></p>
                    <p className="text-gray-600"><a href="tel:04-3276151">Tel: 04-3276151</a> Available 24/7 for urgent inquiries</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Email Us</h3>
                    <p className="text-gray-600"><a href="mailto:info@Blue One.ae">info@Blue One.ae</a></p>
                    <p className="text-gray-600"><a href="mailto:Blue Onefood@gmail.com">Blue Onefood@gmail.com</a></p>
                    <p className="text-gray-600">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">UAE Time (GMT+4)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LocationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const locations = [
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'Head Office & Operations',
      description: 'Strategic hub for global trade and logistics coordination',
      address: 'Al-Awir Ras-Al-Khor Ind. Area 3, Dubai, UAE'
    },
    {
      city: 'Moscow',
      country: 'Russia',
      role: 'Sourcing Office',
      description: 'Direct sourcing from premium suppliers across the transcontinental market',
      address: 'Yermolayevskiy Ln, 7, Moscow, Russia'
    },
    {
      city: 'Dar-Es-Salam',
      country: 'Tanzania',
      role: 'Regional Office',
      description: 'Natural hub for trade and access to the broader East African market',
      address: 'Uhuru Street, Plot 14, Dar-Es-Salam, Tanzania'
    }
  ]

  return (
    <section className="hidden section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-[var(--primary)]">Our Global Presence</h2>
          <p className="section-subtitle">
            Strategically located offices to serve you better worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{location.city}</h3>
              <p className="text-gray-600 mb-3">{location.country}</p>
              <p className="text-amber-600 font-medium mb-4">{location.role}</p>
              <p className="text-gray-600 text-sm">{location.description}</p>
              <p className="text-gray-400 text-xs mt-4">{location.address}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is your minimum order quantity?',
      answer: 'Minimum order quantities vary by product type. Generally, we require 5-25 tons depending on the product. Contact us for specific MOQ requirements for your desired products.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times depend on the destination and shipping method. Container shipping typically takes 15-45 days depending on the route. We provide real-time tracking for all shipments.'
    },
    {
      question: 'Do you provide quality certificates?',
      answer: 'Yes, we provide comprehensive quality certificates including origin certificates, phytosanitary certificates, and laboratory test reports for all our products.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We offer flexible payment terms including Letter of Credit (L/C), Telegraphic Transfer (T/T), and other mutually agreed terms based on the order size and customer relationship.'
    },
    {
      question: 'Can you source custom products?',
      answer: 'Absolutely! We specialize in custom sourcing based on your specific requirements. Our global network allows us to source unique products that meet your exact specifications.'
    },
    {
      question: 'Do you handle customs clearance?',
      answer: 'Yes, we provide complete documentation support and can assist with customs clearance procedures. Our experienced team ensures smooth clearance at both origin and destination ports.'
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
          <h2 className="section-title text-[var(--primary)]">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our export services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[var(--primary)]">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
