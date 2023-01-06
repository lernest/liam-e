<template :class="navClass">

    <Slide right>
        <nav>
        <ul>
            <li><h1>
                <router-link to="/">
                    <span><font-awesome-icon class="icon" icon="fa-solid fa-mountain-sun" aria-hidden="true"/></span>
                    <span>Liam Ernest</span> 
                </router-link></h1></li>
            <li><a href="#projects">Projects</a></li>
            <!-- <li>About</li> -->
            <li><a href="#contact">Contact</a></li>
            <li>
                <a href="https://www.linkedin.com/in/liamernest/" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-linkedin" aria-hidden="true"/>
                <span class="sr-only">LinkedIn</span>
                </a>
            </li>
            <li><a href="https://github.com/lernest" target="_blank">
                <font-awesome-icon class="icon" icon="fa-brands fa-square-github" aria-hidden="true"/>
                <span class="sr-only">GitHub</span>
            </a></li>
            <li><a href="./resume_jan2023.pdf" class="button" target="_blank">Resume</a></li>
        </ul>
    </nav>
    </Slide>
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
    padding: 1rem;
    /* margin-bottom: 30px; */
}

nav h1{
    font-family: var(--sans);
    /* font-size: inherit; */
}

nav ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    /* border: 1px solid red; */
    align-items: center;
    gap: 2rem;
}

nav a, router-link, nav li{
    color: var(--white);
    text-decoration: none;
    display: block;
}

nav a:hover, router-link:hover, nav li:hover{
    color: var(--accent-color)
}

nav li:first-child{
    flex-basis: 100%;
    text-align: center;
}

h1 .icon{
    margin-right: 0.7rem;
    color: var(--light-accent-color);
    padding-bottom: 0.1rem;
}

a .icon{
    font-size:1.4rem;
}

@media(min-width:850px){
    nav{
        max-width: 1200px;
        margin: 0 auto;
    }
    nav li:first-child{
        flex-basis: auto;
        text-align: left;
        margin-right: auto;
    }

}

@media(max-width:600){
    .mobile-nav{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
}
</style>