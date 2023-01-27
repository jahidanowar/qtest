<script setup>
import products from '@/products.json';
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
			<tr v-for="product in products" :key="product.sku">
				<td>{{ product.device }}</td>
				<td>{{ product.sku }}</td>
				<td>{{ product.processor }}</td>
				<td>
					<v-icon>{{
						product.gps === true ? 'mdi-check' : 'mdi-close'
					}}</v-icon>
				</td>
				<td>
					<v-icon>{{
						product.touch === true ? 'mdi-check' : 'mdi-close'
					}}</v-icon>
				</td>
			</tr>
		</tbody>
	</v-table>
</template>
