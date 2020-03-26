const connection = require("../database/conection");

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "Ong id didn't found" });
    }

    return res.json(ong);
  }
};
