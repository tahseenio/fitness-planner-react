import React, { useContext } from 'react';
import { Item } from '../components/Item';
import { dataProps, PageContext } from '../contexts/PageContext';

export const Home = () => {
  const {
    handleChange,
    setPageCount,
    pageCount,
    data,
    pageOffset,
    setPageOffset,
  } = useContext(PageContext);

  return (
    <>
      <input
        type='text'
        placeholder='enter food here'
        onChange={(e) => handleChange(e)}
      />
      <div>
        <p>Items shown:</p>
        <button onClick={() => setPageCount(10)}>10</button>
        <button onClick={() => setPageCount(20)}>20</button>
        <button onClick={() => setPageCount(50)}>50</button>
        <button onClick={() => setPageCount(5)}>Reset Page Count</button>
      </div>
      <div>
        {pageOffset !== 0 && (
          <button onClick={() => setPageOffset((state) => state - pageCount)}>
            Show previous {pageCount} items
          </button>
        )}
        <button onClick={() => setPageOffset((state) => state + pageCount)}>
          Show next {pageCount} items
        </button>
      </div>
      {data.map((elem) => (
        <Item
          key={elem.id}
          title={elem.title}
          image={elem.image}
          id={elem.id}
        />
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
