const { Collection, Client, Discord } = require('discord.js');
const fs = require('fs');
const { keep_alive } = require("./keep_alive");
const client = new Client({
    disableEveryone: true,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands/');
['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on('ready', () => {
    client.user.setPresence({
        activity: {
            name: `${client.guilds.cache.size} Server`,

            // -----ALL TYPES----
            // PLAYING
            // WATCHING
            // STREAMING
            // LISTENING

            type: 'PLAYING'
        },

        //TYPES
        // -- dnd ( do not disturb )
        // -- idle
        // -- invisible
        // -- online

        status: 'online'
    })
    console.log(`${client.user.username} ✅`)
});
client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member)
        message.member = await message.guild.fetchMember(message);
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
});

client.login(token);
