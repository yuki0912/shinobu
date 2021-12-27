const random = require('something-random-on-discord').Random
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 's!waifu',
    category: 'fun',
    aliases: ['s!Waifu', 's!waifu'],
    description: 'Get Fresh waifu Images :D',
    run: async (client, message, args) => {
        let data = await random.getAnimeImgURL('waifu')
        message.channel.send(data)
    }
}
