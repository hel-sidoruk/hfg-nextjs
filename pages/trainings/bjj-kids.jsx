import Head from 'next/head';
import BjjKids from '../../components/BjjKids';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const BjjKidsPage = () => {
  return (
    <>
      <Head>
        <title>Бразильское джиу-джитсу для детей</title>
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Бразильское джиу-джитсу для детей">
        <BjjKids />
      </Discipline>
    </>
  );
};

export default BjjKidsPage;
