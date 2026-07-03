const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!resume',
    category: 'music',
    description: 'Resume the paused song',
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            if (!queue.paused) {
                return message.channel.send('❌ The song is not paused!');
            }

            queue.setPaused(false);

            const embed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle('▶️ Resumed!')
                .setDescription(`**${queue.current.title}** has been resumed!`)
                .setThumbnail(queue.current.thumbnail)
                .setFooter(`Requested by ${message.author.username}`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error resuming song!');
        }
    }
};
