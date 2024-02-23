<template>
  <div id="app">
    <WriteToDatabase />
  </div>
</template>

<script>
import WriteToDatabase from './components/WriteToDatabase.vue';

export default {
  name: 'App',
  components: {
    WriteToDatabase
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>