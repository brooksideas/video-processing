<template>
  <div id="app">
    <v-app>
      <h1>Video Processor</h1>
      <Dashboard />
    </v-app>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
