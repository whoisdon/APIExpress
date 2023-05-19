/*
    ~~ database connect.

    - for types database [ mySQL, mongo DB, SQL server....]

    
*/


export default class Db {
    constructor (database) {
        this.database = database;
    }

    Start() {
        new this.database().Connection();
    }

}
