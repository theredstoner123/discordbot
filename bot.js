const Discord = require('discord.js');
const bot = new Discord.Client();

 

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', (user, userID, channelID, message) => {

    if (message.content === 'ping') {

       bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });

       }

});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
