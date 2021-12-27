module.exports = {
    name: 's!yostar',
    aliases: ['s!yostar'],
    run: async (client, message) => {
        const yostar = [
            'https://cdn.discordapp.com/attachments/777060153504694272/879020191206490152/unknown.png',
            'https://cdn.discordapp.com/attachments/849708259552133180/855244481754562590/IMG_20210618_083549.jpg',
            'https://i.pinimg.com/564x/a8/75/d2/a875d2f27e2e4b4d618c4629ba3798ec.jpg',
            'https://i.pinimg.com/564x/bf/98/90/bf989083c26daa65eb19ad49c9b0d09e.jpg',
            'https://i.pinimg.com/564x/ea/a4/76/eaa476cedcb4a0a584a59feae463f917.jpg',
            'https://i.pinimg.com/564x/6f/19/00/6f190033bae6b8c6b5ca65ed0420d117.jpg',
            'https://i.pinimg.com/564x/cb/49/c4/cb49c4087d3827eaaa74d346c5b9a645.jpg',
            'https://i.pinimg.com/564x/76/30/6b/76306ba44cdd51ffb7c5a26c8c3f46be.jpg',
            'https://i.pinimg.com/564x/ca/69/12/ca691225cc26c59ab4f4b24471348427.jpg',
            'https://i.pinimg.com/564x/df/71/33/df71332d883834cb2f4e9200418f3013.jpg',
            'https://i.pinimg.com/736x/ec/53/4f/ec534f7ddf8b4b937079a5a440a8352f.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/918566352929824890/FB_IMG_1639073671724.jpg',
            'https://i.pinimg.com/564x/57/0f/3a/570f3a82f5bc5dc884c1e091dacd75b7.jpg',
            'https://i.pinimg.com/564x/2f/28/46/2f2846194121ee64292ff58dcacbf578.jpg',
            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = yostar[Math.floor(Math.random() * yostar.length)];
        message.channel.send(response)
    }
}