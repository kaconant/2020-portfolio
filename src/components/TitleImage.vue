<script>
export default {
  name: "TitleImage",
  props: {
    titleName: String,
    titleDescription: String
  }
};
</script>

<template>
  <div id="title-image">
    <div id="title">{{ titleName }}</div>
    <div id="description">{{ titleDescription }}</div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap");

#title-image {
  font-family: "East Sea Dokdo", cursive;
  -webkit-text-stroke: 2px #836f6c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 20px;
  color: #000;
  background-image: url("../assets/layout/vaporWaveBackground.jpg");
  border: 5px solid rgba(91, 88, 107, 0.5);
  background-position: center;
  max-width: 100%;
  height: auto !important;
}

#title {
  font-size: 115px;
}

#description {
  font-size: 75px;
}


/* Media Queries */
@media screen and (max-width:320px) {
  #title-image {
    -webkit-text-stroke: 1px #836f6c;
  }
  #title {
    font-size: 70px;
  }
  #description {
    font-size: 50px;
  }
}

@media screen and (min-width:321px) and (max-width:639px) {
  #title-image {
    -webkit-text-stroke: 1px #836f6c;
  }
  #title {
    font-size: 70px;
  }
  #description {
    font-size: 50px;
  }
}
@media screen and (min-width:640px) and (max-width:959px) {
	#page {
    margin: 75px 150px;
	}
}
@media screen and (min-width:960px) and (max-width:1279px) {
	#page {
    margin: 75px 200px;
	}
}
@media screen and (min-width:1280px) and (max-width:1599px) {
	#page {
    margin: 100px 300px;
	}
}
@media screen and (min-width:1600px) {
	#page {
    margin: 100px 400px;
	}
}
@media screen and (min-width:1920px) {
	#page {
    margin: 100px 400px;
	}
}
/* End of Media Queries */
</style>
