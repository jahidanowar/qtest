import products from '@/products.json';

export const useQuoteStore = defineStore('quote', {
	state: () => ({
		products,
		toughbooks: [],
		toughbook: {},
		product: {
			sku: null,
			device: null,
			nickname: null,
			processor: null,
			gps: null,
			touch: null,
			ram: null,
			price: null,
			quantity: null,
		},
		productTotal: {
			base: 0,
			processor: 0,
			gps: 0,
			touch: 0,
			ram: 0,
		},
		quantity: 1,
		drawer: false,
		cart: [],
		cartTotal: 0,
		salesRep: null,
		salesReps: ['Lori Oquendo', 'Michael Cayes', 'Claes Adler'],
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

			this.product = {
				sku: null,
				device: this.toughbook[0].device,
				nickname: null,
				processor: 'i5',
				gps: 'No Celluar',
				touch: 'Standard Screen',
				price: 2405,
				ram: '16GB',
				quantity: 1,
			};

			this.productTotal.base = this.product.price;
		},

		increaseCount() {
			this.quantity++;
		},
		decreaseCount() {
			this.quantity--;
		},
		addToCart() {
			this.drawer = true;
			const newProduct = this.toughbook[0].variations.find(
				(tb) =>
					tb.processor === this.product.processor &&
					tb.gps === this.product.gps &&
					tb.touch === this.product.touch
			);

			newProduct.quantity = this.quantity;

			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			});

			const totalPrice =
				this.productTotal.base +
				this.productTotal.processor +
				this.productTotal.gps +
				this.productTotal.touch;

			const total = totalPrice * newProduct.quantity;

			newProduct.price = formatter.format(total);

			this.cart.push(newProduct);

			// let sum = 0;

			// this.cart.forEach((item) => {
			// 	sum += item.price;
			// });

			// this.cartTotal = sum;
		},
	},
	getters: {
		getToughbooks(state) {
			return state.toughbooks;
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
		// getCartTotal(state) {
		// 	return state.cartTotal;
		// },
	},
});
