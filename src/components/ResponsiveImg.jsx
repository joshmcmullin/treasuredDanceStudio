import React from 'react';

// const ResponsiveImage = ({className, srcSet, sizes, src, alt}) => {
//   return (
//     <img
//       className={className}
//       srcSet={srcSet}
//       sizes={sizes}
//       src={src}
//       alt={alt}
//     />
//   )
// }

const ResponsiveImage = ({className, avifSrcSet, webpSrcSet, sizes, src, alt}) => {
  return (
    <div className={className}>
      <picture>
        {avifSrcSet && <source srcSet={avifSrcSet} type='image/avif'/>}
        {webpSrcSet && <source srcSet={webpSrcSet} type='image/webp'/>}
        <img src={src} sizes={sizes} alt={alt} />
      </picture>
    </div>
  )
}

export default ResponsiveImage;