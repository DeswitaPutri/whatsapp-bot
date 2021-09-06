const fs = require('fs-extra')
const {apikey} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const axios = require('axios')
const { fetchJson, getBuffer} = require('../lib/fetcher')
const wait = 'Downloaded Started'
const done = 'Downloaded Finished'

async function anime (args,deswita,from,image,al) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Id : ${get_result.id}\n`
    ini_txt += `Id MAL : ${get_result.idMal}\n`
    ini_txt += `Title : ${get_result.title.romaji}\n`
    ini_txt += `English : ${get_result.title.english}\n`
    ini_txt += `Native : ${get_result.title.native}\n`
    ini_txt += `Format : ${get_result.format}\n`
    ini_txt += `Episodes : ${get_result.episodes}\n`
    ini_txt += `Duration : ${get_result.duration} mins.\n`
    ini_txt += `Status : ${get_result.status}\n`
    ini_txt += `Season : ${get_result.season}\n`
    ini_txt += `Season Year : ${get_result.seasonYear}\n`
    ini_txt += `Source : ${get_result.source}\n`
    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
    ini_txt += `Score : ${get_result.averageScore}%\n`
    ini_txt += `Characters : \n`
    ini_character = get_result.characters.nodes
    for (var x of ini_character) {
        ini_txt += `- ${x.name.full} (${x.name.native})\n`
    }
    ini_txt += `\nDescription : ${get_result.description}`
    thumbnail = await getBuffer(get_result.coverImage.large)
    await deswita.sendMessage(from, thumbnail, image, { quoted: al, caption: ini_txt })
}

async function nhpdf (args,q,deswita,from,document,Mimetype) {
    try {
    reply(wait)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${apikey}`)
    get_result = get_result.result
    ini_buffer = await getBuffer(get_result)
    await deswita.sendMessage(from, ini_buffer, document, { quoted: al, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
    } catch(err) {
    if (err.message) return reply('error') 
    }
}

async function manga (args,q,deswita,from,image,al) {
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${apikey}&query=${q}`)
    get_result = get_result.result
    ini_txt = `Id : ${get_result.id}\n`
    ini_txt += `Id MAL : ${get_result.idMal}\n`
    ini_txt += `Title : ${get_result.title.romaji}\n`
    ini_txt += `English : ${get_result.title.english}\n`
    ini_txt += `Native : ${get_result.title.native}\n`
    ini_txt += `Format : ${get_result.format}\n`
    ini_txt += `Chapters : ${get_result.chapters}\n`
    ini_txt += `Volume : ${get_result.volumes}\n`
    ini_txt += `Status : ${get_result.status}\n`
    ini_txt += `Source : ${get_result.source}\n`
    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
    ini_txt += `Score : ${get_result.averageScore}%\n`
    ini_txt += `Characters : \n`
    ini_character = get_result.characters.nodes
    for (var x of ini_character) {
        ini_txt += `- ${x.name.full} (${x.name.native})\n`
    }
    ini_txt += `\nDescription : ${get_result.description}`
    thumbnail = await getBuffer(get_result.coverImage.large)
    await deswita.sendMessage(from, thumbnail, image, { quoted: al, caption: ini_txt })
}

async function fotoanime (deswita,from,image,al) {
    const randomnime = ['waifu','neko','loli','wallnime','shota','husbu','sagiri']
    const mathnime = randomnime[Math.floor(Math.random() * randomnime.length)]
    await getBuffer(`https://api.lolhuman.xyz/api/random/${mathnime}?apikey=apiiqbal`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    })
}

module.exports = {
    anime,
    nhpdf,
    manga,
    fotoanime
}