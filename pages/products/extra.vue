<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.resetProduct();
</script>

<template>
	<h1 class="text-h3 text-center mb-12">All the essentials. And then some.</h1>
	<div class="text-overline my-6">
		Products that are compatible with your Toughbook
	</div>
	<v-row>
		<v-col cols="12" md="4" class="d-flex flex-column justify-center px-12"
			><div><v-img src="/images/pen.jpg" width="180px" /></div>
			<div class="text-body-2 text-blue text-center mt-6">CF-VNP012U</div>
			<h2 class="text-center">Stylus Pen</h2>

			<div class="text-h6 mb-3 text-center">$45</div>
			<div>
				<span class="text-body-2 text-grey"
					>This stylus pen is a must have and pairs great with your
					Toughbook.</span
				>
			</div>
			<div class="d-flex justify-center mt-6">
				<v-btn flat color="blue-darken-2" @click="storeQuote.addPen()"
					>Add to quote</v-btn
				>
			</div>
		</v-col>
		<v-col cols="12" md="4" class="d-flex flex-column justify-center px-12"
			><div><v-img src="/images/55_battery.jpg" width="180px" /></div>
			<div class="text-body-2 text-blue text-center mt-6">CF-VNP012U</div>
			<h2 class="text-center">Battery</h2>
			<div class="text-h6 mb-3 text-center">$150</div>
			<div>
				<span class="text-body-2 text-grey"
					>Stay untethered longer - add an extra 20 hours of power to your
					Toughbook.</span
				>
			</div>
			<div class="d-flex justify-center mt-6">
				<v-btn flat color="blue-darken-2" @click="storeQuote.addBattery()"
					>Add to quote</v-btn
				>
			</div>
		</v-col>
		<v-col cols="12" md="4" class="d-flex flex-column justify-center px-12"
			><div><v-img src="/images/55_adapter.jpg" width="180px" /></div>
			<div class="text-body-2 text-blue text-center mt-6">CF-VNP012U</div>
			<h2 class="text-center">Adapter</h2>
			<div class="text-h6 mb-3 text-center">$80</div>
			<div>
				<span class="text-body-2 text-grey"
					>Always forgetting where your charger is? Get an extra adpater.</span
				>
			</div>

			<div class="d-flex justify-center mt-6">
				<v-btn flat color="blue-darken-2" @click="storeQuote.addAdapter()"
					>Add to quote</v-btn
				>
			</div>
		</v-col>
	</v-row>
</template>
