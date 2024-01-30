const express = require('express');
const path = require('path');
const { config } = require('process');

function configExpress(app) {
  app.use(express.static(path.resolve('src/public')));
}


module.exports = configExpress;