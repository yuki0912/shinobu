module.exports = {
    name: 's!nijigen',
    aliases: ['s!nijigen'],
    run: async (client, message) => {
        const nijigen = [
            'https://cdn.discordapp.com/attachments/777060153504694272/878705047968550993/unknown.png',
            'https://cdn.discordapp.com/attachments/777060153504694272/879014814377185320/unknown.png',
            'https://cdn.discordapp.com/attachments/777060153504694272/879014840478343178/unknown.png',
            'https://cdn.discordapp.com/attachments/777060153504694272/879020056900689970/unknown.png',
            'https://cdn.discordapp.com/attachments/777060153504694272/879020347817623703/unknown.png',
            'https://cdn.discordapp.com/attachments/777060153504694272/879020377261637632/unknown.png',
            'https://cdn.discordapp.com/attachments/833671887245672468/883353366590267402/IMG_20210903_221025.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/874208131176091668/wallhaven-j3kdpy.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/868843503772393482/20210725_211136.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/865109419464982528/85302120_p0.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/855754516375666688/73125095_p0.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/847884818435145768/IMG_20210529_011105.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/844190131903529020/83685857_p2.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/921787920015323186/FB_IMG_1639841715427.jpg',
            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = nijigen[Math.floor(Math.random() * nijigen.length)];
        message.channel.send(response)
    }
}