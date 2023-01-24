const malScraper = require('mal-scraper');

module.exports = async (app) => {

    app.get('/anime/:string', async (req, res) => {
    try {
            if (req) {
                if (!req.params.string) { 
                console.log('\x1b[31m', '[ERROR] Objeto "anime" não encontrado!')  
                return res.json({
                    error: 'Passe o objeto "anime" para realizar a busca.'
                })
              } else {
                var search = req.params.string.toLocaleLowerCase();
                malScraper.getInfoFromName(search).then((data) => {
                    return res.json(data)
                })
                }
            }
        } catch (err) {
            console.log('\x1b[31m', `[ERROR] Anime ${req.params.string.toLowerCase()} não existe!`)
            return res.json({
                error: 'Anime não encontrado'
            });
        }
 })
}