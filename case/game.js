const fs = require('fs-extra')
const {prefix} = JSON.stringify(fs.readFileSync('./settings/setting.json'))
const { fetchJson, getBuffer} = require('../lib/fetcher')
let fetch = require('node-fetch')
let timeout = 15000
const apikey = 'deswita'

async function simi (args,all,reply,from) {
    {
    if (args[0] == 'on') {
    all.push(from)
    fs.writeFileSync('./datagame/simi.json', JSON.stringify(all))
    reply('Mengaktifkan bot simi!')
    } else if (args[0] == 'off') {
    let inxx = all.indexOf(from)
    all.splice(inxx, 1)
    fs.writeFileSync('./datagame/simi.json', JSON.stringify(all))
    reply('Menonaktifkan bot simi!')
    } else {
    reply( `Untuk mengaktifkan al \n\nPenggunaan\n${prefix}al on --mengaktifkan\n${prefix}al off --nonaktifkan\n`)
    }
    }
}

async function tebakgambar (deswita,from,image,al,tebakgambar,sender,sleep,reply,datatg,allkuis,isall) {
    if (isall) return reply('Masih Ada Kuis Yang Berjalan Disini')
    const get_resultt = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar2?apikey=${apikey}`)
    console.log(get_resultt)
    const get_result = get_resultt.result
    const ini_image = get_result.image
    const jawaban = get_result.answer
    const ini_buffer = await getBuffer(ini_image)
    await deswita.sendMessage(from, ini_buffer, image, { quoted: al, caption: "Jawab Dengan Huruf Kecil" }).then(() => {
    tebakgambar.push(jawaban)
    fs.writeFileSync("./datagame/tebakgambar.json", JSON.stringify(tebakgambar))
    datatg.push(from)
    fs.writeFileSync("./datagame/datatg.json" , JSON.stringify(datatg))
    allkuis.push(from)
    fs.writeFileSync("./datagame/kuis.json", JSON.stringify(allkuis))
    })
    await sleep(30000)
    if (datatg.includes(from)) {
    reply("Jawaban: " + jawaban)
    let kui = datatg.indexOf(from)
    datatg.splice(kui, 1)
    fs.writeFileSync("./datagame/datatg.json" , JSON.stringify(datatg))
    let teb = tebakgambar.indexOf(budy)
    tebakgambar.splice(teb , 1)
    fs.writeFileSync("./datagame/tebakgambar.json", JSON.stringify(tebakgambar))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(al, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
    }
}

async function kuismtk (deswita,reply,from,buffer,MessageType,al,kuismtkk,from,sender,usermtk,allkuis,isall) {
    if (isall) return reply('Masih Ada Kuis Yang Berjalan Disini')
    await reply('Tunggu Sebentar')
    await deswita.sendMessage(from, {
    contentText: 'KUIS MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'easy', buttonText: { displayText: 'easy' }, type: 1 },
    { buttonId: 'medium', buttonText: { displayText: 'medium' }, type: 1 },
    { buttonId: 'hard', buttonText: { displayText: 'hard'}, type: 1 }
    ],
    headerType: 4,
    imageMessage: (await deswita.prepareMessageMedia(buffer, MessageType.image)).imageMessage
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    kuismtkk.push(from)
    fs.writeFileSync('./datagame/kuismtkk.json' , JSON.stringify(kuismtkk))
    usermtk.push(sender)
    fs.writeFileSync('./datagame/mtk.json',JSON.stringify(usermtk))
    allkuis.push(from)
    fs.writeFileSync("./datagame/kuis.json", JSON.stringify(allkuis))
}

async function tekateki (ttk,jwb,from,teka,teki,reply,sleep,allkuis,isall) {
    if (isall) return reply('Masih Ada Kuis Yang Berjalan Disini')
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `${json.soal}

Timeout *30 detik*
Bonus: 5 points`
    teka.push(json.jawaban.toLowerCase())
    fs.writeFileSync('./datagame/tekateki.json' , JSON.stringify(teka))
    teki.push(from)
    fs.writeFileSync('./datagame/usertekateki.json' , JSON.stringify(teki))
    allkuis.push(from)
    fs.writeFileSync("./datagame/kuis.json", JSON.stringify(allkuis))
    ttk.add(from, json.jawaban.toLowerCase() , jwb)
    reply(caption)
    await sleep(30000)
    if (teki.includes(from)) {
    await reply(`Waktu habis!\nJawabannya adalah *${json.jawaban.toLowerCase()}*`)
    let tet = teki.indexOf(from)
    teki.splice(tet , 1)
    fs.writeFileSync('./datagame/usertekateki.json' , JSON.stringify(teki))
    let tot = teka.indexOf(json.jawaban)
    teka.splice(tot , 1)
    fs.writeFileSync('./datagame/tekateki.json' , JSON.stringify(teka))
    jwb.splice(ttk.revoke(from, jwb))
    fs.writeFileSync('./datagame/jawaban.json' , JSON.stringify(jwb))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(al, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
    }
}

module.exports = {
    simi,
    tebakgambar,
    kuismtk,
    tekateki
}