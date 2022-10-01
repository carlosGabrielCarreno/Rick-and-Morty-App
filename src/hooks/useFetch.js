import { getFetch } from '../helpers/getFetch';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    console.log('useEffect');
    getFetch({ url, state, setState });
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
