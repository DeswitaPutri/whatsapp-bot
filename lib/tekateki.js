const fs = require('fs-extra')

const add = (id,  jawaban, _dir) => {
    const obj = {id: id , jawaban: jawaban}
    _dir.push(obj)
    fs.writeFileSync('./datagame/jawaban.json', JSON.stringify(_dir))
}

const revoke = (id, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

const check = (userId , _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].jawaban
    }
}

module.exports = {
    add,
    revoke,
    check
}
