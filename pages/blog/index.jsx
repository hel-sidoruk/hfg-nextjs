import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import Background from '../../components/UI/Background';
import { getPageCount } from '../../utils/pages';

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/articles?limit=9&page=1`
  );
  const articles = response.data.articles;
  const count = response.data.count;
  return {
    props: { articles, count },
  };
}

export default function BlogPage({ articles, count }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(getPageCount(count, innerWidth < 1280 ? 6 : 9));
  }, [currentPage]);
  const changePage = (page) => {
    setCurrentPage(page);
  };
  // fetchArticles(currentPage, innerWidth < 1280 ? 6 : limit)
  return (
    <>
      <Head>
        <title>Блог</title>
      </Head>
      <Background page={'blog-page'} />
      <Articles
        articles={articles}
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </>
  );
}
