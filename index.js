var ultils = require('./ultils');
var chalk = require('chalk')
//G
console.log(ultils)
////////////////////////////////////////////////////////////////////
var fs = require('fs')
// var ketqua = add(8,9);
//Đây là hàm đọc dữ liệu từ 1 file nào đó 1 cách bất đồng bộ
fs.readFile('./dulieu.txt',function(err,data){
    console.log(data.toString());
})

////////////////////////////////////////////////////////////////////
var path  = require('path');
var duongDan = path.join('2: '+__dirname+ '\\index.js');
console.log('1: '+__dirname + '\\index.js');

console.log(chalk.blue(duongDan))




