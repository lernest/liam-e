<template>
  <div class="home">
    <section id="intro">
      <div class="name">Hi, my name is <span>Liam Ernest.</span></div>
      <h2>I build websites.</h2>
      <p>I'm a full stack web developer and accessibility advocate.</p>
      <p>Currently, I'm working as a software engineer at <a href="www.t-mobile.com">T-Mobile</a>.</p>
    </section>

    <div class="border"></div>

    <div class="contact-section">
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit debitis error perferendis distinctio illo? Voluptates vitae asperiores.</p>
        <p><a href="mailto:liamjohnernest@gmail.com" class="button">Email me</a></p>
      </section>
    </div>

    <div class="border"></div>
      
    <footer>
        <h2>Liam Ernest &middot; Software Engineer</h2>
        <ul>
          <li>
                <a href="https://www.linkedin.com/in/liamernest/" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-linkedin" aria-hidden="true"/>
                <span class="sr-only">LinkedIn</span>
                </a>
            </li>
            <li><a href="https://github.com/lernest" target="_blank">
                <font-awesome-icon class="icon" icon="fa-brands fa-square-github" aria-hidden="true"/>
                <span class="sr-only">GitHub</span>
            </a></li>
            <li><a href="mailto:liamjohnernest@gmail.com" target="_blank">
                <font-awesome-icon class="icon" icon="fa-solid fa-envelope" aria-hidden="true"/>
                <span class="sr-only">Mail</span>
            </a></li>
        </ul>
        <p><small>&copy; 2023 Liam Ernest. All rights reserved.</small></p>
      </footer>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
<style>
/* background colors */
.contact-section{
    background-color: var(--tertiary-bkg-color);
    padding: 50px;
  }

.border{
  /* #ff17e4 and 86fbfb */
  background: linear-gradient(90deg, rgba(255,23,228,1) 0%, rgba(134,251,251,1) 100%);
  height: 2px;
}


/* button */
.button{
    background-color: var(--accent-color);
    padding: 0.5rem;
    border-radius: 5px;
    font-family: var(--mono);
    text-decoration: none;
    color: var(--white)
}

.button:hover {
    color: var(--white);
    background-color: var(--accent-hover-color);
}

#intro{
  padding: 4rem 1rem 9rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.5;
}
#intro p{
  font-size: 1rem;
  line-height: 2.5;
}
#intro .name{
  font-family: var(--mono);
  font-size: 1rem;
}


.name span{
  font-family: var(--sans);
  font-size: 4rem;
  color: var(--light-accent-color);
  display: block;
}
#intro h2{
  font-size: 4rem;
}

/* contact section */

#contact{
  text-align: center;
  width: 400px;
  margin: 0 auto;
}

#contact h2{
  margin-bottom: 2rem;
}

#contact p:last-child{
  margin-top: 3rem;
}


/* footer styles */

footer{
  width: 400px;
  padding: 20px;
  margin: 20px auto;
  text-align: center;
}
footer h2{
  font-size: 1.3rem;
}
footer ul{
  list-style-type: none;
  margin: 2rem 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 3rem;
}
footer .icon{
  font-size: 2.7rem;
}
footer p{
  font-size: 0.9rem;
}
</style>
