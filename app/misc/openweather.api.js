/* eslint-env browser */
const axios = require('axios');

const key = require('./openweather.key');


module.exports = { fetchCurrentWeather(search) {
  const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${search}&type=accurate&APPID=${key}`);
  return axios.get(encodedURI).then(response => response.data);
},
  fetchForecast(search) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${search}&type=accurate&APPID=${key}&cnt=5`);
    return axios.get(encodedURI).then(response => response.data);
  } };
