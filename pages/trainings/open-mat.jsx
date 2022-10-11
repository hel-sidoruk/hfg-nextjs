import Head from 'next/head';
import Discipline from '../../components/Discipline';
import OpenMat from '../../components/OpenMat';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const OpenMatPage = () => {
  return (
    <>
      <Head>
        <title>Бразильское джиу-джитсу</title>
      </Head>
      <ButtonBack link={'/schedule'} />
      <Background page={'trains-page'} />
      <Discipline title="Бразильское джиу-джитсу">
        <OpenMat />
      </Discipline>
    </>
  );
};

export default OpenMatPage;
