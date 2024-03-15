<template>
  <div>
    <h1>Click the button to send data to database</h1>
    <div class="mb-3">
        <label for="Message" class="form-label">Message to Database</label>
        <input ref="form" type="text" class="form-control" id="message" required name="message" v-model="message">
    </div>
    <button @click="sendRequest">Send Request</button>
    <button @click="getHello">Get status</button>
    <p>{{ status }}</p>
  </div>
</template>

<script>
import DataService from '../services/DataService'

export default {
  data() {
    return {
      message: '',
      status: ''
    };
  },
  methods: {
    sendRequest() {
      var data = {
        message: this.message,
      }
      DataService.postData(data)
        .then(response => {
          this.status = response.data.message
          console.log('Sending message: ', response.data.message)
        })
        .catch(e => {
          this.status = 'Error sending request :C'
          console.error('Error: ', e)
        })
      this.message = '';
    },
    getHello() {
      DataService.getData()
        .then(response => {
          this.status = response.data.message
          console.log('Getting Hello: ', response.data.message)
        })
        .catch(e => {
          this.status = 'Error getting response :/'
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