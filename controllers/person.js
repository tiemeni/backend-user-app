const {
    getPersonById,
    getAllPersons,
    createaPerson,
    updateApersone,
    deletePersonById
} = require('./utils');

const getPersons = (_req, res) => {
    getAllPersons()
        .then(persons => {
            res.json({ data: persons });
        })
        .catch(e => {
            res.status(400).json({ err: e })
        })
};

const getPerson = (req, res) => {
    const id = Number(req.params.personID)
    getPersonById(id)
        .then(data => {
            res.json({ data: data })
        })
        .catch((e) => {
            res.status(404).send({ err: e })
        })
};

const createPerson = (req, res) => {
    console.log(req.body)
    createaPerson(req.body.name, req.body.secName)
        .then(data => {
            res.status(200).json({ id: data })
        })
        .catch(e => {
            res.status(400).json({ err: e });
        })
};

const updatePerson = (req, res) => {
    const id = Number(req.params.personId)
    updateApersone(id, req.body.name, req.body.secName)
        .then(data => {
            res.status(200).json({ data: data })
        })
        .catch(e => {
            res.status(400).json({ err: e });
        })
};

const deletePerson = (req, res) => {
    const id = Number(req.params.personID)
    deletePersonById(id)
        .then(data => {
            res.status(200).json({ data: data });
        })
        .catch(err => {
            res.status(400).json({ err: err });
        })
};

module.exports = {
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
}