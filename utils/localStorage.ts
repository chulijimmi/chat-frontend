import React from 'react';

export const getUserJoinStorage = () => {
  const [key, setKey] = React.useState<any>({});
  React.useEffect(() => {
    setKey(localStorage.getItem('user:join'));
  }, []);
  return JSON.parse(key);
};

export const setUserJoinStorage = (data) => {
  localStorage.setItem('user:join', JSON.stringify(data));
};
