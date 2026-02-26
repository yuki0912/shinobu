const { MessageEmbed } = require("discord.js");
module.exports = {
        name: "s!ping",
        category: "info",
        description: "Returns latency and API ping",

        /**
         * @param {Client} client
         * @param {Message} message
         * @param {String[]} args
         */

        run: async (client, message, args) => {
                const msg = await message.channel.send(`🏓 Pinging...`);
                const embed = new MessageEmbed()
                        .setTitle("Pong! 🏓")
                        .setColor("#00ff00")
                        .addField(
                                "API Latency",
                                `\`${client.ws.ping}ms\``,
                                true,
                        )
                        .addField(
                                "Message Latency",
                                `\`${Math.floor(msg.createdAt - message.createdAt)}ms\``,
                                true,
                        )
                        .setTimestamp()
                        .setFooter(`Requested by ${message.author.tag}`);

                await msg.edit("", embed);
        },
};
