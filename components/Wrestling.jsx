import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import Link from 'next/link';

const Wrestling = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Утренняя группа'}
          time={'8:00 (суббота - 10:00)'}
          days={'Вторник, четверг, суббота'}
          trainer={'Евгений Алешкевич'}
          first={true}
        />
        <GroupItem
          title={'Вечерняя группа'}
          time={'18:30 (суббота - 10:00)'}
          days={'Вторник, четверг, суббота'}
          trainer={'Евгений Алешкевич'}
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

export default Wrestling;
