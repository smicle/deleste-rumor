import * as fs from 'fs'
import fetch from 'node-fetch'
import {JSDOM} from 'jsdom'
;(async () => {
  const html = await fetch('https://imascg-slstage-wiki.gamerch.com/%E3%82%A6%E3%83%AF%E3%82%B5')
    .then(r => r.text())
    .catch(e => console.error(e))
  const document = new JSDOM(html).window.document
  const [_, ...dom] = Array.from(
    document.getElementsByClassName('t-min')[0].children[0].children[0].querySelectorAll(':scope > tr'),
    tr => Array.from(tr.children, td => td)
  )
  let name: string
  const rumor = dom.map(d => ({
    name: name = d.length === 2 ? d[0].textContent : name,
    text: (d.length === 2 ? d[1] : d[0]).textContent,
  }))
  fs.writeFileSync('rumor.json', JSON.stringify(rumor))
})()
