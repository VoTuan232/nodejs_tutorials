//to run : node filename.js
const express = require('express')
const app = express()
const port = 3335

// app.use((err, req, res, next) => {
//     console.log('Middleware caught an error: ', err);
//     res.status(500).send('Internal Server Error');
//     next(err); // Gửi lỗi tới uncaughtException nếu cần thiết
// });

app.get('/', (req, res, next) => {
    // dont use try catch
    // throw new Error('ahhhh');
    // Sử dụng Promise để gây ra unhandledRejection
    // Promise.reject(new Error('ahhhh'));  // work ok

    // console.log('About to throw an error');
    // throw new Error('ahhhh'); // Lỗi đồng bộ, sẽ kích hoạt uncaughtException // not work because related express
    res.send('Hello World!')

    // use try catch
    // try {
    //     throw Error('xxxx')
    //     res.send('Hello World!')
    // } catch (error) {
    //     console.log('error');
    //     res.status(500) .send('xxx')       
    //     throw Error('xxxx2') // ko vào unhandledRejection nếu dùng try, catch
    // }
})

process.on('unhandledRejection', (reason, p) => {
    // I just caught an unhandled promise rejection,
    // since we already have fallback handler for unhandled errors (see below),
    // let throw and let him handle that
    console.log('come unhandledRejection: ', reason)
    throw reason;
});

process.on('uncaughtException', (error) => {
    // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
    // errorManagement.handler.handleError(error);
    // if (!errorManagement.handler.isTrustedError(error))
    console.log('come uncaughtException: ', error)
    process.exit(1);
});

// console.log('About to throw an error');
// throw new Error('ahhhh'); // work

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
