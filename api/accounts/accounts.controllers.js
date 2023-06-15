let accounts = require("../../accounts");

exports.accountsGet = (req, res) => {
  return res.status(200).json(accounts);
};

exports.accountCreate = (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;

  let newAccount = req.body;
  newAccount = { newId, ...newAccount };
  accounts.push(newAccount);
  return res.status(201).json(accounts);
};

exports.accountDelete = (req, res) => {
  const { accountId } = req.body;
  accounts = accounts.filter((account) => account.id != accountId);
  return res.status(200).json({ msg: "Deleted!" });
};

exports.accountUpdate = (req, res) => {
  const { accountId } = req.body;
  const account = accounts.find((account) => account.id == accountId);
  if (!account) return res.status(404).json({ msg: "Account not found!" });

  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;

  return res.status(200).json(account);
};
