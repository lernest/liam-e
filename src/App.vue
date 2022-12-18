<template>
  <div id="app">
    <h1>Liam Ernest</h1>
    <h2>Welcome to my webpage</h2>
    <section>
      <h3></h3>
    </section>
    <Juggler/>
  </div>
</template>

<script>
import Juggler from './components/Juggler.vue'

export default {
  name: 'App',
  components: {
    Juggler
  }
}
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
