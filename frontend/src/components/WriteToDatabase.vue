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
  }
};
</script>

<style scoped>
h1 {
  color: #55cfb5
}
</style>