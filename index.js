const express = require("express");
const app = express();

app.listen(() => console.log("idk"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود

client.login(process.env.token);
const prefix = "-"

/////////////

// WT
client.on('message', async badboy => {
  if(badboy.content.startsWith(prefix + "js")){
    if(!badboy.member.roles.cache.some(r => r.name === 'ابو راس مربع')) return badboy.channel.send("انت لا تمتلك صلاحيات")// الرتبة الي تقدر تستعمل الامر
   const user = badboy.author.id
const ph = "https://media.discordapp.net/attachments/800695670436397068/808353790221746226/advanced-javascript.png"

let filter = m => m.author.id === badboy.author.id;
let ch = badboy.guild.channels.cache.find(channel => channel.name === "info") //يمكنك تغيير اسم الروم
 if(!ch) return badboy.channel.send("الروم غير موجودة")
var q1 
badboy.channel.send("اكتب العنوان").then(badboy => {
  badboy.channel.awaitMessages(filter , {
    max: 1,
    time: 9000,
    errors: ['time']
  })
  .then(collected => {
    
    collected.first().delete();
    
    q1 = collected.first().content;
    var q2
    badboy.edit("اكتب الوصف").then(badboy => {
      badboy.channel.awaitMessages(filter , {
        max: 1,
        time: 9000,
        errors: ['time']
      })
        .then(collected => {
    
    collected.first().delete();
    
    q2 = collected.first().content;
    var q3
    badboy.edit("اكتب الكود بدون `").then(badboy => {
      badboy.channel.awaitMessages(filter , {
        max: 1,
        time: 9000,
        errors: ['time']
      })
       .then(collected => {
    
    collected.first().delete();
    
    q3 = collected.first().content;
       
  
 var q4
    badboy.edit("منشن صاحب الكود").then(badboy => {
      badboy.channel.awaitMessages(filter , {
        max: 1,
        time: 9000,
        errors: ['time']
      })
        .then(collected => {
    
    collected.first().delete();
    
    q4 = collected.first().content;
        
    badboy.delete()
        var embed = new Discord.MessageEmbed()
    .setTitle(`Title : ${q1}`)
    .setThumbnail(`${ph}`)
    .setDescription(`\`\`\`${q3}\`\`\``)
.addField("Description : ", `${q2}`)
.addField("Code by : ", `${q4}`)
.addField("Shared by : ", `<@${user}>`)
ch.send(embed)
badboy.channel.send("تم نشر الكود الخاص بك")
        })
    })
    })
    })
    })
        })
    })

})
  }
})



client.login(process.env.token);
//whyyyyy?
