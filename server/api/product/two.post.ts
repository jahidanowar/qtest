import Product from '~/server/models/Product.model';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		const product = await Product.findById(body).populate([
			{
				path: 'models',
				model: 'Toughbook',
			},
			{
				path: 'options',
				model: 'Option',
			},
		]);

		return product;
	} catch (error) {
		console.log(error);
	}
});
