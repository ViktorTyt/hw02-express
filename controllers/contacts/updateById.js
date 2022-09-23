const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const { addSchema } = require("../../schemas/contacts");

const updateById = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw RequestError(400, "missing fields");
  }
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }

  const { contactId } = req.params;
  const result = await contacts.updateById(contactId, req.body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateById;
