import axios from 'axios';

const GetCountries = () => {
  return axios.get('https://restcountries.com/v3.1/all')

    .then(resp => resp.data).catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

const axiosService = {
    GetCountries,
};

export default axiosService;
