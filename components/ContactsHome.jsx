import RegistrationForm from './RegistrationForm';
import Section from './UI/Section';

const ContactsHome = ({ signRef }) => {
  return (
    <Section sectionName={'contacts-home'}>
      <RegistrationForm signRef={signRef} />
    </Section>
  );
};

export default ContactsHome;
