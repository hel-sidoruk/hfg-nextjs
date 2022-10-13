import Link from 'next/link';
import styles from '../styles/article.module.scss';

const ArticlePreview = ({ image, title, descr, id, home }) => {
  return (
    <article className={`${styles.article} ${home ? styles.recent : ''}`}>
      <img src={image} alt="article image" />
      <div className={`${styles.bottom} ${home ? styles.bottomRecent : ''}`}>
        <p className={`${styles.title} ${home ? styles.titleRecent : ''}`}>
          {title}
        </p>
        <p className={`${styles.descr} ${home ? styles.descrRecent : ''}`}>
          {descr}
        </p>
        <Link href={`/blog/${id}`}>
          <a className={`${styles.button} btn`}>Читать полностью</a>
        </Link>
      </div>
    </article>
  );
};

export default ArticlePreview;
