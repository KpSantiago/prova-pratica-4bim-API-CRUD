const Products = require("../model/Products");

module.exports = {
	// listing all products
	async listingProducts(req, res) {
		const products = await Products.findAll();

		return res.json(products);
	},

	// only the choose products
	async listingChooseProduct(req, res) {
		const { id } = req.params;

		const products = await Products.findAll({
			where: {
				id: id,
			},
		});

		return res.json(products);
	},

	// delete product
	async deleteProducts(req, res) {
		const { id } = req.params;

		const products = await Products.destroy({
			where: {
				id: id,
			},
		});

		return res.json(products);
	},

	// posting products
	async postingProducts(req, res) {
		const { name, price, created } = req.body;

		const products = await Products.create({
			name: name,
			price: price,
			created: created,
		});

		return res.json(products);
	},

	// updating only one product
	async updatingProducts(req, res) {
		const { id, name, price, updated } = req.body;

		const products = await Products.update(
			{
				name: name,
				price: price,
				updated: updated,
			},
			{
				where: {
					id: id,
				},
			}
		);

		return res.json(products);
	},
};
