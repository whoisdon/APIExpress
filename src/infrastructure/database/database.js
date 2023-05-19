import mongoose from "mongoose";
import Log from "../../Log/logs.js";


export default class MongoDbConnection {
    Connection() {
        const URL = process.env.DB_CONNETCTION;
        mongoose.connect(URL)
            .then(() => {
                Log("Conexão com MongoDB foi efetuada.", "mongoose");
            })
            .catch((error) => {
                Log(error, "error");
            });
    }
}