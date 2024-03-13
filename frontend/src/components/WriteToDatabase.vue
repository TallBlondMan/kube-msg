<template>
  <div>
    <h1>Click the button to send data to database</h1>
    <button @click="sendRequest">Send Request</button>
    <button @click="getHello">Get Hello!</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
//import DataService from '../services/DataService'
import { HTTP } from '../http-commons'

export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    // Function not ASYNC - no wait, have to change that
    sendRequest() {
      HTTP.post('/write-to-database', { message: 'Hello from frontend!' })
      .then(response => {
        this.message = response.data.message
        console.log('Sending message: ', response.data.message)
      })
      .catch(e => {
        this.message = 'Error sending request :C'
        console.error('Error: ', e)
      })
    },
    getHello() {
      HTTP.get('/hello')
      .then(response => {
        this.message = response.data.message
        console.log('Getting Hello: ', response.data.message)
      })
      .catch(e => {
        this.message = 'Error getting response :/'
        console.error('Error getting response: ', e)
      })
    }
    // async sendRequest() {
    //   DataService.post()
    //     .then(response => {
    //       this.message = response.data.message
    //     })
    //     .catch(e => {
    //       this.message = 'Error sending request';
    //       alert(e)
    //     })
    // }
    // DOES NOT WORK 
    //   try {
    //     const response = await axios.post('/write-to-database', { message: 'Hello from frontend!' });
    //     this.message = response.data.message;
    //   } catch (error) {
    //     console.error('Error:', error);
    //     this.message = 'Error sending request';
    //   }
    // }
    // DOES NOT WORK EITHER
    // async sendRequest() {
    //   try {
    //     const response = await fetch(`http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/api/write-to-database`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ message: 'Hello from frontend!' })
    //     });
    //     const data = await response.json();
    //     this.message = data.message;
    //   } catch (error) {
    //     console.error('Error:', error);
    //     this.message = 'Error sending request';
    //   }
    // }
  }
};
</script>

<style scoped>
h1 {
  color: #55cfb5
}
</style>