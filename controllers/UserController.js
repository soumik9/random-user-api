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

            if(newData.name === '' || newData.contact === '' || newData.gender === '' || newData.id === '' || newData.photoUrl === '' || newData.address === ''){
                res.status(400).send('All field is required!')
                return
            }

            datas.push(newData);

            const stringifiedDatas = JSON.stringify(datas);

            writeFileSync(__dirname + '/../public/data.json', stringifiedDatas)
            res.send({newData, message: 'Data saved!'})
        }

    } catch (error) {
        res.status(404).send(error.message)
    }
}

const update = async (req, res) => {

    try {
       
        const found = datas.find(item => item.id === Number(req.body.id));

        if(!found){
            res.status(409).send('No data found with this id');
        }else{

            const filteredData = datas.filter(item => item.id !== Number(req.body.id));

            const updateData = { ...found, 
                name: req.body.name, contact: req.body.contact, 
                address: req.body.address, gender: req.body.gender,
                photoUrl: req.body.photoUrl,
            }

            filteredData.push(updateData)
            writeFileSync(__dirname + '/../public/data.json', JSON.stringify(filteredData))
            res.send(`account with ${req.body.id} data update!`)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const bulkUpdate = async (req, res) => {

    console.log(req.body);

    try {
       
        // const found = datas.filter(item => item.id === Number(req.body));

        if(!found){
            res.status(409).send('No data found with this id');
        }else{

            // const filteredData = datas.filter(item => item.id !== Number(req.body.id));

            // const updateData = { ...found, 
            //     name: req.body.name, contact: req.body.contact, 
            //     address: req.body.address, gender: req.body.gender,
            //     photoUrl: req.body.photoUrl,
            // }

            // filteredData.push(updateData)
            // writeFileSync(__dirname + '/../public/data.json', JSON.stringify(filteredData))
            res.send(`accounta data updated!`)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const destroy = async (req, res) => {
    try {
        const found = datas.find(item => item.id === Number(req.body.id));
        if(!found){
            res.status(409).send('No data found with this id');
            
        }else{
            const afterDeleted = datas.filter(item => item.id !== Number(req.body.id));
            writeFileSync(__dirname + '/../public/data.json', JSON.stringify(afterDeleted))
            res.send(`account with ${req.body.id} Data deleted!`)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = { index, all, store, update, bulkUpdate, destroy }