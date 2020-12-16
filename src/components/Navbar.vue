<script>
	export default {
        name: 'navbar'
	}
</script>

<template>
	<div>
      <b-navbar class="header" type="light">
        <b-navbar-brand class="nav-link"><router-link :to="{ name: 'home' }" exact>home</router-link></b-navbar-brand>
        <b-navbar-brand class="nav-link"><router-link :to="{ name: 'about' }">about</router-link></b-navbar-brand>
        <b-navbar-brand class="nav-link"><router-link :to="{ name: 'projects' }">projects</router-link></b-navbar-brand>
      </b-navbar>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

body {
  /* background: rgba(243, 219, 253, 0.5) !important; */
  background: linear-gradient(0deg, rgba(238,174,202,1) 32%, rgba(148,187,233,1) 100%) !important;
  margin: 0px;
  font-family: sans-serif;
}

.header {
  justify-content: center !important;
}

.nav-link {
  color: #e25f6e !important;
  font-family: "VT323", monospace;
  font-size: 30px !important;
  justify-content: center;
}
</style>