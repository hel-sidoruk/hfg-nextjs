import Image from 'next/future/image';
import { useInView } from 'react-intersection-observer';

const ImageAnimated = ({ src, className, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <>
      <div aria-hidden="true" ref={ref}></div>
      <Image
        className={`${className} ${inView ? 'opacity-1' : 'opacity-0'}`}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default ImageAnimated;
