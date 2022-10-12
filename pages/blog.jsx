import axios from 'axios';
import Head from 'next/head';
// import { useEffect, useState } from 'react';
// import Articles from '../components/Articles';
import Background from '../components/UI/Background';
// import { getPageCount } from '../utils/pages';

// export async function getStaticProps() {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/articles`
//   );
//   const articles = response.data;
//   return {
//     props: { articles },
//   };
// }

export default function BlogPage() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // useEffect(() => {
  //   const totalCount = articles.count;
  //   setTotalPages(getPageCount(totalCount, innerWidth < 1280 ? 6 : 4));
  // }, []);
  // const changePage = (page) => {
  //   setCurrentPage(page);
  // };
  // fetchArticles(currentPage, innerWidth < 1280 ? 6 : limit)
  return (
    <>
      <Head>
        <title>Блог</title>
      </Head>
      <Background page={'blog-page'} />
      {/* <Articles
        articles={articles}
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      /> */}
    </>
  );
}
