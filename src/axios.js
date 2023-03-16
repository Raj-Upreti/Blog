import axios from 'axios';
const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
// axios.defaults.baseURL = 'https://blog.saauzi.com/';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// accesstoken get
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
} else {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  console.log('not login');
}


// // // if accesstoken if expire 
// let isRefreshing = false
// axios.interceptors.response.use((res) => {
//   return res
// },
//   async (error) => {
//     if (error.response.status === 401) {
//       const originalRequest = error.config;

//       // If there's no ongoing request to refresh the access token, send a new one
//       if (!isRefreshing) {
//         isRefreshing = true;

//         const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));

//         await axios.post('/token/refresh', { refreshToken })
//           .then((response) => {
//             const { accessToken } = response.data;

//             // Save the new access token to local storage
//             localStorage.setItem('accessToken', accessToken);

//             // Update the Authorization header with the new access token
//             axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

//             // Retry the original request and any other requests that failed due to token expiration
//             refreshSubscribers.forEach((callback) => callback(accessToken));
//             refreshSubscribers = [];
//           })
//           .catch((error) => {
//             console.error('Failed to refresh access token:', error);
//           })
//           .finally(() => {
//             isRefreshing = false;
//           });
//       }

//       // If there's an ongoing request to refresh the access token, wait for the new token before retrying the original request
//       // return new Promise((resolve, reject) => {
//       //   refreshSubscribers.push((accessToken) => {
//       //     originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
//       //     resolve(axiosInstance(originalRequest));
//       //   });
//       // });
//     }


//   }

// )

// // let isRefreshing = false;
// // let refreshSubscribers = [];

// // axios.interceptors.response.use(
// //   (response) => {
// //     return response;
// //   },
// //   (error) => {
// //     const { config, response: { status } } = error;

// //     if (status === 401) {
// //       const refreshToken = localStorage.getItem('refresh_token');

// //       if (!isRefreshing) {
// //         isRefreshing = true;

// //         axios.post('token/refresh', { refresh_token: refreshToken })
// //           .then(({ data: { access_token } }) => {
// //             localStorage.setItem('access_token', access_token);

// //             // Add the new access token to the failed request headers
// //             config.headers.Authorization = `Bearer ${access_token}`;

// //             // Retry the failed request
// //             refreshSubscribers.forEach((subscriber) => subscriber(access_token));
// //             refreshSubscribers = [];
// //           })
// //           .catch((err) => {
// //             console.log('Failed to refresh access token', err);
// //           })
// //           .finally(() => {
// //             isRefreshing = false;
// //           });
// //       }

// //       return new Promise((resolve) => {
// //         refreshSubscribers.push((access_token) => {
// //           config.headers.Authorization = `Bearer ${access_token}`;
// //           resolve(api(config));
// //         });
// //       });
// //     }

// //     return Promise.reject(error);
// //   }
// // );

// // export default axios;