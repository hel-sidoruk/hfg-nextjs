import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import Link from 'next/link';

const Mma = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Утренняя группа'}
          time={'18:30'}
          days={'Понедельник, среда, пятница'}
          trainer={'Павел Старицкий'}
          to={'#pavel-staritskiy'}
        />
      </div>
      <div className={styles.btnBox}>
        <Link href="/contacts">
          <a className={`btn btn-fill ${styles.btn}`}>
            Записаться на тренировку
          </a>
        </Link>
      </div>
    </>
  );
};

export default Mma;
