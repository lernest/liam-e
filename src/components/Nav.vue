<template>
  <nav>
    <ul>
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
          ><font-awesome-icon
            class="icon"
            icon="fa-brands fa-linkedin"
            aria-hidden="true"
          />
          <span class="sr-only">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/lernest" target="_blank">
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-square-github"
            aria-hidden="true"
          />
          <span class="sr-only">GitHub</span>
        </a>
      </li>
      <li>
        <a href="./resume_jan2023.pdf" class="button" target="_blank">Resume</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style>
nav {
  font-family: var(--mono);
  font-size: 80%;
  padding: 1rem;
}
nav h1 {
  font-family: var(--sans);
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  gap: 2rem;
}
nav a,
router-link,
nav li {
  color: var(--white);
  text-decoration: none;
  display: block;
}
nav a:hover,
router-link:hover,
nav li:hover {
  color: var(--accent-color);
}
nav li:first-child {
  flex-basis: 100%;
  text-align: center;
}
h1 .icon {
  margin-right: 0.7rem;
  color: var(--light-accent-color);
  padding-bottom: 0.1rem;
}
a .icon {
  font-size: 1.4rem;
}
@media (min-width: 850px) {
  nav {
    max-width: 1200px;
    margin: 0 auto;
  }
  nav li:first-child {
    flex-basis: auto;
    text-align: left;
    margin-right: auto;
  }
}
</style>
