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
			image: null,
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
		fetchToughbook55() {
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

		fetchToughbook40() {
			this.toughbook = this.products.filter((item) => {
				return item.device.includes('Toughbook 40');
			});

			this.product = {
				sku: null,
				device: this.toughbook[0].device,
				nickname: null,
				processor: 'i5',
				gps: 'No Celluar',
				touch: 'Touchscreen',
				price: 4245,
				ram: '16GB',
				quantity: 1,
			};

			this.productTotal.base = this.product.price;
		},

		fetchToughbookG2() {
			this.toughbook = this.products.filter((item) => {
				return item.device.includes('Toughbook G2');
			});

			this.product = {
				sku: null,
				device: this.toughbook[0].device,
				nickname: null,
				processor: 'i5',
				gps: 'No Celluar',
				touch: 'Touchscreen',
				price: 2860,
				ram: '16GB',
				quantity: 1,
			};

			this.productTotal.base = this.product.price;
		},

		addPen() {
			this.product = {
				sku: 'CF-VNP012U',
				device: 'Stylus Pen',
				price: '$45.00',
				quantity: 1,
				image: 'pen.jpg',
			};

			this.cart.push(this.product);

			this.resetProduct();
		},
		addBattery() {
			this.product = {
				sku: 'CF-VZSU0PW',
				device: 'Spare Battery',
				price: '$150.00',
				quantity: 1,
				image: '55_battery.jpg',
			};

			this.cart.push(this.product);

			this.resetProduct();
		},
		addAdapter() {
			this.product = {
				sku: 'CF-AA5713A2m',
				device: 'Power Adapter',
				price: '$80.00',
				quantity: 1,
				image: '55_adapter.jpg',
			};

			this.cart.push(this.product);

			this.resetProduct();
		},

		resetProduct() {
			this.product = {
				sku: null,
				device: null,
				nickname: null,
				processor: null,
				gps: null,
				touch: null,
				ram: null,
				price: null,
				quantity: null,
				image: null,
			};

			this.productTotal = {
				base: 0,
				processor: 0,
				gps: 0,
				touch: 0,
				ram: 0,
			};
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

			this.productTotal = {
				base: 0,
				processor: 0,
				gps: 0,
				touch: 0,
				ram: 0,
			};

			if (this.product.device === 'Toughbook 40') {
				this.fetchToughbook40();
			}
			if (this.product.device === 'Toughbook 55') {
				this.fetchToughbook55();
			}
			if (this.product.device === 'Toughbook G2') {
				this.fetchToughbookG2();
			}

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
