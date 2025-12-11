import { Router } from "express";
import { userCreateSchema, userUpdateSchema } from "../schemas/schema.js";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers.js";
import { validate } from "../middlewares/validate.middleware.js";
import { getSystemErrorName } from "util";

const router = Router();

router.get("", getUsers);
router.post("", validate(userCreateSchema), createUser);
router.put("/:id", validate(userUpdateSchema), updateUser);
router.delete("/:id", deleteUser);

export default router;
