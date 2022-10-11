import RegistrationForm from './RegistrationForm';
// import MapBlock from './UI/MapBlock';
import Section from './UI/Section';

const ContactsHome = ({ signRef }) => {
  return (
    <Section sectionName={'contacts-home'}>
      <RegistrationForm signRef={signRef} />
      {/* <MapBlock
        mapWidth={'100%'}
        mapHeight={innerWidth > 1024 ? '100%' : '250px'}
      /> */}
    </Section>
  );
};

export default ContactsHome;
