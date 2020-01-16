"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const node_fetch_1 = require("node-fetch");
const jsdom_1 = require("jsdom");
(async () => {
    const html = await node_fetch_1.default('https://imascg-slstage-wiki.gamerch.com/%E3%82%A6%E3%83%AF%E3%82%B5')
        .then(r => r.text())
        .catch(e => console.error(e));
    const document = new jsdom_1.JSDOM(html).window.document;
    const [_, ...dom] = Array.from(document.getElementsByClassName('t-min')[0].children[0].children[0].querySelectorAll(':scope > tr'), tr => Array.from(tr.children, td => td));
    let name;
    const rumor = dom.map(d => ({
        name: name = d.length === 2 ? d[0].textContent : name,
        text: (d.length === 2 ? d[1] : d[0]).textContent,
    }));
    fs.writeFileSync('../dist/scraping-rumor.json', JSON.stringify(rumor));
    console.log('I wrote in it.');
})();
