import { useMemo } from 'react';
import ScheduleBlock from './UI/ScheduleBlock';

const ScheduleMobile = ({ schedule, styles }) => {
  const monWenFr = schedule.filter((el) => el.day.includes('Понедельник'));
  const tueThur = schedule.filter((el) => el.day.includes('Вторник'));
  const saturday = schedule.filter((el) => el.day.includes('Суббота'));

  const timeArray1 = useMemo(() => {
    return Array.from(new Set(monWenFr.map((el) => el.time)));
  }, [monWenFr]);

  const timeArray2 = useMemo(() => {
    return Array.from(new Set(tueThur.map((el) => el.time)));
  }, [tueThur]);

  const timeArray3 = useMemo(() => {
    return Array.from(new Set(saturday.map((el) => el.time)));
  }, [saturday]);

  return (
    <div className={styles.mobile}>
      <div className="schedule-mobile__content">
        <ScheduleBlock
          styles={styles}
          day={'Понедельник'}
          trainings={monWenFr}
          timeArray={timeArray1}
        />
        <ScheduleBlock
          styles={styles}
          day={'Вторник'}
          trainings={tueThur}
          timeArray={timeArray2}
        />
        <ScheduleBlock
          styles={styles}
          day={'Среда'}
          trainings={monWenFr}
          timeArray={timeArray1}
        />
        <ScheduleBlock
          styles={styles}
          day={'Четверг'}
          trainings={tueThur}
          timeArray={timeArray2}
        />
        <ScheduleBlock
          styles={styles}
          day={'Пятница'}
          trainings={monWenFr}
          timeArray={timeArray1}
        />
        <ScheduleBlock
          styles={styles}
          day={'Суббота'}
          trainings={saturday}
          timeArray={timeArray3}
        />
      </div>
    </div>
  );
};

export default ScheduleMobile;
