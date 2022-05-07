<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </nav>
    <LoginView />
    <router-view />
  </div>
</template>

<script>
import LoginView from "@/views/LoginView.vue";

export default {
  name: "App",
  components: {
    LoginView,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
