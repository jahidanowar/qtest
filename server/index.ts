import mongoose from 'mongoose';
import { Nitro } from 'nitropack';

export default async (_nitroApp: Nitro) => {
	const config = useRuntimeConfig();

	try {
		mongoose.set('strictQuery', false);
		await mongoose
			.connect(config.mongoDB)
			.then(() => console.log('MongoDB is connected'));
	} catch (error) {
		console.log(error);
	}
};
