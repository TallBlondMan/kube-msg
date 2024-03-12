<template>
  <div id="app">
    <WriteToDatabase />
  </div>
</template>

<script>
import WriteToDatabase from './components/WriteToDatabase.vue'

export default {
  name: 'App',
  components: {
    WriteToDatabase
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
