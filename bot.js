const { Client, MessageAttachment } = require("discord.js");
const client = new Client();
const cheerio = require("cheerio");
const request = require("request");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Filter = require('bad-words')
const filter = new Filter();

client.login(process.env.BOT_TOKEN);

var enabled = true;


client.on("ready", () => {
	client.user.setStatus('available');
	client.user.setPresence({
		game: {
			name: 'with depression',
			type: "STREAMING",
			url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		}
	});
	
	console.log("Ready");
});



client.on("message", message => {
 
 if(message.channel.type === "dm")
 {
     if(message.content === "off" && message.author.id === "338510413807353866")
     {
        enabled = false;
        message.channel.send("off");
		message.channel.stopTyping();
     }
     else if(message.content === "on" && message.author.id === "338510413807353866")
     {
        enabled = true;
        message.channel.send("on");
		message.channel.stopTyping();
     }
  
 }
 else if(enabled === true){
    if (message.author.id === "689560562513739957")//issa
    {
       if(/\d{1}[%](.*?)/.test(message))
		{
			message.channel.startTyping();
			var percentage = message.content.substring(0, message.content.indexOf("%"));
			var percentNum = parseInt(percentage);
		   
			if(percentNum === 69)
			{
			   message.channel.send("69%? nice.");
			   message.channel.stopTyping();
			}
			else if(percentNum < 50)
			{
				message.channel.send(responseSelect("{p}", percentage + "%", 
				["{p}? you hella lowballin",
				"bro look at him no way he only {p} cappin",
				"{p}? u cappin."]));
				message.channel.stopTyping();
			}
			else 
			{
				message.channel.send("nah");
				message.channel.stopTyping();
			}
		}
    }
	
    if (message.author.id === "707046570335535134")//assi
    {
		message.channel.startTyping();
		message.channel.send("boo nigga");
		message.channel.stopTyping();
    }
	
	if (!message.author.bot && Math.random() < 1.00)
	{
		message.channel.startTyping();
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
		//message.channel.send(response);
		if(!filter.isProfane(response) && !filter.isProfane(string))
			image(message, response);
		else
		{
			message.channel.send(arraySelect([
				"no-no message",
				"profanity is not okay",
				"uh-uh nope"
				]));
			
		}
	}
 }
 
});

function arraySelect(array) {
    return array[Math.round(Math.random()*(array.length - 1))];
}

function responseSelect(delim, arg, responses) {
    var result = "";
	var selected;
	
	selected = responses[Math.round(Math.random()*(responses.length - 1))];
	var array = selected.split(delim);
	result += array[0];
	for(var i = 1; i < array.length; i++)
	{
		result += arg;
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
        
        if (!urls.length) {
            message.channel.send(search);
			message.channel.stopTyping();
			console.log(search + ":\tno links" );
            return;
        }
		
		for(var i = 0; i < urls.length; i++)
		{
			var finalLink = urls[i];
			
			if(finalLink.lastIndexOf("?") !== -1) finalLink = finalLink.substring(0, finalLink.lastIndexOf("?"));
			
			var http = new XMLHttpRequest();
			http.open('HEAD', finalLink, false);
			http.send();
			
			if(http.status === 200)
			{
				console.log(search + ":\t" + finalLink);
				message.channel.send(search, {files: [{attachment: finalLink, name: search + finalLink.substring(finalLink.lastIndexOf("."), finalLink.length)}]}).catch(console.error);
				message.channel.stopTyping();
				return;
			}
		}
		message.channel.send(search);
		message.channel.stopTyping();
		console.log(search + ":\tno valid link" );
    });
}