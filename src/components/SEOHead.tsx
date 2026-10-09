import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export default function SEOHead({ 
  title = "Palhar Food Products LLC - Global Food Exporter | Premium Raw Materials",
  description = "Leading global exporter of premium raw food materials. We ship fresh fruits, vegetables, grains, spices, and nuts worldwide in containers by trucks and ships.",
  keywords = "food export, raw materials, global shipping, containers, fresh fruits, vegetables, grains, spices, nuts, UAE, Dubai, palhar",
  image = "/og-preview.png",
  url
}: SEOHeadProps) {
  const location = useLocation()
  const currentUrl = url || `https://palhar.ae${location.pathname}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let element = document.querySelector(selector) as HTMLMetaElement
      
      if (!element) {
        element = document.createElement('meta')
        if (property) {
          element.setAttribute('property', name)
        } else {
          element.setAttribute('name', name)
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Palhar Food Products LLC')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:site_name', 'Palhar Food Products LLC', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', currentUrl)

  }, [title, description, keywords, image, currentUrl])

  return null
}
