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
		<div v-for="option in storeBuilder.product.options">
			<v-btn> {{ option.name }}</v-btn>
		</div>
	</div>
</template>
