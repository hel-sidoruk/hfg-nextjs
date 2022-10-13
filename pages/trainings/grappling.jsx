import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Grappling from '../../components/Grappling';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const GrapplingPage = () => {
  return (
    <>
      <Head>
        <title>Грэпплинг</title>
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Грэпплинг">
        <Grappling />
      </Discipline>
    </>
  );
};

export default GrapplingPage;
