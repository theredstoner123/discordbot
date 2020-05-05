const Discord = require("discord.js");
const client = new Discord.Client();

var enabled = true;

client.on("ready", () => {

    console.log("Ready");

});

 

client.on("message", message => {
 
 if(message.channel.type === "dm" && message.author.id === "338510413807353866")
 {
     if(message.content === "off")
     {
        enabled = false;
        message.channel.send("off");
     }
     else if(message.content === "on")
     {
        enabled = true;
        message.channel.send("on");
     }
  
 }

 if(enabled === true){
    if (message.author.id === "689560562513739957")//issa
    {
       if(/\d{1}[%](.*?)/.test(message))
		{
		   var percentage = message.content.substring(0, message.content.indexOf("%"));
		   var percentNum = parseInt(percentage);
		   
		   if(percentNum === 69)
			   message.channel.send("69%? nice.");
		   else if(percentNum < 50)
			   percentageSelect(percentage, [	"{p}? you hella lowballin", 
												"bro look at him there's no way he only {p}",
												"{p}? u cappin."])
		}
    }
    else if (message.author.id === "707046570335535134")//assi
    {
       //message.channel.send("assi u cap");
    }
 }
 
});

function arraySelect(array) {
    return array[Math.round((Math.random()*(array.length)))];
}

function percentageSelect(percent, responses) {
    var result;
	var selected;
	var responses = [	"bro {p}? thats wack",
						"{}",
						];
	
	selected = responses[Math.round(Math.random()*responses.length))];
	var array = selected.split("{p}");
	result += array[0];
	for(var i = 1; i < array.length; i++)
	{
		result += percent + "%";
		result += array[i];
	}
}


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
