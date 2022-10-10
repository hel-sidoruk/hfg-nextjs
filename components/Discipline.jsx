import Section from './UI/Section';
import Title from './UI/Title';

const Discipline = ({ title, children }) => {
  return (
    <Section sectionName={'disciplines'}>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

export default Discipline;
