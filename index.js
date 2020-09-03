const botconfig = require("./botconfig.json");
const discord   = require("discord.js");
const client    = new discord.Client({disableMentions: "everyone"});

client.on("ready", async () => {
    console.log(`${client.user.username} is now running correctly!`);
});

client.login(botconfig.token);
