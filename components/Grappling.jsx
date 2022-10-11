import GroupItem from './GroupItem';
import styles from '../styles/discipline.module.scss';
import Link from 'next/link';

const Grappling = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Утренняя группа'}
          time={'20:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Евгений Рутко'}
          first={true}
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

export default Grappling;
