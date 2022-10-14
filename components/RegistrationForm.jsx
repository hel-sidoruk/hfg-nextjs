import { useState } from 'react';
import { disciplinesByDay } from '../utils/disciplines';
import Dropdown from './UI/Dropdown';
import styles from '../styles/form.module.scss';
import Section from './UI/Section';
import Subtitle from './UI/Subtitle';

const RegistrationForm = ({ signRef }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [day, setDay] = useState('');
  const [dayActive, setDayActive] = useState(false);
  const [discipline, setDiscipline] = useState('');
  const [disciplineActive, setDisciplineActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    console.log(day);
    console.log(discipline);
  };

  const handleDayClick = () => {
    setDisciplineActive(false);
    discipline && setDiscipline('');
  };

  const handleDisciplineClick = () => {
    setDayActive(false);
  };

  return (
    <Section sectionName={styles.box}>
      <Subtitle variant={styles.title}>
        Запишитесь на первую бесплатную тренировку, заполнив форму на сайте
      </Subtitle>
      <form ref={signRef} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Имя *</label>
          <input
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={'Введите Ваше имя'}
            type="text"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="tel">Телефон *</label>
          <input
            id="tel"
            className={styles.input}
            value={phone}
            placeholder={'Введите Ваш телефон'}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
        </div>
        <div className={styles.field}>
          <label onClick={() => setDayActive(true)}>День недели *</label>
          <Dropdown
            onClick={handleDayClick}
            active={dayActive}
            setActive={setDayActive}
            state={day}
            setState={setDay}
            initialText={'Выберите день недели'}
            values={[
              'Понедельник',
              'Вторник',
              'Среда',
              'Четверг',
              'Пятница',
              'Суббота',
            ]}
          />
        </div>
        <div className={styles.field}>
          <label onClick={() => setDisciplineActive(true)}>Тренировка *</label>
          <Dropdown
            onClick={handleDisciplineClick}
            active={disciplineActive}
            setActive={setDisciplineActive}
            state={discipline}
            setState={setDiscipline}
            initialText={'Выберите тренировку'}
            values={disciplinesByDay[day] ? disciplinesByDay[day] : []}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className={`btn btn-fill ${styles.btn}`}
        >
          Отправить
        </button>
      </form>
    </Section>
  );
};

export default RegistrationForm;
