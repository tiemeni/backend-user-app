const persons = require('../data/persons.js');

const getPersons = (req, res) => {

    /*const person = persons.map(per => {
        return { name: per.name, secName: per.secName }
    })*/
    res.json(persons)
};

const getPerson = (req, res) => {
    const id = Number(req.params.personID)
    const person = persons.find(person => person.id === id)

    if (!person) {
        return res.status(404).send('Person not found')
    }
    res.json(person)
};

const createPerson = (req, res) => {
    const newPerson = {
        id: persons.length + 1,
        name: req.body.name,
        secName: req.body.secName
    }
    persons.push(newPerson)
    res.status(201).json(newPerson)
};

const updatePerson = (req, res) => {
    const id = Number(req.params.personID)
    const index = persons.findIndex(person => person.id === id)
    if (index === -1) {
        return res.status(404).send('Person not found')
    }
    const updatedPerson = {
        id: persons[index].id,
        name: req.body.name,
        secName: req.body.secName
    }
    persons[index] = updatedPerson
    res.status(200).json('Person updated')
};

const deletePerson = (req, res) => {
    const id = Number(req.params.personID)
    const index = persons.findIndex(person => person.id === id)
    if (index === -1) {
        return res.status(404).send('Person not found')
    }
    persons.splice(index, 1)
    res.status(200).json('Person deleted')
};

module.exports = {
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
}