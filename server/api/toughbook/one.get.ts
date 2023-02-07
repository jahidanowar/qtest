import Toughbook from '~/server/models/Toughbook.model';

export default defineEventHandler(async (event) => {
	try {
		const query = getQuery(event);

		const toughbook = await Toughbook.findOne({
			name: query.name,
			cpu: query.cpu,
			gps: query.gps,
			screen: query.screen,
		}).populate('accessories');

		return toughbook;
	} catch (error) {
		console.log(error);
	}
});
