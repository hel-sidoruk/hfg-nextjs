/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paginationFunction } from '../../utils/pages';

export const Pagination = ({ pagesArray, page, changePage }) => {
  const history = useNavigate();
  const handleClick = (e) => {
    changePage(e.target.innerText);
    history(`/blog?page=${e.target.innerText}`);
    // window.scrollTo(0, 0);
  };

  const paginationBtns = paginationFunction(pagesArray, page);
  const lastPage = pagesArray[pagesArray.length - 1];
  return (
    <div className="pagination">
      {paginationBtns.map((el) => (
        <button
          onClick={handleClick}
          key={el}
          className={`btn page-btn ${page == el ? 'page--current' : 'page'}`}
        >
          {el}
        </button>
      ))}
      <span className={`dots ${page > 3 ? 'dots--active' : ''}`}>...</span>
      <span className={`dots ${page < lastPage - 2 ? 'dots--active' : ''}`}>
        ...
      </span>
    </div>
  );
};

export default Pagination;
