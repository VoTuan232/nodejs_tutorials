async function throwAsync() {
    await null // need to await at least something to be truly async (see note #2)
    throw Error('missing syncFn in the stacktrace')
}

function syncFn() {
    return throwAsync()
}

async function asyncFn() {
    return await syncFn()
}

// 👎 syncFn would be missing in the stacktrace because it returns a promise while being sync
asyncFn().catch(console.log);

// Error: missing syncFn in the stacktrace
//     at throwAsync (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/non-await2.js:3:11)
//     at async asyncFn (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/non-await2.js:11:12)