////////////////SYSTEM//////////////////////
const fs = require('fs-extra');
const moment = require('moment-timezone');
const requests = require('node-fetch');
const figlet = require('figlet');
const requrest = require('request');
const request = require('request')
const chalk = require('chalk');
var similarity = require('similarity')
const toMs = require('ms')
const ms = require('parse-ms')
const { spawn } = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const CFonts = require('cfonts')
const FormData = require('form-data');
const Math_js = require('mathjs')
const axios = require('axios')
const { exec } = require("child_process");
const util = require('util');
const speed = require('performance-now');
let package = require('./package.json')
const cd = 4.32e+7
const canvas = require('canvacord')
require('dotenv').config()
//////////////////Database/////////////////////////
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const tiktod = JSON.parse(fs.readFileSync('./settings/tiktok.json'))
const youtube = JSON.parse(fs.readFileSync('./settings/youtube.json'))
const usertiktok = JSON.parse(fs.readFileSync('./settings/usertiktok.json'))
const usertiktok2 = JSON.parse(fs.readFileSync('./settings/usertiktok2.json'))
const usertiktok3 = JSON.parse(fs.readFileSync('./settings/usertiktok3.json'))
const useryt = JSON.parse(fs.readFileSync('./settings/useryt.json'))
const useryt2 = JSON.parse(fs.readFileSync('./settings/useryt2.json'))
const useryt3 = JSON.parse(fs.readFileSync('./settings/useryt3.json'))
const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
const welcomee = JSON.parse(fs.readFileSync('./settings/welcomee.json'))
const updatealbot = JSON.parse(fs.readFileSync('./settings/update.json'))
const user = JSON.parse(fs.readFileSync('./settings/user.json'))
const daftar = JSON.parse(fs.readFileSync('./settings/daftar.json'))
const daftar2 = JSON.parse(fs.readFileSync('./settings/daftar2.json'))
const _sewa = JSON.parse(fs.readFileSync('./settings/sewa.json'))
//////////////////DATABASE GAME////////////////////
const all = JSON.parse(fs.readFileSync('./datagame/simi.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./datagame/tebakgambar.json'))
const datatg = JSON.parse(fs.readFileSync('./datagame/datatg.json'))
const mtkeasy = JSON.parse(fs.readFileSync('./datagame/mtkeasy.json'))
const mtkmedium = JSON.parse(fs.readFileSync('./datagame/mtkmedium.json'))
const mtkhard = JSON.parse(fs.readFileSync('./datagame/mtkhard.json'))
const easy = JSON.parse(fs.readFileSync('./datagame/easy.json'))
const medium = JSON.parse(fs.readFileSync('./datagame/medium.json'))
const hard = JSON.parse(fs.readFileSync('./datagame/hard.json'))
const _point = JSON.parse(fs.readFileSync('./datagame/point.json'))
const kuismtk = JSON.parse(fs.readFileSync('./datagame/kuismtk.json'))
const kuismtkk = JSON.parse(fs.readFileSync('./datagame/kuismtkk.json'))
const usermtk = JSON.parse(fs.readFileSync('./datagame/mtk.json'))
const user2 = JSON.parse(fs.readFileSync('./datagame/usermtk.json'))
const teka = JSON.parse(fs.readFileSync('./datagame/tekateki.json'))
const teki = JSON.parse(fs.readFileSync('./datagame/usertekateki.json'))
const jwb = JSON.parse(fs.readFileSync('./datagame/jawaban.json'))
const allkuis = JSON.parse(fs.readFileSync('./datagame/kuis.json'))
//////////////////Baimleys/////////////////////////
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime
} = require('@adiwajshing/baileys');

const conn = new WAConnection() 


exports.Whatsappdes = conn
const { time, info } = require("console");
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
const color = (text, color) => {
    return !color ? chalk.red(text) : chalk.keyword(color)(text);
  };
CFonts.say('Deswita Bot', {
    colors: ['#f2aa4c'],
    font: 'block',
    align: 'center',
  })
CFonts.say(`'${package.name}' Oleh @${package.author.name || package.author}`, {
    colors: ['#f2aa4c'],
    font: 'console',
    align: 'center',
  })
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const { fetchJson } = require('./lib/fetcher')

const { menuId  , tiktok  , yt   , point , matematika  , respons ,  sewa , ttk} = require('./lib')

const buffer = fs.readFileSync('./lib/cewepiyo.jpg')


const threshold = 0.72

const { addteks , checkteks , checkgroup} = require('./lib/welcome');

const { isBreakOrContinueStatement } = require('typescript');

const { 
    text, 
    extendedText, 
    image, 
    video, 
    sticker, 
    document, 
    audio
} = MessageType

const {
    caseanime,
    casedownloader,
    caseeto,
    casegame,
    casegroup,
    caselogo,
    casemedia,
    casesticker,
    casesystem,
    casetools
} = require('./case');
const { ReplyFakeStatus, sendMention } = require('./lib/functionbot');

let {
      ownerNumber,
      apikey,
      prefix
    } = setting

async function starts() {
    const deswita = new WAConnection()
    deswita.logger.level = 'warn'
    deswita.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan Barcode Whatsapp Web'))
    })

    fs.existsSync('./albot.json') && deswita.loadAuthInfo('./albot.json')
    deswita.on('connecting', () => {
        console.log(color('[~>>]'), color('Connecting...', 'green'))
    })
    deswita.on('open', () => {
        console.log(color('[OWNER]'), color('Deswita is now online!', 'yellow'))
        console.log(color('[~>>]'), color('BOT Started!', 'green'))
    })
    await deswita.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./albot.json', JSON.stringify(deswita.base64EncodedAuthInfo(), null, '\t'))
    //////////////////////////////////////////////////////
    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    const getAllGroups = (groups) => {
    const totalchat = deswita.chats.all()
    let a = []
    let gid = []
    for (mem of totalchat){
    a.push(mem.jid)
    }
    for (id of a){
    if (id && id.includes('g.us')){
        gid.push(id)
    }
    }
    return gid
    }

