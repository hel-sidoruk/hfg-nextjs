import Head from 'next/head';
import AboutContent from '../components/AboutContent';
import Hero from '../components/Hero';
import Background from '../components/UI/Background';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О клубе</title>
      </Head>
      <Background page={'about-page'} />
      <Hero />
      <AboutContent />
    </>
  );
}
