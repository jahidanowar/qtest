<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
const router = useRouter();

storeBuilder.fetchProducts();

async function buildProduct() {
	await storeBuilder.fetchProduct('1');
	router.push({ path: '/toughbook/test' });
}
</script>

<template>
	<h1 class="text-h3 text-center mb-12">Choose your TOUGHBOOK</h1>
	<v-row>
		<v-col
			cols="12"
			md="4"
			v-for="product in storeBuilder.products"
			:key="product._id"
		>
			<v-card
				flat
				class="d-flex flex-column bg-grey-lighten-4 rounded-xl pa-12"
			>
				<img :src="product.image" />
				<h2 class="text-center mb-2">{{ product.name }}</h2>
				<div class="mb-6 short-description" v-html="product.description"></div>
				<div class="d-flex align-center justify-center mb-4">
					<span class="text-body-2 text-grey mr-2">starting</span><sup>$</sup
					><span class="text-h4">{{ product.basePrice }}</span>
				</div>
				<div class="text-center">
					<v-btn
						flat
						block
						color="blue-darken-4"
						class="mb-3"
						@click="buildProduct()"
						>Select</v-btn
					>
				</div>
			</v-card>
		</v-col>
	</v-row>
</template>

<style scoped>
.short-description ul li {
	list-style: none;
	padding-bottom: 10px;
}
</style>
