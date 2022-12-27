<template>
  <div class="projects-section">
  <section id="projects">
    <h2>Projects I'm proud of</h2>
    <ul>
      <li>
        <article>
          <div class="text">
            <h4>Latest Project</h4>
            <h3>WordsyWords</h3>
            <p class="black-box">
              A semi-clone of the NYT Wordle game.
              Initially interested in the scoring algorithm, I decided to round it out with a full front end, including CSS animations.
              The name "WordsyWords" came about due to its domain name availability on Netlify.
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
        </li>
        <li>
        <article class="reverse">
          <div class="text">
            <h4>Latest Project</h4>
            <h3>Rubiks Timer</h3>
            <p class="black-box">
              A timer for practicing solving a Rubik's cube. The data is persisted in a Postgres database.
                The paginated history can be filtered and sorted.</p>
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
        </li>
    </ul>
    


  </section>
</div>
</template>

<script>
export default {

}
</script>

<style>
  .projects-section{
    background-color: var(--secondary-bkg-color);
    padding: 50px;
  }

  #projects ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 1rem;
    font-size: 1rem;
  }

  #projects{
    padding: 4rem 1rem;
  }

  #projects h2{
    font-size: 2.5rem;
    margin-bottom: calc(2.5rem * 1.5)
  }

  #projects h3{
    color: var(--light-accent-color);
    font-size: 1.3rem;
  }

  #projects h4{
    font-size: 1rem;
    font-family: var(--mono)
  }

  #projects img{
    margin: 2rem 0 4rem 0;
    border-left: 1px solid var(--light-accent-color);
    border-top: 1px solid var(--light-accent-color);
    border-radius: 25px;
    padding: 1rem;
  }

  .black-box{
    padding: 1.4rem;
    background-color: var(--black);
    border-radius: 10px;
    color: var(--white);
    font-size: 1rem;
    line-height: 1.5;
  }

  @media(min-width: 550px){
    article{
      display: grid;
      grid-template-columns: repeat(10,1fr);
      gap: 1rem;
    }
    .text{
      order: 2;
      text-align: right;
      grid-column: 5/11;
      grid-row: 1/2;
    }
    #projects ul{
      justify-content: flex-end;
    }
    #projects img{
      grid-column: 1/6;
      grid-row: 1/2;
    }

    #projects .reverse .text{
      grid-column: 1/7;
      order: 2;
      text-align: left;
    }

    #projects .reverse img{
      grid-column: 6/11;
      grid-row: 1/2;
    }

    #projects .reverse ul{
      justify-content: flex-start;
    }
  }


</style>