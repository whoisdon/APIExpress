const {
    getHomeArray
} = require('../../functions/getHomeArray')

module.exports = async (app) => {

    app.get('/', async (req, res) => {
        res.json({
            manga: `${getHomeArray()}`
        })
    });

}