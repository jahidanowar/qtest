import Product from '~/server/models/Product.model';

export default defineEventHandler(async (event) => {
	try {
		const products = await Product.find();

		return products;
	} catch (error) {
		console.log(error);
	}
});
