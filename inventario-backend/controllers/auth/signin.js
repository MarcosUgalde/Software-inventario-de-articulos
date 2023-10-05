const { hash, serialize } = require("simple-stateless-auth-library");
const errors = require("../../misc/errors");
const { selectUser } = require("../../models/auth");

models.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body;

  const response = await selectUser(await db)(email, hash.compare(password));

  if (!response.ok) return next(errors[response.error_code || 500]);

  serialize(res, response.content, { value: 15, type: "d" });

  res.status(200).json({
    success: true,
  });
};
