import http from './httpService';
import { apiUrl } from "../config.json";

export const getWeatherReport = () => {    
  const apiEndPoint = `${apiUrl}/weather?q=London&appid=44ee963ea8384bd561e7cce2a9b68f08`;
  return http.get(apiEndPoint);
}

export const searchString = (searchString) => {
  const apiEndPoint = `${apiUrl}/weather?searchString=${searchString}`;
  console.log(";;;;;;;;;;;; data", apiEndPoint)
  return http.get(`${apiEndPoint}`)
}






