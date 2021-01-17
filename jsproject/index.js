const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message' , async message => {
   // console.log(message.content("Hey there!"));
   b = 'hello ' || 'Hello';
    if ((message.content == 'hello') || (message.content == 'Hello')){
        await message.channel.send("hey there " + bot.user);
    }
})

bot.login('NTQ0ODI3MDA4Njg1ODM0MjQx.XGKfsQ.g2s_19SECtwl_OzRa_p3mqEj-Ag');

/* for (let test = 4; test <= 12; test++ ){
    setTimeout(() => {
        console.log(test);
    }, 500);
} */