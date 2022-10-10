import React from 'react';
import { Link } from 'react-router-dom';
import GroupItem from './GroupItem';

const Mma = () => {
  return (
    <>
      <div className="group">
        <GroupItem
          title={'Утренняя группа'}
          time={'18:30'}
          days={'Понедельник, среда, пятница'}
          trainer={'Павел Старицкий'}
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

export default Mma;
