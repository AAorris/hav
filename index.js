#!/usr/bin/env node
const stdin = require('get-stdin');
const DomParser = require('dom-parser');
const args = require('yargs').demandCommand(2, 'Requires: <id> <attribute>').argv;
module.exports = (async () => {
  const [id, attribute] = args['_']
  console.log(
    new DomParser()
    .parseFromString(await stdin())
    .getElementById(id)
    .getAttribute(attribute)
  )
})()