module.exports = {
    name: 's!miku',
    aliases: ['s!miku', 's!Miku'],
    run: async (client, message) => {
        const miku = [
            'https://cdn.discordapp.com/attachments/834445046594011176/892404755660431410/IMG_20210928_213650.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/877908081995046932/Screenshot_20210818-162750_Facebook.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/878952254495924224/FB_IMG_1629598539709.jpg',
            'https://www.pikpng.com/pngl/b/474-4748151_hatsunemiku-kawaii-miku-mikuhatsune-anime-vocaloid-kawaii-anime.png',
            'https://cdn.discordapp.com/attachments/897142960276254760/918357012033712138/IMG_20211209_122149.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/918357011765280829/IMG_20211209_122139.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/918357011547164684/IMG_20211209_122122.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/918357011303899136/IMG_20211209_122102.jpg',
            'https://cdn.discordapp.com/attachments/897142960276254760/917984049799266344/FB_IMG_1638934822914.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/917419963889885254/FB_IMG_1638800316241.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/846401066156294154/IMG_20210524_115121.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/844410881965555722/FB_IMG_1621393560175.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/843875950901985341/Screenshot_20210517-154138_Facebook.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/839757130743545856/Screenshot_20210505-140016.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/838797360829562880/20210502_154055.jpg',
            'https://cdn.discordapp.com/attachments/834445046594011176/835173455623880734/FB_IMG_1619188194837.jpg',
            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = miku[Math.floor(Math.random() * miku.length)];
        message.channel.send(response)
    }
}