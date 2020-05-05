const Discord = require('discord.js');
const client = new Discord.Client();

var enabled = true;

client.on('ready', () => {

    console.log('Ready');

});

 

client.on('message', message => {
 
 if(message.channel.type === 'dm' && message.author.id === '338510413807353866')
 {
     if(message.content === 'off')
     {
        enabled = false;
        message.channel.send('off');
     }
     else if(message.content === 'on')
     {
        enabled = true;
        message.channel.send('on');
     }
  
 }

 if(enabled === true){
    if (message.author.id === '689560562513739957')//issa
    {
       if(new RegExp('d{1}[%](.*?)').match(message))
       {
            return 'bro ' + message.substring(0, 3) + '? that shit wack';
       }
       else if(new RegExp('d{2}[%](.*?)').match(message))
       {
            return 'bro ' + message.substring(0, 4) + '? that shit wack';
       }
       else if(new RegExp('d{3}[%](.*?)').match(message))
       {
            return 'bro ' + message.substring(0, 5) + '? that shit wack';
       }
    }
    else if (message.author.id === '707046570335535134')//assi
    {
       message.channel.send('assi u cap');
    }
 }
 
});

function arraySelect(array) {
    return array[Math.round((Math.random()*(array.length)))];
}


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
