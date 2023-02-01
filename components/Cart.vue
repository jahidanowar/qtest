<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
</script>

<template>
	<v-navigation-drawer
		v-model="storeQuote.drawer"
		location="right"
		width="400"
		class="pa-6"
	>
		<section>
			<v-text-field
				label="Name"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-2"
			></v-text-field>
			<v-text-field
				label="Company"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-2"
			></v-text-field>
			<v-text-field
				label="Email"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-2"
			></v-text-field>

			<v-select
				v-model="storeQuote.salesRep"
				:items="storeQuote.salesReps"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
			></v-select>

			<v-divider class="my-6" />
		</section>
		<section>
			<div class="text-overline">Products For Quote</div>
		</section>
	</v-navigation-drawer>
</template>
