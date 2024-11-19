const WFCOMPLIANCE = "WebFuckV3";
const WFIMPL = "libwebfuck.js";

// 512K of memory should be enough for anyone.
const wfmem = new Uint8Array(524288);
let wfaltptrstack = [];
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
                case '<': // SINCE: BrainFuck
                    wfptr--;
                    break;
                case '>': // SINCE: BrainFuck
                    wfptr++;
                    break;
                case '+': // SINCE: BrainFuck
                    wfmem[wfptr]++;
                    break;
                case '-': // SINCE: BrainFuck
                    wfmem[wfptr]--;
                    break;
                case '.': // SINCE: BrainFuck
                    wfoutbuf += String.fromCharCode(wfmem[wfptr]);
                    break;
                case '[': // SINCE: BrainFuck
                    loopstart = i;
                    break;
                case ']': // SINCE: BrainFuck
                    if (wfmem[wfptr] != 0) {
                        i = loopstart;
                    }
                    break;
                case '0': // SINCE: WebFuckV2
                    wfptr = 0;
                    loopstart = -1;
                    break;
                case '@': // SINCE: WebFuckV2, DEPRECATED: WebFuckV2
                    console.warn("Even though the @ command was added in this version of WebFuck (WebFuckV2), it is deprecated. Don't use it.");
                    wfmem.fill(0, 0, 524288);
                    break;
                case '$': // SINCE: WebFuckV1
                    eval(wfoutbuf);
                    break;
                case '&': // SINCE: WebFuckV3
                    wfaltptrstack.push(wfptr);
                    break;
                case '*': // SINCE: WebFuckV3
                    wfptr = wfaltptrstack.pop();
                    break;
                case '?': // SINCE: WebFuckV3
                    console.log(`===== Begin WebFuck State Dump =====`);
                    console.log(`WFCOMPLIANCE: ${WFCOMPLIANCE}`);
                    console.log(`WFIMPL: ${WFIMPL}`);
                    console.log(`WFPTR: ${wfptr}`);
                    console.log(`WFALTPTRSTACK: ${wfaltptrstack}`);
                    console.log(`WFOUTBUF: ${wfoutbuf}`);
                    console.log(`WFMEM: ${wfmem}`);
                    console.log(`===== End WebFuck State Dump =====`);
                    break;
                case '_': // SINCE: WebFuckV1
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
                "WebFuck-Version": WFCOMPLIANCE,
                "WFCompliance": WFCOMPLIANCE,
                "WFImplementation": WFIMPL,
            } 
        });

    if (res.status != 200) {
        throw "the response is web-fucked up";
    }
    let text = await res.text();

    return new WebFuckModule(webfuck, text);
}
