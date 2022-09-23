const { RequestError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    if (Object.keys(req.body).length === 0) {
      throw RequestError(400, "missing fields");
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
