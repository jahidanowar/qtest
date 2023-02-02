<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.fetchToughbook();

function updateProcessor(v) {
	if (v === 'i5') {
		storeQuote.product.processor = v;
		storeQuote.productTotal.processor = 0;
	} else {
		storeQuote.product.processor = v;
		storeQuote.productTotal.processor = 365;
	}
}

function updateCelluar(v) {
	if (v === 'No Celluar') {
		storeQuote.product.gps = v;
		storeQuote.productTotal.gps = 0;
	} else {
		storeQuote.product.gps = v;
		storeQuote.productTotal.gps = 285;
	}
}

function updateScreen(v) {
	if (v === 'Standard Screen') {
		storeQuote.product.touch = v;
		storeQuote.productTotal.touch = 0;
	} else {
		storeQuote.product.touch = v;
		storeQuote.productTotal.touch = 190;
	}
}
</script>

<template>
	<v-row>
		<v-col
			cols="12"
			md="5"
			offset-md="1"
			class="d-flex justify-center align-start"
			><v-img src="/images/toughbook_55.png"
		/></v-col>
		<v-col cols="12" md="4" offset-md="1" class="d-flex flex-column mt-6">
			<div class="text-h4 font-weight-bold mb-3">
				Customize the Toughbook 55
			</div>
			<div class="mb-4 short-description">
				<ul>
					<li>
						Modular design with 6 user-removable expansion areas including 3
						xPAK areas, RAM, SSD and keyboard
					</li>
					<li>
						Infrared webcam with tetra-array microphones and privacy cover
					</li>
					<li>Up to 38 hours & hot swap with optional 2nd battery</li>
					<li>Vehicle and desktop docks backwards compatibility</li>
					<li>
						MIL-STD and IP53 certified magnesium alloy laptop with built-in
						handle
					</li>
				</ul>
			</div>
			<v-divider />
			<section class="d-flex flex-column py-4">
				<div class="text-subtitle-1 font-weight-bold">Processor</div>
				<div class="pointer">
					<span class="text-blue-darken-4 text-subtitle-2 mb-3"
						>Which processor should you choose?</span
					>
				</div>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					class="d-flex pa-4 my-2 rounded-lg"
					:class="[
						storeQuote.product.processor === 'i5' ? 'active-card-bg' : '',
					]"
					@click="updateProcessor('i5')"
					><v-card-title class="text-h6 text-grey-darken-3"
						>i5</v-card-title
					></v-card
				>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					class="d-flex align-center pa-4 my-2 rounded-lg"
					:class="[
						storeQuote.product.processor === 'i7' ? 'active-card-bg' : '',
					]"
					@click="updateProcessor('i7')"
					><v-card-title class="text-h6 text-grey-darken-3">i7</v-card-title
					><v-spacer />
					<div class="mr-6 text-grey-darken-3">+ $365</div></v-card
				>
			</section>
			<v-divider />
			<section class="d-flex flex-column py-4">
				<div class="text-subtitle-1 font-weight-bold">Celluar</div>
				<div class="pointer">
					<span class="text-blue-darken-4 text-subtitle-2 mb-3"
						>Do you want celluar data for GPS?</span
					>
				</div>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateCelluar('No Celluar')"
					class="d-flex pa-4 my-2 rounded-lg"
					:class="[
						storeQuote.product.gps === 'No Celluar' ? 'active-card-bg' : '',
					]"
					><v-card-title class="text-h6 text-grey-darken-3"
						>No Celluar</v-card-title
					></v-card
				>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateCelluar('4G LTE')"
					class="d-flex align-center pa-4 my-2 rounded-lg"
					:class="[storeQuote.product.gps === '4G LTE' ? 'active-card-bg' : '']"
					><v-card-title class="text-h6 text-grey-darken-3">4G LTE</v-card-title
					><v-spacer />
					<div class="mr-6 text-grey-darken-3">+ $285</div></v-card
				>
			</section>
			<section class="d-flex flex-column py-4">
				<div class="text-subtitle-1 font-weight-bold">Touchscreen</div>
				<div class="pointer">
					<span class="text-blue-darken-4 text-subtitle-2 mb-3"
						>Make this a touchscreen?</span
					>
				</div>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateScreen('Standard Screen')"
					:class="[
						storeQuote.product.touch === 'Standard Screen'
							? 'active-card-bg'
							: '',
					]"
					class="d-flex pa-4 my-2 rounded-lg"
					><v-card-title class="text-h6 text-grey-darken-3"
						>Standard Screen</v-card-title
					></v-card
				>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateScreen('Touchscreen')"
					class="d-flex align-center pa-4 my-2 rounded-lg"
					:class="[
						storeQuote.product.touch === 'Touchscreen' ? 'active-card-bg' : '',
					]"
					><v-card-title class="text-h6 text-grey-darken-3"
						>Touch Screen</v-card-title
					><v-spacer />
					<div class="mr-6 text-grey-darken-3">+ $190</div></v-card
				>
			</section>
		</v-col>
	</v-row>
	<QuoteFooter />
</template>

<style>
.pointer :hover {
	cursor: pointer;
}

.short-description ul li {
	padding-bottom: 10px;
}

.active-card-bg {
	background-color: rgb(223, 239, 255);
}
</style>
