<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
</script>

<template>
	<v-app-bar flat color="#232323">
		<v-container class="d-flex align-center">
			<RSALogo height="32" width="80" />
			<v-spacer></v-spacer>
			<v-btn text color="white" nuxt to="/">Start Quote</v-btn>
			<v-btn text color="white" nuxt to="/products">SKU</v-btn>
			<v-btn
				icon="mdi-shopping-outline"
				color="white"
				@click="storeQuote.drawer = !storeQuote.drawer"
			></v-btn>
		</v-container>
	</v-app-bar>
</template>
