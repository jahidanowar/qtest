<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.fetchToughbook40();

function updateProcessor(v) {
	if (v === 'i5') {
		storeQuote.product.processor = v;
		storeQuote.productTotal.processor = 0;
	} else {
		storeQuote.product.processor = v;
		storeQuote.productTotal.processor = 390;
	}
}

function updateCelluar(v) {
	if (v === 'No Celluar') {
		storeQuote.product.gps = v;
		storeQuote.productTotal.gps = 0;
	} else {
		storeQuote.product.gps = v;
		storeQuote.productTotal.gps = 430;
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
			><v-img src="/images/toughbook_40.png"
		/></v-col>
		<v-col cols="12" md="4" offset-md="1" class="d-flex flex-column mt-6">
			<div class="text-h4 font-weight-bold mb-3">
				Customize the Toughbook 40
			</div>
			<div class="mb-4 short-description">
				<ul>
					<li>
						Innovative modular design and user-removable expansion packs offer
						unparalleled customization
					</li>
					<li>
						State-of-the-art design optimizes thermals for effortless
						performance
					</li>
					<li>
						Class leading 95db speakers, 5MP infrared webcam with privacy cover
						and tetra-array microphones
					</li>
					<li>
						Fully rugged all-weather MIL-STD-810H & IP66 design built with
						magnesium alloy
					</li>
					<li>
						Fastest cellular in the industry—up to 2Gbps 4G modem or 5.5Gbps 5G
						modem adds Sub6, C-band and mmWave
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
					<div class="mr-6 text-grey-darken-3">+ $390</div></v-card
				>
			</section>
			<v-divider />
			<section class="d-flex flex-column py-4">
				<div class="text-subtitle-1 font-weight-bold">Choose connectivity</div>
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
					<div class="mr-6 text-grey-darken-3">+ $430</div></v-card
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
