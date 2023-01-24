const malScraper = require('mal-scraper');

module.exports = async (app) => {

    app.post('/anime', async (req, res) => {
        try {
            if (req) {
                if (!req.body.anime) { 
                console.log('\x1b[31m', '[ERROR] Objeto "anime" não encontrado!')  
                return res.json({
                    error: 'Passe o objeto "anime" para realizar a busca.'
                })
              } else {
                var search = req.body.anime.toLocaleLowerCase();
                malScraper.getInfoFromName(search).then((data) => {
                    return res.json(data)
                })
                }
            }
        } catch (err) {
            console.log('\x1b[31m', `[ERROR] Anime ${req.body.anime.toLowerCase()} não existe!`)
            return res.json({
                error: 'Anime não encontrado'
            });
        }
    });

}