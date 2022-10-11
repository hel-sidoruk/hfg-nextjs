import Head from 'next/head';
import Background from '../components/UI/Background';

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Background page={'contacts-page'} />
    </>
  );
}
