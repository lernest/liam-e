<template :class="navClass">
<div>
    <h1>
    <router-link to="/">
        <span><font-awesome-icon class="mobile-icon" icon="fa-solid fa-mountain-sun" aria-hidden="true"/></span>
        <!-- <span>Liam Ernest</span>  -->
    </router-link></h1>

    <Slide right>
        <nav>
        <ul class="column">
            <li> <h1>
    <router-link to="/">
        <span><font-awesome-icon class="icon" icon="fa-solid fa-mountain-sun" aria-hidden="true"/></span>
        <span>Liam Ernest</span> 
    </router-link></h1></li>
            <li><a href="#projects">Projects</a></li>
            <!-- <li>About</li> -->
            <li><a href="#contact">Contact</a></li>
            <li>
                <a href="https://www.linkedin.com/in/liamernest/" target="_blank">LinkedIn <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" aria-hidden="true"/>
                </a>
            </li>
            <li><a href="https://github.com/lernest" target="_blank">
                GitHub <font-awesome-icon class="icon" icon="fa-brands fa-square-github" aria-hidden="true"/>
            </a></li>
            <li><a href="./resume_jan2023.pdf" class="button" target="_blank">Resume</a></li>
        </ul>
    </nav>
    </Slide>
</div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    name: 'MobileNav',
    components:{
        Slide,
    },
    data(){
        return{
            isNavOpen: true
        }
    },
    computed:{
        navClass(){
            return this.isNavOpen ? 'open' : ''
        }
    },
    methods:{
        toggleNav(){
            this.isNavOpen = !this.isNavOpen
            console.log('toggling nav')
        }
    }
}
</script>

<style>

.open{
    border: 3px solid red;
    overflow: hidden;
}

.bm-overlay {
      background: rgba(0, 0, 0, 1);
    }



/* .open button{

} */

nav{
    font-family: var(--mono);
    font-size: 80%;
    padding-left: 2.5rem;
    margin-top: -1.6rem;
    /* margin-bottom: 30px; */
}

nav h1{
    font-family: var(--sans);
    /* font-size: inherit; */
}

.column{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* border: 1px solid red; */
    gap: 2rem;
    text-align: center;
}

nav a, router-link, nav li{
    color: var(--white);
    text-decoration: none;
    display: block;
}

nav a:hover, router-link:hover, nav li:hover{
    color: var(--accent-color)
}

/* nav li:first-child{
    flex-basis: 100%;
    text-align: center;
}
nav li:last-child{
    flex-basis: 100%;
    text-align: center;
} */

h1 .icon{
    margin-right: 0.7rem;
    color: var(--light-accent-color);
    padding-bottom: 0.1rem;
}

.mobile-icon{
    margin: 2rem 0rem -1rem 2rem;
    color: var(--light-accent-color);
    font-size: 2rem
}

a .icon{
    font-size:1.4rem;
}
nav{
        max-width: 1200px;
        margin: 0 auto;
    }
    nav li:first-child{
        flex-basis: auto;
        text-align: left;
        margin-right: auto;
    }

</style>