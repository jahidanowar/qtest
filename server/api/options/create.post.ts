import Product from '~/server/models/Product.model';
import Option from '~~/server/models/Option.model';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		const option = await Option.create(body);

		await Product.findByIdAndUpdate(option.product, {
			$push: { options: option._id },
		});

		return { message: 'Option added' };
	} catch (error) {
		console.log(error);
	}
});
