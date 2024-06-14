async function throwAsync() {
    await null // need to await at least something to be truly async (see note #2)
    throw Error('with all frames present')
}

async function changedFromSyncToAsyncFn() {
    return await throwAsync()
}

async function asyncFn() {
    return await changedFromSyncToAsyncFn()
}

// 👍 now changedFromSyncToAsyncFn would present in the stacktrace
asyncFn().catch(console.log)


// Error: with all frames present
//     at throwAsync (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await2.js:3:11)
//     at async changedFromSyncToAsyncFn (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await2.js:7:12)
//     at async asyncFn (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await2.js:11:12)