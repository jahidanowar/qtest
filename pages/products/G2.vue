<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.fetchToughbookG2();

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
		storeQuote.productTotal.gps = 260;
	}
}

function updateRAM(v) {
	if (v === '16GB') {
		storeQuote.product.ram = v;
		storeQuote.productTotal.ram = 0;
	} else {
		storeQuote.product.ram = v;
		storeQuote.productTotal.ram = 435;
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
			><v-img src="/images/toughbook_G2.png"
		/></v-col>
		<v-col cols="12" md="4" offset-md="1" class="d-flex flex-column mt-6">
			<div class="text-h4 font-weight-bold mb-3">
				Customize the Toughbook G2
			</div>
			<div class="mb-4 short-description">
				<ul>
					<li>
						Innovative modular design with three expansion areas including a new
						quick-release SSD
					</li>
					<li>Backward compatible with most TOUGHBOOK G1 and 20 docks</li>
					<li>
						Infrared webcam and Windows Hello enables biometric user
						authentication
					</li>
					<li>
						18.5 hour battery life and optional battery hot swap for continuous
						use
					</li>
					<li>Optional 5G with Sub-6 & mmWave (EM9190) or 4G LTE (EM7511)</li>
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
					<div class="mr-6 text-grey-darken-3">+ $260</div></v-card
				>
			</section>
			<v-divider />
			<section class="d-flex flex-column py-4">
				<div class="text-subtitle-1 font-weight-bold">RAM</div>
				<div class="pointer">
					<span class="text-blue-darken-4 text-subtitle-2 mb-3"
						>Do you want upgrade the RAM?</span
					>
				</div>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateRAM('16GB')"
					class="d-flex pa-4 my-2 rounded-lg"
					:class="[storeQuote.product.ram === '16GB' ? 'active-card-bg' : '']"
					><v-card-title class="text-h6 text-grey-darken-3"
						>16GB</v-card-title
					></v-card
				>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateRAM('32GB')"
					class="d-flex align-center pa-4 my-2 rounded-lg"
					:class="[storeQuote.product.ram === '32GB' ? 'active-card-bg' : '']"
					><v-card-title class="text-h6 text-grey-darken-3">32GB</v-card-title
					><v-spacer />
					<div class="mr-6 text-grey-darken-3">+ $435</div></v-card
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
