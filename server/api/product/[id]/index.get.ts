import Product from '~/server/models/Product.model';

export default defineEventHandler(async (event) => {
	try {
		const { id } = event.context.params;

		// const product = await Product.findById(id).populate([
		// 	{
		// 		path: 'models',
		// 		model: 'Toughbook',
		// 	},
		// 	{
		// 		path: 'options',
		// 		model: 'Option',
		// 	},
		// ]);

		// const product = await Product.findOne({ _id: id }).populate([
		// 	{
		// 		path: 'models',
		// 		model: 'Toughbook',
		// 	},
		// 	{
		// 		path: 'options',
		// 		model: 'Option',
		// 	},
		// ]);

		const product = await Product.findOne({ _id: id });

		return product;
	} catch (error) {
		console.log(error);
	}
});
