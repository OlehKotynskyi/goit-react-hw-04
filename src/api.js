import axios from 'axios';

const API_KEY = '5V2KHkwhZhqKw_ZkJBMGVhK8cJ4wNSchz0-i1Jd5V08';
const BASE_URL = 'https://api.unsplash.com/';

export const fechGallery = async (query, page) => {
   const response = await axios.get(
      `${BASE_URL}search/photos?query=${query}&client_id=${API_KEY}`,
      {
         params: { query, page, per_page: 12 },
      }
   );
   return response.data.results;
};
