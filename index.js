const { Collection, Client, Discord } = require("discord.js");
const fs = require("fs");
const express = require("express");
const { Player } = require("discord-player");
const app = express();
const port = 2000;

// Web 伺服器設定（供 Render 保活使用）
app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(port, "0.0.0.0", () => {
    console.log(`Web server running on port ${port}`);
});

// 初始化 Discord Client
const client = new Client({
    disableEveryone: true,
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const player = new Player(client);
client.player = player;

// 音樂播放器事件 (Player events)
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

// 載入設定檔（現在只從這裡拿 prefix）
const config = require("./config.json");
const prefix = config.prefix;

// 設定指令與分類
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

// 載入指令處理器
["command"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

// 機器人上線事件
client.on("ready", () => {
    client.user.setPresence({
        activity: {
            name: `💻s!help | ${client.guilds.cache.size} Server`,
            type: "LISTENING", 
        },
        status: "online", 
    });
    console.log(`${client.user.username} ✅ 上線成功！`);
});

// 訊息事件處理
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

// 100% 透過環境變數登入
const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error("❌ 錯誤：找不到環境變數 DISCORD_TOKEN！請確認你在 Render 後台有正確設定。");
    process.exit(1); // 沒 Token 直接中斷，避免產生無效重試
}

client.login(token);
