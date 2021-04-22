import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/get',   
  withCredentials: true,
  transformRequest: axios.defaults.transformRequest.concat(
    (data, headers) => {
      return data;
    }
  )
});

export { request }