<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.fetchToughbook();

function updateProcessor(v) {
	this.storeQuote.product.processor = v;
}

function updateCelluar(v) {
	this.storeQuote.product.gps = v;
}
</script>

<template>
	<v-row>
		<v-col cols="12" md="6" class="d-flex justify-center align-start"
			><v-img src="/images/toughbook_55.png"
		/></v-col>
		<v-col cols="12" md="6" class="d-flex flex-column mt-6">
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
					@click="updateProcessor('i5')"
					><v-card-title class="text-h6 text-grey-darken-3"
						>i5</v-card-title
					></v-card
				>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					class="d-flex align-center pa-4 my-2 rounded-lg"
					@click="updateProcessor('i7')"
					><v-card-title class="text-h6 text-grey-darken-3">i7</v-card-title
					><v-spacer />
					<div class="mr-6 text-grey-darken-3">+ $290</div></v-card
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
					><v-card-title class="text-h6 text-grey-darken-3"
						>No Celluar</v-card-title
					></v-card
				>
				<v-card
					variant="outlined"
					color="blue-darken-2"
					@click="updateCelluar('4G LTE')"
					class="d-flex align-center pa-4 my-2 rounded-lg"
					><v-card-title class="text-h6 text-grey-darken-3">4G LTE</v-card-title
					><v-spacer />
					<div class="mr-6 text-grey-darken-3">+ $400</div></v-card
				>
			</section>
		</v-col>
	</v-row>
	<v-footer app class="bg-grey-lighten-4">
		<v-container class="d-flex justify-end align-center">
			<div class="d-flex align-center mr-4">
				<v-btn
					size="x-small"
					icon="mdi-minus"
					variant="tonal"
					color="blue-lighten-2"
					@click="storeQuote.decreaseCount()"
				></v-btn>
				<div class="mx-3">{{ storeQuote.quantity }}</div>
				<v-btn
					size="x-small"
					icon="mdi-plus"
					variant="tonal"
					color="blue-lighten-2"
					@click="storeQuote.increaseCount()"
				></v-btn>
			</div>
			<div class="d-flex align-center text-h4">
				{{ storeQuote.getProductTotal }}
			</div>
			<v-btn variant="tonal" color="blue-darken-2" class="ml-6"
				>Add To Quote</v-btn
			></v-container
		>
	</v-footer>
</template>

<style>
.pointer :hover {
	cursor: pointer;
}
</style>
