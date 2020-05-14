const Discord = require('discord.js');
const client = new Discord.Client();		    
const MusicBotAddon = require("discord-dynamic-music-bot-addon");
const prefixx = "p!";
const YOUTUBE_API_KEY = 'AIzaSyDCk1-hiwXO7PhT27ZuBRXIfhrrIHuhAOc';
 
const options = {
  // messageUpdateRate: number, // how fast should message be updated in second. Under 5 seconds its not going to work. (default: 5)
  // selfDeleteTime: number, // error message that bot sends to notify user about something are going to delete in seconds. (default: 5)
  // leaveVoiceChannelAfter: number, // when there isn't playing anything when should bot leave the channel is seconds. (default: 20)
  // leaveVoiceChannelAfterAllMembersLeft: number, // when no one is in channel and nothing is playing when should bot leave the channel is seconds. (default: 20)
  // maxTrackLength: number, // How long can requested track be in minutes. (default: 180 )
  // autoQueryDetection: boolean, // Smart feature a user only have to type player command and youtube url link and its going to automatically search or look for url. (default: true)
  // autoPlaylistDetection: boolean, // should autoQueryDetection look for playlist link and automatically parse them? (default: false)
  // waitTimeBetweenTracks: number,   // how longs should bot wait between switching tracks in seconds. (default: 2)
  // maxItemsInPlayList: number, // how many songs can playlist have in it. (default: 100)
  // maxUserItemsInPlayList: number,  // how many songs can user have in playlist (default: 10)
  // playlistParseWait: number, // wait time between fetching each track form playlist in seconds (default: 2)
  // multipleParser: boolean, // should bot look for multiple url in one message eg (player yt_url yt_url) (default: true)
  // playlistParse: boolean, // should bot parse playlists at all? (default: false)
  // votePercentage: number, // how many votes in percentage are required to perform vote action in percentage (default: 60)
  // coolDown: number, // how repeatedly can user send bot command. It's recommended to be higher tan 5 seconds in seconds (default: 5)
  // deleteUserMessage: boolean, // should delete user command messages (default: true)
  // hardDeleteUserMessage: boolean, // should delete every user message when the player is active (default:false)
  // reactionButtons: boolean, // should add reaction button to easily control the player with out entering commands (default: true)
  // suggestReplay: number, // should bot offer you a replay after the end of the song in seconds 0 to disable the feature (default: 20)
  // https://github.com/Lidcer/DiscordDynamicMusicBotAddon/blob/master/example/language.json.
  // language: language, // Custom language pack is check url above. By defining custom command you are only added aliases to existing commands the default ones are still going to be available
};
 
const youtubePlayer = new MusicBotAddon.YoutubePlayer(YOUTUBE_API_KEY, options);
 
client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefixx)) {
    youtubePlayer.onMessagePrefix(message, prefixx); // handles everything for you
    //youtubePlayer.onMessagePrefix(message, prefix, language); // if you want different language in different guilds you have to send language pack in message.
    //youtubePlayer.onMessage(message, message.content.slice(prefix.length),/*language*/); // if you want to do message mannerly remove prefix;
  }
});
 

client.on('ready',() => {
	
	   client.user.setPresence({game: {name: "in JAPAN | p!help", type: 0}});
 	  
});


var triviadb = [
	        "What does NIA love?",
	        "Who did NIA met first?",
	        "Newest of the group?",
	     	"How is NIAS memory?",
		"What colour does PIXEL like?",
		"Who does PIXEL love?",
		"Who is the middle child in JAPAN?",
		"Who is the eldest in JAPAN?",
		"Who is the youngest in JAPAN?",
		"What does Nia crave 24/7?",
		"What’s Nia favorite drink?",
		"What happened when Nia is bored?",
		"What is NIA's ethnicity?",
		"What is AMMY/ALDRIN/PIXEL's ethnicity?",
		"What is JELLY's ETHNICITY?",
		"Where does JELLY live?",
		"Where did PIXEL meet NIA?"
	]

