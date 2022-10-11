import Link from 'next/link';
import styles from '../styles/article.module.scss';

const ArticlePreview = ({ image, title, descr, id, home }) => {
  return (
    <article
      className={`${styles.article} ${
        home || innerWidth <= 1024 ? styles.recent : ''
      }`}
    >
      <img src={image} alt="article image" />
      <div className={`${styles.bottom} ${styles.bottomRecent}`}>
        <h4 className={`${styles.title} ${styles.titleRecent}`}>{title}</h4>
        <p className={`${styles.descr} ${styles.descrRecent}`}>{descr}</p>
        <Link href={`/article/${id}`}>
          <a className={`${styles.button} btn`}>Читать полностью</a>
        </Link>
      </div>
    </article>
  );
};

export default ArticlePreview;
