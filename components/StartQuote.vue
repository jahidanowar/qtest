<script setup>
import Toughbooks from '@/products.json';

const toughbooks = ref(Toughbooks);
</script>

<template>
	<h1 class="text-h3 text-center mb-12">Choose your TOUGHBOOK</h1>
	<v-row>
		<v-col
			cols="12"
			md="4"
			v-for="toughbook in toughbooks"
			:key="toughbook.device"
		>
			<v-card flat class="d-flex flex-column pa-10">
				<img :src="`images/${toughbook.image}`" />
				<h2 class="text-center mb-2">{{ toughbook.device }}</h2>
				<div
					class="mb-6 short-description"
					v-html="toughbook.description"
				></div>
				<div class="d-flex align-center justify-center mb-4">
					<span class="text-body-2 text-grey mr-2">starting</span><sup>$</sup
					><span class="text-h4">{{ toughbook.price }}</span>
				</div>
				<div class="text-center">
					<v-btn flat block color="blue-darken-4" to="/products/55"
						>Select</v-btn
					>
				</div>
			</v-card>
		</v-col>
	</v-row>
</template>

<style>
.short-description ul li {
	list-style: none;
	padding-bottom: 10px;
}
</style>
