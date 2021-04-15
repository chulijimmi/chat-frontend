export const getUserJoinStorage = () => {
  const data = window.localStorage.getItem('user:join');
  return JSON.parse(data);
};

export const setUserJoinStorage = (data) => {
  window.localStorage.setItem('user:join', JSON.stringify(data));
};
