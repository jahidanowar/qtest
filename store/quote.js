import products from '@/products.json';

export const useQuoteStore = defineStore('quote', {
	state: () => ({
		products,
		toughbooks: [],
		toughbook: {},
		product: {
			sku: '',
			device: 'Toughbook 55',
			nickname: 'TB55',
			processor: 'i5',
			gps: 'No Celluar',
			touch: false,
		},
		productTotal: {
			base: 2405,
			processor: 0,
			gps: 0,
			touch: 0,
		},
		quantity: 1,
	}),
	actions: {
		fetchToughbooks() {
			this.toughbooks = this.products
				.map((item) => {
					return item.variations;
				})
				.flat();
		},
		fetchToughbook() {
			this.toughbook = this.products.filter((item) => {
				return item.device.includes('Toughbook 55');
			});
		},
		increaseCount() {
			this.quantity++;
		},
		decreaseCount() {
			this.quantity--;
		},
	},
	getters: {
		getToughbooks(state) {
			return state.toughbooks;
		},
		getTB55(state) {
			return state.toughbook;
		},
		getProductTotal(state) {
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			});

			const productTotal =
				state.productTotal.base +
				state.productTotal.processor +
				state.productTotal.gps +
				state.productTotal.touch;

			const total = productTotal * state.quantity;

			const totalCurrency = formatter.format(total);

			return totalCurrency;
		},
	},
});
