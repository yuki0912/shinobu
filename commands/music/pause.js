const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!pause',
    category: 'music',
    description: 'Pause the current song',
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            if (queue.paused) {
                return message.channel.send('❌ The song is already paused!');
            }

            queue.setPaused(true);

            const embed = new MessageEmbed()
                .setColor('ORANGE')
                .setTitle('⏸️ Paused!')
                .setDescription(`**${queue.current.title}** has been paused!`)
                .setThumbnail(queue.current.thumbnail)
                .setFooter(`Requested by ${message.author.username}`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error pausing song!');
        }
    }
};
