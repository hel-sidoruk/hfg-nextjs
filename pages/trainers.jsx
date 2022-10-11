import Head from 'next/head';
import Background from '../components/UI/Background';

export default function TrainersPage() {
  return (
    <>
      <Head>
        <title>Тренеры</title>
      </Head>
      <Background page={'trainers-page'} />
    </>
  );
}
