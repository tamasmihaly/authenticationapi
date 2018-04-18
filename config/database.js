const host = 'localhost'
const port = 27017
const user = 'USERFORTESTDB'
const password = 'USERPASSWORD'
const database = 'TESTDB'

const uri = `mongodb://${user}:${password}@${host}:${port}/${database}?authMechanism=SCRAM-SHA-1` //ezzel tud csatlakozni a mongohoz

const options = {
    connectTimeoutMS: 2000, // két másodpercig vár maximum
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect, 
    reconnectInterval: 500, // Reconnect every 500ms
}

module.exports = {
    uri: uri,
    options: options
}

/*
use DBNAME 
db.createUser(

)
*/