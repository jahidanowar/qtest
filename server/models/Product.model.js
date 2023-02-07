import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema(
	{
		models: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Toughbook',
			},
		],
		options: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Option',
			},
		],
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
		basePrice: {
			type: Number,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Product', productSchema);
