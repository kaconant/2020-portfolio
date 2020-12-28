<script>
export default {
    name: 'not-found'
};
</script>

<template>
	<div id="not-found">
        <b-card-img :src="require(`../assets/layout/rideNeverEnds.gif`)" class="rounded-0"/>
	</div>
</template>

<style scoped>
#not-found {
    text-align: -webkit-center;
    background-color: #1D1928;
}

img {
    max-width: fit-content;
    max-height: fit-content;
}
</style>