import Toughbook from '~/server/models/Toughbook.model';

export default defineEventHandler(async (event) => {
	try {
		const toughbooks = await Toughbook.find();

		return toughbooks;
	} catch (error) {
		console.log(error);
	}
});
