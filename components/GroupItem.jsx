import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/group.module.scss';

const GroupItem = ({ title, time, days, trainer, first }) => {
  const [active, setActive] = useState(false);
  function openDescr() {
    if (innerWidth > 640) return;
    active ? setActive(false) : setActive(true);
  }
  useEffect(() => {
    if (innerWidth > 640) return;
    first && setActive(true);
  }, [first]);
  return (
    <div className={`${styles.item} ${active ? styles.itemActive : ''}`}>
      <div className={styles.top} onClick={openDescr}>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={`${styles.descr} ${active ? styles.descrActive : ''}`}>
        <div className={styles.field}>
          <span className={styles.smallText}>Время:</span>
          <p className={styles.text}>{time}</p>
        </div>
        <div className={styles.field}>
          <span className={styles.smallText}>Дни:</span>
          <p className={styles.text}>{days}</p>
        </div>
        <div className={styles.field}>
          <span className={styles.smallText}>Тренер:</span>
          <Link href="/trainers">
            <a className={`${styles.text} ${styles.link}`}>{trainer}</a>
          </Link>
        </div>
      </div>
      <button
        className={`${styles.close} ${active ? styles.closeActive : ''}`}
        onClick={openDescr}
      ></button>
    </div>
  );
};

export default GroupItem;
