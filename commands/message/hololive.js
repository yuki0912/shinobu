module.exports = {
    name: 'hololive',
    aliases: ['hololive'],
    run: async (client, message) => {
        const ayane = [
            'https://cdn.discordapp.com/attachments/849708259552133180/855243064071290890/img_001.jpg',
            'https://i.pinimg.com/564x/19/39/16/1939161874ac8a6ad40c2fc57847320c.jpg',
            'https://i.pinimg.com/564x/4d/d8/59/4dd859e38ff1be8ef0a8e011f8e3ffb9.jpg',
            'https://i.pinimg.com/564x/c6/5e/6f/c65e6f2fdc10372aa4b42c0027a67176.jpg',
            'https://i.pinimg.com/564x/99/cf/f3/99cff3478933e44a95d35ea2397c97ea.jpg',
            'https://i.pinimg.com/564x/32/6f/cd/326fcd602e554dba5986fa04185b63f5.jpg',
            'https://i.pinimg.com/564x/a3/be/49/a3be49625eaf61dcf2f36b37a46a0aa3.jpg',
            'https://i.pinimg.com/564x/a5/17/0a/a5170a43efa9780c3f4551b406ab34f4.jpg',
            'https://i.pinimg.com/564x/36/b3/67/36b367ac5d22cabd38cfd47f08dfa44c.jpg',
            'https://i.pinimg.com/564x/b5/dd/a9/b5dda9855d467247869ead4a072135cd.jpg',
            'https://i.pinimg.com/564x/06/36/4c/06364c5b971e76c691fcca57dcb7e6bb.jpg',
            'https://i.pinimg.com/564x/a8/26/21/a82621b5da0ab97708ceefb1ab8ba025.jpg',
            'https://i.pinimg.com/564x/d8/1c/bc/d81cbc045c6b57d8fab969f4657b9cc2.jpg',
            'https://cdn.discordapp.com/attachments/767393942839754772/840423506848120872/FB_IMG_1620441903367.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/919539567667871794/FB_IMG_1639260748301.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/919539566770278410/20211212_184044.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/919539145033003028/FB_IMG_1639305477943.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/919539144705851392/FB_IMG_1639305487445.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/918478519078625300/FB_IMG_1639052722197.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/917985764040654858/FB_IMG_1638931429050.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/881122103531831296/20210828_182410.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/881121688392175616/FB_IMG_1630145965500.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/881121687775608842/FB_IMG_1630145963471.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/881121687318433862/FB_IMG_1630145961467.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/881121687029047396/FB_IMG_1630145959329.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/881121686735421500/FB_IMG_1630145937914.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/860423156137590794/FB_IMG_1625211103888.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/858276196981669938/FB_IMG_1624691419352.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/858276196697112606/FB_IMG_1624687390768.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/856023314564644914/89953838_p3.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/856023314275369030/89953838_p1.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/856023314001952798/84444714_p0.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/851025245732208690/FB_IMG_1622970605851.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/848312883590070283/FB_IMG_1622304308419.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/848312882990153799/FB_IMG_1622304281207.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/848312882546475039/FB_IMG_1622297375313.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/848312882307006484/FB_IMG_1622297360426.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/848312881576673310/FB_IMG_1622262799071.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/847509963843960942/FB_IMG_1622088135187.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/847139453566582884/FB_IMG_1622007382500.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/846210989149650954/FB_IMG_1621811395960.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/845138302469406750/FB_IMG_1621432442445.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/845138302087462962/80385195_p0.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/844127128018485308/20210518_104452.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/842051428994383928/80378694_p1.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/839757034865033217/FB_IMG_1620255764916.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/838796489701457980/FB_IMG_1620029814919.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/838055285851160606/FB_IMG_1619878052666.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/837996903476101130/FB_IMG_1619801115929.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/837996903223918642/FB_IMG_1619788719293.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/835774761204187136/IMG_20210425_150957.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/836254700650233897/FB_IMG_1619430353183.jpg',

            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = ayane[Math.floor(Math.random() * ayane.length)];
        message.channel.send(response)
    }
}