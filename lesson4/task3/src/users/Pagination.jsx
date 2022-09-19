import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, goNext, goPrev }) => {
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = itemsPerPage < 3 || totalItems - (currentPage + 1) * 3 <= 0;
  
  return (
    <div className='pagination'>
      <button 
        className='btn'
        disabled={isPrevPageAvailable}
        onClick={() => goPrev()}
      >
        {!isPrevPageAvailable && `←`}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button 
        className='btn'
        disabled={isNextPageAvailable}
        onClick={() => goNext()}
      >
        {!isNextPageAvailable && `→`}
      </button>     
    </div>
  );
};

export default Pagination;
