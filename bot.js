const Discord = require('discord.js');
const client = new Discord.Client();



client.on('guildMemberAdd', member => {
    member.guild.channels.get('694781619306889266').send('Welcome TO THE SERVER! **' + member.user + '**,  Go introduce yourself in <#696322478922006588>! If you want, you can go to <#709716878263845218> and to join a club, go to <#709718943660769310>'); 
});
  

client.login(process.env.BOT_TOKEN);

