const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', async message => {
    // console.log(message.content("Hey there!"));
    if ((message.content == 'hello') || (message.content == 'Hello')) {
        await message.channel.send("hey there " + message.author.username + " \t" + "https://www.youtube.com/watch?v=u9Dg-g7t2l4");
    }
})



bot.login('NTQ0ODI3MDA4Njg1ODM0MjQx.XGKfsQ.g2s_19SECtwl_OzRa_p3mqEj-Ag');

