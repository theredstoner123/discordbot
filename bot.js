const Discord = require('discord.js');
const client = new Discord.Client();

var enabled = true;

client.on('ready', () => {

    console.log('Ready');

});

 

client.on('message', message => {
 
 if(message.channel.type === 'dm' && message.author.id === '338510413807353866' && message.content === 'off')
 {
  enabled = false;
  message.channel.send('off');
 }
 
 if(message.channel.type === 'dm' && message.author.id === '338510413807353866' && message.content === 'on')
 {
  enabled = true;
  message.channel.send('on');
 }

 if(enabled === true){
    if (message.author.id === '689560562513739957')
    {
       message.channel.send('issa u cap');
    }
    else if (message.author.id === '707046570335535134')
    {
       message.channel.send('assi u cap');
    }
 }
 
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
