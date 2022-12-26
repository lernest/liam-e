<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/juggler">Juggler</router-link> | 
      <a href="https://github.com/lernest">GitHub</a>
    </div>
    <div class="container">
    </div>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&family=Oxygen+Mono&display=swap');

:root{
  --primary-bkg-color: #171321;
  --secondary-bkg-color: #11334A;
  --tertiary-bkg-color: #4B0D49;
  --accent-color: #E210CB;
  --light-accent-color: #86FBFB;
  --font-size: 1.3rem;
  --sans: 'Oxygen', sans-serif;
  --mono:'Oxygen Mono', monospace;
}


html{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit
}

body{
  padding: 0;
  margin: 0;
  font-family: var(--sans)
}

/* 
#app {
  font-family: var(--secondary-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  : center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
