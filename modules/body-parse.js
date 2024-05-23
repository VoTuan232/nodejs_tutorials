const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Sử dụng body-parser middleware
app.use(bodyParser.json()); // Xử lý dữ liệu dạng JSON
app.use(bodyParser.urlencoded({ extended: true })); // Xử lý dữ liệu từ form URL-encoded

// Route để xử lý POST request
app.post('/submit', (req, res) => {
    // Dữ liệu từ phần thân của yêu cầu sẽ được lưu trong req.body
    console.log(req.body);
    res.send('Data received');
});

// Khởi động máy chủ
app.listen(3004, () => {
    console.log('Server started on port 3000');
});


# Tùng. 
-  Nestjs
- Dịch phần mềm từ figma 
    - Lưu ngôn ngữ gốc và ngôn ngữ đích
    - quản lí cms.

- tập gym:
    - thanh toán stribe
        - xxx
        - jwt 
    - brand : crud 


    - access token => chứa thông tin user 
        ==> đính kèm token đấy 
        ==> user có tồn tại hay không ?
        - token backend => 
            - 1 ngày

    -  luồng chưa rõ lắm  
    - even loop
    - intercepter, middleward, controller, services.
    - phân chia theo module: controller, service, provider, ... 
        - service A import service B
        - 

    - try catch:
        - bắt trong middleward:
    - chưa 
    - nestjs bảo mật: cors, jwt, ...
    - testing: chưa viết unit test.
    - dockerfile: docker 
    - database: mysql, postgresql
        - bảng nào ? mối quan hệ ? 
        - khóa chính là gì ? khóa ngoại ? 
        - đánh index, unique,...
        - dbeaver... 

        - batchSize, phân trang. 
        - index 
        - dependencies injection.