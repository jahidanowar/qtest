import mongoose from 'mongoose';
import { Nitro } from 'nitropack';

export default async (_nitroApp: Nitro) => {
	// const config = useRuntimeConfig();

	try {
		mongoose.set('strictQuery', false);
		await mongoose
			.connect(
				'mongodb+srv://Nick:lE9dpJSMpxan5HLO@rsaquote.jhogufy.mongodb.net/quote?retryWrites=true&w=majority'
			)
			.then(() => console.log('MongoDB is connected'));
	} catch (error) {
		console.log(error);
	}
};
