import React from 'react';

export const getUserJoinStorage = () => {
  const [key, setKey] = React.useState<any>({});
  React.useEffect(() => {
    const cache = localStorage.getItem('user:join');
    setKey(JSON.parse(cache));
  }, []);
  return JSON.parse(key);
};

export const setUserJoinStorage = (data) => {
  localStorage.setItem('user:join', JSON.stringify(data));
};
