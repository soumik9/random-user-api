const loadUsers = require('../middleware/readJSONFile');
const { writeFileSync } = require('fs');

// data
const datas = loadUsers()


const index = async (req, res) => {

    const random = Math.round(Math.random() * (datas.length - 0));

    try {
        res.send(datas[random])
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const all = async (req, res) => {
    try {
        const { limit } = req.query
        res.send(datas.slice(0,limit))
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const store = async (req, res) => {

    const newData = req.body;

    try {
        datas.push(newData);

        writeFileSync(__dirname + '/../public/data.json', JSON.stringify(datas))
        res.send({newData, message: 'Data saved!'})
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = { index, all, store }