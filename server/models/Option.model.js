import mongoose from 'mongoose';
const { Schema } = mongoose;

const optionSchema = new Schema(
	{
		product: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
		name: {
			type: String,
			trim: true,
		},

		variations: [
			{
				name: { type: String },
				price: { type: Number },
			},
		],
		tooltipQuestion: {
			type: String,
			trim: true,
		},
		tooltipTitle: {
			type: String,
			trim: true,
		},
		tooltipContent: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Option', optionSchema);
