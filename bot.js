///////////////////////////////////////// P A C K A G E S /////////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();		    
const fs = require("fs");
const ffmpeg = require('ffmpeg');
const playArbitraryFFmpeg = require('discord.js-arbitrary-ffmpeg');
const yt = require('ytdl-core');
const ytdl = require("discord-ytdl-core");
const search = require('youtube-search');
const pg = require('pg')

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// C O N F I G U R A T I O N S ///////////////////////////////////

const opts = {
    maxResults: 1,
    key: process.env.YOUTUBE_API,
    type: 'video'
};

const pool = new pg.Pool({
connectionString : process.env.DATABASE_URL,
	port: 5432,
        host: process.env.dbhost,
        database: process.env.db,
        user: process.env.user,
       password: process.env.password,
        ssl: true,
})
pool.connect();

let points = JSON.parse(fs.readFileSync("./database.json", "utf8"));

///////////////////////////////////////////////////////////////////////////////////////////////////

search('les presento a mi canaima', opts, function(err, results) {
  if(err) return console.log(err);
 
  console.dir(results);
});

   
//////////////////////////////////////////// S T A R T ////////////////////////////////////////////

client.on('ready',() => {	
	   client.user.setPresence({game: {name: "in JAPAN | p!help", type: 0}});  
});

/////////////////////////////////////////////////////////////////////////////////////////////////// 

//////////////////////////////////////// V A R I A B L E S ////////////////////////////////////////

var levels = "0"
var levelsequ = "0"
var nextlevel = "0"
var balance = "0"
var reputation = "0"
var experience = "0"
var prefix = "p!"; 
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
	];

//////////////////////////////////////////////// T R I V I A //////////////////////////////////////

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
		"MINECRAFT VIDEO"];



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

////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////GIFS////////////////////////////////////////////////////////

var hugifs =  [
	 "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 	 "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 	 "https://i.imgur.com/r9aU2xv.gif",
 	 "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];

var slapgifs =  [
	 "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
 	 "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
 	 "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif"];

var kissgifs =  [
	 "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
 	 "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
 	 "https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif",
 	 "https://lifeo.ru/wp-content/uploads/gif-anime-kisses-26.gif"];

var Shotgif =  [
	 "https://media1.tenor.com/images/cfb7817a23645120d4baba2dcb9205e0/tenor.gif?itemid=5710495",
 	 "https://media1.tenor.com/images/a2df704431ed61fdddc4eb1a06bb728e/tenor.gif?itemid=5359419",
 	 "https://i.pinimg.com/originals/a0/f0/c3/a0f0c3dacfa0962425f34e011d30e9be.gif",
 	 "https://media1.tenor.com/images/63c0c6b632dfffd790b60a87007f1bfd/tenor.gif?itemid=11514589"];

var protectgifs =  [
	 "https://i.gifer.com/3cA2.gif",
 	 "https://memestatic.fjcdn.com/gifs/Protect+the+cinnamon+roll_7619b3_6456881.gif"];

var wavegifs =  [
	 "https://media.tenor.com/images/6870fd2f3f7be6bc6f08083a899c4889/tenor.gif",
 	 "https://media.giphy.com/media/VUC9YdLSnKuJy/giphy.gif",
 	 "https://vignette.wikia.nocookie.net/project-pokemon/images/a/a5/Wave_by_monnick-d7i06j2.gif/revision/latest?cb=20170428155931",
 	 "https://media.tenor.com/images/4b9b18c7aae49b108354a22a0cb615fc/tenor.gif"];

var patgifs =  [
	 "https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif",
 	 "https://i.imgur.com/4ssddEQ.gif",
 	 "https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-size_restricted.gif",
 	 "https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif"];

////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// C O M M A N D S /////////////////////////////////////////

client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('WELCOME TO THE SERVER!! **' + member.user.username + '**,  Go introduce yourself in <#696322478922006588>! If you want, you can go to <#709716878263845218> and to join a club, go to <#709718943660769310>, You can also get your own roles in <#710829476971544596>!"'); 
});
 
