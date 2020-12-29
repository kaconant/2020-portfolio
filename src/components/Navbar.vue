<script>
	export default {
    name: 'navbar'
	}
</script>

<template>
	<div id="navbar">
      <b-navbar class="header" type="light">
        <b-navbar-brand class="nav-link"><router-link :to="{ name: 'home' }" exact>home</router-link></b-navbar-brand>
        <b-navbar-brand class="nav-link"><router-link :to="{ name: 'projects' }">projects</router-link></b-navbar-brand>
        <b-navbar-brand class="nav-link"><router-link :to="{ name: 'contact' }">contact</router-link></b-navbar-brand>
      </b-navbar>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

body {
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

.router-link-active {
  color: #7d74d3!important;
}
</style>