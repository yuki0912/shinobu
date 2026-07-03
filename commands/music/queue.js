const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 's!queue',
    category: 'music',
    description: 'Show the music queue',
    aliases: ['q'],
    run: async (client, message, args) => {
        try {
            const player = client.player;
            const queue = player.getQueue(message.guild);

            if (!queue || !queue.playing) {
                return message.channel.send('❌ There is no song playing!');
            }

            const tracks = queue.tracks.slice(0, 10).map((track, index) => {
                return `**${index + 1}.** ${track.title} - \`${track.duration}\``;
            });

            const embed = new MessageEmbed()
                .setColor('PURPLE')
                .setTitle('🎵 Music Queue')
                .setDescription(`**Currently Playing:**\n${queue.current.title}\n\n**Up Next:**\n${tracks.length ? tracks.join('\n') : 'No more songs'}`)
                .setFooter(`Total songs in queue: ${queue.tracks.length}`);
            
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.log(error);
            message.channel.send('❌ Error showing queue!');
        }
    }
};
