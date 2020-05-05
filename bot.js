const Discord = require('discord.js');
const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Ready');

});

 

client.on('message', message => {

    if (message.author.id === '689560562513739957')
    {
       message.channel.send('issa u cap');
    }
    else if (message.author.id === '707046570335535134')
    {
       message.channel.send('assi u cap');
    }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
