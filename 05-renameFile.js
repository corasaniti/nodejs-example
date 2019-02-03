var fs = require('fs');

/*
	Rename file myFileToRename.txt
	If file does not existi will be created.
	
*/
fs.rename('./txt/myFileToRename.txt', './txt/newFileName.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});