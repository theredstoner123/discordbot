const Discord = require('discord.js');
const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Ready');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.channel.send('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
