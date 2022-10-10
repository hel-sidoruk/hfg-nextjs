import React from 'react';
import { Link } from 'react-router-dom';
import GroupItem from './GroupItem';

const WrestlingKids = () => {
  return (
    <>
      <div className="group">
        <GroupItem
          title={'Детская группа'}
          time={'18:30'}
          days={'Вторник, четверг'}
          trainer={'Евгений Алешкевич'}
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

export default WrestlingKids;
