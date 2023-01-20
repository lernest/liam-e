<template>
  <div class="projects-section">
    <section id="projects">
      <h2>Projects I'm proud of</h2>

      <article>
        <div class="text">
          <h4>Latest Project</h4>
          <h3>
            Cat Genetics
            <a href="https://github.com/lernest/cat-genetics" target="_blank">
              <font-awesome-icon
                class="icon"
                icon="fa-brands fa-square-github"
                aria-hidden="true"
              />
              <span class="sr-only">Cat genetics GitHub</span>
            </a>
          </h3>
          <p class="black-box">
            <a href="https://cat-genetics.netlify.app/">This website</a> is a
            study of cat genetics and the possible kittens phenotypes that can
            result from different combinations of parental genes.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>Vue</li>
            <li>Node.js</li>
            <li>Docker</li>
          </ul>
        </div>
        <img
          src="../assets/cats.png"
          alt="Screenshot of cat genetics website."
        />
      </article>

      <article class="reverse">
        <div class="text">
          <h3>
            Rubiks Timer
            <a href="https://github.com/lernest/rubiks-timer" target="_blank">
              <font-awesome-icon
                class="icon"
                icon="fa-brands fa-square-github"
                aria-hidden="true"
              />
              <span class="sr-only">Rubiks Timer GitHub</span>
            </a>
          </h3>
          <p class="black-box">
            A timer for practicing solving a Rubik's cube. The data is persisted
            in a Postgres database. The paginated history can be filtered and
            sorted.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>Vue</li>
            <li>Node.js</li>
            <li>Postgres</li>
            <li>Docker</li>
          </ul>
        </div>
        <img src="../assets/rubiks.png" alt="Screenshot of Rubiks Timer." />
      </article>

      <article>
        <div class="text">
          <h3>
            WordsyWords
            <a href="https://github.com/lernest/wordle" target="_blank">
              <font-awesome-icon
                class="icon"
                icon="fa-brands fa-square-github"
                aria-hidden="true"
              />
              <span class="sr-only">WordsyWords GitHub</span>
            </a>
          </h3>
          <p class="black-box">
            A
            <a href="https://wordsywords.netlify.app/" target="_blank"
              >semi-clone</a
            >
            of the
            <a
              href="https://www.nytimes.com/games/wordle/index.html"
              target="_blank"
              >NYT Wordle game</a
            >. Initially interested in the scoring algorithm, I decided to round
            it out with a full front end, including CSS animations. The name
            "WordsyWords" came about due to its domain name availability on
            Netlify.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>Vue</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <img src="../assets/wordsywords.png" alt="Screenshot of WordsyWords." />
      </article>

      <article class="reverse">
        <div class="text">
          <h3>The Juggler</h3>
          <p class="black-box">
            <a href="https://codepen.io/lernest/full/eYKLbqR" target="_blank"
              >This codepen</a
            >
            was an exploration of SVG animations and a love letter to juggling.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SVG animations</li>
          </ul>
        </div>
        <img src="../assets/juggler.png" alt="Screenshot of The Juggler." />
      </article>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.projects-section {
  background-color: var(--secondary-bkg-color);
  padding: 50px;
}

#projects ul {
  list-style-type: none;
  margin: 0.5rem 0.5rem;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1rem;
}

#projects {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: auto;
}

#projects h2 {
  font-size: 2.5rem;
  margin-bottom: calc(2.5rem * 1.5);
}

#projects h3 {
  color: var(--light-accent-color);
  font-size: 1.3rem;
  margin: 5px;
}

#projects h4 {
  font-size: 1rem;
  font-family: var(--mono);
  margin: 0.5rem;
}

#projects img {
  margin: 1rem 0 4rem 0;
  border-left: 1px solid var(--light-accent-color);
  border-top: 1px solid var(--light-accent-color);
  border-radius: 25px;
  padding: 1rem;
}

.black-box {
  padding: 1.4rem;
  background-color: var(--black);
  border-radius: 10px;
  color: var(--white);
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 550px) {
  article {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem;
  }
  .text {
    order: 2;
    text-align: right;
    grid-column: 5/11;
    grid-row: 1/2;
  }
  #projects ul {
    justify-content: flex-end;
  }
  #projects img {
    grid-column: 1/6;
    grid-row: 1/2;
    margin-top: 0;
  }

  #projects .reverse .text {
    grid-column: 1/7;
    order: 2;
    text-align: left;
  }

  #projects .reverse img {
    grid-column: 6/11;
    grid-row: 1/2;
  }

  #projects .reverse ul {
    justify-content: flex-start;
  }
}
</style>
