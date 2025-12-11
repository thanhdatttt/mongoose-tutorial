import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
  try {
    req.validated = {};

    req.validated.body = schema.parse(req.body);

    next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ errors: err.issues });
    }
    return res
      .status(500)
      .json({ error: err.message || "Something went wrong." });
  }
};
