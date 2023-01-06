<template>
  <div id="app" >
    <Nav />
    <div class="container">
    </div>
      <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&family=Oxygen+Mono&display=swap');

:root{
  --primary-bkg-color: #171321;
  --secondary-bkg-color: #11334A;
  --tertiary-bkg-color: #4B0D49;
  --accent-color: #E210CB;
  --accent-hover-color: #ff17e4;
  --light-accent-color: #86FBFB;
  --font-size: 1.3rem;
  --sans: 'Oxygen', sans-serif;
  --mono:'Oxygen Mono', monospace;
  --text-color: #f7f8fa;
  --white: #f7f8fa;
  --black: #171321;
}

html{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: left;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1, h2, h3, h4, p{
  margin: 0;
}

img{
  width: 100%;
}

a{
  color: var(--accent-color);
  text-decoration: underline;
}

a:hover{
  color: var(--accent-hover-color)
}

body{
  padding: 0;
  margin: 0;
  font-family: var(--sans);
  color: var(--text-color);
  font-size: var(--font-size);
  background-color: var(--primary-bkg-color);
}
</style>
