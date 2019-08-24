#!/usr/bin/env node
const stdin = require('get-stdin');
const DomParser = require('dom-parser');
const args = require('yargs').demandCommand(1, 'Requires: <id> <attribute>').argv;
const getValue = attr => element => {
  if (element === null) return
  switch (attr || 'outerhtml') {
    case 'html':
      return element.innerHTML
    case 'text':
      return element.textContent
    case 'outerhtml':
      return element.outerHTML
    default:
      return element.getAttribute(attr)
  }
}

const querySelector = (selector, document) => {
  const [token, content] = [selector[0], selector.slice(1)]
  if (token === '.') return document.getElementsByClassName(content)
  if (token === '^') return document.getElementsByTagName(content)
  if (token === '~') return document.getElementsByName(content)
  if (token === '#') return [document.getElementById(content)]
  return [document.getElementById(selector)]
}

const present = items => console.log(items.join('\n'))

module.exports = (async () => {
  const [selector, attribute] = args['_']
  const parsed = new DomParser().parseFromString(await stdin())
  present(
    querySelector(selector, parsed)
    .map(getValue(attribute))
    .filter(x => x))
})()