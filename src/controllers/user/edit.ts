import SchemaUser from "../../db/SchemaUser";

const edit = async (req, res) => {
  const { id } = req.body;
  const user = SchemaUser.findById(id);
  if (user === undefined) {
    res.send("Not Found");
    return;
  }

  const result = await SchemaUser.findByIdAndUpdate(id, {
    ...req.body.options,
  });
  res.status(200);
  res.send(result);
  return;
};

export default edit;
