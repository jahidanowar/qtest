<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.fetchToughbook55();

const dialogProcessor = ref(false);
const dialogGPS = ref(false);
const dialogScreen = ref(false);

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
		<v-col cols="12" md="7" class="d-flex flex-column justify-start">
			<div>
				<v-card flat class="bg-grey-lighten-4 rounded-xl pa-16">
					<v-img src="/images/toughbook_55.png" />
				</v-card>
			</div>

			<div class="px-16 mt-12 short-description">
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
		</v-col>
		<v-col cols="12" md="5" class="d-flex flex-column pa-6">
			<div class="text-h4 font-weight-bold">TOUGHBOOK 55</div>
			<div class="d-flex">
				<div class="text-body-2 text-grey-darken-2">Starting at $2,405</div>
			</div>

			<v-divider class="mt-6"></v-divider>
			<section class="d-flex flex-column my-8">
				<div class="text-subtitle-1 font-weight-bold">Processor</div>
				<div class="pointer">
					<span
						class="text-blue-darken-4 text-subtitle-2"
						@click="dialogProcessor = true"
						>Which processor should you choose?</span
					>
					<v-dialog v-model="dialogProcessor">
						<v-container fluid class="d-flex justify-center align-center">
							<v-card width="420px" class="py-4 px-6">
								<div class="d-flex justify-end">
									<v-icon
										icon="mdi-close"
										color="grey"
										@click="dialogProcessor = false"
									></v-icon>
								</div>
								<v-card-text>
									<h3>Processors</h3>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</v-card-text>
							</v-card>
						</v-container>
					</v-dialog>
				</div>
				<div class="d-flex mt-3">
					<v-card
						width="50%"
						variant="outlined"
						color="blue-darken-2"
						class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
						:class="[
							storeQuote.product.processor === 'i5' ? 'active-card-bg' : '',
						]"
						@click="updateProcessor('i5')"
						><div class="text-subtitle-1 font-weight-bold text-grey-darken-3">
							i5
						</div>
						<div class="text-body-2 text-grey-darken-3">Standard</div>
					</v-card>
					<v-card
						width="50%"
						variant="outlined"
						color="blue-darken-2"
						class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
						:class="[
							storeQuote.product.processor === 'i7' ? 'active-card-bg' : '',
						]"
						@click="updateProcessor('i7')"
						><div class="text-subtitle-1 font-weight-bold text-grey-darken-3">
							i7
						</div>
						<div class="text-body-2 text-grey-darken-3">+ $365</div></v-card
					>
				</div>
			</section>
			<v-divider />
			<section class="d-flex flex-column my-8">
				<div class="text-subtitle-1 font-weight-bold">Connectivity</div>
				<div class="pointer">
					<span
						class="text-blue-darken-4 text-subtitle-2 mb-3"
						@click="dialogGPS = true"
						>Do you want celluar data for GPS?</span
					>
					<v-dialog v-model="dialogGPS">
						<v-container fluid class="d-flex justify-center align-center">
							<v-card width="420px" class="py-4 px-6">
								<div class="d-flex justify-end">
									<v-icon
										icon="mdi-close"
										color="grey"
										@click="dialogGPS = false"
									></v-icon>
								</div>
								<v-card-text>
									<h3>GPS options</h3>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</v-card-text>
							</v-card>
						</v-container>
					</v-dialog>
				</div>
				<div class="d-flex mt-3">
					<v-card
						width="50%"
						variant="outlined"
						color="blue-darken-2"
						class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
						:class="[
							storeQuote.product.gps === 'No Celluar' ? 'active-card-bg' : '',
						]"
						@click="updateCelluar('No Celluar')"
						><div class="text-subtitle-1 font-weight-bold text-grey-darken-3">
							None
						</div>
						<div class="text-body-2 text-grey-darken-3">Standard</div>
					</v-card>
					<v-card
						width="50%"
						variant="outlined"
						color="blue-darken-2"
						class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
						:class="[
							storeQuote.product.gps === '4G LTE' ? 'active-card-bg' : '',
						]"
						@click="updateCelluar('4G LTE')"
						><div class="text-subtitle-1 font-weight-bold text-grey-darken-3">
							4G LTE
						</div>
						<div class="text-body-2 text-grey-darken-3">+ $285</div></v-card
					>
				</div>
			</section>
			<v-divider />
			<section class="d-flex flex-column my-8">
				<div class="text-subtitle-1 font-weight-bold">Touchscreen</div>
				<div class="pointer">
					<span
						class="text-blue-darken-4 text-subtitle-2 mb-3"
						@click="dialogScreen = true"
						>Make this a touchscreen?</span
					>
					<v-dialog v-model="dialogScreen">
						<v-container fluid class="d-flex justify-center align-center">
							<v-card width="420px" class="py-4 px-6">
								<div class="d-flex justify-end">
									<v-icon
										icon="mdi-close"
										color="grey"
										@click="dialogScreen = false"
									></v-icon>
								</div>
								<v-card-text>
									<h3>Touchscreen</h3>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</v-card-text>
							</v-card>
						</v-container>
					</v-dialog>
				</div>
				<div class="d-flex mt-3">
					<v-card
						width="50%"
						variant="outlined"
						color="blue-darken-2"
						class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
						:class="[
							storeQuote.product.touch === 'Standard Screen'
								? 'active-card-bg'
								: '',
						]"
						@click="updateScreen('Standard Screen')"
						><div class="text-subtitle-1 font-weight-bold text-grey-darken-3">
							None
						</div>
						<div class="text-body-2 text-grey-darken-3">Standard</div>
					</v-card>
					<v-card
						width="50%"
						variant="outlined"
						color="blue-darken-2"
						class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
						:class="[
							storeQuote.product.touch === 'Touchscreen'
								? 'active-card-bg'
								: '',
						]"
						@click="updateScreen('Touchscreen')"
						><div class="text-subtitle-1 font-weight-bold text-grey-darken-3">
							Touchscreen
						</div>
						<div class="text-body-2 text-grey-darken-3">+ $190</div></v-card
					>
				</div>
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
	background-color: rgb(242, 248, 255);
}
</style>
