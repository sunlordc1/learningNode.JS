var ultils = require('./ultils');
var fs = require('fs')
// var ketqua = add(8,9);
//Đây là hàm đọc dữ liệu từ 1 file nào đó 1 cách bất đồng bộ
fs.readFile('./dulieu.txt',function(err,data){
    console.log(data.toString());
})
console.log(ultils)