////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////

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

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`,\`say\`")
.addField("Roleplay Commands", "\`hug\`,\`slap\`,\`kiss\`,\`shoot\`,\`protect\`,\`wave\`,\`date\`,\`dance\`,\`pat\`")
.addField("Japan Commands", "\`profile\`,\`ammy\`,\`pixel\`,\`nia\`,\`jelly\`,\`aldrin\`,\`chuuni\`")
  message.channel.send({embed});		
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////

var say = "say";
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + say)) {
		const args = message.content.slice(prefix.length).split(` `);
		message.delete(1000);
		if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
		
	const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setDescription(args.splice(1).join(" "))
  message.channel.send({embed});

		
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + '8ball')) {
	var r8ballAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(r8ballAnswer);
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

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
   .setColor(0xC76CF5)
  .setImage(selecthugGif)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

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
   .setColor(0xC76CF5)
  .setImage(selectSlap)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'kiss')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap1 = kissgifs[Math.floor(Math.random() * kissgifs.length)];
		  message.channel.send(`**${message.author.username}** kissed **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap1)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'shoot')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap2 = Shotgif [Math.floor(Math.random() * Shotgif.length)];
		  message.channel.send(`**${message.author.username}** shot **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap2)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'protect')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap3 = protectgifs[Math.floor(Math.random() * protectgifs.length)];
		  message.channel.send(`**${message.author.username}** protected **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap3)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'pat')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap4 = patgifs[Math.floor(Math.random() * patgifs.length)];
		  message.channel.send(`**${member.user.username}** is getting a headpat from **${message.author.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap4)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'wave')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		var selectSlap4 = wavegifs[Math.floor(Math.random() * wavegifs.length)];
		  message.channel.send(`**${message.author.username}** waved at **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage(selectSlap4)
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'date')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		  message.channel.send(`**${message.author.username}** dated **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage("https://media1.tenor.com/images/e0f8ceace2d85bcdc36fe6d74f649b9f/tenor.gif?itemid=13300869")
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'dance')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member)	 
			return message.channel.send(`**${message.author.username}** started dancing alone...`);
			
		  message.channel.send(`**${message.author.username}** dances with **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage("https://cdn.lowgif.com/full/0e7bb3437e9b4f2a-are-na-anime-dance-gif-7-gif.gif")
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////ROLEPLAY/////////////////////////////////////////////////////////


client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'sing')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member)	 
			return message.channel.send(`**${message.author.username}** started singing alone...`);
			
		  message.channel.send(`**${message.author.username}** sings for **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
   .setColor(0xC76CF5)
  .setImage("https://i.pinimg.com/originals/47/9c/8a/479c8a26eaa887287b6a3275a5a0cdbb.gif")
   message.channel.send({embed});
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////// T R I V I A /////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'trivia')) {

		var selectkilldb = [Math.floor(Math.random() * triviadb.length)];
        var qselx = triviadb[selectkilldb]
	 var ansselx = trivianswersdb[selectkilldb]
		 
	message.channel.send(qselx + '\`15 seconds to answer, make sure to write all with CAPS\`')
.then(() => {
		
  message.channel.awaitMessages(response => response.content === ansselx, {
    max: 1,
    time: 15000,
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
	
	  var answersW = [
	 	 "Aww Rip",
		 "F",
		 "You lose qwp"
	  ];
	  
	  var selectanswerW = [Math.floor(Math.random() * answersW.length)];  
	  var qselW = answersW[selectanswerW]
      message.channel.send(qselW +' <:oop:694790743121985597>  ');
  
    });
});
	
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////JAPAN/////////////////////////////////////////////////////////////////

	client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'profile ammy')) {

		
		var username = 'AmmyZeru'
		var avatar = 'https://cdn.discordapp.com/avatars/206606985167110145/85771c2592d4065711da020daffd376d.png?size=256'
		const embed = new Discord.RichEmbed()

  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  .setDescription("I will not be ruled. I make my own rules. That is the mindset of a ruler.")
  .setThumbnail(avatar)

 .addField("Name:",
    "\`Jesi\`")

  .addField("Birthday:", "\` May 14\`")
.addField("Likes:", "\`Joshua\`,\`Honkai Impact\`,\`Mystery Anime\`")
.addField("Dislikes:", "\`Noises\`,\`Drama\`,\`Coding\`")
  message.channel.send({embed});
		
		 
	}
		
});

/////////////////////////////////////////////////JAPAN/////////////////////////////////////////////////////////////////

	client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'profile pixel')) {

		
		var username = 'PixelEdits'
		var avatar = 'https://cdn.discordapp.com/avatars/710373309279109129/3bccbda5edd8e7228a8ba9166385f349.png?size=256'
		const embed = new Discord.RichEmbed()

  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  .setDescription("Don't procrastinate the inevitable.")
  .setThumbnail(avatar)

 .addField("Name:",
    "\`Pixel\`")

  .addField("Birthday:", "\` Feb 9\`")
.addField("Likes:", "\`Maryll\`,\`Milktea\`,\`Yaoi\`,\`Manga\`,\`Romance anime\`")
.addField("Dislikes:", "\`Dry people\`,\`Rude People\`,\`Toxic People\`")
  message.channel.send({embed});
		
		 
	}
		
});

/////////////////////////////////////////////////JAPAN/////////////////////////////////////////////////////////////////

	client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'profile nia')) {

		
		var username = 'RiiDaPeanut'
		var avatar = 'https://cdn.discordapp.com/avatars/306367704934252546/b827cdbc2be0ad4b5d4fb496b72ab080.png?size=256'
		const embed = new Discord.RichEmbed()

  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  .setDescription("Do not let your weaknesses control over your life!")
  .setThumbnail(avatar)

 .addField("Name:",
    "\`Riiuz\`")

  .addField("Birthday:", "\`June 30th\`")
.addField("Likes:", "\`Food\`,\`Anime\`,\`Singing\`,\`Journaling\`")
.addField("Dislikes:", "\`Drama\`,\`Fake Friends\`,\`Crowded Place\`")
  message.channel.send({embed});
		
		 
	}
		
});

/////////////////////////////////////////////////JAPAN/////////////////////////////////////////////////////////////////

	client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'profile jelly')) {

		
		var username = 'Jelly090720'
		var avatar = 'https://cdn.discordapp.com/avatars/303767514876477443/97179284ba14fb3bc531fc0e828ee23c.png?size=256'
		const embed = new Discord.RichEmbed()

  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  .setDescription("IDK!")
  .setThumbnail(avatar)

 .addField("Name:",
    "\`Jelly\`")

  .addField("Birthday:", "\`7th Sept\`")
.addField("Likes:", "\`Pink\`,\`Pastel Colours\`,\`Cute Stuff\`,\`Black & White\`")
.addField("Dislikes:", "\`She doesn't know\`")
  message.channel.send({embed});
		
		 
	}
		
});

/////////////////////////////////////////////////LEVELS/////////////////////////////////////////////////////////////////


	client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content === prefix + 'profile') {

		var username = message.author.username
		var avatar = message.author.avatarURL
		const embed = new Discord.RichEmbed()

  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  
  .setThumbnail(avatar)



  .addField(":star:Levels", levels + " (" + experience + " xp/ " + levelsequ + " xp for level " + nextlevel + ")", true)

  .addField(":dollar:Credits", "$" + balance , true)

  .addField(":yellow_heart:Reputation",
    reputation)		
  message.channel.send({embed});
		
		 
	}
		
});


client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }

  if (message.content.startsWith(prefix + "level")) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});



client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'add points')) {
	
		  	
		
		
	}
});

///////////////////////////////////////////////// M U S I C /////////////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'play')) {
	const args = message.content.split(" ").slice(1);
	
	const channel = message.member.voiceChannel;
    	if (!channel){
	return message.channel.sendMessage(":x: You are not in a voice channel!!");
    	}
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    	message.channel.sendMessage(`${args}`);
		
		let stream = ytdl("https://www.youtube.com/watch?v=VcyFfcJbyeM", {
            filter: "audioonly",
            encoderArgs: [
                '-af',
                'equalizer=f=40:width_type=h:width=50:g=10'
            ] // FFmpeg args array (optional)
        });
		
		
	channel.join()
	 .then(connection => {
            connection.playOpusStream(ytdl(`${args}`), {
                type: "opus" // type: opus is compulsory because this package returns opus stream
            })
            .on("finish", () => {
                channel.leave();
            })
        });		
	}
	});

///////////////////////////////////////////////// M U S I C /////////////////////////////////////////////////////////////////

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'leave')) {
	
		  const voiceChannel = message.member.voiceChannel;
     		voiceChannel.leave();
		message.channel.sendMessage(":white_check_mark: **Disconnected!**");
	}
	});

client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'search')) {
	
		  const args = message.content.slice(prefix.length).split(` `);
		  var argsowo = args.splice(1).join(" ");
		message.channel.sendMessage(argsowo);
		
		search(argsowo, opts, function(err, results) {
  		if(err) return console.log(err);
 
  		console.dir(results.item[1]);
});
	}
	});





client.login(process.env.BOT_TOKEN);

