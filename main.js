const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`le bot est en ligne : ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content === '!youtube') {
    var res = await fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCGaBwUi818ITrf77NcSkj6A&key= KEY API ');
    var data = await res.json();
    msg.channel.send("nombre d'abonnés : ||" + data.items[0].statistics.subscriberCount + "||");
  }
});

/*prochain defi il dit quand on a réussi le défi fixé !

*/
client.login('TOKEN du bot');