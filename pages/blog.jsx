import Head from 'next/head';
import Background from '../components/UI/Background';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Блог</title>
      </Head>
      <Background page={'blog-page'} />
    </>
  );
}
