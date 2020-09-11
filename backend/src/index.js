const Express = require("express");
const setupMiddleare = require("./setup/middleware");
const setupDatabase = require("./setup/database");

const app = Express();

setupMiddleare(app);

setupDatabase()
  .then((client) => {
    console.log(client);
    app.listen(4000, () => {
      console.log("Server started on port 4000.");
    });
  })
  .catch(console.error);
