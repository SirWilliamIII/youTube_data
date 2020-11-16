const cheerio = require('cheerio')
const fs = require('fs')
const { join } = require('path')


function splitMonth(str) {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    if (str.find(months)) {

    }
}

const getData = () => {

    let arr = ""

    return new Promise((res, rej) => {
        fs.readFile('watchHistory.html', 'utf-8', (e, html) => {

            const $ = cheerio.load(html)
            const tags = []

            $('.mdl-grid').each((i, el) => {
                let t = $(el).text()
                tags.push(" " + t + " ")
            })

            let j = tags.join(' ').replace(/\s+/g, ' ').split('Products: YouTube').join('-----')
            arr = j.replace(/YouTube Watched/g, '; ').replace(/YouTube TV Watched/g, '; ').replace(/Products: YouTube/g, " ").split(';')
            arr = arr.join('').split('Nov').join('--Nov').split('Dec').join('--Dec').split('Jan').join('--Jan').split('Feb').join('--Feb').split('Mar').join('--Mar').split('Apr').join('--Apr').split('May').join('--May').split('Jun').join('--Jun').split('Jul').join('--Jul').split('Aug').join('--Aug').split('Sep').join('--Sep').split('Oct').join('--Oct')

            console.log(typeof arr)

            return e ? rej(e) : res(arr)
        })
    })
}




module.exports = getData