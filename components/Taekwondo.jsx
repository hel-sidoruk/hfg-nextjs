import React from 'react';
import { Link } from 'react-router-dom';
import GroupItem from './GroupItem';

const Taekwondo = () => {
  return (
    <>
      <div className="group">
        <GroupItem
          title={'Детская группа'}
          time={'18:00'}
          days={'Понедельник, среда, пятница'}
          trainer={'Тимофей Старовойтов'}
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

export default Taekwondo;
