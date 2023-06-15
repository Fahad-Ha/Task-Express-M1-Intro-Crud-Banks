const express = require("express");
const accountsRoutes = require("./api/accounts/accounts.routers");
const PORT = 8000;

const app = express();
app.use(express.json());

app.use("/accounts", accountsRoutes);

// app.get("/accounts", accountsRoutes);

// app.post("/accounts", accountsRoutes);

// app.delete("/accounts/:accountId", accountsRoutes);

// app.put("/accounts/:accountId", accountsRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
