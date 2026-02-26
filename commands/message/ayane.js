module.exports = {
    name: 's!ayane',
    aliases: ['s!ayane'],
    run: async (client, message) => {
        const ayane = [
            'https://i.pinimg.com/originals/22/4d/b5/224db5f05470946e4c60ca9afea7597f.gif',
            'https://i.pinimg.com/736x/51/2c/b2/512cb23c899ca433d77b2cfd30c7f6df.jpg',
            'https://i.pinimg.com/736x/ea/5c/5c/ea5c5cec244c144c1b2e9de01866907f.jpg',
            'https://i.pinimg.com/736x/90/df/a6/90dfa6fe71d26045f5a7ec6c49a01270.jpg',
            'https://i.pinimg.com/736x/ce/ab/e7/ceabe79a8aa3ca51eef6648f615a1d27.jpg',
            'https://i.pinimg.com/736x/1f/a1/ff/1fa1ff75153f7a8f5d218b70fce35aee.jpg',
            'https://i.pinimg.com/736x/57/cd/5f/57cd5f9cfe0c248e0013b3da4a8cc840.jpg',
            'https://i.pinimg.com/736x/fd/e4/d2/fde4d261fab020c9f9130be3c9f25e0b.jpg',
            'https://i.pinimg.com/736x/a0/9d/1d/a09d1d2d8a9891c54032a5c37646e3aa.jpg',
            'https://i.pinimg.com/736x/06/23/37/0623378281efc5ca17a101ad2331d853.jpg',
            'https://i.pinimg.com/736x/7d/61/72/7d617255d485f4a11abdb71e5aa9a446.jpg',
            'https://i.pinimg.com/736x/19/3d/1c/193d1c8e8e268637fbbb5740e50453d6.jpg',
            'https://i.pinimg.com/736x/78/31/f5/7831f5331db51c2782a37417feb72b09.jpg',
            'https://i.pinimg.com/736x/f8/ac/5c/f8ac5c2d3cafc0050b5de1450162057d.jpg',
            'https://i.pinimg.com/736x/ad/a1/65/ada165ba009f54fa72bbc9fbb304f7b0.jpg',
            'https://i.pinimg.com/736x/bf/3d/07/bf3d07163bea0079f37488b8639aa579.jpg',
            'https://i.pinimg.com/736x/15/30/3b/15303b417a6fed6d6b5c3141083255bc.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/843876034759098368/FB_IMG_1621252143262.jpg',
            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = ayane[Math.floor(Math.random() * ayane.length)];
        message.channel.send(response)
    }
}
