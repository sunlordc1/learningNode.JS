var ultils = require('./ultils');
var chalk = require('chalk')
//G
console.log(ultils)
////////////////////////////////////////////////////////////////////
var fs = require('fs')
// var ketqua = add(8,9);
//Đây là hàm đọc dữ liệu từ 1 file nào đó 1 cách bất đồng bộ
//Xử lý lỗi bất đồng bộ trong hàm
//READ FILE
fs.readFile('./text.txt','utf-8',function (err,data){
    if(err){
        console.log('loi')
    }else{
        console.log(data)
    }
})
fs.readFile('./dulieu.txt',function(err,data){
    console.log(chalk.blue('Bất đồng bộ xử lý sau: readFile fs'))



    console.log(data.toString());
})
fs.mkdir('Photos/',function(err){
    console.log(err)
})


try{
    fs.readFileSync('ádasda')
}catch(error){

}
//Buffer là chuỗi binary, 
var readStream = fs.createReadStream('noidung2.txt',{encoding:'utf-8',highWaterMark:100})
readStream.on('open',function(){
    console.log('stream được mở')
})

readStream.on('error',function(){
    console.log('stream bị lỗi')
})
// readStream.close();
var writeStream = fs.createWriteStream('newContent.txt')
for(var i=0;i<100;i++){
    writeStream.write('ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC')
}
writeStream.close();

var readStream2 = fs.createReadStream('newContent.txt',{encoding:'utf-8',highWaterMark:100})
var writeStream2 = fs.createWriteStream('bigfile.txt')

readStream2.on('data',function(chunk){
    writeStream2.write(chunk)
})
readStream2.on('end',function(){
    readStream2.close();
    writeStream2.close();

})
// cơ chế đọc file lưu trên ram hết, nếu nhét cả file vào trong ram thì ram ko chứa nổi, áp dụng tạo ra Stream,tạo thành dòng chảy, phân từng khố một đi, theo từng chunk, đi theo đường readstream tới 1 nơi nào đó, nếu muốn sao chép, dùng hàm fs.writeStream, có thể dùng pipe làm đường ống đổ dữ liệu từ bigfile tới file clone , để mọi chunk đổ ra sẽ đổ về bigfile( đổ từ readStream tới writeStream)
readStream2.pipe(writeStream2)
// Sinh bản sao file lớn

// fs.rmdir('Photos/',{recursive:true},function(err){
//     console.log(err)
// })
// fs.writeFile('noidung.txt','Xin chao tat ca moi nguoi','utf-8',function(err){
    // console.log(err)
// })
fs.appendFile('noidung.txt',"Xin chao tat ca moi nguoi2 \n",'utf-8',function(err){
    console.log(err)
})



////////////////////////////////////////////////////////////////////
var path  = require('path');
const { Stream } = require('stream');
var duongDan = path.join('2: '+__dirname+ '\\index.js');
console.log('1: '+__dirname + '\\index.js');

console.log(chalk.blue(duongDan))

////////////////////////////////////////////////////////////////////
/// Single Thread: Cơ chế hoạt động Đơn luồng (1 tác vụ chỉ xử lý 1 lần)
/// Tại sao xư lý được nhiều: Bao gồm 3 Call stack(Giao việc 1 luồng)=> Web apis(handle xử lý - bất đồng bộ non-blocking)=> callback queue
//Blocking -----
console.log(chalk.blue('blocking- đồng bộ xử lý trước'))


for(var i = 1; i <10;i++){
    console.log(i)
}
//Blocking -----
function dot(){
    console.log(chalk.blue('Bất đồng bộ xử lý sau:dot()'))
    setTimeout(function(){
        for(var i = 0; i<10;i++){
            console.log(i);
        }
    })
}
dot()
console.log('middle')


//Cách hạn chế blocking, Chia nhỏ tác vụ để cải thiện render
//SetTimeout chuyển về bất đồng bộ, các tác vụ sẽ đẩy về callback queue


/// Child process: Trong máy tính có nhiều chương trình, js là single thread, 1 luồng xử lý được 1-> nhiều process, bản thân nodejs có thể tương tác bật lệnh cmd trên máy tính vd:
// Trên window mà spawn không working thì run as administrator powershell command gõ : wsl --install
// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// child_process: spawn- sinh ra từ câu lệnh nào đó , exec - chạy thẳng, fork: nhân bản
//Trong fork có spawn, muốn tùy chỉnh nhiều hơn thì dùng spawn

// exec ra gọi command tạo trình duyệt chrome
// const { exec,spawn } = require('child_process');
// exec('start chrome',(err,stdout,stderr)=>{
// // exec('test.bat',(err,stdout,stderr)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stdout)
// })

// Node.JS chạy trên 1 luồng

// Cluster: Chứa toàn bộ fork

// 1 ChildProcess

// spawn:
// fork:
// cluster:
// cả 1 cụm process dưới là 1 cluster, ví dụ máy tính có 4 nhân, thì khuyến cáo nên tạo 4 process, thì mỗi 1 process nhảy vào trong 1 nhân
// childProcess.fork() = process1
// childProcess.fork() = process2
// childProcess.fork() = process3
// childProcess.fork() = process4
// process Master sinh ra nhưng process worker khác nhau


