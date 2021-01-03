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
    text-align: -webkit-center;
    text-align: -moz-center;
}

.page-title {
    font-family: "VT323", monospace;
    font-size: 50px;
    text-align: center;
    -webkit-text-stroke: 1px;
    color: #007bff;
    margin-top: 20px;
}

.card {
    background-color: #f2bfd7;
    border: 2px solid rgba(91, 88, 107, 0.5);
    margin: 30px;
    max-width: 500px;
    align-items: center;
}

.contact-row {
    color: #4c4444;
    font-size: 25px;
    margin-bottom: 20px;
}

/* Media Queries */
@media screen and (max-width:320px) { 
.contact-row {
    font-size: 20px;
    }
}

@media screen and (min-width:321px) and (max-width:639px) {
.contact-row {
    font-size: 20px;
    }
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