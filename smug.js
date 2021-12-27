const random = require('something-random-on-discord').Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'smug',
	category: 'fun',
    aliases: ['s!Smug','s!smug'],
	description: 'Get Fresh smug Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('smug');
		message.channel.send(data);
	}
};
