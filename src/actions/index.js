import { getApiData } from '../api/index';

export function getCriptoData(text) {
  return (dispatch) => {
    getApiData(text).then((data) => {   
      dispatch({
        type: 'CURRENCY_API',
        data
      });
    });
  };
}