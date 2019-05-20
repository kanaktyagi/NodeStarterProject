var fs = require('fs');

//fs.unlink('writeMe.txt');
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});
