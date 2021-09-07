const fs = require('fs-extra')
const {apikey} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const axios = require('axios')
const { exec } = require("child_process");
const { fetchJson, getBuffer} = require('../lib/fetcher')
const wait = 'Downloaded Started'
const done = 'Downloaded Finished'

async function tiktokstalk (tiktok,from,tiktod,reply,deswita,image,al) {
    reply('Mohon Tunggu Sebentar')
    const akun = tiktok.checkusername(from,tiktod)
    try {
    const tstalk2 = await axios.get(`https://lolhuman.herokuapp.com/api/stalktiktok/${akun}?apikey=${apikey}`)
    const { username, bio, followings, followers, nickname, likes, video, user_picture } = tstalk2.data.result
    const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Nickname:* ${nickname}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${followings}
➸ *Pengikut:* ${followers}
➸ *Jumlah Like*: ${likes}
➸ *Jumlah Postingan:* ${video}`
                    const pictk =  await getBuffer(user_picture)
                    if (pictk === undefined) {
                        var pp = fs.readFileSync(`./media/deswita.jpg`)
                    } else {
                        var pp = pictk
                    }
                    deswita.sendMessage(from, pp,  image , {caption :tiktod , quoted: al})
                    } catch (err) {
                     console.error(err.message)
                     reply('Error Tiktokstalk : '+ err)
                   }
    tiktod.splice(tiktok.deletelink(from,tiktod),1)
    fs.writeFileSync('./settings/tiktok.json' , JSON.stringify(tiktod))
}

async function ptl (reply,from,deswita,video,al,Mimetype){
    reply(wait)
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${apikey}`)
    ini_buffer = await getBuffer(get_result.result)
    await deswita.sendMessage(from, ini_buffer, video, { quoted: al, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
    reply(done)
}

async function lolivid (reply,from,deswita,video,al,Mimetype){
    reply(wait)
    get_result = await fetchJson(`https://piyobot.000webhostapp.com/api/loli`)
    ini_buffer = await getBuffer(get_result.result.link)
    await deswita.sendMessage(from, ini_buffer, video, { quoted: al, mimetype: Mimetype.mp4, filename: "loli.mp4"})
    reply(done)
}

async function kpop (deswita,from,image,al,reply) {
    reply(wait)
    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    reply(done)
    })
}

async function toimg (al,deswita,getRandom,fakethumb,reply) {
    reply(wait)
    encmediaa = JSON.parse(JSON.stringify(al).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    mediaa = await deswita.downloadAndSaveMediaMessage(encmediaa)
    ran = getRandom('.png')
    exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
    fs.unlinkSync(mediaa)
    if (err) return reply('Yah gagal, coba ulangi ^_^')
    buffer = fs.readFileSync(ran)
    fakethumb(buffer,'```Nih kak, jgn lupa sub YT : Alvio Adji Januar```')
    fs.unlinkSync(ran)
    })
}

async function igstalk (args,deswita,from,image) {
    username = args[0]
    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${apikey}`)
    ini_result = ini_result.result
    ini_buffer = await getBuffer(ini_result.photo_profile)
    ini_txt = `Username : ${ini_result.username}\n`
    ini_txt += `Full Name : ${ini_result.fullname}\n`
    ini_txt += `Posts : ${ini_result.posts}\n`
    ini_txt += `Followers : ${ini_result.followers}\n`
    ini_txt += `Following : ${ini_result.following}\n`
    ini_txt += `Bio : ${ini_result.bio}`
    deswita.sendMessage(from, ini_buffer, image, { caption: ini_txt })
}

async function lk21 (args,deswita,image,al) {
    try{
    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    await deswita.sendMessage(from, thumbnail, image, { quoted: al, caption: ini_txt })
   } catch {
      if (err.message) return reply('Error kak') 
    }
    
}

async function pinterest (args,deswita,from,image,al) {
    query = args.join(" ")
    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
    ini_url = ini_url.result
    ini_buffer = await getBuffer(ini_url)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al })
}

async function pinterest2 (args,deswita,from,image,al) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    for (var x = 0; x <= 5; x++) {
    var ini_buffer = await getBuffer(get_result[x])
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al })
    }
}

async function bass (al,deswita,getRandom,exec,from,audio)  {
    ass = JSON.parse(JSON.stringify(al).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    bas = await deswita.downloadAndSaveMediaMessage(ass)
    ran = getRandom('.mp3')
    exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(bas)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    deswita.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: al})
    fs.unlinkSync(ran)
    })
}

async function ceritahoror (deswita,from,image,al) {
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await deswita.sendMessage(from, thumbnail, image, { quoted: al, caption: ini_txt })
}


module.exports = {
     tiktokstalk,
     ptl,
     lolivid,
     kpop,
     toimg,
     igstalk,
     lk21,
     pinterest,
     pinterest2,
     bass,
     ceritahoror
}
