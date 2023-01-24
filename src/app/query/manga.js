const manga = require('manga-cli');

module.exports = (app) => {

    app.get('/manga', async (req, res) => {
        try {
            if (req) {
                if (!req.query.nome) {
                  console.log('\x1b[31m', '[ERROR] Query "nome" não encontrado!')
                  return res.json({
                    error: 'Passe o Query "nome" para realizar a busca.'
                })
              } else {
                var search = await manga(req.query.nome.toLowerCase());
                return res.json(search[0]);
                }
            }
        } catch (err) {
            console.log('\x1b[31m', `[ERROR] Mangá ${req.query.nome.toLowerCase()} não existe!`)
            return res.json({
                error: 'Mangá não encontrado'
            });
        }
    });

}
