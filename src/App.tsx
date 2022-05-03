import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { dataProps, PageContext } from './contexts/PageContext';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DetailedView } from './pages/DetailedView';

const API_KEY = 'e330036a24874f8c938567074c301cb3';
// https://api.spoonacular.com/recipes/716429/information?apiKey=API_KEY&includeNutrition=true

const App = () => {
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
      <PageContext.Provider
        value={{
          handleChange,
          setPageCount,
          pageCount,
          data,
          pageOffset,
          setPageOffset,
        }}
      >
        <Router>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/:id'} element={<DetailedView />} />
          </Routes>
        </Router>
      </PageContext.Provider>
    </div>
  );
};

export default App;
