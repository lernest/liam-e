<template>
  <div class="home">
    <section id="intro">
      <p class="name">Hi, my name is <span>Liam Ernest</span></p>
      <h2>I build websites.</h2>
      <p>I'm a full stack web developer and accessibility advocate.</p>
      <p>Currently, I'm working as a software engineer at <a href="www.t-mobile.com">T-Mobile</a>.</p>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
      <p>I'm always interested in hearing about new job opportunities, writing curricula, or instructional design work.</p>
      <p><a href="mailto:liamjohnernest@gmail.com">Email me</a></p>
    </section>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
<style>
  #intro{
    padding-bottom: 10rem;
  }
  #intro p{
    font-size: 1rem;
    line-height: 1.5;
  }
  #intro .name{
    font-family: var(--mono);
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

  #contact{
    background-color: var(--tertiary-bkg-color);
    text-align: center;
    width: 400px;
    margin: 0 auto;
  }

  #contact p:last-child{
    margin-top: 3rem;
  }
</style>
