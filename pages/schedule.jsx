import Head from 'next/head';
import Background from '../components/UI/Background';
import axios from 'axios';
import Section from '../components/UI/Section';
import Title from '../components/UI/Title';
import ScheduleMobile from '../components/ScheduleMobile';
import Schedule from '../components/Schedule';
import styles from '../styles/schedule.module.scss';

// export async function getStaticProps() {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/schedule`
//   );
//   const schedule = response.data;
//   return {
//     props: { schedule },
//   };
// }
export default function SchedulePage() {
  // export default function SchedulePage({ schedule }) {
  return (
    <>
      <Head>
        <title>Расписание</title>
      </Head>
      <Background page={'trains-page'} />
      <Section sectionName={'disciplines'}>
        <Title>Тренировки</Title>
        {/* <Schedule styles={styles} schedule={schedule} />
        <ScheduleMobile styles={styles} schedule={schedule} /> */}
      </Section>
    </>
  );
}
