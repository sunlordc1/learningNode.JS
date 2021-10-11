var ultils = require('./ultils');
var chalk = require('chalk')
//G
console.log(ultils)
////////////////////////////////////////////////////////////////////
var fs = require('fs')
// var ketqua = add(8,9);
//Đây là hàm đọc dữ liệu từ 1 file nào đó 1 cách bất đồng bộ
fs.readFile('./dulieu.txt',function(err,data){
    console.log('Bất đồng bộ xử lý sau:');

    console.log(data.toString());
})

////////////////////////////////////////////////////////////////////
var path  = require('path');
var duongDan = path.join('2: '+__dirname+ '\\index.js');
console.log('1: '+__dirname + '\\index.js');

console.log(chalk.blue(duongDan))

////////////////////////////////////////////////////////////////////
/// Single Thread: Cơ chế hoạt động Đơn luồng (1 tác vụ chỉ xử lý 1 lần)
/// Tại sao xư lý được nhiều: Bao gồm 3 Call stack(Giao việc 1 luồng)=> Web apis(handle xử lý - bất đồng bộ non-blocking)=> callback queue
//Blocking -----
console.log('blocking- đồng bộ xử lý trước')

for(var i = 1; i <10;i++){
    console.log(i)
}
//Blocking -----
console.log('middle')

//Cách hạn chế blocking, Chia nhỏ tác vụ để cải thiện render