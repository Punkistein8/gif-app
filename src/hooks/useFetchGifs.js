import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs.js'

export const useFetchGifs = (categoria) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsState = async () => {
    const gifs = await getGifs(categoria);
    setGifs(gifs);
    setIsLoading(false);
  }

  useEffect(() => {
    getGifsState();
  }, []);

  return {
    gifs,
    isLoading
  }

}