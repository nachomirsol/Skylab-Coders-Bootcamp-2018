const fs = require('fs')
const byline = require('byline')
const { Transform } = require('stream')

const waterIn = fs.createReadStream("water.txt")
const waterOut = fs.createWriteStream("clean-water.txt")

const waterCleaner = new Transform({
    transform(chunk,encoding,next){
        const element = chunk.toString()
        if(element==="H20"){
            this.push(`${element}\n`)
        }
    }
})

const waterInElements = byline.createStream(waterIn)
waterInElements.pipe(waterCleaner).pipe(waterOut)