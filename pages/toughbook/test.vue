<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
</script>

<template>
	<div>
		{{ storeBuilder.product }}
	</div>

	<v-divider />

	<div>
		<div v-for="model in storeBuilder.product.toughbooks">
			<v-btn> {{ model.sku }}</v-btn>
		</div>
	</div>
</template>
