import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost:3000/api',//`http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/api`,
  headers: {
    'Content-Type': 'application/json'
}
});

// const baseURL = `http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/api/`

// class DataService { 
//   send(data) {
//     const headers = {
//       'Content-Type': 'application/json'
//     };
//     return axios.post(baseURL + 'write-to-database', {headers: headers, data: data})
//     .then(response => {
      
//     })
//   }
// }

// export new DataService