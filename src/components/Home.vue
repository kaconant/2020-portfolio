<script>
export default {
  name: 'home'
};
</script>

<template>
	<div id="home">
		<div class="page-title">who me?</div>
		<b-card no-body class="overflow-hidden">
			<b-row no-gutters>
			<b-col md="6" style="align-self: center;">
				<b-card-img :src="require(`../assets/about/krissyRainbow.jpeg`)" alt="Rainbow Krissy" class="rounded-0"/>
			</b-col>
			<b-col md="6">
				<b-card-body>
					<b-card-text>
						My interest in web development started during the wild west days of MySpace, with a strong, pre-teen desire to implement the coolest glitter cursor effects you could hack together with HTML and CSS.
					</b-card-text>
					<b-card-text>
						After working in client facing positions in onboarding, sales, and marketing for over 10 years, I decided to try my hand at web development professionally in 2017. I believe that I offer a unique perspective on how to build DRY, responsive, and durable code solutions that delights customers from the sales funnel through retention / churn efforts.
					</b-card-text>
					<b-card-text>
						Currently, I'm a UI web developer in the SaaS space who works on building new features, migrating and refactoring our codebase from Knockout.js to Vue.js, and fixing bugs that irritate our members. I generally work within the JavaScript ecosystem (Vue.js, React, Vanilla, Knockout.js) but have been using more C# over the last year.
					</b-card-text>
					<b-card-text>
						I have a lovely, chonky cat named Tallulah who has an adventurer's spirit while simultatenously suffers from agoraphobia.
					</b-card-text>
				</b-card-body>
			</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<style scoped>
#home {
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

img {
	border-radius: .25rem !important;
	margin: 20px 0px;
	max-width: 450px;
}

.card {
	background-color: #f2bfd7 !important;
	border: 2px solid rgba(91, 88, 107, 0.5);
	border-radius: .25rem !important;
	max-width: 1000px;
	margin: 30px 10px 40px;
}

.card-text {
	font-family: monospace;
	font-size: 16px;
	text-align: justify;
}
</style>