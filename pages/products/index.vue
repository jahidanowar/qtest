<script setup>
import { useQuoteStore } from '@/store/quote';

const storeQuote = useQuoteStore();
storeQuote.fetchToughbooks();
</script>

<template>
	<v-table>
		<thead>
			<tr>
				<th class="text-left">Device</th>
				<th class="text-left">SKU</th>
				<th class="text-left">Processor</th>
				<th class="text-left">4G LTE</th>
				<th class="text-left">Touch Screen</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="product in storeQuote.getToughbooks" :key="product.sku">
				<td>{{ product.device }}</td>
				<td>{{ product.sku }}</td>
				<td>{{ product.processor }}</td>
				<td>
					<v-icon :color="product.gps === 'No Celluar' ? 'red' : 'green'">{{
						product.gps === 'No Celluar' ? 'mdi-close' : 'mdi-check'
					}}</v-icon>
				</td>
				<td>
					<v-icon
						:color="product.touch === 'Standard Screen' ? 'red' : 'green'"
						>{{
							product.touch === 'Standard Screen' ? 'mdi-close' : 'mdi-check'
						}}</v-icon
					>
				</td>
			</tr>
		</tbody>
	</v-table>
</template>
