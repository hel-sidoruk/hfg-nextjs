import Head from 'next/head';
import RegistrationForm from '../components/RegistrationForm';
import Background from '../components/UI/Background';
import MapBlock from '../components/UI/MapBlock';
import Text from '../components/UI/Text';
import Title from '../components/UI/Title';

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
      <section className="contacts">
        <div className="container">
          <Title>Контакты</Title>
          <RegistrationForm />
          <Text>
            По любым вопросам звоните по телефону{' '}
            <a href="tel:+375292765915">+375(29) 276-59-15</a>
          </Text>

          <Text>Мы находимся по адресу:</Text>
          <Text>г. Минск, ул. Михася Лынькова 19/1, вход со двора</Text>
        </div>
        <MapBlock mapWidth={'100%'} mapHeight={'400px'} />
      </section>
    </>
  );
}
