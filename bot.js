const { Client, MessageAttachment } = require("discord.js");
const client = new Client();
const cheerio = require("cheerio");
const request = require("request");


var enabled = true;

client.on("ready", () => {

    console.log("Ready");

});

 

client.on("message", message => {
 
 if(message.channel.type === "dm")
 {
     if(message.content === "off" && message.author.id === "338510413807353866")
     {
        enabled = false;
        message.channel.send("off");
     }
     else if(message.content === "on" && message.author.id === "338510413807353866")
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
	
    if (message.author.id === "707046570335535134")//assi
    {
		message.channel.send("nah nigga");
    }
	
	if (!message.author.bot && Math.random() < 1.00)
	{
		var string = message.content;
		var response = "";
		for (var i = 0; i < string.length; i++) 
		{
			if ("aeiou".includes(string[i])) 
			{
				response += "aeiou"[Math.round((Math.random()*4))];
			}
			else if ("AEIOU".includes(string[i])) 
			{
				response += "AEIOU"[Math.round((Math.random()*4))];
			}
			else
			{
				response += string[i];
			}
		}
		message.channel.send(response);
		image(message, response)
	}
 }
 
});

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

function image(message, search) {
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        //console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
		message.channel.send(new MessageAttachment(urls[0]))
    });
}

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
