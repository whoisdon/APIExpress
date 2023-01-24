const {
    glob
} = require("glob");
const {
    promisify
} = require("util");
const globPromise = promisify(glob);

module.exports = async (app) => {

    var searchMap = await globPromise(`${process.cwd()}/src/app/*/*.js`);
    searchMap.map((value) => require(value)(app));

}