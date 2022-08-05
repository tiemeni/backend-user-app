const express = require('express')
const router = express.Router()

const {
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/person.js')

router.get('/', getPersons)

router.get('/:personID', getPerson)

router.post('/store', createPerson)

router.put('/update/:personId', updatePerson)

router.delete('/delete/:personID', deletePerson)

module.exports = router