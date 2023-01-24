class FiveM {
    constructor(ip) {
        if (!ip) throw Error('Forneça um serverIP e serverPort.');
        this.ip = ip;
    }

    getHost() {
        const split = this.ip.split(':')
        return split[0];
    }

    getPort() {
        const [, port] = this.ip.split(':');
        return port;
    }

    getJsonPlayers() {
        return new Promise((Success, Error) => {
            fetch(`http://${this.ip}/players.json`)
                .then((res) => res.json())
                .then((body) => {
                    Success(body);
                })
                .catch((err) => {
                    Error(err);
                });
        });
    }
}

module.exports = { FiveM }
