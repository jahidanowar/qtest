<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
</script>

<template>
	<v-footer app class="bg-grey-lighten-4">
		<v-container class="d-flex justify-end align-center py-6">
			<div class="d-flex align-center mr-4">
				<v-btn
					size="x-small"
					icon="mdi-minus"
					variant="tonal"
					color="blue-lighten-2"
					@click="storeQuote.decreaseCount()"
				></v-btn>
				<div class="mx-3">{{ storeQuote.quantity }}</div>
				<v-btn
					size="x-small"
					icon="mdi-plus"
					variant="tonal"
					color="blue-lighten-2"
					@click="storeQuote.increaseCount()"
				></v-btn>
			</div>
			<div class="d-flex align-center text-h4">
				{{ storeQuote.getProductTotal }}
			</div>
			<div>
				<v-btn
					variant="tonal"
					color="blue-darken-2"
					class="ml-6"
					@click="storeQuote.addToCart()"
					>Add To Quote</v-btn
				>
			</div>
		</v-container>
	</v-footer>
</template>
