const { request, response } = require("express");

module.exports = (client) => {
  return (request, response) => {
    console.log(client);
    response.json({});
  };
};
