import SchemaUser from "../../db/SchemaUser";

const basket = async (req, res) => {
  const { id, basket } = req.body;
  const user = SchemaUser.findById(id);
  if (!user) {
    res.status(404);
    res.send("User Not Found");
    return;
  }

  const result = await SchemaUser.findByIdAndUpdate(id, {
    basket: { ...basket },
  });

  console.log(req.body);
  console.log(result);
  res.status(200);
  return res.send({ id, basket });
};

export default basket;
