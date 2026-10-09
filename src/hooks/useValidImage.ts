import { useEffect, useState } from 'react';
import { isValidImageUrl, loadImage } from '../utils/imageUtils';

export function useValidImage(imageUrl?: string): string | null {
  const [validImage, setValidImage] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrl || !isValidImageUrl(imageUrl)) {
      setValidImage(null);
      return;
    }

    loadImage(imageUrl)
      .then(() => setValidImage(imageUrl))
      .catch(() => setValidImage(null));
  }, [imageUrl]);

  return validImage;
}
