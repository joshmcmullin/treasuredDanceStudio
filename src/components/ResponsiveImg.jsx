import React from 'react';

const ResponsiveImage = ({className, srcSet, sizes, src, alt}) => {
  return (
    <img
      className={className}
      srcSet={srcSet}
      sizes={sizes}
      src={src}
      alt={alt}
    />
  )
}

export default ResponsiveImage;