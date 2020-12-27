<script>
export default {
    name: "layout",
    components: {
        NavBar: () => import("../components/Navbar"),
        TitleImage: () => import("../components/TitleImage"),
        Marquee: () => import("../components/Marquee")
    }
};
</script>

<template>
	<div class="layout">
        <nav-bar/>
        <title-image
            titleName="hi, i'm Krissy"
            titleDescription="an ATL-based software developer"/>
        <marquee 
            marqueDescription="♡ My day-to-day development skills include: JavaScript, Vue.js, Knockout (say-what), CSS/SCSS, Bootstrap, C#, Azure, & GIT. 
            On occasion, I work with: React & Node.js.
            I've been known to dabble with: PostgresSQL, Python, AWS, & Heroku. ♡♡"
            />
        <router-view></router-view>
	</div>
</template>

<style>
body {
  background-color: #A9BAE4 !important;
  margin: 0px;
  font-family: sans-serif;
}
</style>