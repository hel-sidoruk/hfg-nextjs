import { getPagesArray } from '../utils/pages';
import ArticlePreview from './ArticlePreview';
import Pagination from './UI/Pagination';
import Section from './UI/Section';
import Title from './UI/Title';
import styles from '../styles/blog.module.scss';

const Articles = ({ articles, totalPages, currentPage, changePage }) => {
  // console.log(articles);
  // console.log(totalPages);
  // console.log(currentPage);
  const pagesArray = getPagesArray(totalPages);
  return (
    <Section sectionName={styles.articles}>
      <Title variant={'align-center'}>Блог</Title>
      <div className={styles.content}>
        {articles.map(({ id, image, title, descr }) => (
          <ArticlePreview
            key={id}
            image={`/images/articles/${image}`}
            title={title}
            descr={descr}
            id={id}
          />
        ))}
        <Pagination
          pagesArray={pagesArray}
          page={currentPage}
          changePage={changePage}
        />
      </div>
    </Section>
  );
};

export default Articles;