deswita.on('chat-update', async (al) => {
    try {
    if (!al.hasNewMessage) return
    al = al.messages.all()[0]
    if (!al.message) return
    if (al.key && al.key.remoteJid == 'status@broadcast') return
    if (al.key.fromMe) return
    const content = JSON.stringify(al.message)
    const from = al.key.remoteJid
    const botNumber = deswita.user.jid
    const type = Object.keys(al.message)[0]
    const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const body = (type === 'conversation' && al.message.conversation.startsWith(prefix)) ? al.message.conversation : (type == 'imageMessage') && al.message.imageMessage.caption.startsWith(prefix) ? al.message.imageMessage.caption : (type == 'videoMessage') && al.message.videoMessage.caption.startsWith(prefix) ? al.message.videoMessage.caption : (type == 'extendedTextMessage') && al.message.extendedTextMessage.text.startsWith(prefix) ? al.message.extendedTextMessage.text : ''
    const budy = (type === 'conversation') ? al.message.conversation : (type === 'extendedTextMessage') ? al.message.extendedTextMessage.text : ''
    const budi = (type === 'conversation') ? al.message.conversation : (type === 'imageMessage')  && al.message.imageMessage.caption.startsWith(prefix) ? al.message.imageMessage.caption : ''
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const isButton = (type == 'buttonsResponseMessage') ? al.message.buttonsResponseMessage.selectedDisplayText : ''
    const isList = (type == 'listResponseMessage') ? al.message.listResponseMessage.selectedDisplayText : ''
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefix)
    const isGroup = from.endsWith('@g.us')
    const groupMetadata = isGroup ? await deswita.groupMetadata(from) : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
    const sender = isGroup ? al.participant : al.key.remoteJid
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const istiktok = usertiktok.includes(from)
    const istiktok2 = usertiktok2.includes(from)
    const istiktok3 = usertiktok3.includes(from)
    const isyt = useryt.includes(from)
    const isyt2 = useryt2.includes(from)
    const isyt3 = useryt3.includes(from)
    const isWelcome = checkgroup(from, welcomee)
    const isMtk = isGroup ? kuismtk.includes(from) : false
    const isMtkk = isGroup ? kuismtkk.includes(from) : false
    const ismi = usermtk.includes(sender)
    const ismii = user2.includes(sender)
    const isDaftar = daftar.includes(sender)
    const isDaftarGroup = daftar.includes(from)
    const isDaftar2 = daftar2.includes(sender)
    const isDaftarGroup2 = daftar2.includes(from)
    const isUser= user.includes(from)
    const conts = deswita.contacts[sender]
    const q = args.join(" ")
    const pushname = al.key.fromMe ? al.user.name : conts.notify || conts.vname || conts.name || '-'
    const groupName = isGroup ? groupMetadata.subject : ''
    const isOwnerBot = ownerNumber.includes(sender)
    const isAl = all.includes(from)
    const sili = ttk.check(from,jwb)
    const anu = deswita.chats.all()
    const isall = allkuis.includes(from)
    const cr1 = '6281414046576@s.whatsapp.net'
    // Send Message
    const reply = (teks) => {
        deswita.sendMessage(from, teks, text, { quoted: al})
    }

    const sendTextWithmentions = (teks, member, id) => {
        (id == null || id == undefined || id == false) ? deswita.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : deswita.sendMessage(from, teks.trim(), extendedText, { quoted: al, contextInfo: { "mentionedJid": member } })
    }

    const mentions = (teks, member, id) => {
        (id == null || id == undefined || id == false) ? deswita.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : deswita.sendMessage(from, teks.trim(), extendedText, {quoted: al, contextInfo: {"mentionedJid": member}})
    }
    const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
    }

    exports.from = from
    exports.q = q

    const dikit = teka.includes(budy)


    const fakegroup = (async teks => {
    deswita.sendMessage(from, teks, text, {
    quoted: {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281414046576-1627831139@g.us" } : {})
    },
    message: {
    "imageMessage": {
    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
    "mimetype": "image/jpeg",
    "caption": 'albot',
    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
    "fileLength": "28777",
    "height": 1080,
    "width": 1079,
    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
    "mediaKeyTimestamp": "1610993486",
    "jpegThumbnail": fs.readFileSync(`./lib/cewepiyo.jpg`),
    "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
    }
    }
    }, 
    contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
    })
    })

    const fakethumb = (teks, yes) => {
    deswita.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./lib/cewepiyo.jpg`),quoted:al,caption:yes})
    }

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
    + 'VERSION:3.0\n' 
    + 'FN:Alvio🖤\n' // full name
    + 'ORG:Owner Bot;\n' // the organization of the contact
    + 'TEL;type=CELL;type=VOICE;waid=:+6281414046576\n' // WhatsApp ID + phone number
    + 'END:VCARD'

    ///////////////////////////////////////GAMEEE//////////////////////////////////////
    // Tebak Gambar
    if (isGroup){
    if (datatg.includes(from)){
    if (tebakgambar.includes(budy)) {
    reply("Jawaban Anda Benar!\nSelamat Anda Mendapatkan 5 Points")
    let teb = tebakgambar.indexOf(budy)
    tebakgambar.splice(teb , 1)
    fs.writeFileSync("./datagame/tebakgambar.json", JSON.stringify(tebakgambar))
    point.addCooldown(sender)
    point.addLevelingPoint(sender,5,_point)
    await reply(`*Your Point :* ${point.getLevelingPoint(sender, _point)}`)
    let kui = datatg.indexOf(from)
    datatg.splice(kui, 1)
    fs.writeFileSync("./datagame/datatg.json" , JSON.stringify(datatg))
        } else {
            reply("Jawaban Anda Salah!")
        }
    }
    }

    //Teka teki
    if (isGroup){
    if (teki.includes(from)){
    if (teka.includes(budy)){
    reply("Jawaban Anda Benar!\nSelamat Anda Mendapatkan 5 Points")
    point.addCooldown(sender)
    point.addLevelingPoint(sender,5,_point)
    await reply(`*Your Point :* ${point.getLevelingPoint(sender, _point)}`)
    let tet = teki.indexOf(from)
    teki.splice(tet , 1)
    fs.writeFileSync('./datagame/usertekateki.json' , JSON.stringify(teki))
    let tot = teka.indexOf(budy)
    teka.splice(tot , 1)
    fs.writeFileSync('./datagame/tekateki.json' , JSON.stringify(teka))
    jwb.splice(ttk.revoke(from, jwb))
    fs.writeFileSync('./datagame/jawaban.json' , JSON.stringify(jwb))
    } else if (similarity(sili , budy) >= threshold) return await reply('Jawaban Anda Hampir Mendekati') 
    else {
        reply("Jawaban Anda Salah!")
    }
    }
    }

    // Function 
    function raya(seconds){
        function deswita(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return `\n${deswita(hours)}jam ${deswita(minutes)}menit ${deswita(seconds)}detik`
      }
      const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
      if(time2 < "23:59:00")
      {
      var selamat = 'Selamat Malam 🌚'
      }
      if(time2 < "19:00:00")
      {
      var selamat = 'Selamat Petang🌃'
      }
      if(time2 < "18:00:00")
      {
      var selamat = 'Selamat Sore 🌌'
      }
      if(time2 < "15:00:00")
      {
      var selamat = 'Selamat Siang ☀️'
      }
      if(time2 < "11:00:00")
      {
      var selamat = 'Selamat Pagi 🌞'
      }
      if(time2 < "05:00:00")
      {
      var selamat = 'Selamat Malam🌚'
      }
      var date = new Date();
      var tahun = date.getFullYear();
      var bulan = date.getMonth();
      var tanggal = date.getDate();
      var hari = date.getDay();
      var jam = date.getHours();
      var menit = date.getMinutes();
      var detik = date.getSeconds();
      switch(hari) 
      {
      case 0: hari = "Minggu"; break;
      case 1: hari = "Senin"; break;
      case 2: hari = "Selasa"; break;
      case 3: hari = "Rabu"; break;
      case 4: hari = "Kamis"; break;
      case 5: hari = "Jum'at"; break;
      case 6: hari = "Sabtu"; break;
      }
      switch(bulan) 
      {
      case 0: bulan = "Januari"; break;
      case 1: bulan = "Februari"; break;
      case 2: bulan = "Maret"; break;
      case 3: bulan = "April"; break;
      case 4: bulan = "Mei"; break;
      case 5: bulan = "Juni"; break;
      case 6: bulan = "Juli"; break;
      case 7: bulan = "Agustus"; break;
      case 8: bulan = "September"; break;
      case 9: bulan = "Oktober"; break;
      case 10: bulan = "November"; break;
      case 11: bulan = "Desember"; break;
      }
    if (budy == '!del'){
    deswita.deleteMessage(from,{ id: al.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
    }

    if (budy == '.') {
    if (isGroup && isGroupAdmins) {
    deswita.updatePresence(from, Presence.composing) 
    members_id = []
    teks = (args.length > 1) ? body.slice(8).trim() : ''
    teks += `  Total : ${groupMembers.length}\n`
    for (let mem of groupMembers) {
    teks += `╠➥ @${mem.jid.split('@')[0]}\n`
    members_id.push(mem.jid)
                    }
    mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+`╚═〘 ${groupName} 〙`, members_id, true)
    }
    }
    
    if (budy == 'halo') {
    if (isGroup && isGroupAdmins) {
    deswita.updatePresence(from, Presence.composing) 
    var group = await deswita.groupMetadata(from)
    var member = group['participants']
    var mem = []
    member.map( async adm => {
    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
    })
    var options = {
    text: 'halo semua',
    contextInfo: { mentionedJid: mem },
    quoted: al
    }
    deswita.sendMessage(from, options, text)
    }
    }
      
    ///////////////////////////////////YOUTUBE DOWNLOADER///////////////////////////
    if (isyt) { 
    if (isUrl(budy)){
    if (budy != undefined) {
    console.log(budy)
    yt.addlink(from,budy,youtube)
    casedownloader.youtubevideo(yt,youtube,reply,deswita,al,from,video,image)
    useryt.splice(from)
    fs.writeFileSync('./settings/useryt.json' , JSON.stringify(useryt))
        }
    }
    }


    if (!isCmd && isyt2){
    if (!isUrl(budy)){
    if (budy != undefined)
    {
    console.log(budy)
    yt.addjudul(from,budy,youtube)
    casedownloader.youtubeplay(yt,from,youtube,reply,deswita,image,al,audio)
    useryt2.splice(from)
    fs.writeFileSync('./settings/useryt2.json' , JSON.stringify(useryt2))
    }
    } 
    }

    if (isyt3) {
    if (isUrl(budy)){
    if (budy != undefined) {
    console.log(budy)
    yt.addlink(from,budy,youtube)
    casedownloader.youtubemusic(yt,youtube,reply,deswita,al,from,audio,image)
    useryt3.splice(from)
    fs.writeFileSync('./settings/useryt3.json' , JSON.stringify(useryt3))
    }
    }
    }

/////////////////////////////////////////TIKTOK DOWNLOADER //////////////////////////////////
    if (!isCmd && istiktok) { 
    if (isUrl(budy)){
    if (budy != undefined)   
    {
    console.log(budy)
    tiktok.addlink(from,budy,tiktod)
    casedownloader.tiktoknowm(tiktok,from,tiktod,reply,deswita,video,al)
    const bekas = usertiktok.indexOf(from)
    usertiktok.splice(bekas  , 1)
    fs.writeFileSync('./settings/usertiktok.json' , JSON.stringify(usertiktok))
    }
    }
    }

    if (!isCmd && istiktok2){
    if (!isUrl(budy)){
    if (budy != undefined)
    {
    console.log(budy)
    tiktok.addname(from,budy,tiktod)
    casemedia.tiktokstalk(tiktok,from,tiktod,reply,deswita,image,al)
    usertiktok2.splice(from)
    fs.writeFileSync('./settings/usertiktok2.json' , JSON.stringify(usertiktok2))
    }
    } 
    }

    if (istiktok3) {
    if (isUrl(budy)){
    if (budy != undefined) {
    console.log(budy)
    tiktok.addlink(from,budy,tiktod)
    casedownloader.tiktokmusic(tiktok,from,tiktod,reply,deswita,audio,al,Mimetype)
    usertiktok3.splice(from)
    fs.writeFileSync('./settings/usertiktok3.json' , JSON.stringify(usertiktok3))
    }
    }
    }


    ////////////////////////////////////MENU////////////////////////////////////
    if (isUser) {
    if (budy == '1'){
        await fakegroup(menuId.menusystem(pushname))
    } 
    if (budy == '2'){
        await fakegroup(menuId.menumedia(pushname))
    }
    if (budy == '3'){
        await fakegroup(menuId.menutools(pushname))
    }
    if (budy == '4'){
        await fakegroup(menuId.menuanime(pushname))
    }
    if (budy == '5'){
        await fakegroup(menuId.menueto(pushname))
    }
    if (budy == '6'){
        await fakegroup(menuId.menusticker(pushname))
    }
    if (budy == '7'){
        await fakegroup(menuId.menudownloader(pushname))
    }
    if (budy == '8'){
        await fakegroup(menuId.menulogo(pushname))
    }
    if (budy == '9'){
        await fakegroup(menuId.menugame(pushname))
    }
    if (budy == '10'){
        await fakegroup(menuId.menugrup(pushname))
    }
    }

    //////////////////////////////////////////RESPONSE Button///////////////////////
    if (isButton == 'tiktokvideo'){
        reply('Silahkan Kirim Link Tiktoknya')
        usertiktok.push(from)
        fs.writeFileSync('./settings/usertiktok.json' ,JSON.stringify(usertiktok))
    }

    if (isButton == 'tiktokstalk'){
        reply('Silahkan Masukan nama tiktoknya')
        usertiktok2.push(from)
        fs.writeFileSync('./settings/usertiktok2.json' ,JSON.stringify(usertiktok2))
    }

    if (isButton == 'tiktokmusic'){
        reply('Silahkan Kirim Link Tiktoknya')
        usertiktok3.push(from)
        fs.writeFileSync('./settings/usertiktok3.json' ,JSON.stringify(usertiktok3))
    }


    if (isButton == 'youtubevideo'){
        reply('Silahkan Kirim Link Youtubenya')
        useryt.push(from)
        fs.writeFileSync('./settings/useryt.json' , JSON.stringify(useryt))
    }

    if (isButton == 'youtubemusic'){
        reply('Silahkan Kirim Link Youtubenya')
        useryt3.push(from)
        fs.writeFileSync('./settings/useryt3.json' , JSON.stringify(useryt3))
    }

    if (isButton == 'youtubeplay'){
        reply('Silahkan Kirim Judulnya')
        useryt2.push(from)
        fs.writeFileSync('./settings/useryt2.json' , JSON.stringify(useryt2))
    }

    if (!isMtkk && isMtk && isButton && ismii) {
    if (easy.includes(isButton))
    {
    matematika.buteasy(reply,deswita,from,MessageType,al,clearTimeout,easy,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,ismi,allkuis)            
    } 

    else if (medium.includes(isButton))
    {
    matematika.butmedium(reply,deswita,from,MessageType,al,clearTimeout,medium,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,ismi,allkuis)
    }

    else if (hard.includes(isButton))
    {
    matematika.buthard(reply,deswita,from,MessageType,al,clearTimeout,hard,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,ismi,allkuis)
    }     
    else
    {
    matematika.salah(reply,deswita,from,MessageType,al,easy,medium,hard,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,allkuis)  
    }
    }
    
    if (isButton == 'easy'){
    matematika.easy(mtkeasy,kuismtk,kuismtkk,from,Math_js,reply,easy,deswita,MessageType,al,sleep,ismi,sender,usermtk,allkuis,user2);
    }

    if (isButton == 'medium'){
    matematika.medium(mtkmedium,kuismtk,kuismtkk,from,Math_js,reply,medium,deswita,MessageType,al,sleep,ismi,sender,usermtk,allkuis,user2);
    }

    if (isButton == 'hard'){
    matematika.hard(mtkhard,kuismtk,kuismtkk,from,Math_js,reply,hard,deswita,MessageType,al,sleep,ismi,sender,usermtk,allkuis,user2);
    }

    if (isButton == 'next'){
    matematika.next(deswita,from,MessageType,al,kuismtkk,usermtk,sender)
    }

    if (isButton == 'stop'){
    await fakegroup('Terima Kasih telah menggunakan kuismtk')
    }

    if (isButton == 'menu'){
    if (isDaftar2) return await fakegroup(menuId.tutor())
    if (isDaftarGroup2) return await fakegroup(menuId.tutor())
    await fakegroup(menuId.listmenu(pushname))
    user.push(from)
    fs.writeFileSync('./settings/user.json' , JSON.stringify(user))
    if (isGroup){
    daftar2.push(from)
    fs.writeFileSync('./settings/daftar2.json' , JSON.stringify(daftar2))
    }
    if (!isGroup){
    daftar2.push(sender)
    fs.writeFileSync('./settings/daftar2.json' , JSON.stringify(daftar2))
    }
    }

    if (isButton == 'info'){
    await fakegroup(menuId.textTnC())
    }
    if (isButton == '30Hari'){
    if (!isOwnerBot) return deswita.sendMessage(from, 'Maaf, Fitur ini hanya untuk OWNER', {quoted: al})
    sewa.addSewaGroup(from , '30d', _sewa)
    await reply(` *「 SEWA ADDED 」*\n\n➸ *NAMA*: ${groupName}\n *ID*: ${from}\n➸ *Expired*: ${ms(toMs('30d')).days} day(s) ${ms(toMs('30d')).hours} hour(s) ${ms(toMs('30d')).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`)
    await mentions(`Chat @${cr1.replace("@s.whatsapp.net", "")} Jika Ingin Menambahkan Durasi` , [cr1] , true)
    } 

    if (isButton == '60Hari'){
    if (!isOwnerBot) return deswita.sendMessage(from, 'Maaf, Fitur ini hanya untuk OWNER', {quoted: al}) 
    sewa.addSewaGroup(from , '60d', _sewa)
    await reply(` *「 SEWA ADDED 」*\n\n *NAMA*: ${groupName}\n ➸ *ID*: ${from}\n➸ *Expired*: ${ms(toMs('60d')).days} day(s) ${ms(toMs('60d')).hours} hour(s) ${ms(toMs('60d')).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`)
    await mentions(`Chat @${cr1.replace("@s.whatsapp.net", "")} Jika Ingin Menambahkan Durasi` , [cr1] , true)
    }

    if (isButton == '90Hari'){
    if (!isOwnerBot) return deswita.sendMessage(from, 'Maaf, Fitur ini hanya untuk OWNER', {quoted: al}) 
    sewa.addSewaGroup(from , '90d', _sewa)
    await reply(` *「 SEWA ADDED 」*\n\n➸ *NAMA*: ${groupName}\n➸ *ID*: ${from}\n➸ *Expired*: ${ms(toMs('90d')).days} day(s) ${ms(toMs('90d')).hours} hour(s) ${ms(toMs('90d')).minutes} minute(s)\n\nBot Akan Keluar Secara Otomatis\nDalam waktu yang sudah di tentukan`)
    await mentions(`Chat @${cr1.replace("@s.whatsapp.net", "")} Jika Ingin Menambahkan Durasi` , [cr1] , true)
    }

    ///////////////////////////////////RESPONSE LIST///////////////////////////////
    if (!isGroup){
    if (!isDaftarGroup){
    if (!isDaftar){
    if (budy){
    respons.sender(ReplyFakeStatus,deswita,from,daftar,sender,MessageType,al)
    }}}}
    
    if (isGroup){
    if (!isDaftar){
    if (!isDaftarGroup){
    if (budy){
    respons.group(ReplyFakeStatus,deswita,from,daftar,sender,MessageType,al)
    }}}}

    // Sewa Group
    sewa.expiredCheck(_sewa , deswita , text , al)
    // Log
    
    if (isCmd && !isGroup) console.log(chalk.yellow("[EXEC] ") + time + chalk.green(" " + prefix + command) + " FROM " + chalk.green(pushname))
    if (isCmd && isGroup) console.log(chalk.yellow("[EXEC] ") + time + chalk.green(" " + prefix + command) + " FROM " + chalk.green(pushname) + " IN " + chalk.green(groupName))
    switch (command) {

    /////////////////////////////////////////SYSTEM///////////////////////////////

    case 'sewa':
    if (!isOwnerBot) return
    casesystem.sewa(deswita,from,MessageType,al)
    break
    

    case 'swtext': //text
    if (!isOwnerBot) return deswita.sendMessage(from, 'Maaf, Fitur ini hanya untuk OWNER', {quoted: al})
    await deswita.sendMessage('status@broadcast' , q , text)
    await reply(`Sukses Upstatus ${q}`)
    break

    case 'swimage':
    if (!isOwnerBot) return reply('```OWNER ONLY```')
    casesystem.swimage(isQuotedImage,al,deswita,image,q,from,fakegroup,text)
    break

    case 'swvideo':
    if (!isOwnerBot) return reply('```OWNER ONLY```')
    casesystem.swvideo(isQuotedVideo,al,deswita,video,q,from,fakegroup,text)
    break
  
    case 'ping':
    await reply(`pong!!!`)
    break

    case 'welcome':
    if (!isGroup) return reply(`Fitur ini hanya bisa diaktifkan didalam grup!`)
    if (!isGroupAdmins) return reply('Perintah ini hanya bisa digunakan oleh Admin Grup!')
    if (!isBotGroupAdmins) return reply('Jadikan bot sebagai Admin terlebih dahulu!')
    if (isWelcome) return reply('Fitur Welcome Sudah Aktif Kak')
    casegroup.welcome(reply,from,q);
    break

    case 'bcgc': 
    if (!isOwnerBot) return reply('Khusus Owner')
    if (args.length < 1) return reply('.......')
    if (isMedia && !al.message.videoMessage || isQuotedImage) {   
    casegroup.bcgc(deswita,reply,isQuotedImage,al)
    }  
    break


    case 'setprefix':
    if (!isOwnerBot) return deswita.sendMessage(from, 'Maaf, Fitur ini hanya untuk OWNER', {quoted: al}) 
    setting.prefix = args[0]
    prefix = args[0]
    fs.writeFileSync('./settings/setting.json', JSON.stringify(setting, null,2))
    await reply(`Sukses Ganti Prefix`) 
    break

    case 'botstat':
    const unread = await deswita.loadAllUnreadMessages ()
    const list = await getAllGroups(botNumber)
    reply(`Status :\n- *${unread.length}* Loaded Messages\n- *${list.length}* Group Chats\n- *${anu.length - list.length}* Personal Chats\n- *${anu.length}* Total Chats`)
    break

    case 'ownerbot':
    await deswita.sendMessage(from, {displayname: "al", vcard: vcard}, MessageType.contact)
    break

    case 'addupdate':
    if (!isOwnerBot) return reply('Maaf, perintah ini hanya dapat dipakai oleh owner!')
    const update = body.slice(10)
    updatealbot.push(update)
    fs.writeFileSync('./settings/update.json', JSON.stringify(updatealbot))
    fakegroup(`Sukses menambahkan update :)`)
    break

    case 'update': 
    const updaterr = updatealbot
    let updatee = `╔══✪〘 *update* 〙✪══\n`
    for (let i = 0; i < updaterr.length; i++) {
    updatee += '╠➥'
    updatee += ` ${updaterr[i]}\n`
    }
    updatee += '╚═〘 *Piyo Bot* 〙'
    fakegroup(updatee)     
    break

    /////////////////////////////////////TOOLS///////////////////////////////////////          

    case 'artinama':
    if (args.length == 0) return reply(`Example: ${prefix + command} deswita`)
    casetools.artinama(reply,from,q)
    break

    case 'cekjodoh':
    if (args.length == 0) return reply(`Example: ${prefix + command} al & deswita`)
    casetools.cekjodoh(args,reply)
    break

    case 'playstore':
    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
    casetools.playstore(args,reply)     
    break
        
    case 'maps':
    if (arghh.length === 1) return reply('Kirim perintah */maps [optional]*, Contoh : */maps Jakarta*')
    casetools.maps(q,deswita,from,image,al)
    break

    case 'totext':
    if ((isMedia && !al.message.videoMessage || isQuotedImage) && args.length == 0) {
    casetools.totext(isQuotedImage,al,deswita,getRandom,reply)
    } else {
        reply('Tag gambar atau kirim gambar dengan caption /totext')
    }
    break

    case 'fakta':
    case 'pantun':
    case 'bucin':
    case 'katabijak':
    casetools.fpbk(command,reply)
    break

    case 'quotes':
    casetools.quotes(reply)
    break

    case 'covidindo':
    casetools.covid(reply)
    break

    case 'jarak':
    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
    casetools.jarak(args,reply)
    break

    case 'shopee':
    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
    casetools.shopee(args,reply)
    break

    case 'wasted':
    if (!q) return reply(`Example:: ${prefix + command} al`)
    casetools.wasted(args,deswita,from,image,al)
    break

    case 'google':
    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
    casetools.google(args,reply)
    break

    case 'translate':
    case 'tr':
    if (args.length == 0) return reply(`Example: ${prefix + command} en Deswita sangat cantik`)
    casetools.tr(args,reply)
    break

    case 'tomp3':
    if (!isQuotedVideo) return reply('*☒* Reply video')
    casetools.tomp3(reply,al,deswita,getRandom,from,audio)
    break

    case 'tomp4':
    if (((isQuotedSticker))) 
    casetools.tomp4(isQuotedSticker,al,deswita,getRandom,request,from,video,Mimetype,reply)
    break

    case 'lirik':
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    casetools.lirik(args,reply)
    break

    case 'chord':
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
    casetools.chord(args,reply)
    break         

    case 'cuaca':
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    casetools.cuaca(args,deswita,from,reply,al)
    break
    

    /////////////////////////////////////////MEDIA//////////////////////////////////////

    case 'bts':
    case 'exo':
    case 'art':
    case 'elf':
    case 'loli':
    case 'neko':
    case 'waifu':
    case 'shota':
    case 'husbu':
    case 'sagiri':
    case 'shinobu':
    case 'megumin':
    case 'wallnime':
    casemedia.kpop(command,deswita,from,image,al)
    break

    case 'ptl':
    casemedia.ptl(reply,from,deswita,video,al,Mimetype)
    break

    case 'lolivid':
    casemedia.lolivid(reply,from,deswita,video,al,Mimetype)
    break

    case 'toimg':
    if (!isQuotedSticker) return reply('Reply stickernya nya!')
    fakegroup('```PROSES...```')
    casemedia.toimg(al,deswita,getRandom,fakethumb)
    break

    case 'lk21':
    casemedia.lk21(args,deswita,image,al)
    break

    case 'pinterest':
    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
    casemedia.pinterest(args,deswita,from,image,al)
    break

    case 'pinterest2':
    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
    casemedia.pinterest2(args,deswita,from,image,al)
    break

    case 'bass':
    casemedia.bass(al,deswita,getRandom,exec,from,audio)                 
    break

    case 'igstalk':
    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
    casemedia.igstalk(args,deswita,from,image)
    break

    case 'ceritahoror':
    casemedia.ceritahoror(deswita,from,image,al)      
    break
    

   //////////////////////////////////////////ETO//////////////////////////////////////////
    case 'nuliskanan': 
    if (!args.length >= 1) return reply('Kirim /nuliskanan teks') 
    caseeto.nuliskanan(budi,deswita,from,image,al)
    break

    case 'nuliskiri':                     
    if (!args.length >= 1) return reply('Kirim /nuliskiri teks') 
    caseeto.nuliskiri(budi,deswita,from,image,al)
    break

    case 'jadwalsholat':
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    caseeto.js(reply,args)
    break

    case 'alaudio':
    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
    caseeto.alaudio(args,deswita,from,audio,al)
    break

    case 'asmaulhusna':
    caseeto.asmaulhusna(reply)       
    break

    case 'kisahnabi':
    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    caseeto.kisahnabi(args,reply)
    break

    case 'listsurah':
    caseeto.list(reply)
    break

    case 'alquran':
    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
    caseeto.alquran(reply)
    break
            
        
    case 'wikipedia':
    if (args.length == 0) return reply(`Example: ${prefix + command} bot`)
    caseeto.wikipedia(args,reply)
    break

    case 'brainly':
    caseeto.brainly(args,q,fakegroup,reply)  
    break

    /////////////////////////////////STICKER///////////////////////////////

    case 'ttp':
    case 'ttp2':
    case 'ttp3':
    case 'ttp4':
    case 'attp':
    if (args.length == 0) return reply(`Example: ${prefix + command} deswita`)
    casesticker.ttp(args,command,deswita,from,sticker,al)   
    break

    case 'sticker':
    casesticker.sticker(reply,isQuotedImage,console,al,deswita,from,MessageType)
    break

    case 'findsticker':
    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
    reply('check my private message')
    casesticker.find(args,deswita,sender,sticker)
    break

    case 'telesticker':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
    casesticker.tele(args,deswita,from,sticker)
    break

    case 'smoji':
    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
    casesticker.smoji(args,deswita,from,sticker,al)
    break

    ////////////////////////////////////ANIME//////////////////////////////////////
    case 'anime':
    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
    caseanime.anime(args,deswita,from,image,al)
    break

    case 'nhentaipdf':
    if (args.length == 0) return reply(`Example: ${prefix + command} 150106`)
    caseanime.nhpdf(args,q,deswita,from,document,Mimetype)
    break

    case 'manga':
    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
    caseanime.manga(args,q,deswita,from,image,al)
    break

    case 'fotoanime':
    caseanime.fotoanime(deswita,from,image,al)
    break
            
    //////////////////////////////////////GROUP////////////////////////////////////
    case 'mutegrup':
    if (args.length !== 1) return reply('Example : /mutegrup on atau /mutegrup off')
    if (!isGroup) return reply(`Khusus Grup`)
    if (!isGroupAdmins) return reply(`Buat Admin`)
    if (!isBotGroupAdmins) return reply(`Jadikan Bot Admin Dulu`)
    casegroup.mutegrup(args,deswita,from,Presence,al,GroupSettingChange,reply)
    break

    case 'apakah' :
    if (!q) return reply('ketik /apakah tesknya')
    casegroup.apakah(deswita,from,audio,al)
    break

    case 'add': 
    if (!isGroup) return reply(`Fitur ini hanya bisa diaktifkan didalam grup!`)
    if (!isGroupAdmins) return reply('Perintah ini hanya bisa digunakan oleh Admin Grup!')
    if (!isBotGroupAdmins) return reply('Jadikan bot sebagai Admin terlebih dahulu!')
    if (args.length < 1) return reply('Yang mau di add jin ya?')
    if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
    casegroup.add(args,deswita,from,fakegroup,reply)
    break

    case 'kick': 
    if (!isGroup) return reply(`Fitur ini hanya bisa diaktifkan didalam grup!`)
    if (!isGroupAdmins) return reply('Perintah ini hanya bisa digunakan oleh Admin Grup!')
    casegroup.kick(al,reply,mentions,deswita,from,text)
    break

    case 'tagall':
    casegroup.tagall(args,isGroup,isGroupAdmins,body,groupMembers,mentions,groupName)
    break

    case 'kapankah':
    casegroup.kapan(args,deswita,from,text,sender)
    break

    case 'demote':
    if (!isGroup) return reply(`Fitur ini hanya bisa diaktifkan didalam grup!`)
    if (!isGroupAdmins) return reply('Perintah ini hanya bisa digunakan oleh Admin Grup!')
    casegroup.demote(al,reply,mentions,deswita,from)
    break

    case 'promote':
    if (!isGroup) return reply(`Fitur ini hanya bisa diaktifkan didalam grup!`)
    if (!isGroupAdmins) return reply('Perintah ini hanya bisa digunakan oleh Admin Grup!')
    casegroup.promote(al,reply,mentions,deswita,from)
    break

    case 'profile':
    casegroup.profile(deswita,sender,pushname,from,image,al)
    break
    ////////////////////////////////////GAME//////////////////////////////////////
    case 'simi':
    if (args.length !== 1) return reply(`Untuk mengaktifkan al pada  Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`)
    casegame.simi(args,all,reply,from)
    break 
    
    case 'tebakgambar': 
    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
    casegame.tebakgambar(deswita,from,image,al,tebakgambar,sender,sleep,reply,datatg,allkuis,isall)
    break

    case 'kuismtk':
    if (isMtk) return reply(`Kuis Sedang Berlangsung`)
    if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
    casegame.kuismtk(deswita,reply,from,buffer,MessageType,al,kuismtkk,from,sender,usermtk,allkuis,isall)
    break

    case 'tekateki':
    if (datatg.includes(from)) return reply('Teka teki sedang berlangsung')
    casegame.tekateki(ttk,jwb,from,teka,teki,reply,sleep,allkuis,isall)
    break

    case 'points':
    await ReplyFakeStatus(deswita,from, `*Your Points :* ${point.getLevelingPoint(sender,_point)}`, "deswita")
    break

    ///////////////////////////////// Downloader ////////////////////////////

    case 'tiktok':
    await deswita.sendMessage(from, {
    contentText: 'Tiktok Downloader',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'tiktokvideo', buttonText: { displayText: 'tiktokvideo' }, type: 1 },
    { buttonId: 'tiktokmusic', buttonText: { displayText: 'tiktokmusic' }, type: 1 },
    { buttonId: 'tiktokstalk', buttonText: { displayText: 'tiktokstalk'}, type: 1 }
    ],
    headerType: 4,
    imageMessage: (await deswita.prepareMessageMedia(buffer, MessageType.image)).imageMessage
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    break

    case 'youtube':
    await deswita.sendMessage(from, {
    contentText: 'Youtube Downloader',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'youtubevideo', buttonText: { displayText: 'youtubevideo' }, type: 1 },
    { buttonId: 'youtubemusic', buttonText: { displayText: 'youtubemusic' }, type: 1 },
    { buttonId: 'youtubeplay', buttonText: { displayText: 'youtubeplay'}, type: 1 }
    ],
    headerType: 4,
    imageMessage: (await deswita.prepareMessageMedia(buffer, MessageType.image)).imageMessage
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    break

    case 'joox':
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    casedownloader.joox(reply,q,deswita,from,image,audio,al)
    break

    case 'ytplay':
    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
    casedownloader.youtubeplay(yt,youtube,reply,deswita,al,from,audio,image)
    break

    case 'ytmp3':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
    casedownloader.ytmp3(args,deswita,al,from,audio,image)
    break

    case 'ytmp4':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
    casedownloader.ytmp4(args,deswita,al,from,video,image)
    break

    case 'igdl':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
    casedownloader.igdl(args,image,video,deswita,from,al)
    break

    case 'igdl2':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
    casedownloader.igdl2(args,image,video,deswita,from,al)
    break

    case 'twtdl':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
    casedownloader.twtdl(args,deswita,from,video,al)
    break

    case 'fbdl':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
    casedownloader.fbdl(args,deswita,from,video,al)
    break

    //////////////////////////////////////////LOGO////////////////////////////////

    case 'ktpmaker':
    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
    caselogo.ktpmaker(args,deswita,from,image,al)
    break  

    case 'blackpink':
    case 'neon':
    case 'greenneon':
    case 'advanceglow':
    case 'futureneon':
    case 'sandwriting':
    case 'sandsummer':
    case 'sandengraved':
    case 'metaldark':
    case 'neonlight':
    case 'holographic':
    case 'text1917':
    case 'minion':
    case 'deluxesilver':
    case 'newyearcard':
    case 'bloodfrosted':
    case 'halloween':
    case 'jokerlogo':
    case 'fireworksparkle':
    case 'natureleaves':
    case 'bokeh':
    case 'toxic':
    case 'strawberry':
    case 'box3d':
    case 'roadwarning':
    case 'breakwall':
    case 'icecold':
    case 'luxury':
    case 'cloud':
    case 'summersand':
    case 'horrorblood':
    case 'thunder':   
    if (args.length == 0) return reply(`Example: ${prefix + command} al`)
    caselogo.textpro(args,command,deswita,from,image,al)
    break

    case 'pornhub':
    case 'glitch':
    case 'avenger':
    case 'space':
    case 'ninjalogo':
    case 'marvelstudio':
    case 'lionlogo':
    case 'wolflogo':
    case 'steel3d':
    case 'wallgravity':
    if (args.length == 0) return reply(`Example: ${prefix + command} al bot`)
    caselogo.textpro2(args,command,deswita,from,image,al)
    break 

    case 'shadow':
    case 'cup':
    case 'cup1':
    case 'romance':
    case 'smoke':
    case 'burnpaper':
    case 'lovemessage':
    case 'undergrass':
    case 'love':
    case 'coffe':
    case 'woodheart':
    case 'woodenboard':
    case 'summer3d':
    case 'wolfmetal':
    case 'nature3d':
    case 'underwater':
    case 'golderrose':
    case 'summernature':
    case 'letterleaves':
    case 'glowingneon':
    case 'fallleaves':
    case 'flamming':
    case 'harrypotter':
    case 'carvedwood':
    if (args.length == 0) return reply(`Example: ${prefix + command} al`)
    caselogo.photooxy(args,command,deswita,from,image,al)
    break

    case 'arcade8bit':
    case 'battlefield4':
    case 'pubg':
    if (args.length == 0) return reply(`Example: ${prefix + command} al asu`)
    caselogo.photooxy2(args,command,deswita,from,image,al)        
    break

    case 'wetglass':
    case 'multicolor3d':
    case 'watercolor':
    case 'luxurygold':
    case 'galaxywallpaper':
    case 'lighttext':
    case 'beautifulflower':
    case 'puppycute':
    case 'royaltext':
    case 'heartshaped':
    case 'birthdaycake':
    case 'galaxystyle':
    case 'hologram3d':
    case 'greenneon':
    case 'glossychrome':
    case 'greenbush':
    case 'metallogo':
    case 'noeltext':
    case 'glittergold':
    case 'textcake':
    case 'starsnight':
    case 'wooden3d':
    case 'textbyname':
    case 'writegalacy':
    case 'galaxybat':
    case 'snow3d':
    case 'birthdayday':
    case 'goldplaybutton':
    case 'silverplaybutton':
    case 'freefire':
    if (args.length == 0) return reply(`Example: ${prefix + command} al`)
    caselogo.ephoto(args,command,deswita,from,image,al)
    break

    case 'say':
    if (!q) reply('Ketik /say teksnya')
    deswita.updatePresence(from, Presence.composing)
    reply(q)
    break

    case 'bokep':
    reply('Premium Dulu, Chat Owner nya')
    break


    case 'menu':
    await fakegroup(menuId.listmenu(pushname))
    sleep(2000)
    .then(() => {
    (!isUser) ? fakegroup(menuId.tutor()) : null
    user.push(from)
    fs.writeFileSync('./settings/user.json' , JSON.stringify(user))
    })
    break

    default:
    if (!isCmd && isAl) {
    await deswita.updatePresence(from, Presence.composing)
    const simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${budy}`)
    reply(simi.result)
    }
}
    } catch (err) {
        console.log('Message : %s', color(err, 'blue'))
    }
    })
    deswita.on('CB:action,,battery', json => {
        const batteryLevelStr = json[2][0][1].value
        const batterylevel = parseInt(batteryLevelStr)
        fs.writeFileSync('./settings/batre.json' , JSON.stringify(json[2][0], null , 2))

    })
    
    deswita.on('group-participants-update' , async (anu) => {
    if (!welcome.includes(anu.jid)) return
    try {
        const teks2 = checkteks(anu.jid, welcomee)
        const time3 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time3 < "23:59:00")
        {
        var selamat = 'Selamat Malam 🌚'
        }
        if(time3 < "19:00:00")
        {
        var selamat = 'Selamat Petang🌃'
        }
        if(time3 < "18:00:00")
        {
        var selamat = 'Selamat Sore 🌌'
        }
        if(time3 < "15:00:00")
        {
        var selamat = 'Selamat Siang ☀️'
        }
        if(time3 < "11:00:00")
        {
        var selamat = 'Selamat Pagi 🌞'
        }
        if(time3 < "05:00:00")
        {
        var selamat = 'Selamat Malam🌚'
        }
        const mdata = await deswita.groupMetadata(anu.jid)
        console.log(anu)
        if (anu.action == 'add') {
            num = anu.participants[0]
            deswita.sendMessage(mdata.id, teks2 , text,  { contextInfo: {"mentionedJid": [num]}})
            } else if (anu.action == 'remove') {
                num = anu.participants[0]
                teks = `Selamat Tinggal @${num.split('@')[0]}👋`
                deswita.sendMessage(mdata.id, teks , text,  { contextInfo: {"mentionedJid": [num]}})
            }
    
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
    } 
    })
    }
    starts()