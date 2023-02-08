<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
</script>

<template>
	<div>
		{{ storeBuilder.product }}
	</div>

	<v-divider />

	<!-- <div>
		<div v-for="model in storeBuilder.product.models">
			<v-btn> {{ model._id }}</v-btn>
		</div>
	</div> -->
</template>
