import React from 'react';

const ResponsiveImage = ({avifSrcSet, webpSrcSet, sizes, src, alt}) => {
  return (
    <picture>
      {avifSrcSet && <source srcSet={avifSrcSet} type='image/avif'/>}
      {webpSrcSet && <source srcSet={webpSrcSet} type='image/webp'/>}
      <img src={src} sizes={sizes} alt={alt} />
    </picture>
  )
}

export default ResponsiveImage;