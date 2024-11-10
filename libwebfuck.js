const WEBFUCK_VERSION = "WebFuckV2";

// 512K of memory should be enough for anyone.
const wfmem = new Uint8Array(524288);
let wfptr = 0;
let wfoutbuf = "";

class WebFuckModule {
    /** @type string */
    name;
    /** @type string */
    src;

    constructor(name, src) {
        this.name = name;
        this.src = src;
    }

    /**
     * Call this WebFuck module.
     */
    call() {
        let loopstart = -1;
        for (let i = 0; i < this.src.length; i++) {
            let c = this.src[i];

            switch (c) {
                case '<':
                    wfptr--;
                    break;
                case '>':
                    wfptr++;
                    break;
                case '+':
                    wfmem[wfptr]++;
                    break;
                case '-':
                    wfmem[wfptr]--;
                    break;
                case '.':
                    wfoutbuf += String.fromCharCode(wfmem[wfptr]);
                    break;
                case '[':
                    loopstart = i;
                    break;
                case ']':
                    if (wfmem[wfptr] != 0) {
                        i = loopstart;
                    }
                    break;
                case '0':
                    wfptr = 0;
                    loopstart = -1;
                    break;
                case '@':
                    console.warn("Even though the @ command was added in this version of WebFuck (WebFuckV2), it is deprecated. Don't use it.");
                    wfmem.fill(0, 0, 524288);
                    break;
                case '$':
                    eval(wfoutbuf);
                    break;
                case '_':
                    wfoutbuf = "";
                    break;
            }
        }
    }
}

/**
 * Load a WebFuck module with the given file name.
 */
async function loadWebFuck(webfuck) {
    let res = await fetch(
        `/${webfuck}`, { 
            headers: { 
                "WebFuck-Version": WEBFUCK_VERSION 
            } 
        });

    if (res.status != 200) {
        throw "the response is web-fucked up";
    }
    let text = await res.text();

    return new WebFuckModule(webfuck, text);
}
