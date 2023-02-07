<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();

// storeQuote.resetProduct();
</script>

<template>
	<h1 class="text-h3 text-center mb-12">All the essentials. And then some.</h1>
	<div class="text-overline my-6">
		Accessories that are compatible with your {{ storeBuilder.toughbook.name }}
	</div>

	<div class="d-flex justify-center align-stretch">
		<div
			v-for="accessory in storeBuilder.toughbook.accessories"
			:key="accessory._id"
		>
			<v-card
				width="360px"
				height="500"
				flat
				class="d-flex align-center flex-column bg-grey-lighten-5 rounded-xl pa-12 mx-3"
			>
				<div><v-img :src="accessory.image" width="180px" /></div>
				<h2 class="text-center">{{ accessory.name }}</h2>
				<div class="text-h6 mb-3 text-center">{{ accessory.price }}</div>
				<div>
					<span class="text-body-2 text-grey">{{ accessory.description }}</span>
				</div>
				<div class="d-flex justify-center mt-6">
					<v-btn
						flat
						color="blue-darken-2"
						@click="storeBuilder.addAccessory(accessory)"
						>Add to quote</v-btn
					>
				</div>
			</v-card>
		</div>
	</div>
</template>
