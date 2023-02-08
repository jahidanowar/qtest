<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();

const dialog = ref(false);
</script>

<template>
	<v-row>
		<v-col cols="12" md="7" class="d-flex flex-column justify-start">
			<div>
				<v-card flat class="bg-grey-lighten-4 rounded-xl pa-16">
					<v-img :src="storeBuilder.product.image" />
				</v-card>
			</div>

			<div class="px-16 mt-12 short-description">
				<div>{{ storeBuilder.product.description }}</div>
			</div>
		</v-col>
		<v-col cols="12" md="5" class="d-flex flex-column pa-6">
			<div class="text-h4 font-weight-bold">
				{{ storeBuilder.product.name }}
			</div>
			<div class="d-flex">
				<div class="text-body-2 text-grey-darken-2">
					Starting at ${{ storeBuilder.product.basePrice }}
				</div>
			</div>
			<v-divider class="my-6"></v-divider>

			<div>{{ storeBuilder.product.models }}</div>

			<!-- <div class="d-flex flex-column">
				<div v-for="option in storeBuilder.product.options" :key="option._id">
					<section class="d-flex flex-column">
						<div class="text-subtitle-1 font-weight-bold">
							{{ option.name }}
						</div>
						<div class="pointer">
							<span
								class="text-blue-darken-4 text-subtitle-2"
								@click.stop="dialog = true"
								>{{ option.tooltipQuestion }}</span
							>
							<v-dialog v-model="dialog">
								<v-container fluid class="d-flex justify-center align-center">
									<v-card width="420px" class="py-4 px-6">
										<div class="d-flex justify-end">
											<v-icon
												icon="mdi-close"
												color="grey"
												@click="dialog = false"
											></v-icon>
										</div>
										<v-card-text>
											<h3>{{ option.tooltipTitle }}</h3>
											{{ option.tooltipContent }}
										</v-card-text>
									</v-card>
								</v-container>
							</v-dialog>
						</div>

						<div class="d-flex">
							<div
								v-for="variation in option.variations"
								:key="variation._id"
								class="card-pointer"
							>
								<v-card
									width="200px"
									height="72px"
									variant="outlined"
									color="blue-darken-2"
									@click.stop="storeBuilder.updateModel(option.name, variation)"
									class="d-flex flex-column justify-center align-center ma-2 rounded-lg py-3"
									:class="[
										storeBuilder.toughbook.cpu === variation.name
											? 'active-card-bg'
											: '',
										storeBuilder.toughbook.gps === variation.name
											? 'active-card-bg'
											: '',
										storeBuilder.toughbook.screen === variation.name
											? 'active-card-bg'
											: '',
									]"
									><div
										class="text-subtitle-1 font-weight-bold text-grey-darken-3"
									>
										{{ variation.name }}
										<span
											v-if="variation.price"
											class="text-body-2 text-grey-darken-3 ml-1"
											>+ ${{ variation.price }}</span
										>
									</div>
								</v-card>
							</div>
						</div>

						<v-divider class="my-6" />
					</section>
				</div>
			</div> -->
		</v-col>
	</v-row>
	<QuoteFooter />
</template>

<style scoped>
.pointer :hover {
	cursor: pointer;
}

.card-pointer :hover {
	cursor: pointer;
	background-color: #f4f4f4;
}

.short-description ul li {
	padding-bottom: 10px;
}

.active-card-bg {
	background-color: rgb(242, 248, 255);
}
</style>
