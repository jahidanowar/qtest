<script setup>
import { useBuilderStore } from '@/store/builder';

const storeBuilder = useBuilderStore();
storeBuilder.fetchToughbooks();
</script>

<template>
	<v-table>
		<thead>
			<tr>
				<th class="text-left">Device</th>
				<th class="text-left">SKU</th>
				<th class="text-center">CPU</th>
				<th class="text-center">RAM</th>
				<th class="text-center">GPS</th>
				<th class="text-center">Screen</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="product in storeBuilder.toughbooks" :key="product._id">
				<td>{{ product.name }}</td>
				<td>{{ product.sku }}</td>
				<td class="text-center">{{ product.cpu }}</td>
				<td class="text-center">{{ product.ram }}</td>
				<td class="text-center">
					<v-icon :color="product.gps === 'No GPS' ? 'red' : 'green'">{{
						product.gps === 'No GPS' ? 'mdi-close' : 'mdi-check'
					}}</v-icon>
				</td>
				<td class="text-center">
					<v-icon :color="product.screen === 'Standard' ? 'red' : 'green'">{{
						product.screen === 'Standard' ? 'mdi-close' : 'mdi-check'
					}}</v-icon>
				</td>
			</tr>
		</tbody>
	</v-table>
</template>
