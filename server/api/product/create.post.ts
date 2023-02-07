import Product from '~/server/models/Product.model';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		await Product.create(body);
		return { message: 'Product added' };
	} catch (error) {
		console.log(error);
	}
});
