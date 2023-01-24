const manga = require('manga-cli');

module.exports = (app) => {

    app.post('/manga', async (req, res) => {
        try {
            if (req) {
                if (!req.body.manga) {
                  console.log('\x1b[31m', '[ERROR] Objeto "manga" não encontrado!')
                  return res.json({
                    error: 'Passe o objeto "manga" para realizar a busca.'
                })
              } else {
                var search = await manga(req.body.manga.toLowerCase());
                return res.json(search[0]);
                }
            }
        } catch (err) {
            console.log('\x1b[31m', `[ERROR] Mangá ${req.body.manga.toLowerCase()} não existe!`)
            return res.json({
                error: 'Mangá não encontrado'
            });
        }
    });

}