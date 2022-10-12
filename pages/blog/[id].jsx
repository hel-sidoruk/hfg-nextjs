import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleItem from '../../components/ArticleItem';
import { getPaths } from '../../utils/getPaths';
// import Background from '../components/UI/Background';
// import ButtonBack from '../components/UI/ButtonBack';
// export async function getStaticPaths() {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/get-articles-paths`
//   );
//   const paths = response.data.map(({ id }) => ({ params: { id: String(id) } }));
//   return {
//     paths,
//     fallback: false,
//   };
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/articles/${params.id}`
//   );
//   const post = response.data;
//   console.log(post);
//   return {
//     props: {
//       post,
//     },
//   };
//   // Fetch necessary data for the blog post using params.id
// }

const ArticlePage = ({ post }) => {
  // const { title, descr, image, text } = post;
  // const { id } = useParams();
  // const [article, setArticle] = useState({});
  // const [fetchArticleByID, isLoading, error] = useFetching(async () => {
  //   const data = await fetchOneArticle(id);
  //   setArticle(data);
  // });

  // useEffect(() => {
  //   fetchArticleByID();
  //   if (error) console.log(error);
  // }, []);

  // const { image, title, text } = article;

  return (
    <>
      <div>Hey</div>
      {/* <ButtonBack link={'/blog'} />
      <Background page={'blog-page'} /> */}
      {/* <ArticleItem
        title={title}
        // image={`images/articles/${image}`}
        text={text}
      /> */}
    </>
  );
};

export default ArticlePage;
