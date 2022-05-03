import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'e330036a24874f8c938567074c301cb3';
// https://api.spoonacular.com/recipes/716429/information?apiKey=API_KEY&includeNutrition=true

interface dataProps {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

function App() {
  const [data, setData] = useState<dataProps[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(5);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchText === '') return;
        const { data } = await axios.get(
          `https://api.spoonacular.com/food/products/search?apiKey=e330036a24874f8c938567074c301cb3&query=${searchText}&number=${pageCount}&offset=${pageOffset}`
        );
        // console.log(data);
        setData(data.products);
      } catch (error) {
        return;
      }
    };
    fetchData();
  }, [searchText, pageCount, pageOffset]);

  return (
    <div className='App'>
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
