/* eslint-disable react/prop-types */
import React from 'react';
import { Pagination } from '../components/UI/Pagination';
import { getPagesArray } from '../utils/pages';
import ArticlePreview from './ArticlePreview';
import Section from './UI/Section';
import Title from './UI/Title';

const Articles = ({ articles, totalPages, currentPage, changePage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <Section sectionName={'articles'}>
      <Title variant={'align-center'}>Блог</Title>
      <div className="articles__content">
        {articles.map(({ id, image, title, descr }) => (
          <ArticlePreview
            key={id}
            image={`http://localhost:5000/${image}`}
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
