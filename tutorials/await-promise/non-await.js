async function throwAsync(msg) {
    await null // need to await at least something to be truly async (see note #2)
    throw Error(msg)
}

async function returnWithoutAwait() {
    return throwAsync('missing returnWithoutAwait in the stacktrace')
}

// 👎 will NOT have returnWithoutAwait in the stacktrace
returnWithoutAwait().catch(console.log)


// response
// Error: missing returnWithoutAwait in the stacktrace
//     at throwAsync (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/non-await.js:3:11)