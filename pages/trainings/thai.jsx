import Head from 'next/head';
import MuaiThai from '../../components/MuaiThai';
import Background from '../../components/UI/Background';
import Discipline from '../../components/Discipline';
import ButtonBack from '../../components/UI/ButtonBack';

const ThaiPage = () => {
  return (
    <>
      <Head>
        <title>Тайский бокс</title>
      </Head>
      <ButtonBack link={'/schedule'} />
      <Background page={'trains-page'} />
      <Discipline title="Тайский бокс">
        <MuaiThai />
      </Discipline>
    </>
  );
};

export default ThaiPage;
