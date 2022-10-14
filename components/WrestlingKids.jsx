import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import Link from 'next/link';

const WrestlingKids = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Детская группа'}
          time={'18:30'}
          days={'Вторник, четверг'}
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

export default WrestlingKids;
