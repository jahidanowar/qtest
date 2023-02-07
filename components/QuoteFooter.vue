<script setup>
import { useBuilderStore } from '@/store/builder';
const router = useRouter();

const storeBuilder = useBuilderStore();

async function loadProduct() {
	storeBuilder.addToCart();
	router.push({ path: '/products/extra' });
}
</script>

<template>
	<v-footer app class="bg-grey-lighten-4">
		<v-container class="d-flex justify-end align-center py-2">
			<div class="d-flex justify-end">
				<div class="d-flex align-center mr-4">
					<v-btn
						size="x-small"
						icon="mdi-minus"
						variant="tonal"
						color="blue-lighten-2"
						@click="storeBuilder.decreaseCount()"
					></v-btn>
					<div class="mx-3">{{ storeBuilder.quantity }}</div>
					<v-btn
						size="x-small"
						icon="mdi-plus"
						variant="tonal"
						color="blue-lighten-2"
						@click="storeBuilder.increaseCount()"
					></v-btn>
				</div>
				<div class="d-flex align-center text-h4">
					{{ storeBuilder.getProductTotal }}
				</div>
				<div>
					<v-btn
						variant="tonal"
						color="blue-darken-2"
						class="ml-6"
						@click="loadProduct"
						>Add To Quote</v-btn
					>
				</div>
			</div>
		</v-container>
	</v-footer>
</template>
