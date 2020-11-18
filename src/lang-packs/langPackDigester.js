const fs = require('fs')

let langpack = JSON.parse(fs.readFileSync('lang-pack-ita.json', {encoding: 'utf-8'}));

langpack.pages = langpack.pages.map(
    item => {
        if(item.content.images){
            item.content.images = item.content.images.map(
                img => ({dida: 'inserire dida immagine', img})
            )
        }
        return item;
    })
fs.writeFileSync('new-langpack-ita.json', JSON.stringify(langpack))