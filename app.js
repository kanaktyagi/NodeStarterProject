var fs = require('fs');

//fs.unlink('writeMe.txt');
fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf-8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});
