export const FETCH_DATA = "FETCH_DATA";
export const actionFetchData = (loading, data) => {
  return {
    type: FETCH_DATA,
    payload: { loading, data },
  };
};
