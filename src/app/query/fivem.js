const { FiveM } = require('../../class/FiveM')

module.exports = async (app) => {

    app.get('/fivem', async (req, res) => {
        if (req) {
            if (!req.query.ip) {
                console.log('\x1b[31m', '[ERROR] Query "ip" não encontrado!')
                return res.json({
                    error: 'Passe o query "ip" para realizar a busca.'
                })
            } else {
                var search = req.query.ip;
                var server = new FiveM(search);

                server.getJsonPlayers().then((data) => {
                    return res.json(data)
                }).catch(() => {
                    console.log('\x1b[31m', `[ERROR] IP ${req.query.ip} não encontrado!`)
                    return res.json({
                        error: 'Servidor IP não encontrado'
                    });
                })
            }
        }

    })
}
