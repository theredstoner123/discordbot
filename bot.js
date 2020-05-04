const Discord = require('discord.js');
const bot = new Discord.Client();

 

bot.on('ready', () => {

    console.log('Ready');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
