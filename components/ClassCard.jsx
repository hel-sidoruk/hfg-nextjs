import Link from 'next/link';

const ClassCard = ({ image, text, styles, to }) => {
  return (
    <div className={`${styles.card} ${!image ? styles.noImage : ''}`}>
      {image && <img src={image} alt={text} />}
      {to ? (
        <Link href={to}>
          <a>{text}</a>
        </Link>
      ) : (
        <h3>{text}</h3>
      )}
    </div>
  );
};

export default ClassCard;
