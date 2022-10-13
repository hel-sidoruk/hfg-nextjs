import Head from 'next/head';
import Discipline from '../../components/Discipline';
import Mma from '../../components/Mma';
import Background from '../../components/UI/Background';
import ButtonBack from '../../components/UI/ButtonBack';

const MmaPage = () => {
  return (
    <>
      <Head>
        <title>MMA</title>
      </Head>
      <ButtonBack />
      <Background page={'trains-page'} />
      <Discipline title="MMA">
        <Mma />
      </Discipline>
    </>
  );
};

export default MmaPage;
