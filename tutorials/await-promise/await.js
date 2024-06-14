async function throwAsync(msg) {
    await null // need to await at least something to be truly async (see note #2)
    throw Error(msg)
}

async function returnWithAwait() {
    return await throwAsync('with all frames present')
}

// 👍 will have returnWithAwait in the stacktrace
returnWithAwait().catch(console.log)


// response
// Error: with all frames present
//     at throwAsync (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await.js:3:11)
//     at async returnWithAwait (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await.js:7:12)