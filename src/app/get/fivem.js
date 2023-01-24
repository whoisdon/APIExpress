const { FiveM } = require('../../class/FiveM')

module.exports = async (app) => {

    app.get('/fivem/:string', async (req, res) => {
        if (req) {
            if (!req.params.string) {
                console.log('\x1b[31m', '[ERROR] Objeto "ip" não encontrado!')
                return res.json({
                    error: 'Passe o objeto "ip" para realizar a busca.'
                })
            } else {
                var search = req.params.string;
                var server = new FiveM(search);

                server.getJsonPlayers().then((data) => {
                    return res.json(data)
                }).catch(() => {
                    console.log('\x1b[31m', `[ERROR] IP ${req.body.ip} não encontrado!`)
                    return res.json({
                        error: 'Servidor IP não encontrado'
                    });
                })
            }
        }

    })
}
