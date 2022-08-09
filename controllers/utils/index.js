const fs = require('fs');
const pathName = __dirname + '/../../data/data.json'


exports.createaPerson = (nom, secNom) => {
    return new Promise((accept, reject) => {
        fs.readFile(pathName, 'utf-8', (e, data) => {
            if (e) {
                reject('une erreur en interne : ' + e)
            } else {
                data = JSON.parse(data);
                if (nom && secNom) {
                    let length = data.length
                    data = [...data, { name: nom, secName: secNom, id: length + 1 }];
                    fs.writeFile(pathName, JSON.stringify(data), (_e, _data) => {
                        if (_e) {
                            reject(_e)
                        } else {
                            accept(length + 1)
                        }
                    })
                } else {
                    reject('inputs incorrects ')
                }
            }
        })
    })
}

exports.getPersonById = (id) => {
    return new Promise((accept, reject) => {
        let result = [];
        fs.readFile(pathName, 'utf-8', (e, persons) => {
            if (e) {
                reject('une error en interne')
            } else {
                persons = JSON.parse(persons);
                result = persons.filter(pers => pers.id == id)
                if (result.length > 0) {
                    accept(result[0])
                } else {
                    reject('aucune personne')
                }
            }

        })
    })
}

exports.getAllPersons = () => {
    return new Promise((accept, reject) => {
        fs.readFile(pathName, 'utf-8', (e, persons) => {
            if (e) {
                console.log(e)
                reject(new Error('une error en interne : ' + e))
            } else {
                persons = JSON.parse(persons);
                if (persons.length > 0) {
                    accept(persons)
                } else {
                    reject('aucune personne trouvée')
                }
            }
        })
    })
}

exports.updateApersone = (id, name_, secName) => {
    let result = [];
    return new Promise((accept, reject) => {
        fs.readFile(pathName, 'utf-8', (e, persons) => {
            if (e) {
                reject(new Error('une error en interne : ' + e))
            } else {
                persons = JSON.parse(persons);
                result = persons.filter(prs => prs.id == id);
                if (result.length > 0) {
                    result[0].name = name_
                    result[0].secName = secName
                    let newTab = persons.filter(prs => prs.id != id)
                    newTab.push(result[0]);
                    fs.writeFile(pathName, JSON.stringify(newTab), (err, _data) => {
                        if (err) {
                            reject(err)
                        } else {
                            accept(result[0])
                        }
                    })
                }
            }
        })
    })
}

exports.deletePersonById = (id) => {
    return new Promise((accept, reject) => {
        let undeleted = [];
        fs.readFile(pathName, 'utf-8', (e, persons) => {
            if (e) {
                reject(new Error('une error en interne : ' + e))
            } else {
                persons = JSON.parse(persons);
                undeleted = Array.from(persons).filter(prs => prs.id != id)
                if (undeleted.length != Array.from(persons).length) {
                    fs.writeFile(pathName, JSON.stringify(undeleted), (err, _data) => {
                        if (err) {
                            reject(err)
                        } else {
                            accept('deleted !');
                        }
                    })
                } else {
                    reject('aucun user a supprimer ')
                }
            }
        })
    })
}