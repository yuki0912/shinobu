const { client, Message, MessageAttachment } = require("discord.js")
const { Canvas } = require("canvacord")

module.exports = {
    name: "rip",
   category: 'fun',
    aliases: ['rip', 'Rip'],
    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png' });

        const image = await Canvas.rip(avatar);

        message.channel.send(new MessageAttachment(image, 'image.gif')
        )
    },
};
