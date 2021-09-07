const fs = require('fs-extra')
const {apikey} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const axios = require('axios')
const { fetchJson, getBuffer} = require('../lib/fetcher')
const { exec } = require("child_process");
const wait = 'Downloaded Started'
const done = 'Downloaded Finished'

async function artinama (reply,from,q) {
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${apikey}&nama=${q}`)
    reply(get_result.result)
}

async function cekjodoh (args,reply) {
    ini_nama = args.join(" ").split("&")
    nama1 = ini_nama[0].trim()
    nama2 = ini_nama[1].trim()
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `Positif : ${get_result.positif}\n`
    ini_txt += `Negative : ${get_result.negatif}\n`
    ini_txt += `Deskripsi : ${get_result.deskripsi}`
    reply(ini_txt)
}

async function playstore (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = 'Play Store Search : \n'
    for (var x of get_result) {
    ini_txt += `Name : ${x.title}\n`
    ini_txt += `ID : ${x.appId}\n`
    ini_txt += `Developer : ${x.developer}\n`
    ini_txt += `Link : ${x.url}\n`
    ini_txt += `Price : ${x.priceText}\n`
    ini_txt += `Price : ${x.price}\n\n`
    }
    reply(ini_txt)
}

async function maps (q,deswita,from,image,al) {
    console.log(q)
    try {
    const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + q)
    const { gambar } = mapz2.data
    const pictkk = await getBuffer(gambar)
    deswita.sendMessage(from, pictkk, image, {caption : `*Hasil Maps : ${q}*`, quoted: al })
    } catch (err) {
    console.error(err.message)
    reply('Error Maps : '+ err)
    }
}

async function totext (isQuotedImage,al,deswita,getRandom,reply) {
    var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(al).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : al
    var filePath = await deswita.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
    var form = new FormData();
    var stats = fs.statSync(filePath);
    var fileSizeInBytes = stats.size;
    var fileStream = fs.createReadStream(filePath);
    form.append('img', fileStream, { knownLength: fileSizeInBytes });
    var options = {
    method: 'POST',
    credentials: 'include',
    body: form
    }
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${apikey}`, {...options })
    fs.unlinkSync(filePath)
    get_result = get_result.result
    reply(`Result : ${get_result}`)
}

async function fpbk (command,reply) {
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
    reply(get_result.result)
}

async function quotes (reply) {
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${apikey}`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n*― ${author}*`)
}

async function covid (reply) {
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `Positif : ${get_result.positif}\n`
    ini_txt += `Sembuh : ${get_result.sembuh}\n`
    ini_txt += `Dirawat : ${get_result.dirawat}\n`
    ini_txt += `Meninggal : ${get_result.meninggal}`
    reply(ini_txt)
}

async function jarak (args,reply) {
    pauls = args.join(" ")
    teks1 = pauls.split("-")[0].trim()
    teks2 = pauls.split("-")[1].trim()
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${teks1}&kota2=${teks2}`)
    x = get_result.result
    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
    ini_txt += `   ╭───────────────❏\n`
    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
    ini_txt += `❍┤ Motor : ${x.motor}\n`
    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
    ini_txt += `   ╰───────────────❏\n`
    reply(ini_txt)
}

async function shopee (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = 'Shopee Search : \n'
    for (var x of get_result) {
        ini_txt += `Name : ${x.name}\n`
        ini_txt += `Terjual : ${x.sold}\n`
        ini_txt += `Stock : ${x.stock}\n`
        ini_txt += `Lokasi : ${x.shop_loc}\n`
        ini_txt += `Link : ${x.link_produk}\n\n`
    }
    reply(ini_txt)
}

async function wasted (args,deswita,from,image,al) {
    ini_url = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${apikey}&img=${ini_url}`)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al })
}

async function tr (args,reply) {
    kode_negara = args[0]
    args.shift()
    ini_txt = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${ini_txt}`)
    get_result = get_result.result
    init_txt = `From : ${get_result.from}\n`
    init_txt += `To : ${get_result.to}\n`
    init_txt += `Original : ${get_result.original}\n`
    init_txt += `Translated : ${get_result.translated}\n`
    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
    reply(init_txt)
}

async function tomp3 (reply,al,deswita,getRandom,from,audio) {
    reply(wait)
    mitri = JSON.parse(JSON.stringify(al).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    duh = await deswita.downloadAndSaveMediaMessage(mitri)
    ran = getRandom('.mp4')
    exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
    fs.unlinkSync(duh)
    if (err) return reply('*☒* Gagal, pada saat mengkonversi video ke mp3')
    buffer = fs.readFileSync(ran)
    deswita.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: al})
    fs.unlinkSync(ran)
    console.log(done)
    })
}

async function tomp4 (isQuotedSticker,al,deswita,getRandom,request,from,video,Mimetype,reply) {
    if (isQuotedSticker)
    {
    const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(al).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : al
    filePath = await deswita.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
    file_name = getRandom(".mp4")
    request({
    url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${apikey}`,
    method: 'POST',
    formData: {
    "img": fs.createReadStream(filePath),
    }
    }, 
    function(error, response, body) {
    fs.unlinkSync(filePath)
    get_result = JSON.parse(body)
    getBuffer(get_result.result).then(result => {
    deswita.sendMessage(from, result, video, { mimetype: Mimetype.mp4 })
    fs.unlinkSync(file_name)
    })
    });
    } else {
        reply(`Reply stickernya kawan`)
    }
}

async function lirik (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${query}`)
    reply(get_result.result)
}

async function chord (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Chord : \n${get_result.chord}`
    reply(ini_txt)
}

async function google (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = 'Google Search : \n'
    for (var x of get_result) {
    ini_txt += `Title : ${x.title}\n`
    ini_txt += `Link : ${x.link}\n`
    ini_txt += `Desc : ${x.desc}\n\n`
    }
    reply(ini_txt)
}

async function gimage (args,reply,image,deswita,al,from) {
    try {
    reply(wait)
    txt1 = args[0]
    get_result = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${txt1}`)
    await deswita.sendMessage(from, get_result , image , {quoted : al})
    }
    catch{
    reply('*ERROR*\nGambar Tidak Bisa Di Simpan Di Database')
    }
}

async function cuaca (args,deswita,from,reply,al) {
    daerah = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `Tempat : ${get_result.tempat}\n`
    ini_txt += `Cuaca : ${get_result.cuaca}\n`
    ini_txt += `Angin : ${get_result.angin}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
    ini_txt += `Suhu : ${get_result.suhu}\n`
    ini_txt += `Udara : ${get_result.udara}\n`
    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
    await deswita.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: al })
    reply(ini_txt)
}

module.exports = {
    artinama,
    cekjodoh,
    playstore,
    maps,
    totext,
    fpbk,
    quotes,
    covid,
    jarak,
    shopee,
    wasted,
    tr,
    tomp3,
    tomp4,
    lirik,
    chord,
    google,
    gimage,
    cuaca
}
