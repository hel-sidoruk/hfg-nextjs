import { useMemo } from 'react';
import TableHead from './UI/TableHead';
import TableRow from './UI/TableRow';

const Schedule = ({ schedule, styles }) => {
  const monTueWen = schedule.filter(
    (el) => el.day.includes('Понедельник') || el.day.includes('Вторник')
  );
  const timeArray1 = useMemo(() => {
    return Array.from(new Set(monTueWen.map((el) => el.time))).sort((a, b) =>
      Number(a.replace(':', '')) > Number(b.replace(':', '')) ? 1 : -1
    );
  }, [monTueWen]);
  console.log(monTueWen);
  const timeArray2 = useMemo(() => {
    return Array.from(new Set(schedule.map((el) => el.time))).sort((a, b) =>
      Number(a.replace(':', '')) > Number(b.replace(':', '')) ? 1 : -1
    );
  }, [schedule]);
  const monTueWenArray = ['Понедельник', 'Вторник', 'Среда'];
  const thurFrSatArray = ['Четверг', 'Пятница', 'Суббота'];

  return (
    <div className={styles.schedule}>
      <div className={styles.content}>
        <TableHead days={monTueWenArray} styles={styles} />
        {timeArray1.map((timeEl) => (
          <TableRow
            styles={styles}
            key={timeEl + 1}
            time={timeEl}
            trainings={monTueWen}
            days={monTueWenArray}
          />
        ))}
      </div>
      <div className={styles.content}>
        <TableHead days={thurFrSatArray} styles={styles} />
        {timeArray2.map((timeEl) => (
          <TableRow
            styles={styles}
            key={timeEl + 2}
            time={timeEl}
            trainings={schedule}
            days={thurFrSatArray}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
