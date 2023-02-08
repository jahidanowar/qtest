import Product from '~/server/models/Product.model';

export default defineEventHandler((event) => {
	try {
		const products = Product.find().populate('options');

		return products;
	} catch (error) {
		console.log(error);
	}
});
