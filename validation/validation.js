const validation = (schema) => {
  const validFunc = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    next();
  };
  return validFunc;
};
module.exports = validation;
