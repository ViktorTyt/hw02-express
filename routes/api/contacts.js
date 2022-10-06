const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
