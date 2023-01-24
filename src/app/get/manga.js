const manga = require('manga-cli');

module.exports = (app) => {

    app.get('/manga/:string', async (req, res) => {
        try {
            if (req) {
                if (!req.params.string) {
                  console.log('\x1b[31m', '[ERROR] Objeto "manga" não encontrado!')
                  return res.json({
                    error: 'Passe o objeto "manga" para realizar a busca.'
                })
              } else {
                var search = await manga(req.params.string.toLowerCase());
                return res.json(search[0]);
                }
            }
        } catch (err) {
            console.log('\x1b[31m', `[ERROR] Mangá ${req.params.string.toLowerCase()} não existe!`)
            return res.json({
                error: 'Mangá não encontrado'
            });
        }
    });

}