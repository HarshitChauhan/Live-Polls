const Mongodb = require("mongodb");

const uri = "mongodb://localhost/livepoll";

module.exports = () => {
  const client = new Mongodb.MongoClient(uri, {
    useUnifiedTopology: true,
  });

  return client.connect();
};
