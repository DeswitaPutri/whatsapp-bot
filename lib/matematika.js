const fs = require('fs-extra')

async function easy (mtkeasy,kuismtk,kuismtkk,from,Math_js,reply,easy,deswita,MessageType,al,sleep,ismi,sender,usermtk,allkuis,user2) {
    if (!ismi) return reply('Kok lu yang mencet sih\nYang kuismtk kan dia duluan')
    kuil = mtkeasy[Math.floor(Math.random() * (mtkeasy.length))];
    kuil2 = mtkeasy[Math.floor(Math.random() * (mtkeasy.length))];
    kuil3 = mtkeasy[Math.floor(Math.random() * (mtkeasy.length))];
    kuil4 = mtkeasy[Math.floor(Math.random() * (mtkeasy.length))];
    nova = ['+','-']
    noval = nova[Math.floor(Math.random() * (nova.length))]
    noval2 = nova[Math.floor(Math.random() * (nova.length))]
    noval4 = nova[Math.floor(Math.random() * (nova.length))]
    kuismtk.push(from)
    fs.writeFileSync('./datagame/kuismtk.json' , JSON.stringify(kuismtk))
    if (typeof Math_js.evaluate(`${kuil} ${noval4} ${kuil2}`) !== "number"){
    await reply(`Nomor tidak ada${kuil}`)
    } else {
    easy.push(`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    fs.writeFileSync('./datagame/easy.json' , JSON.stringify(easy))
    }
    let kuos = kuismtkk.indexOf(from)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    random = (`${Math_js.evaluate(`${kuil}${noval}${kuil3}`)}`)
    random2 = (`${Math_js.evaluate(`${kuil4}${noval2}${kuil3}`)}`)
    random3 = (`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    await deswita.sendMessage(from, {
    contentText: 'Hasil Dari',
    footerText: `${kuil} ${noval4} ${kuil2}`,
    buttons: [
    { buttonId: random, buttonText: { displayText: random}, type: 1 },
    { buttonId: random2, buttonText: { displayText: random2}, type: 1 },
    { buttonId: random3, buttonText: { displayText: random3}, type: 1 },
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    user2.push(sender)
    fs.writeFileSync('./datagame/usermtk.json' , JSON.stringify(user2))
    await sleep(30000)
    if (kuismtk.hasOwnProperty(from)) {
    await reply(`Jawabannya : ${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    let kuii = kuismtk.indexOf(from)
    kuismtk.splice(kuii,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuy = easy.indexOf(`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    easy.splice(kuy,1)
    fs.writeFileSync('./datagame/easy.json', JSON.stringify(easy, null , 2))
    let skuy = usermtk.indexOf(sender)
    usermtk.splice(skuy,1)
    fs.writeFileSync('./datagame/mtk.json', JSON.stringify(usermtk , null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
    }
}

async function medium (mtkmedium,kuismtk,kuismtkk,from,Math_js,reply,medium,deswita,MessageType,al,sleep,ismi,sender,usermtk,allkuis,user2) {
    if (!ismi) return reply('Kok lu yang mencet sih\nYang kuismtk kan dia duluan')
    kuil = mtkmedium[Math.floor(Math.random() * (mtkmedium.length))];
    kuil2 = mtkmedium[Math.floor(Math.random() * (mtkmedium.length))];
    kuil3 = mtkmedium[Math.floor(Math.random() * (mtkmedium.length))];
    kuil4 = mtkmedium[Math.floor(Math.random() * (mtkmedium.length))];
    nova = ['+','-']
    noval = nova[Math.floor(Math.random() * (nova.length))]
    noval2 = nova[Math.floor(Math.random() * (nova.length))]
    noval4 = nova[Math.floor(Math.random() * (nova.length))]
    kuismtk.push(from)
    fs.writeFileSync('./datagame/kuismtk.json' , JSON.stringify(kuismtk))
    if (typeof Math_js.evaluate(`${kuil} ${noval4} ${kuil2}`) !== "number"){
    await reply(`Nomor tidak ada${kuil}`)
    } else {
    medium.push(`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    fs.writeFileSync('./datagame/medium.json' , JSON.stringify(medium))
    }
    let kuos = kuismtkk.indexOf(from)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    random = (`${Math_js.evaluate(`${kuil}${noval}${kuil3}`)}`)
    random2 = (`${Math_js.evaluate(`${kuil4}${noval2}${kuil3}`)}`)
    random3 = (`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    await deswita.sendMessage(from, {
    contentText: 'Hasil Dari',
    footerText: `${kuil} ${noval4} ${kuil2}`,
    buttons: [
    { buttonId: random, buttonText: { displayText: random}, type: 1 },
    { buttonId: random2, buttonText: { displayText: random2}, type: 1 },
    { buttonId: random3, buttonText: { displayText: random3}, type: 1 },
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    user2.push(sender)
    fs.writeFileSync('./datagame/usermtk.json' , JSON.stringify(user2))
    await sleep(30000)
    if (kuismtk.hasOwnProperty(from)) {
    await reply(`Jawabannya : ${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    let kuii = kuismtk.indexOf(from)
    kuismtk.splice(kuii,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuy = medium.indexOf(`${kuil}${noval4}${kuil2}`)
    medium.splice(kuy,1)
    fs.writeFileSync('./datagame/medium.json', JSON.stringify(medium , null, 2))
    let skuy = usermtk.indexOf(sender)
    usermtk.splice(skuy,1)
    fs.writeFileSync('./datagame/mtk.json', JSON.stringify(usermtk , null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
    }
}

async function hard (mtkhard,kuismtk,kuismtkk,from,Math_js,reply,hard,deswita,MessageType,al,sleep,ismi,sender,usermtk,allkuis,user2) {
    if (!ismi) return reply('Kok lu yang mencet sih\nYang kuismtk kan dia duluan')
    kuil = mtkhard[Math.floor(Math.random() * (mtkhard.length))];
    kuil2 = mtkhard[Math.floor(Math.random() * (mtkhard.length))];
    kuil3 = mtkhard[Math.floor(Math.random() * (mtkhard.length))];
    kuil4 = mtkhard[Math.floor(Math.random() * (mtkhard.length))];
    nova = ['+','-']
    noval = nova[Math.floor(Math.random() * (nova.length))]
    noval2 = nova[Math.floor(Math.random() * (nova.length))]
    noval4 = nova[Math.floor(Math.random() * (nova.length))]
    kuismtk.push(from)
    fs.writeFileSync('./datagame/kuismtk.json' , JSON.stringify(kuismtk))
    if (typeof Math_js.evaluate(`${kuil} ${noval4} ${kuil2}`) !== "number"){
    await reply(`Nomor tidak ada${kuil}`)
    } else {
    hard.push(`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    fs.writeFileSync('./datagame/hard.json' , JSON.stringify(hard))
    }
    let kuos = kuismtkk.indexOf(from)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    random = (`${Math_js.evaluate(`${kuil}${noval}${kuil3}`)}`)
    random2 = (`${Math_js.evaluate(`${kuil4}${noval2}${kuil3}`)}`)
    random3 = (`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    await deswita.sendMessage(from, {
    contentText: 'Hasil Dari',
    footerText: `${kuil} ${noval4} ${kuil2}`,
    buttons: [
    { buttonId: random, buttonText: { displayText: random}, type: 1 },
    { buttonId: random2, buttonText: { displayText: random2}, type: 1 },
    { buttonId: random3, buttonText: { displayText: random3}, type: 1 },
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    user2.push(sender)
    fs.writeFileSync('./datagame/usermtk.json' , JSON.stringify(user2))
    await sleep(30000)
    if (kuismtk.hasOwnProperty(from)) {
    await reply(`Jawabannya : ${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    let kuii = kuismtk.indexOf(from)
    kuismtk.splice(kuii,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuy = hard.indexOf(`${Math_js.evaluate(`${kuil}${noval4}${kuil2}`)}`)
    hard.splice(kuy, 1)
    fs.writeFileSync('./datagame/hard.json', JSON.stringify(hard , null, 2))
    let skuy = usermtk.indexOf(sender)
    usermtk.splice(skuy,1)
    fs.writeFileSync('./datagame/mtk.json', JSON.stringify(usermtk , null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
    }
}

async function next (deswita,from,MessageType,al,kuismtkk,usermtk,sender) {
    await deswita.sendMessage(from, {
    contentText: 'KUIS MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'easy', buttonText: { displayText: 'easy' }, type: 1 },
    { buttonId: 'medium', buttonText: { displayText: 'medium' }, type: 1 },
    { buttonId: 'hard', buttonText: { displayText: 'hard'}, type: 1 }
    ],
    headerType: 1,
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    kuismtkk.push(from)
    fs.writeFileSync('./datagame/kuismtkk.json' , JSON.stringify(kuismtkk))
    usermtk.push(sender)
    fs.writeFileSync('./datagame/mtk.json' , JSON.stringify(usermtk))
}

async function buteasy (reply,deswita,from,MessageType,al,clearTimeout,easy,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,ismi,allkuis) {
    if (!ismi) return
    await reply(`Jawaban Benar, Selamat Anda Mendapatkan 5 Points\nMau Lanjut ?`)
    point.addCooldown(sender)
    point.addLevelingPoint(sender, 5 , _point)
    await reply(`*Your Point :* ${point.getLevelingPoint(sender, _point)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    await clearTimeout(10000)
    let tebakeasy = easy.indexOf(isButton);
    easy.splice(tebakeasy , 1)
    fs.writeFileSync('./datagame/easy.json', JSON.stringify(easy, null , 2))
    let kues = kuismtk.indexOf(sender)
    kuismtk.splice(kues,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuos = kuismtkk.indexOf(sender)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    let kui = usermtk.indexOf(sender)
    usermtk.splice(kui,1)
    fs.writeFileSync('./datagame/mtk.json' , JSON.stringify(usermtk, null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
}

async function butmedium (reply,deswita,from,MessageType,al,clearTimeout,medium,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,ismi,allkuis) {
    if (!ismi) return
    await reply(`Jawaban Benar, Selamat Anda Mendapatkan 5 Points\nMau Lanjut ?`)
    point.addCooldown(sender)
    point.addLevelingPoint(sender, 5 , _point)
    await reply(`*Your Point :* ${point.getLevelingPoint(sender, _point)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    await clearTimeout(10000)
    let tebakmedium = medium.indexOf(isButton);
    medium.splice(tebakmedium , 1)
    fs.writeFileSync('./datagame/medium.json', JSON.stringify(medium, null , 2))
    let kues = kuismtk.indexOf(sender)
    kuismtk.splice(kues,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuos = kuismtkk.indexOf(sender)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    let kui = usermtk.indexOf(sender)
    usermtk.splice(kui,1)
    fs.writeFileSync('./datagame/mtk.json' , JSON.stringify(usermtk, null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
}

async function buthard (reply,deswita,from,MessageType,al,clearTimeout,hard,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,ismi,allkuis) {
    if (!ismi) return
    await reply(`Jawaban Benar, Selamat Anda Mendapatkan 5 Points\nMau Lanjut ?`)
    point.addCooldown(sender)
    point.addLevelingPoint(sender, 5 , _point)
    await reply(`*Your Point :* ${point.getLevelingPoint(sender, _point)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    await clearTimeout(10000)
    let tebakhard = hard.indexOf(isButton);
    hard.splice(tebakhard , 1)
    fs.writeFileSync('./datagame/hard.json', JSON.stringify(hard, null , 2))
    let kues = kuismtk.indexOf(sender)
    kuismtk.splice(kues,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuos = kuismtkk.indexOf(sender)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    let kui = usermtk.indexOf(sender)
    usermtk.splice(kui,1)
    fs.writeFileSync('./datagame/mtk.json' , JSON.stringify(usermtk, null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
}

async function salah (reply,deswita,from,MessageType,al,easy,medium,hard,isButton,kuismtk,kuismtkk,sender,usermtk,point,_point,allkuis)   {
    reply(`*TET TOTT*\nJawaban Kamu Salah\nPoint Kamu Berkurang 5\nMau Lanjut ?`)
    point.addCooldown(sender)
    point.reduceLevelingPoint(sender, 5 , _point)
    reply(`*Your Point :* ${point.getLevelingPoint(sender, _point)}`)
    await deswita.sendMessage(from, {
    contentText: 'NEXT MTK',
    footerText: 'Created : Piyo',
    buttons: [
    { buttonId: 'next', buttonText: { displayText: 'next' }, type: 1 },
    { buttonId: 'stop', buttonText: { displayText: 'stop' }, type: 1 }
    ],
    headerType: 1
    }, MessageType.buttonsMessage, {
    quoted : al
    })
    let tebakeasy = easy.indexOf(isButton);
    easy.splice(tebakeasy , 1)
    fs.writeFileSync('./datagame/easy.json', JSON.stringify(easy, null , 2))
    let tebakmedium = medium.indexOf(isButton);
    medium.splice(tebakmedium , 1)
    fs.writeFileSync('./datagame/medium.json', JSON.stringify(medium, null , 2))
    let tebakhard = hard.indexOf(isButton);
    hard.splice(tebakhard , 1)
    fs.writeFileSync('./datagame/hard.json', JSON.stringify(hard, null , 2))
    let kues = kuismtk.indexOf(from)
    kuismtk.splice(kues,1)
    fs.writeFileSync('./datagame/kuismtk.json', JSON.stringify(kuismtk , null, 2))
    let kuos = kuismtkk.indexOf(from)
    kuismtkk.splice(kuos,1)
    fs.writeFileSync('./datagame/kuismtkk.json', JSON.stringify(kuismtkk , null , 2))
    let kui = usermtk.indexOf(sender)
    usermtk.splice(kui,1)
    fs.writeFileSync('./datagame/mtk.json' , JSON.stringify(usermtk, null , 2))
    let alyo = allkuis.indexOf(from)
    allkuis.splice(alyo, 1)
    fs.writeFileSync("./datagame/kuis.json" , JSON.stringify(allkuis))
}

module.exports = {
    easy,
    medium,
    hard,
    next,
    buteasy,
    butmedium,
    buthard,
    salah
}