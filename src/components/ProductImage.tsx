import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&q=80&w=800';

export function ProductImage({ src, alt, className, referrerPolicy = 'no-referrer' }: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== FALLBACK_IMAGE) {
      console.log(`Image failed to load: ${imgSrc}. Falling back to default.`);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      referrerPolicy={referrerPolicy}
      onError={handleError}
    />
  );
}
