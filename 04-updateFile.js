var fs = require('fs');

/*
	Append "This is my text." to the end of the file "updateFile.txt"
	If file does not existi will be created.
	
*/
fs.appendFile('./txt/updateFile.txt', 'Hello content file updateFile \n', function (err) {
  if (err) throw err;
  console.log('Saved updateFile.txt!');
});


/* 
	Replace the content of the file "replace.txt
	If file does not existi will be created.
*/
fs.writeFile('./txt/replace.txt', 'This is my text sost', function (err) {
  if (err) throw err;
  console.log('Saved replaced!');
});


/* 
	Delete "deleteFile.txt" 
	If file does not exist an Error will be shown.
*/
fs.unlink('./txt/deleteFile.txt', function (err) {
  if (err) throw err;
  console.log('File deleteFile.txt deleted!');
});