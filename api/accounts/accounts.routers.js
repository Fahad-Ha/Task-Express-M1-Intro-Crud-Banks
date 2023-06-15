const express = require("express");
const router = express.Router();
const {
  accountCreate,
  accountsGet,
  accountDelete,
  accountUpdate,
} = require("./accounts.controllers");

router.get("/", accountsGet);

router.post("/", accountCreate);

router.delete("/:accountId", accountDelete);

router.put("/:accountId", accountUpdate);

module.exports = router;
