import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import Link from 'next/link';

const Taekwondo = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Детская группа'}
          time={'18:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Тимофей Старовойтов'}
        />
      </div>
      <div className={styles.btnBox}>
        <Link href="/contacts#form">
          <a className={`btn btn-fill ${styles.btn}`}>
            Записаться на тренировку
          </a>
        </Link>
      </div>
    </>
  );
};

export default Taekwondo;
