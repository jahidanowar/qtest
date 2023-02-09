import Product from "~/server/models/Product.model";

export default defineEventHandler(async (event) => {
  try {
    const params: any = getRouterParams(event).params;

    console.log({ params });

    const product = await Product.findOne({ _id: params.id }).populate(
      "toughbooks options"
    );

    // const product = await Product.aggregate([
    // 	{ $match: { name: 'Toughbook 55' } },
    // 	{
    // 		$group: {
    // 			_id: null,
    // 			data: { $first: '$$ROOT' },
    // 		},
    // 	},
    // 	{
    // 		$lookup: {
    // 			from: 'data.toughbooks',
    // 			localField: 'toughbooks',
    // 			foreignField: '_id',
    // 			as: 'models',
    // 		},
    // 	},
    // ]);

    console.log({ product });

    return product;

    // const product = await Product.findOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
});
