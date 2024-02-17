import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, className, alt }) => {
  const imgRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );

    const currentImgRef = imgRef.current; 

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isIntersecting ? src : ''}
      className={className}
      alt={alt}
      style={{ opacity: isIntersecting ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
    />
  );
};

export default LazyImage;