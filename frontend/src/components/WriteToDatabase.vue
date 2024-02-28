<template>
  <div>
    <h1>Click the button to send data to database</h1>
    <button @click="sendRequest">Send Request</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async sendRequest() {
      try {
        const response = await fetch('http://localhost:3000/write-to-database', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: 'Hello from frontend!' })
        });
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.error('Error:', error);
        this.message = 'Error sending request';
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: #55cfb5
}
</style>