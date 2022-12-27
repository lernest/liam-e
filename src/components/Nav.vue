<template>
    <nav>
        <ul>
            <li><h1><router-link to="/">Liam Ernest</router-link></h1></li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li>LinkedIn</li>
            <li><a href="https://github.com/lernest" target="_blank">GitHub</a></li>
            <li>Resume</li>
            <!-- <li><router-link to="/juggler">Juggler</router-link></li> -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>

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
/* 
@media(max-width:900px){
    #nav{
        display: none;
    }
} */
</style>