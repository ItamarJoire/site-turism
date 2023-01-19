import axios from 'axios'

export const getLocations = axios.get('http://localhost:3001/locations')
  .then(function (response) {
    console.log('AXIOS: ', response);
  })
  .catch(function (error) {
    console.log(error);
  })
