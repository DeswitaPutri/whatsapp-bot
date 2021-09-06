const fs = require('fs-extra')
const {prefix , apikey} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const { fetchJson, getBuffer} = require('../lib/fetcher')
const wa = require('../lib/functionbot')
const wait = 'Downloaded Started'

async function tiktoknowm (tiktok,from,tiktod,reply,deswita,video,al) {
    const link = tiktok.checklink(from,tiktod)
    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${link}`
    console.log(wait)
    reply(wait)
    get_result = await fetchJson(ini_url)
    ini_buffer = await getBuffer(get_result.result.link)
    deswita.sendMessage(from, ini_buffer, video , {quoted : al , caption : 'Nih Videonya kak'})
    console.log('Download Finish')
    tiktod.splice(tiktok.deletelink(from,tiktod),1)
    fs.writeFileSync('./settings/tiktok.json' , JSON.stringify(tiktod))
}

async function tiktokmusic (tiktok,from,tiktod,reply,deswita,audio,al,Mimetype) {
    const link = tiktok.checklink(from,tiktod)
    console.log(wait)
    reply(wait)
    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${link}`)
    deswita.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: al })
    console.log('Download Finish')
    tiktod.splice(tiktok.deletelink(from,tiktod),1)
    fs.writeFileSync('./settings/tiktok.json' , JSON.stringify(tiktod))
}

async function joox (reply,q,deswita,from,image,audio,al) {
    query = q
    reply(wait)
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.info.song}\n`
    ini_txt += `Artists : ${get_result.info.singer}\n`
    ini_txt += `Duration : ${get_result.info.duration}\n`
    ini_txt += `Album : ${get_result.info.album}\n`
    ini_txt += `Uploaded : ${get_result.info.date}\n`
    ini_txt += `Lirik :\n ${get_result.lirik}\n`
    thumbnail = await getBuffer(get_result.image)
    await deswita.sendMessage(from, thumbnail, image, { quoted: al, caption: ini_txt })
    get_audio = await getBuffer(get_result.audio[0].link)
    await deswita.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: al })
}

async function youtubeplay (yt,from,youtube,reply,deswita,image,al,audio) {
    const judul = yt.checkjudul(from,youtube)
    console.log(wait)
    reply(wait)
    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${judul}`)
    .then(async(result) => {
    await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${result.result[1].videoId}`)
    .then(async(result) => {
    result = result.result
    caption = `❖ Title    : *${result.title}*\n`
    caption += `❖ Size     : *${result.size}*`
    ini_buffer = await getBuffer(result.thumbnail)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al, caption: caption })
    get_audio = await getBuffer(result.link)
    if (Number(result.size.split('MB')[0]) >= 20.00) return reply('Batas File Music Hanya 20MB')
    await deswita.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: al  , ptt:true})
    console.log('Download Finish')
    youtube.splice(yt.deletelink(from,youtube),1)
    fs.writeFileSync('./settings/youtube.json' , JSON.stringify(youtube))
    })
    })
}


async function youtubemusic (yt,youtube,reply,deswita,al,from,audio,image) {
    const link = yt.checklink(from,youtube)
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${link}`)
    console.log(wait)
    reply(wait)
    get_result = get_result.result
    caption = `❖ Title    : *${get_result.title}*\n`
    caption += `❖ Size     : *${get_result.size}*`
    ini_buffer = await getBuffer(get_result.thumbnail)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al, caption: caption })
    get_audio = await getBuffer(get_result.link)
    if (Number(get_result.size.split('MB')[0]) >= 20.00) return reply('Batas File Music Hanya 20MB')
    await deswita.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: al })
    console.log('Download Finish')
    youtube.splice(yt.deletelink(from,youtube),1)
    fs.writeFileSync('./settings/youtube.json' , JSON.stringify(youtube))
}

async function youtubevideo (yt,youtube,reply,deswita,al,from,video,image) {
    const link = yt.checklink(from,youtube)
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${link}`)
    console.log(wait)
    reply(wait)
    get_result = get_result.result
    ini_txt = `${get_result.title} - ${get_result.size}`
    ini_buffer = await getBuffer(get_result.thumbnail)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al, caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    if (Number(get_result.size.split('MB')[0]) >= 20.00) return reply('Batas File Video Hanya 20MB')
    await deswita.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: al })
    console.log('Download Finish')
    youtube.splice(yt.deletelink(from,youtube),1)
    fs.writeFileSync('./settings/youtube.json' , JSON.stringify(youtube))
}

async function igdl (args,image,video,deswita,from,al) {
    ini_url = args[0]
    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
    ini_url = ini_url.result
    ini_type = image
    if (ini_url.includes(".mp4")) ini_type = video
    ini_buffer = await getBuffer(ini_url)
    await deswita.sendMessage(from, ini_buffer, ini_type, { quoted: al })
}

async function igdl2 (args,image,video,deswita,from,al) {
    ini_url = args[0]
    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${ini_url}`)
    ini_url = ini_url.result
    ini_type = image
    if (ini_url.includes(".mp4")) ini_type = video
    ini_buffer = await getBuffer(ini_url)
    await deswita.sendMessage(from, ini_buffer, ini_type, { quoted: al })
}

async function twtdl (args,deswita,from,video,al) {
    ini_url = args[0]
    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_url}`)
    ini_url = ini_url.result
    ini_url = ini_url[ini_url.length - 1].link
    ini_buffer = await getBuffer(ini_url)
    await deswita.sendMessage(from, ini_buffer, video, { quoted: al })
}

async function fbdl (args,deswita,from,video,al) {
    ini_url = args[0]
    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
    ini_url = ini_url.result[0].link
    ini_buffer = await getBuffer(ini_url)
    await deswita.sendMessage(from, ini_buffer, video, { quoted: al })
}

module.exports = {
     tiktoknowm,
     tiktokmusic,
     joox,
     youtubeplay,
     youtubemusic,
     youtubevideo,
     igdl,
     igdl2,
     twtdl,
     fbdl
}
