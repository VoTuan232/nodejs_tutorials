async function getUser(id) {
    await null
    if (!id) throw Error('with all frames present')
    return { id }
}

const userIds = [1, 2, 0, 3]

// 👍 now the line below is in the stacktrace
Promise.all(userIds.map(async id => await getUser(id))).catch(console.log)


// Error: with all frames present
//     at getUser (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await-callback.js:3:20)
//     at async /home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/await-callback.js:10:37
//     at async Promise.all (index 2)