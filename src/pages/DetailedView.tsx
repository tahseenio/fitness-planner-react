import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface foodDataProps {
  title: string;
}

export const DetailedView = () => {
  const { id } = useParams();
  const [data, setData] = useState<foodDataProps | {}>({ title: '' });

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const fetchDetailedData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/food/menuItems/${id}?apiKey=e330036a24874f8c938567074c301cb3&`
        );
        // console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    fetchDetailedData();
  }, []);

  return (
    <>
      <div>ID IS: {id}</div>
      {/* <h1>{data.title}</h1> */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
