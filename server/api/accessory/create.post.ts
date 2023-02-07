import Accessory from '~/server/models/Accessory.model';
import Toughbook from '~/server/models/Toughbook.model';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		const acc = await Accessory.create(body);

		await Toughbook.updateMany(
			{ _id: { $in: acc.toughbooks } },
			{ $push: { accessories: acc._id } }
		);

		return { message: 'Accessory added' };
	} catch (error) {
		console.log(error);
	}
});
