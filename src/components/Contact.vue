<script>
export default {
    name: 'contact'
};
</script>

<template>
    <div id="contact">
        <div class="page-title">wanna contact me?</div>
        <b-card>
            <button class='resume-btn'><a href="/img/KrissyConantResume.pdf" download="KrissyConantResume.pdf">Download My Resume</a></button>
            <div class='contact-information'>
                <h3 class="contact clearfix">email me: <br/><a href="mailto:krissyconant@gmail.com">krissyconant@gmail.com</a></h3>
                <h3 class="contact">linkedin: <br/><a href="https://www.linkedin.com/in/krissy-conant/">krissy-conant</a></h3>
                <h3 class="contact">github: <br/><a href="https://github.com/kaconant">kaconant</a></h3>
            </div>	
        </b-card>
    </div>
</template>

<style scoped>
#contact {
    font-family: monospace;
    font-size: 16px;
    text-align: justify;
    text-align: -webkit-center;
}

.page-title {
    font-family: "VT323", monospace;
    font-size: 60px;
    text-align: center;
    color: #007bff;
    margin-top: 20px;
    -webkit-text-stroke: 1px;
}

.card {
    max-width: 500px;
    align-items: center;
}
</style>