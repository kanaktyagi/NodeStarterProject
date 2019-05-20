var fs = require('fs');

fs.readFile('readme.txt','utf-8',function(err,data){
  fs.writeFile('writeMe.txt',data);
});
//
