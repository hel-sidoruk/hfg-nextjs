import Link from 'next/link';
import { useEffect, useState } from 'react';

const ScheduleBlock = ({ day, trainings, timeArray, styles }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    day === 'Понедельник' && setActive(true);
  }, []);

  return (
    <div
      className={`${styles.block} ${active ? styles.blockActive : ''}`}
      onClick={() => (active ? setActive(false) : setActive(true))}
    >
      <div className={`${styles.mobileHeader} ${styles.cell} ${styles.head}`}>
        {day}
      </div>
      <ul className={`${styles.list} ${active ? styles.listActive : ''}`}>
        {timeArray.map((timeEl) => (
          <li key={timeEl + day} className={styles.item}>
            <div className={`${styles.cell}`}>{timeEl}</div>
            <div className={`${styles.cell} ${styles.training}`}>
              {trainings
                .filter((el) => el.time === timeEl)
                .map(({ id, link, name }) => (
                  <Link key={id + day} href={link}>
                    <a className={styles.trainingBlock}>{name}</a>
                  </Link>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleBlock;
