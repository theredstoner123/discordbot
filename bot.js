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
 else if(enabled === true){
    if (message.author.id === "689560562513739957")//issa
    {
       if(/\d{1}[%](.*?)/.test(message))
		{
		   var percentage = message.content.substring(0, message.content.indexOf("%"));
		   var percentNum = parseInt(percentage);
		   
			if(percentNum === 69)
			   message.channel.send("69%? nice.");
			else if(percentNum < 50)
				message.channel.send(percentageSelect(percentage, [	"{p}? you hella lowballin", 
																	"bro look at him no way he only {p} cappin",
																	"{p}? u cappin."
																	]));
			else 
				message.channel.send("nah");
		}
    }
    else if (message.author.id === "707046570335535134")//assi
    {
		message.channel.send("nah nigga");
    }
	else if (!message.author.bot)
	{
		var string = message.content;
		var response = "";
		for (var i = 0; i < string.length; i++) 
		{
			if (!isVowel(string[i])) 
			{
				response += string[i];
			}
			else
			{
				response += "AEIOUaeiou"[Math.round((Math.random()*9))];
			}
		}
		message.channel.send(response);
	}
 }
 
});

function isVowel(char) {
  return "AEIOUaeiou".includes(char);
}

function arraySelect(array) {
    return array[Math.round((Math.random()*(array.length)))];
}

function percentageSelect(percent, responses) {
    var result = "";
	var selected;
	
	selected = responses[Math.round(Math.random()*(responses.length - 1))];
	var array = selected.split("{p}");
	result += array[0];
	for(var i = 1; i < array.length; i++)
	{
		result += percent + "%";
		result += array[i];
	}
	
	return result;
}


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
