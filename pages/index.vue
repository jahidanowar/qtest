<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
</script>

<template>
	<h1>{{ storeQuote.name }}</h1>
</template>
