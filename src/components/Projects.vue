<script>

let projectData = [{
    title: "myBlendology",
    details: "myBlendology is a web application comprised of a PERN stack (Postgres, Express, React, and Node.js) that allows you to create diffuser essential oil blends based off your choice of mood.",
    imageName: "myBlendology",
    demo: "http://www.myblendology.com/",
    github: "https://github.com/kaconant/oils-api/"
}, {
    title: "Coffee Run",
    details: "Coffee Run is a web application that uses JavaScript and jQuery to produce coffee orders by building forms and manipulating local storage.",
    imageName: "coffeeRun",
    demo: "https://optimistic-tesla-3dca05.netlify.com/",
    github: "https://github.com/kaconant/coffeerun-starter/"
}, {
    title: "Memory Game",
    details: "This Memory Game was created with Create-React-App and uses logic to create a matching card game that focuses on routing.",
    imageName: "memoryGame",
    demo: "https://vigilant-fermi-f504bc.netlify.com/",
    github: "https://github.com/kaconant/memory-game/"
}, {
    title: "Slopey Seconds",
    details: "Slopey Seconds is a web application that uses Google Maps API, Powder Project API, and Open Weather API to search for specific ski / snowboarding trail names and allow users to review their public rating, trail length, elevation, and weather.",
    imageName: "slopeySeconds",
    demo: "http://www.slopeyseconds.com/",
    github: "https://github.com/kaconant/slopey-seconds/"
}];

export default {
    name: "projects",
    data: function () {
        return {
            Cards: projectData
        }
    },
};
</script>

<template>
    <div id="projects">
        <div class="page-title">sample projects</div>
        <b-card-group deck>
            <b-card v-for="(Card, index) in Cards" :key="index">
                <b-card-img :src="require(`../assets/projects/${Card.imageName}.png`)" :alt="Card.imageName" class="rounded-0"/>
                <b-card-body :title="Card.title" >
                    <b-card-text> {{ Card.details }} </b-card-text>
                </b-card-body>
                <template #footer>
                    <div class="btn-group">
                        <b-button :href="Card.demo" variant="light">Demo</b-button>
                        <b-button :href="Card.github" variant="light">GitHub</b-button>
                    </div>
                </template>
            </b-card>
        </b-card-group>
    </div>
</template>

<style scoped>
#projects {
    font-family: monospace;
    font-size: 16px;
    text-align: justify;
}

.page-title {
    font-family: "VT323", monospace;
    font-size: 50px;
    text-align: center;
    -webkit-text-stroke: 1px;
    color: #007bff;
    margin-top: 20px;
}

.card-deck {
    flex-flow: wrap;
    justify-content: space-evenly;
    margin: 0px 50px;
}

.card {
    display: flex;
    flex: 1 0 40% !important;
    margin: 40px !important;
    justify-content: center;
    background-color: #f2bfd7;
    color: #4c4444;
    border: 2px solid rgba(91, 88, 107, 0.5);
}

.card-title {
    text-align: center;
    font-weight: 600;
}

.btn-group {
    display: flex;
    justify-content: center;
}

.btn {
    margin: 0px 10px;
    max-width: 150px;
    border-top-right-radius: 100px !important;
    border-bottom-right-radius: 10px !important;
    border-bottom-left-radius: 100px !important;
    border-top-left-radius: 10px !important;
    border: 1px solid rgba(91, 88, 107, 0.5);
}

.card-footer {
    background-color: inherit;
    border-top: none;
}
</style>
