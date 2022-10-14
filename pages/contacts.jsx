import Head from 'next/head';
import Image from 'next/image';
import RegistrationForm from '../components/RegistrationForm';
import Background from '../components/UI/Background';
import MapBlock from '../components/UI/MapBlock';
import Section from '../components/UI/Section';
import Subtitle from '../components/UI/Subtitle';
import Text from '../components/UI/Text';
import Title from '../components/UI/Title';
import styles from '../styles/contacts.module.scss';

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Контактная информация зала Holy Family Gym. Записаться на тренировку в Holy Family Gym"
        />
      </Head>
      <Background page={'contacts-page'} />
      <Section sectionName={'contacts'}>
        <Title>Контакты</Title>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Мы находимся по адресу:</Subtitle>
          <Text variant={styles.text}>
            г. Минск, ул. Михася Лынькова 19/1, вход со двора
          </Text>
        </div>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Телефон:</Subtitle>
          <Text variant={styles.text}>
            <a href="tel:+375292765915">+375(29) 276-59-15</a>
          </Text>
        </div>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Время работы:</Subtitle>
          <Text variant={styles.text}>Ежедневно с 7:00 до 23:00</Text>
          <Text variant={styles.text}>
            Групповые и индивидуальные тренировки для взрослых и детей.
          </Text>
        </div>
        <div className={styles.block}>
          <Subtitle variant={styles.subtitle}>Наши социальные сети:</Subtitle>
          <div className={styles.social}>
            <div className={styles.image}>
              <Image layout="fill" src="/icons/vk.svg" alt="vk icon" />
            </div>
            <a
              className={styles.link}
              target="_blank"
              href="https://vk.com/bjj_holyfamilygym"
              rel="noreferrer"
            >
              Вконтакте
            </a>
          </div>
          <div className={styles.social}>
            <div className={styles.image}>
              <Image layout="fill" src="/icons/instagram.svg" alt="vk icon" />
            </div>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.instagram.com/holyfamilygym/"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className={styles.social}>
            <div className={styles.image}>
              <Image layout="fill" src="/icons/fb.svg" alt="vk icon" />
            </div>
            <a
              className={styles.link}
              target="_blank"
              href="https://facebook.com/HolyFamilyGym/"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className={styles.block}>
          <Text variant={styles.textBig}>
            Мы выдаем всю необходимую экипировку для занятий
          </Text>
        </div>
      </Section>
      <RegistrationForm />
      <MapBlock mapWidth={'100%'} mapHeight={'400px'} />
    </>
  );
}
