import Product from '~/server/models/Product.model';

export default defineEventHandler(async (event) => {
	try {
		const products = await Product.find().populate([
			{
				path: 'models',
				model: 'Toughbook',
			},
			{
				path: 'options',
				model: 'Option',
			},
		]);

		return products;
	} catch (error) {
		console.log(error);
	}
});
