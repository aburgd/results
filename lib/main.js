"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// noinspection JSUnusedGlobalSymbols
function _default(title, ...statements) {
  console.log(title.toUpperCase());
  const titleLength = title.length;
  let div = '';

  for (let i = 0; i <= titleLength; i++) div += '=';

  console.log(div);
  statements.forEach(statement => {
    let message = statement.message;
    let bool = statement.bool;
    let outMsg = message + ': ' + bool.toString();
    console.log(outMsg);
  });
  console.log('\n');
}