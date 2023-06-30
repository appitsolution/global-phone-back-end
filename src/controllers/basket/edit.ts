import SchemaBasket from "../../db/SchemaBasket";

const edit = async (req, res) => {
  const { id, basket } = req.body;
  const user = SchemaBasket.findById(id);
  if (!user) {
    res.status(404);
    res.send("User Not Found");
    return;
  }

  const result = await SchemaBasket.findByIdAndUpdate(id, {
    basket: { ...basket },
  });

  res.status(200);
  return res.send({ id, basket });
};

export default edit;
