export const useBuilderStore = defineStore('builder', {
	state: () => ({
		products: [],
		product: {},
		toughbooks: [],
		toughbook: {},
		productTotal: {
			base: 0,
			cpu: 0,
			gps: 0,
			screen: 0,
			ram: 0,
		},
		quantity: 1,
		drawer: false,
		cart: [],
		cartTotal: 0,
		salesRep: null,
		salesReps: ['Lori Oquendo', 'Michael Cayes', 'Claes Adler'],
		tb: null,
		pid: null,
	}),
	actions: {
		async fetchProducts() {
			this.products = await $fetch('/api/product');
		},
		async fetchProduct(productID) {
			this.pid = productID;
			// this.product = await $fetch(`/api/product/${productID}`);
			const { data } = await useFetch('https://fakestoreapi.com/products');
			this.tb = data;

			// this.toughbook = this.product.models[0];
			// this.productTotal.base = this.product.basePrice;
		},

		async fetchToughbooks() {
			this.toughbooks = await $fetch('/api/toughbook');
		},
		async fetchToughbook() {
			const name = this.toughbook.name;
			const cpu = this.toughbook.cpu;
			const gps = this.toughbook.gps;
			const screen = this.toughbook.screen;

			this.toughbook = await $fetch(
				`/api/toughbook/one?name=${name}&cpu=${cpu}&gps=${gps}&screen=${screen}`
			);
		},
		updateModel(o, v) {
			if (o === 'CPU') {
				this.toughbook.cpu = v.name;
				this.productTotal.cpu = v.price;
				this.fetchToughbook();
			}

			if (o === 'Screen') {
				this.toughbook.screen = v.name;
				this.productTotal.screen = v.price;
				this.fetchToughbook();
			}

			if (o === 'GPS') {
				this.toughbook.gps = v.name;
				this.productTotal.gps = v.price;
				this.fetchToughbook();
			}
		},
		increaseCount() {
			this.quantity++;
		},
		decreaseCount() {
			this.quantity--;
		},
		addToCart() {
			this.drawer = true;

			const totalPrice =
				this.productTotal.base +
				this.productTotal.cpu +
				this.productTotal.gps +
				this.productTotal.screen;

			this.toughbook.price = totalPrice * this.quantity;

			this.cart.push(this.toughbook);
		},
		addAccessory(accessory) {
			this.cart.push(accessory);
		},
		resetProducts() {
			this.product = {};
			this.toughbooks = [];
			this.toughbook = {};
			this.productTotal = {
				base: 0,
				cpu: 0,
				gps: 0,
				screen: 0,
				ram: 0,
			};
			this.quantity = 1;
		},
	},
	getters: {
		getProductTotal(state) {
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			});

			const productTotal =
				state.productTotal.base +
				state.productTotal.cpu +
				state.productTotal.gps +
				state.productTotal.screen;

			const total = productTotal * state.quantity;

			const totalCurrency = formatter.format(total);

			return totalCurrency;
		},
	},
});
