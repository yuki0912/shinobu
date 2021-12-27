const random = require('something-random-on-discord').Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'slap',
	category: 'fun',
    aliases: ['s!Slap','s!slap'],
	description: 'Get Fresh slap Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('slap');
		message.channel.send(data);
	}
};
