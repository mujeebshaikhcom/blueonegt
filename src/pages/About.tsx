import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>

      <div className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Company Story */}
        <StorySection />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* Team Section */}
        <TeamSection />
        
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
          <h1 className="section-title text-[var(--primary)] mb-6">About Blue One General Trading</h1>
          <p className="section-subtitle">
            Leading the global food export industry with premium quality raw materials, 
            innovative container shipping solutions, and unwavering commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Founded with a vision to connect global markets through premium food exports, 
                Blue One General Trading LLC has emerged as a trusted partner for businesses worldwide 
                seeking high-quality raw food materials.
              </p>
              <p>
                Based in the UAE, we leverage Dubai's strategic location as a global trade hub 
                to efficiently serve customers across continents. Our expertise in container 
                shipping and logistics ensures that fresh, quality products reach every corner 
                of the world.
              </p>
              <p>
                From humble beginnings to becoming a recognized name in international food trade, 
                our journey has been driven by an unwavering commitment to quality, reliability, 
                and customer satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-96 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden bg-cover bg-center"
              style={{backgroundImage: "url('/images/about/about-1.jpg')"}}>
                {/* Overlay to enhance text visibility */}
              <div className="absolute inset-0 bg-white/60  rounded-2xl z-0" />

              <div className="text-center relative z-10" >
                <motion.div
                  className="text-8xl mb-4"
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
                  🌍
                </motion.div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">Global Reach</h3>
                <p className="text-gray-600">Serving 50+ Countries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: '🏆',
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in sourcing, processing, and packaging to ensure premium quality products reach our customers.'
    },
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships through consistent delivery, transparent communication, and dependable service.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to sustainable practices that protect our environment while supporting local farming communities.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Continuously improving our processes, logistics, and technology to provide better solutions for our global customers.'
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
          <h2 className="section-title text-[var(--primary)]">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do and drive our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '1000+', label: 'Successful Shipments' },
    { number: '24/7', label: 'Customer Support' }
  ]

  const teamMembers = [
    {
      name: 'Asif Hanif Khanda',
      role: 'Director',
      expertise: 'Corporate strategy, market expansion, and stakeholder relations'
    },
    {
      name: 'Rafique Nadaf',
      role: 'Head Manager',
      expertise: 'Customs compliance, international shipping, and freight forwarding'
    },
    {
      name: 'Zaid Shaikh',
      role: 'Manager',
      expertise: 'Operations oversight, team coordination, and process optimization'
    },
    {
      name: 'Ahmed Asif Khand',
      role: 'Business Development Manager',
      expertise: 'Product quality standards, inspection protocols, and regulatory compliance'
    },
    {
      name: 'Zaid Shaikh',
      role: 'Quality Control Lead',
      expertise: 'Market research, client acquisition, and partnership development'
    },
    {
      name: 'Zaid Shaikh',
      role: 'Customer Success Manager',
      expertise: 'Client relationship management, support escalation, and satisfaction optimization'
    }
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
          <h2 className="section-title text-white">Our Expertise</h2>
          <p className="section-subtitle text-blue-100">
            Backed by years of experience and a dedicated team of professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#C19643] text-white text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#C19643]">{member.name}</h3>
              <p className="text-[#E6CE8F] text-sm font-bold mb-4">{member.role}</p>
              <p className="text-gray-300 text-xs font-bold line-clamp-2">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Our team combines deep industry knowledge with cutting-edge logistics expertise 
            to deliver exceptional results. From sourcing specialists to shipping coordinators, 
            every team member is committed to your success.
          </p>
        </motion.div>
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
          <h2 className="section-title text-[var(--primary)] mb-6">Partner With Us</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to experience the Blue One difference? Join our global network of satisfied 
            customers and discover why we're the preferred choice for premium food exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Partnership
            </Link>
            <Link to="/products" className="btn-outline text-lg px-8 py-4">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
