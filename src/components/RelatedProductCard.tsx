import { useValidImage } from '../hooks/useValidImage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function RelatedProductCard({ product, index, productIcon }: { product: any; index: number, productIcon: string }) {
  const validImage = useValidImage(product.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/products/${product.id}`}>
        <div className="card-product">
          <div className="relative overflow-hidden">
            <div
              className="w-full h-48 bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: validImage ? `url(${validImage})` : 'none',
              }}
            >
              {!validImage && (
                <motion.span
                  className="text-5xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {productIcon}
                </motion.span>
              )}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-[var(--primary)] mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-amber-600 font-medium">
                {product.category}
              </span>
              <span className="text-[var(--primary)] font-bold">View →</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default RelatedProductCard;
