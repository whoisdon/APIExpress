function getHomeArray() {

    var AleatoryTitles = ['One Piece', 'Naruto', 'Dragon Ball', 'Detective Conan', 'Attack on Titan', 'Berserk', 'Death Note', 'Fairy Tail', 'Hunter x Hunter', 'Gintama', 'Bleach', 'One Punch Man', "JoJo's Bizarre Adventure", 'Haikyu!!', 'Fullmetal Alchemist', 'The Promised Neverland', 'Black Clover', 'Food Wars! Shokugeki no Soma', 'My Hero Academia', 'Demon Slayer', 'Kimetsu no Yaiba']
    var valueTitles = AleatoryTitles[Math.floor(Math.random() * AleatoryTitles.length)];

    var homeArray = ['Qual o nome do mangá?', 'Qual é o título do mangá?', `Você ja ouviu falar no mangá: ${valueTitles}`]
    var saidaArray = homeArray[Math.floor(Math.random() * homeArray.length)];

    return saidaArray;

}

module.exports = {
    getHomeArray
}