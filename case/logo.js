const fs = require('fs-extra')
const {apikey} = JSON.parse(fs.readFileSync('./settings/setting.json'))
const axios = require('axios')
const { exec } = require("child_process");
const { fetchJson, getBuffer} = require('../lib/fetcher')
const wait = 'Downloaded Started'
const done = 'Downloaded Finished'

async function ktpmaker (args,deswita,from,image,al) {
    get_args = args.join(" ").split("|")
    nik = get_args[0]
    prov = get_args[1]
    kabu = get_args[2]
    name = get_args[3]
    ttl = get_args[4]
    jk = get_args[5]
    jl = get_args[6]
    rtrw = get_args[7]
    lurah = get_args[8]
    camat = get_args[9]
    agama = get_args[10]
    nikah = get_args[11]
    kerja = get_args[12]
    warga = get_args[13]
    until = get_args[14]
    img = get_args[15]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al })
}

async function textpro (args,command,deswita,from,image,al) {
    ini_txt = args.join(" ")
    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    })
}

async function textpro2 (args,command,deswita,from,image,al) {
    txt1 = args[0]
    txt2 = args[1]
    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    })
}

async function photooxy (args,command,deswita,from,image,al){
    ini_txt = args.join(" ")
    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    })
}

async function photooxy2 (args,command,deswita,from,image,al) {
    txt1 = args[0]
    txt2 = args[1]
    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    })
}

async function ephoto (args,command,deswita,from,image,al) {
    ini_txt = args.join(" ")
    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
    deswita.sendMessage(from, gambar, image, { quoted: al })
    })
}

module.exports = {
    ktpmaker,
    textpro,
    textpro2,
    photooxy,
    photooxy2,
    ephoto
}