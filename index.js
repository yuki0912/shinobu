const { Collection, Client, Discord } = require("discord.js");
const fs = require("fs");
const express = require("express");
const { Player } = require("discord-player");
const app = express();
const port = 2000;

app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(port, "0.0.0.0", () => {
    console.log(`Web server running on port ${port}`);
});

const client = new Client({
    disableEveryone: true,
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const player = new Player(client);
client.player = player;

// Player events
client.player.on("trackStart", (message, track) => {
    message.channel.send(`🎶 Now playing: **${track.title}**`);
});

client.player.on("error", (error, message) => {
    console.log(`Music Error: ${error}`);
    message.channel.send(`❌ Music Error: ${error}`);
});

client.player.on("playlistAdd", (message, queue, playlist) => {
    message.channel.send(
        `✅ Playlist **${playlist.title}** with **${playlist.tracks.length}** songs has been added to the queue!`,
    );
});

const config = require("./config.json");
const prefix = config.prefix;
const token = config.token;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});
client.on("ready", () => {
    client.user.setPresence({
        activity: {
            name: `💻s!help | ${client.guilds.cache.size} Server`,

            // -----ALL TYPES----
            // PLAYING
            // WATCHING
            // STREAMING
            // LISTENING

            type: "LISTENING",
        },

        //TYPES
        // -- dnd ( do not disturb )
        // -- idle
        // -- invisible
        // -- online

        status: "online",
    });
    console.log(`${client.user.username} ✅`);
});
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member)
        message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
});

client.login(token);
