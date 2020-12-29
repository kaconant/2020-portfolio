<script>
export default {
    name: 'contact',
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
};
</script>

<template>
    <div id="contact">
        <div class="page-title">wanna contact me?</div>
        <b-card>
            <div class='contact-information'>
                <h3 class="contact-row clearfix">email: <br/><b-link href="mailto:krissyconant@gmail.com" target="_blank">krissyconant@gmail.com</b-link></h3>
                <h3 class="contact-row">linkedin: <br/><b-link href="https://www.linkedin.com/in/krissy-conant/" target="_blank">krissy-conant</b-link></h3>
                <h3 class="contact-row">github: <br/><b-link href="https://github.com/kaconant" target="_blank">kaconant</b-link></h3>
            </div>
            <b-button :href="`${publicPath}KrissyConantResume2020.pdf`" variant="light" download>checkout my resume</b-button>
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
    font-size: 50px;
    text-align: center;
    color: #007bff;
    margin-top: 20px;
    -webkit-text-stroke: 1px;
}

.card {
    max-width: 500px;
    align-items: center;
    background-color: #f2bfd7;
    margin-top: 30px;
    border: 2px solid rgba(91, 88, 107, 0.5);
}

.contact-row {
    margin-bottom: 20px;
    color: #4c4444;
    font-size: 25px;
}

.btn {
    border: 1px solid rgba(91, 88, 107, 0.5);
    border-top-right-radius: 100px !important;
    border-bottom-right-radius: 10px !important;
    border-bottom-left-radius: 100px !important;
    border-top-left-radius: 10px !important;
    width: 200px !important;
}
</style>