import { useFetchHttp } from './useFetchHttp';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useMessageError } from './useMessageError';

const useFetchGenerateLInk = (path, method, variant) => {
  const { request, loading } = useFetchHttp();
  const auth = useContext(AuthContext);
  const [link, setLink] = useState('');
  const [data, setData] = useState(null);
  const message = useMessageError();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await request(
        `/api/link/${path}`,
        method,
        variant === 'from' ? { from: link } : { to: link },
        {
          Authorization: `Bearer ${auth.token}`
        }
      );
      setData(data.link);
      console.log(data);
    } catch (e) {
      message('Такого посилання не існує');
    }
  };
  return {
    loading,
    data,
    setLink,
    link,
    submitHandler
  };
};

export default useFetchGenerateLInk;
