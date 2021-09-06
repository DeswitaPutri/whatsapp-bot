const fs = require('fs-extra')
const {apikey} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const axios = require('axios')
const { fetchJson, getBuffer} = require('../lib/fetcher')
const {client} = require('../lib')
const wait = 'Downloaded Started'
const done = 'Downloaded Finished'

const { st } = require('../lib')

async function ttp (args,command,deswita,from,sticker,al) {
    ini_txt = args.join(" ")
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${q}`)
    await deswita.sendMessage(from, ini_buffer, sticker, { quoted: al })
}

async function sticker (reply,isQuotedImage,console,al,deswita,from,MessageType) {
    await reply('Converted Image To Sticker')
    console.log('Created Sticker')
    const testt = isQuotedImage ? JSON.parse(JSON.stringify(al).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : al
    cihcih = await deswita.downloadAndSaveMediaMessage(testt , 'sticker')
    await st.newsticker(cihcih,'punya','al','amel').then(async result =>{
        await deswita.sendMessage(from, result , MessageType.sticker)
    })
    await fs.unlinkSync(cihcih)
    console.log('Finished')
}

async function find (args,deswita,sender,sticker) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${apikey}&query=${query}`)
    get_result = get_result.result[0].stickers
    for (var x of get_result) {
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=${x}`)
        await deswita.sendMessage(sender, ini_buffer, sticker)
    }
}

async function tele (args,deswita,from,sticker) {
    ini_url = args[0]
    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
    ini_sticker = ini_url.result.sticker
    for (sticker_ in ini_sticker) {
    ini_buffer = await getBuffer(ini_sticker[sticker_])
    await deswita.sendMessage(from, ini_buffer, sticker)
    }
}

async function smoji (args,deswita,from,sticker,al) {
    emoji = args[0]
    try {
    emoji = encodeURI(emoji[0])
    } catch {
    emoji = encodeURI(emoji)
    }
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${apikey}`)
    await deswita.sendMessage(from, ini_buffer, sticker, { quoted: al })
}

module.exports = {
    ttp,
    sticker,
    find,
    tele,
    smoji
}