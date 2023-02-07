<script setup>
import { useBuilderStore } from '@/store/builder';
const router = useRouter();

const storeBuilder = useBuilderStore();

function startBuild() {
	storeBuilder.resetProducts;
	router.push({ path: '/s' });
}
</script>

<template>
	<v-app-bar flat color="#232323">
		<v-container class="d-flex align-center">
			<RSALogo height="32" width="80" /><span
				class="text-caption text-white ml-4"
				>v0.1.0</span
			>
			<v-spacer></v-spacer>
			<v-btn text color="white" nuxt to="/">Start Quote</v-btn>
			<v-btn text color="white" nuxt to="/products">SKU</v-btn>
			<v-btn
				icon="mdi-shopping-outline"
				color="white"
				@click="storeBuilder.drawer = !storeBuilder.drawer"
			></v-btn>
		</v-container>
	</v-app-bar>
</template>
