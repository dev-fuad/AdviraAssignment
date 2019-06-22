import { Alert } from 'react-native';

const endPoint = 'http://advira.prologicsoft.com/api/meal/feed';

export const fetchRequest = async (params) => {
  const body = JSON.stringify(params);

  const option = {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  };

  console.log(option);
  return fetch(endPoint, option)
    .then((res) => { console.log(res); return res; })
    .then(response => response.json())
    .then((response) => {
      if (response.success) {
        console.log('Res.Success: ', response);
        return response.meals;
      } else if (response.message && response.message !== 'No meal found.') {
        Alert.alert(response.message);
        console.log('Res.Error: ', response);
        return [];
      }
      console.log('Response: ', response);
      return response;
    });
};