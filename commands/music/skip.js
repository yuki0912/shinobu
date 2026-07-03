const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!skip',
    category: 'music',
    description: 'Skip the current song',
    aliases: ['s'],
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            const currentTrack = queue.current;
            queue.skip();

            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle('⏭️ Skipped!')
                .setDescription(`**${currentTrack.title}** has been skipped!`)
                .setThumbnail(currentTrack.thumbnail)
                .setFooter(`Requested by ${message.author.username}`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error skipping song!');
        }
    }
};
