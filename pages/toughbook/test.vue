<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
</script>

<template>
	<div>
		{{ storeBuilder.message }}
	</div>
</template>
