import eventemitter from '../Components/Event'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    eventemitter.emit('SHOW_LOADER')
    return config;
  }, function (error) {
    // Do something with request error
    eventemitter.emit('HIDE_LOADER')
    eventemitter.emit('SHOW_ERROR')
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    eventemitter.emit('HIDE_LOADER')
    // eventemitter.emit('HIDE_ERROR')
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    
    return Promise.reject(error);
  });