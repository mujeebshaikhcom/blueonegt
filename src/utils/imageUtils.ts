export function isValidImageUrl(url: string): boolean {
    return /\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i.test(url);
  }
  
  export function loadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = url;
    });
  }
  