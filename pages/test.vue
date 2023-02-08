<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<template>
	<div>
		<div v-for="p in products">
			{{ p.title }}
		</div>
	</div>
</template>
