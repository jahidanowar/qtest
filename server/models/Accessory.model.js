import mongoose from 'mongoose';
const { Schema } = mongoose;

const accessorySchema = new Schema(
	{
		toughbooks: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Toughbook',
			},
		],
		sku: {
			type: String,
			trim: true,
		},
		name: {
			type: String,
			trim: true,
		},
		image: {
			type: String,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		inventory: {
			type: String,
			trim: true,
		},
		price: {
			type: Number,
			trim: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Accessory', accessorySchema);
