import React from 'react';
import { Link } from 'react-router-dom';
import GroupItem from './GroupItem';

const Wrestling = () => {
  return (
    <>
      <div className="group">
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
      <div className="discipline__btn-box">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={'/contacts'}
          className="btn btn-fill discipline__btn"
        >
          Записаться на тренировку
        </Link>
      </div>
    </>
  );
};

export default Wrestling;
