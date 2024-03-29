const { client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "report",
 /**
  *@param {Client} client
  *@param {Message} message
  *@param {String[]} args
  */
  run: async (client, message, args) => {
    const owner = client.users.cache.get(your user ID);

    const query = args.join(" ");
    if (!query) return message.reply('please text 00');

    const reportEmbed = new MessageEmbed()
      .setTitle('NEW Bug!')
      .addField('Author', message.author.toString(), true)
      .addField('Guild', message.guild.name, true)
      .addField('Report', query)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    owner.send(reportEmbed)
  },
};
