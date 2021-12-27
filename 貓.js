module.exports = {
    name: '貓',
    aliases: ['貓', '猫', 'neko', 'Neko'],
    run: async (client, message) => {
        const ayane = [
            'https://i.pinimg.com/originals/02/71/8e/02718ebd3f9e98416d9175ac705b4a0e.jpg',
            'https://c4.wallpaperflare.com/wallpaper/103/565/94/neko-ears-anime-girls-pink-ribbon-hd-wallpaper-preview.jpg',
            'https://www.seekpng.com/png/detail/988-9885480_neko-animegirl-anime-nekogirl-miau-cat-kawaii-anime.png',
            'https://cdn.discordapp.com/attachments/897142960276254760/923120175451107368/FB_IMG_1640159368148.jpg',
            'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F1012%2Ff8defebfp00qi2rmi00gid200u000ipg008p005f.png&thumbnail=650x2147483647&quality=80&type=jpg',
            'http://5b0988e595225.cdn.sohucs.com/images/20180813/8f5d3a932c744003bdb88c43c0c0c4fa.gif',
            'https://cdn.wallpapersafari.com/85/44/vhOLo2.jpg',
            'https://i.pinimg.com/564x/b6/40/47/b64047c42593218c7cfaf9d7e2e01e01.jpg',
            'https://i.pinimg.com/564x/c4/b7/bd/c4b7bdb21fd2c1047d2427eb82bd58e7.jpg',
            'https://i.pinimg.com/564x/15/81/a9/1581a9763018992ba1224c9ee39a4a8d.jpg',
            'https://i.pinimg.com/564x/83/ca/6a/83ca6a158749b67cfed2d0ea6e34c0dc.jpg',
            'https://i.pinimg.com/564x/7c/df/75/7cdf756f550f67d4fc4f8bc1dd080b53.jpg',
            'https://i.pinimg.com/564x/1a/af/f2/1aaff275242d2aa775062a63802853d2.jpg',
            'https://i.pinimg.com/564x/bc/a4/33/bca433b835b7c9b0c7ac5885fd728023.jpg',
            'https://i.pinimg.com/564x/04/9e/7e/049e7ed6f323ad7894d8183a6f77aa70.jpg',
            'https://i.pinimg.com/564x/00/82/f1/0082f12644d2c120ff3c986c49cbabb1.jpg',
            'https://i.pinimg.com/564x/69/34/61/6934610a3375b6990888b0a680198826.jpg',

            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = ayane[Math.floor(Math.random() * ayane.length)];
        message.channel.send(response)
    }
}