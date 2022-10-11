import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
import WrestlingKids from '../../components/WrestlingKids';

const WrestlingKidsPage = () => {
  return (
    <>
      <Head>
        <title>Вольная борьба для детей</title>
      </Head>
      <ButtonBack link={'/schedule'} />
      <Background page={'trains-page'} />
      <Discipline title="Вольная борьба для детей">
        <WrestlingKids />
      </Discipline>
    </>
  );
};

export default WrestlingKidsPage;
