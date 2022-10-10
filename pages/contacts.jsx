import Head from 'next/head';
import Background from '../components/UI/Background';
// import Image from 'next/image';
// import axios from 'axios'

export default function ContactsPage() {
  // axios.get('http://localhost:3000/api/trainers').then(res => console.log(res.data))
  // axios.get('http://localhost:3000/api/schedule').then(res => console.log(res.data))
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Background page={'contacts-page'} />
    </>
  );
}
