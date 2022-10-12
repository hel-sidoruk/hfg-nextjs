import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import TrainersList from '../components/TrainersList';
import Background from '../components/UI/Background';
import Section from '../components/UI/Section';
import Title from '../components/UI/Title';
import styles from '../styles/trainers.module.scss';

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/trainers`
  );
  const trainers = response.data;
  return {
    props: { trainers },
  };
}

export default function TrainersPage({ trainers }) {
  console.log(trainers);
  return (
    <>
      <Head>
        <title>Тренеры</title>
      </Head>
      <Background page={'trainers-page'} />
      <Section sectionName={'trainers'}>
        <Title variant={'trainers-title'}>Наши тренеры</Title>
        {/* <TrainersList trainers={trainers} styles={styles} /> */}
        <div className={styles.btns}>
          <Link href="/schedule">
            <a className={`btn ${styles.btn}`}>Открыть расписание</a>
          </Link>
          <Link href="/contacts">
            <a className={`btn ${styles.btn}`}>Записаться на тренировку</a>
          </Link>
        </div>
      </Section>
    </>
  );
}
