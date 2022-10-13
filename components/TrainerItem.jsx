import { useState } from 'react';
import Text from './UI/Text';
import { useInView } from 'react-intersection-observer';
import Title from './UI/Title';
import ImageAnimated from './UI/ImageAnimated';
// import Image from 'next/image';
// import ImageAnimated from './UI/ImageAnimated';

export const TrainerItem = ({ id, image, name, text, disciplines, styles }) => {
  const textArray = text.replace(/\r/g, '').split('\n').filter(Boolean);
  const [active, setActive] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const openText = () => {
    active ? setActive(false) : setActive(true);
  };
  // const css = { width: '100%', maxHeight: '75vh', height: '100%' };
  return (
    <div
      id={id}
      ref={ref}
      className={`${styles.item} ${
        inView ? styles.imageAnim1 : styles.imageAnim0
      }`}
    >
      <ImageAnimated
        className={styles.image}
        src={`/images/trainers/${image.replace('.jpg', '.webp')}`}
        alt="trainer photo"
      />
      <div className={styles.info}>
        <Title variant={styles.title}>{name}</Title>
        <Title variant={styles.disciplines}>{disciplines}</Title>
        <div
          className={`t${styles.textBlock} ${
            active ? styles.textBlockActive : ''
          }`}
          onClick={openText}
        >
          {textArray.map((elem, i) => (
            <Text variant={styles.text} key={i}>
              {elem}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};
