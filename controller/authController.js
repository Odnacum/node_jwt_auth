const express = require("express");
const jwt = require("jsonwebtoken");
//C:\laragon\www\node_jwt_auth\.js
exports.test = (req, resp) => {
  resp.json({
    message: "Testando a API",
  });
};

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];

  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
exports.userPost = (req, res, verifyToken) => {
  console.log(req.token);
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        msg: "Sucesso",
        authData,
      });
    }
  });
};
exports.login = (req, res) => {
  const user = {
    id: 1,
    username: "Mucando",
    email: "odnacum@gmail.com",
  };

  jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({
      token,
    });
  });
};
