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

		return { message: id };
	} catch (error) {
		console.log(error);
	}
});
