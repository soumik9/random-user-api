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

        const found = datas.find(item => item.id === newData.id);

        if(found){
            res.status(409).send('Can not create with same id')
        }else{

            if(newData.name === ''){
                res.status(400).send('Name is required!')
                return
            }
            if(newData.contact === ''){
                res.status(400).send('Contact is require!')
                return
            }

            datas.push(newData);

            writeFileSync(__dirname + '/../public/data.json', JSON.stringify(datas))
            res.send({newData, message: 'Data saved!'})
        }

    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = { index, all, store }