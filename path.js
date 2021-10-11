var fs = require('fs');
var path = require('path')
//dùng readfile phải dùng đường dẫn tuyệt đối
// fs.readFile(__dirname)
 
console.log(path.join(__dirname,'./'))
console.log(path.join(__dirname,'../'))
console.log(path.join(__dirname,'../../'))
console.log(path.dirname(__dirname)) // directory name
console.log(path.extname("G:\\abi\\learn\\bigFile.txt")) // extension name
