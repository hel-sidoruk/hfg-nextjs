import React from 'react';
import { Link } from 'react-router-dom';
import GroupItem from './GroupItem';

const MuaiThai = () => {
  return (
    <>
      <div className="group">
        <GroupItem
          title={'Основная группа'}
          time={'20:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Виктор Никонов'}
          first={true}
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

export default MuaiThai;
