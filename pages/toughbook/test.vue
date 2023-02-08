<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
</script>

<template>
	<div>
		{{ storeBuilder.tb }}
	</div>
</template>
