import React, { createContext } from 'react';

export interface dataProps {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface PageContextProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  data: dataProps[];
  pageOffset: number;
  setPageOffset: React.Dispatch<React.SetStateAction<number>>;
}

export const PageContext = createContext({} as PageContextProps);
