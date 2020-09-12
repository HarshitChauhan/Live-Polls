const Express = require("express");
const setupRouter = require("./setup/router");
const setupMiddleare = require("./setup/middleware");
const setupDatabase = require("./setup/database");

const app = Express();

setupMiddleare(app);
setupRouter(app);

setupDatabase()
  .then((client) => {
    console.log(client);
    app.listen(4000, () => {
      console.log("Server started on port 4000.");
    });
  })
  .catch(console.error);
