async function getUser(id) {
    await null
    if (!id) throw Error('stacktrace is missing the place where getUser has been called')
    return { id }
}

const userIds = [1, 2, 0, 3]

// 👎 the stacktrace would include getUser function but would give no clue on where it has been called
Promise.all(userIds.map(getUser)).catch(console.log)


// Error: stacktrace is missing the place where getUser has been called
//     at getUser (/home/votuan/Working/github/votuanbk2302/nodejs_tutorials/tutorials/await-promise/non-await-callback.js:3:20)
//     at async Promise.all (index 2)