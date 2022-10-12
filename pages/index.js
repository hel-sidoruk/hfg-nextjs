import Head from 'next/head';
import { useRef } from 'react';
import AboutHome from '../components/AboutHome';
import Classes from '../components/Classes';
import Hero from '../components/Hero';
import SignUp from '../components/SignUp';
import Background from '../components/UI/Background';
import axios from 'axios';
import News from '../components/News';
import ContactsHome from '../components/ContactsHome';

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/articles`
  );
  const recentArticles = response.data;
  return {
    props: { recentArticles },
  };
}
export default function Home({ recentArticles }) {
  const signRef = useRef();
  // axios.get('http://localhost:3000/api/trainers').then(res => console.log(res.data))
  // axios.get('http://localhost:3000/api/schedule').then(res => console.log(res.data))
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Background page={'home-page'} />
      <Hero home={true} />
      <AboutHome />
      <Classes />
      <SignUp signRef={signRef} />
      <News news={recentArticles} />
      <ContactsHome signRef={signRef} />
    </>
  );
}
