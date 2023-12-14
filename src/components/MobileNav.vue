<template>
  <div class="menu">
    <Slide right>
      <nav>
        <ul class="column">
          <li>
            <h1>
              <router-link to="/">
                <span
                  ><font-awesome-icon
                    class="icon"
                    icon="fa-solid fa-mountain-sun"
                    aria-hidden="true"
                /></span>
                <span>Liam Ernest</span>
              </router-link>
            </h1>
          </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://www.linkedin.com/in/liamernest/" target="_blank"
              >LinkedIn
              <font-awesome-icon
                class="icon"
                icon="fa-brands fa-linkedin"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/lernest" target="_blank">
              GitHub
              <font-awesome-icon
                class="icon"
                icon="fa-brands fa-square-github"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="./resume_dec2023.pdf" class="button" target="_blank"
              >Resume</a
            >
          </li>
        </ul>
      </nav>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'MobileNav',
  components: {
    Slide,
  },
}
</script>

<style>
.open {
  border: 3px solid red;
  overflow: hidden;
}

.bm-overlay {
  background: rgba(0, 0, 0, 1);
}

.menu nav {
  font-family: var(--mono);
  font-size: 80%;
  padding-left: 2.5rem;
  margin-top: -1.6rem;
}

.menu {
  margin-bottom: 3rem;
}

.menu nav h1 {
  font-family: var(--sans);
}

.menu .column {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.menu nav a,
router-link,
nav li {
  color: var(--white);
  text-decoration: none;
  display: block;
}

.menu nav a:hover,
router-link:hover,
nav li:hover {
  color: var(--accent-color);
}

.menu a .icon {
  font-size: 1.4rem;
}
.menu nav {
  max-width: 1200px;
  margin: 0 auto;
}
.menu nav li:first-child {
  flex-basis: auto;
  text-align: left;
  margin-right: auto;
}
</style>
