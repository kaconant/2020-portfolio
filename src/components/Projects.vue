<script>
export default {
    name: "projects"
};
</script>

<template>
    <div class="page">
        <div class='container'>
            <div class='card proj'>
                <h3 class='projTitle'>myBlendology</h3>
                <h4 class='projDesc'>myBlendology is a web application comprised of a PERN stack (Postgres, Express, React, and Node.js) that allows you to create diffuser essential oil blends based off of a user's choice of mood.</h4>
                <img class='card-img projImg' src="../assets/projects/myBlendology.png" alt='myBlendology' />
                <!-- <div class='card-img-overlay'>
                {this.state.isMouseInsideProj1 ? <a class='projBtn' href='http://www.myblendology.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj1 ? <a class='projBtn' href='https://github.com/kaconant/oils-api/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
                </div> -->
            </div>
            <div class='card proj'>
                <h3 class='projTitle'>Coffee Run</h3>
                <h4 class='projDesc'>Coffee Run is a basic application that uses HTML / CSS / JavaScript / jQuery to produce coffee orders. This project was to focus on using jQuery to build forms and produce results as well as manipulate local storage.</h4>
                <img class='card-img projImg' src=../assets/projects/coffeeRun.png alt='coffeeApp' />
                <!-- <div class='card-img-overlay'>
                {this.state.isMouseInsideProj2 ? <a class='projBtn' href='https://optimistic-tesla-3dca05.netlify.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj2 ? <a class='projBtn' href='https://github.com/kaconant/coffeerun-starter/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
                </div> -->
            </div>
            <div class='card proj'>
                <h3 class='projTitle'>Memory Game</h3>
                <h4 class='projDesc'>This Memory Game was created with the Create-React-App and was an exercise to use logic to create a matching card game as well as practice routing, switching, and linking.</h4>
                <img class='card-img projImg' src=../assets/projects/memoryGame.png alt='memoryGame' />
                <!-- <div class='card-img-overlay'>
                {this.state.isMouseInsideProj3 ? <a class='projBtn' href='https://vigilant-fermi-f504bc.netlify.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj3 ? <a class='projBtn' href='https://github.com/kaconant/memory-game/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
                </div> -->
            </div>
            <div class='card proj'>
                <h3 class='projTitle'>Slopey Seconds</h3>
                <h4 class='projDesc'>Slopey Seconds combines the Google Maps API, Powder Project API, and Open Weather API to search for specific ski / snowboarding trail names and allow users to review their public rating, trail length, elevation, and weather.</h4>
                <img class='card-img projImg' src=../assets/projects/slopeySeconds.png alt='slopeySeconds' />
                <!-- <div class='card-img-overlay'>
                {this.state.isMouseInsideProj4 ? <a class='projBtn' href='http://www.slopeyseconds.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj4 ? <a class='projBtn' href='https://github.com/kaconant/slopey-seconds/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
                </div> -->
            </div>
        </div>
    </div>
</template>
