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
  const news = recentArticles.posts;
  const signRef = useRef();
  // axios.get('http://localhost:3000/api/trainers').then(res => console.log(res.data))
  // axios.get('http://localhost:3000/api/schedule').then(res => console.log(res.data))
  return (
    <>
      <Head>
        <title>Holy Family Gym | Зал единоборств в Минске</title>
        <meta name="theme-color" content="#1F1A1A" />
        <meta
          name="description"
          content="Тренировки по Бразильскому джиу-джитсу, Грэпплингу, Вольной борьбе, Тайскому боксу, ММА. Единоборства в Минске для детей и взрослых. Бразильское джиу-джитсу и грэпплинг Минск. Тайский бокс Минск. ММА Минск. Вольная борьба Минск"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hfg-nextjs.vercel.app/" />
        <meta
          property="og:title"
          content="Holy Family Gym | Зал единоборств в Минске"
        />
        <meta
          property="og:description"
          content="Тренировки по Бразильскому джиу-джитсу, Грэпплингу, Вольной борьбе, Тайскому боксу, ММА. Единоборства в Минске для детей и взрослых. Бразильское джиу-джитсу и грэпплинг Минск. Тайский бокс Минск. ММА Минск. Вольная борьба Минск"
        />
        <meta property="og:image" content="/big-logo.webp" />
      </Head>
      <Background page={'home-page'} />
      <Hero home={true} />
      <AboutHome />
      <Classes />
      <SignUp signRef={signRef} />
      <News news={news} />
      <ContactsHome signRef={signRef} />
    </>
  );
}
