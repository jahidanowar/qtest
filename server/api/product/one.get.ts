import Product from '~/server/models/Product.model';

export default defineEventHandler(async (event) => {
	try {
		const productID = event.context.params.id;

		const product = await Product.findById('63e195888d5e933395994542');

		// .populate(
		// 	'options models'
		// );

		return product;
	} catch (error) {
		console.log(error);
	}
});
