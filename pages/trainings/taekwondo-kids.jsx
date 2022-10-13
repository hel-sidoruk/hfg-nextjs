import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Taekwondo from '../../components/Taekwondo';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const TaekwondoKidsPage = () => {
  return (
    <>
      <Head>
        <title>Таэквондо</title>
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Таэквондо">
        <Taekwondo />
      </Discipline>
    </>
  );
};

export default TaekwondoKidsPage;
