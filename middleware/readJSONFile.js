const { readFileSync } = require('fs');

const loadUsers = () => JSON.parse(readFileSync(__dirname + '/../public/data.json')) ;

module.exports = loadUsers