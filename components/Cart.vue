<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
</script>

<template>
	<v-navigation-drawer
		v-model="storeBuilder.drawer"
		location="right"
		width="400"
		class="pa-6"
	>
		<section class="py-3">
			<v-text-field
				label="Name"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-3"
			></v-text-field>
			<v-text-field
				label="Company"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-3"
			></v-text-field>
			<v-text-field
				label="Email"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-3"
			></v-text-field>
			<v-text-field
				label="Sales Rep"
				variant="outlined"
				bg-color="#f9f9f9"
				hide-details="true"
				class="mb-3"
			></v-text-field>
			<!-- <v-select :items="storeBuilder.salesReps" variant="outlined"></v-select> -->

			<v-divider class="my-6" />
		</section>
		<section v-if="storeBuilder.cart.length > 0">
			<div class="text-overline mb-8">Products For Quote</div>
			<div
				v-for="item in storeBuilder.cart"
				:key="item.sku"
				class="d-flex flex-column"
			>
				<v-card flat width="380px" class="d-flex justify-space-between mb-8">
					<div class="d-flex">
						<div class="mr-3">
							<v-img :src="item.image" width="72px"></v-img>
						</div>
						<div class="d-flex flex-column">
							<div class="text-body-2 text-blue-darken-2">{{ item.sku }}</div>
							<div class="text-subtitle-1">
								{{ item.device }}
							</div>

							<div
								class="text-body-2 text-grey-darken-2"
								v-if="item.cpu || item.gps || item.screen"
							>
								<span v-if="item.cpu">{{ item.cpu }}</span> •
								<span v-if="item.gps">{{ item.gps }}</span> •
								<span v-if="item.ram">{{ item.ram }}</span>
							</div>
							<div v-if="item.screen" class="text-body-2 text-grey-darken-2">
								{{ item.screen }}
							</div>
						</div>
					</div>

					<div class="d-flex justify-end font-weight-bold">
						{{ item.price }}
					</div>
				</v-card>
			</div>
		</section>
	</v-navigation-drawer>
</template>
