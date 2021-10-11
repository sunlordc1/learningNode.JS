
// GLOBAL
var mylib = require('./child/mylib')
console.log(__filename);
var x = '2'
mylib();

console.log(process.argv)
//node global.js 8 8  result:88
console.log(process.argv[3] + process.argv[2])



process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
    setTimeout(()=>{
        console.log('This will not run')
    },0)
  });
  
  console.log('This message is displayed first.');
  //pid  là id của node js trên máy tính 
  //process có khá nhiều chức năng tương tự như trong task manager trong window
  console.log(process.pid)