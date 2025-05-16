const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');

router.get("/", contactController.getAll);
router.get("/:id", contactController.getSingle);

router.post("/", contactController.createContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;