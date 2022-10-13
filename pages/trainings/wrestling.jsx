import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';
import Wrestling from '../../components/Wrestling';

const WrestlingPage = () => {
  return (
    <>
      <Head>
        <title>Вольная борьба</title>
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="Вольная борьба">
        <Wrestling />
      </Discipline>
    </>
  );
};

export default WrestlingPage;
