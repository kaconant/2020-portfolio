<script>
export default {
  name: "Marquee",
  components: {
    MarqueeText: () => import("vue-marquee-text-component")
  },
  props: {
    marqueDescription: String
  }
};
</script>

<template>
  <div>
    <marquee-text class="marque-container" :duration="70"> {{marqueDescription}} </marquee-text>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

.marque-container {
  background-color: #beb2e3;
  border-bottom: 1px solid rgba(91, 88, 107, 0.5);
  color: #4c4444;
  height: 60px;
  padding-top: 10px;
  font-family: "VT323", monospace;
  font-size: 25px;
}

</style>