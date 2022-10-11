import Head from 'next/head';
// import Background from '../components/UI/Background';
// import axios from 'axios';
// import Section from '../components/UI/Section';
// import Title from '../components/UI/Title';
// import ScheduleMobile from '../components/ScheduleMobile';
// import Schedule from '../components/Schedule';
// import styles from '../styles/schedule.module.scss';
// import useSWR from 'swr';
// export async function getStaticProps() {
//   fetch('/api/schedule').then((res) => console.log(res));

//   // const schedule = response.data;
//   return {
//     props: { schedule },
//   };
// }
export default function SchedulePage() {
  // const { data, error } = useSWR('/api/schedule', fetch);
  // console.log(data);
  // if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Расписание</title>
      </Head>
      {/* <Background page={'trains-page'} />
      <Section sectionName={'disciplines'}>
        <Title>Тренировки</Title>
        <Schedule styles={styles} schedule={schedule} />
        <ScheduleMobile styles={styles} schedule={schedule} />
      </Section> */}
    </>
  );
}
