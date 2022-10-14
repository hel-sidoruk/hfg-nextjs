import Link from 'next/link';
import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';

const MuaiThai = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Основная группа'}
          time={'20:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Виктор Никонов'}
          to={'#viktor-nikonov'}
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

export default MuaiThai;
