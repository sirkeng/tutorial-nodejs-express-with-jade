// console.log('data: ', data);
var express = require('express');
var path = require('path');
var app = express();
 
// ประกาศให้ Express ใช้งาน View โดยให้ใช้โฟลเดอร์ views เป็นตัวเก็บไฟล์ jade.
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
 
// ตั้งค่าให้ Express ใช้ View Engine ชื่อว่า Jade
app.set('view engine', 'jade');
 
// ฟังค์ชัน สำหรับรับ request จาก client และส่ง response กลับไปยัง client
// req คือ request และ res คือ response
// res.render('file') คือการให้ทำการ render ไฟล์ ที่อยู่ในโฟลเดอร์ views
function getHomePage(req, res) {
var data = {
    'articles': [
        {
            'title': 'Article 1',
            'href': 'articles/1.html'
        }, 
        {
    	    'title': 'Article 2',
           'href': 'articles/2.html'
        }, 
        {
            'title': 'Article 3',
            'href': 'articles/3.html'
        }
    ]
};
    res.render('index.jade', data);
}
 
// เมื่อ client เข้าถึงหน้า Home Page ของเว็บไซต์ http://localhost:5555/
// app.get(URL, getHomePage)
// URL - คือ PATH ของเว็บไซต์
// getHomePage คือ callback function ที่มี request และ response
app.get('/', getHomePage);
 
// start server ด้วย port 5555
var server = app.listen(5555, function() {
    console.log('Express.js is running...');
});