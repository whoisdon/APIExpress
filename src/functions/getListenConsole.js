function getListenConsole(port) {
console.log('\x1b[35m', '―――――――――――――――――― API ――――――――――――――――――')
console.log(' ')
console.log('\x1b[32m', `[LOGS] Sistema listando na porta ${port}`)
console.log('\x1b[32m', '[LOGS] Sistema conectado localmente')
console.log('\x1b[32m', '[LOGS] Sistema aberto a requisições post')
console.log(' ')
console.log('\x1b[35m', '―――――――――――――――――― API ――――――――――――――――――')
console.log(' ')
}

module.exports = {
    getListenConsole
}
