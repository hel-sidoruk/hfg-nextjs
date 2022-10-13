import Image from 'next/future/image';
import { useInView } from 'react-intersection-observer';

const ImageAnimated = ({ src, className, alt, wrapClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <>
      <div className={wrapClass} aria-hidden="true" ref={ref}>
        <Image
          width={500}
          height={500}
          className={`${className} ${inView ? 'opacity-1' : 'opacity-0'}`}
          src={src}
          alt={alt}
        />
      </div>
    </>
  );
};

export default ImageAnimated;