var trivianswersdb = [
	        "PEANUT BUTTER",
	        "AMMY",
	        "PIXEL",
		"TERRIBLE",
		"PURPLE",
		"MARYLL",
		"PIXEL",
		"JELLY",
		"NIA",
		"NOODLES",
		"MILK",
		"BE PRODUCTIVE",
		"INDONESIAN",
		"FILIPINO",
		"CHINESE",
		"AUSTRALIA",
		"MINECRAFT VIDEO"]



var prefix = "p!"
var answers = 
    			["It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes, definitely",
			"You may rely on it",
			"As I see it, yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful"];
var hugifs =  [
	 "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 "https://i.imgur.com/r9aU2xv.gif",
 "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];

var slapgifs =  [
	 "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
 "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
 "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif"];


client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('WELCOME TO THE SERVER!! **' + member.user.username + '**,  Go introduce yourself in <#696322478922006588>! If you want, you can go to <#709716878263845218> and to join a club, go to <#709718943660769310>'); 
});
 
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'hug')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		  message.channel.send(`**${message.author.username}** hugged **${member.user.username}**`);
		const embed = new Discord.RichEmbed()

  .setImage(selecthugGif)
   message.channel.send({embed});
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'slap')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap = slapgifs[Math.floor(Math.random() * slapgifs.length)];
		  message.channel.send(`**${message.author.username}** slapped **${member.user.username}**`);
		const embed = new Discord.RichEmbed()

  .setImage(selectSlap)
   message.channel.send({embed});
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		
	const embed = new Discord.RichEmbed()
  .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
  .setDescription("Here you can find the main commands of the bot so you wont get confused")
.setThumbnail("https://cdn.discordapp.com/avatars/370483123848478721/2a073955469d1aefda2ce240ab5d2948.png?size=128")

  .addField("Main Commands",
    "\`help\`,\`ping\`,\`server\`")

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`")
.addField("Roleplay Commands", "\`hug\`,\`slap\`")
  message.channel.send({embed});

		
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + '8ball')) {
	var r8ballAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(r8ballAnswer);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'flip head')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
		 message.channel.send(`You got me <:wholesomekermit:705354033799364628>`);
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")
		

  message.channel.send({embed});
		 message.channel.send(`WOOOOOOOOOOO <:wholesomekermit:705354033799364628>`);
    	}
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'flip tail')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
		 message.channel.send(`WOOOOOOOOOOO <:wholesomekermit:705354033799364628> `);
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0xC76CF5)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")
		

  message.channel.send({embed});
		
		 message.channel.send(`You got me <:wholesomekermit:705354033799364628> `);
    	}
		
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'server')) {

		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join our server <")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xC76CF5) 
  
  .setThumbnail("https://cdn.discordapp.com/avatars/370483123848478721/2a073955469d1aefda2ce240ab5d2948.png?size=128")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/gwFXT55")
  

  message.channel.send({embed});
		
		 
	}
		
});




///////////////////////////////////////////////////////////////////////


client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'trivia')) {
		
		var selectkilldb = [Math.floor(Math.random() * triviadb.length)];
        var qselx = triviadb[selectkilldb]
	 var ansselx = trivianswersdb[selectkilldb]
        
		 
	message.channel.send(qselx + '\`30 seconds to answer, make sure to write all with CAPS\`')
.then(() => {
		
  message.channel.awaitMessages(response => response.content === ansselx, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
	  const embed = new Discord.RichEmbed()

  .setTitle("You are right")

  .setColor(0x7AFFA8)
  .setImage("https://media1.tenor.com/images/1a3e80b2d8b08e39d3a7355dc23a88db/tenor.gif?itemid=15018586")


  message.channel.send({embed});

    })
    .catch(() => {
      message.channel.send('AWWWW RIP <:oop:694790743121985597>  ');
    });
});
	
	}
});




client.login(process.env.BOT_TOKEN);

