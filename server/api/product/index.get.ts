import Product from '~/server/models/Product.model';

export default defineEventHandler((event) => {
	try {
		const products = Product.find();

		return products;
	} catch (error) {
		console.log(error);
	}
});
