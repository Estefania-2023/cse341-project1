const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');
const validation = require('../middleware/validate');

router.get("/", contactController.getAll);
router.get("/:id", contactController.getSingle);

router.post("/", validation.saveContact, contactController.createContact);
router.put("/:id", validation.saveContact, contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;