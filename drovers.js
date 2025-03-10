const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drovers = []
    const cattleToDrive = 50
    const allDrovers = database.drovers
    const numberNeeded = cattleToDrive / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }

    return drovers

}


module.exports = { hireDrovers }