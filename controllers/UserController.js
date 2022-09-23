const readJSONFile = require('../middleware/readJSONFile');

readJSONFile('public/data.json', function (err, json) {
    if (err) { throw err; }
});


const index = async (req, res) => {

}

const all = async (req, res) => {
   

}

module.exports = { index, all }