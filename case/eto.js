const fs = require('fs-extra')
const { spawn } = require('child_process')
const { fetchJson, getBuffer} = require('../lib/fetcher')

async function nuliskanan (budi,deswita,from,image,al) { 
    const tulisan = budi.slice(12)
    deswita.sendMessage(from, 'sabar ya lagi nulis')
    const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
        './media/images/buku/sebelumkanan.jpg',
        '-font',
        './lib/font/Indie-Flower.ttf',
        '-size',
        '960x1280',
        '-pointsize',
        '23',
        '-interline-spacing',
        '2',
        '-annotate',
        '+128+129',
        fixHeight,
        './media/images/buku/setelahkanan.jpg'
        ])
        .on('error', () => reply('Error gan'))
        .on('exit', () => {
        deswita.sendMessage(from, fs.readFileSync('./media/images/buku/setelahkanan.jpg'), image, {caption: `Wes rampung dik, donasi dong buat biaya server. bales /donasi untuk melihat cara donasi` , quoted : al})
        })
}

async function nuliskiri (budi,deswita,from,image,al) {
    const tulisan = budi.slice(12)
    deswita.sendMessage(from, 'sabar ya lagi nulis')
    const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
        './media/images/buku/sebelumkiri.jpg',
        '-font',
        './lib/font/Indie-Flower.ttf',
        '-size',
        '960x1280',
        '-pointsize',
        '22',
        '-interline-spacing',
        '2',
        '-annotate',
        '+140+153',
        fixHeight,
        './media/images/buku/setelahkiri.jpg'
        ])
        .on('error', () => reply('Error gan'))
        .on('exit', () => {
            deswita.sendMessage(from, fs.readFileSync('./media/images/buku/setelahkiri.jpg'), image, {caption: `Wes rampung dik, donasi dong buat biaya server. bales /donasi untuk melihat cara donasi` , quoted : al})
    })
}

async function js (reply,args) {
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)
}

async function alaudio (args,deswita,from,audio,al) {
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${apikey}`)
    await deswita.sendMessage(from, ini_buffer, audio, { quoted: al, mimetype: Mimetype.mp4Audio })
}

async function asmaulhusna (reply) {
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    reply(ini_txt)
}

async function kisahnabi (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)
}

async function list (reply) {
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
    get_result = get_result.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
    ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
}

async function alquran (reply) {
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
    arab = x.arab
    nomor = x.ayat
    latin = x.latin
    indo = x.indonesia
    ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    reply(ini_txt)
}

async function wikipedia (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    reply(get_result)
}

async function wikipedia (args,reply) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    reply(get_result)
}

async function brainly (args,q,fakegroup,reply)  {
    try {
    if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
    get_result = await fetchJson(`https://api.zeks.xyz/api/brainly?apikey=apivinz&q=${q}&count=5`)
    get_result = get_result.data
    let brr = `Hasil Pencaharian Soal *${q}*\n`
    for (let i = 0; i < get_result.length; i++){
    brr += `-> *Pertanyaan :* ${get_result[i].question}\n\n*Jawaban :* ${get_result[i].answer[0].text}\n*******************\n` 
    }
    fakegroup(brr)
    } catch {
    reply(`Maaf jawaban tidak ditemukan`)
    }    
}

module.exports = {
    nuliskanan,
    nuliskiri,
    js,
    alaudio,
    asmaulhusna,
    kisahnabi,
    list,
    alquran,
    wikipedia,
    brainly
}