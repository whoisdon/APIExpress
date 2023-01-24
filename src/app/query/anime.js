const malScraper = require('mal-scraper');

module.exports = async (app) => {

    app.get('/anime', async (req, res) => {
    try {
            if (req) {
                if (!req.query.nome) { 
                console.log('\x1b[31m', '[ERROR] Query "nome" não encontrado!')  
                return res.json({
                    error: 'Passe o query "nome" para realizar a busca.'
                })
              } else {
                var search = req.query.nome.toLocaleLowerCase();
                malScraper.getInfoFromName(search).then((data) => {
                    return res.json(data)
                })
                }
            }
        } catch (err) {
            console.log('\x1b[31m', `[ERROR] Anime ${req.query.nome.toLowerCase()} não existe!`)
            return res.json({
                error: 'Anime não encontrado'
            });
        }
 })
}
