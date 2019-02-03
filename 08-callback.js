var fs = require("fs");

/* Read File Syync */
/*
var data = fs.readFileSync('abi-4.15.0-34-generic');
console.log(data.toString());
console.log("Ciao");
*/

/* Read File Asyync */
setTimeout(function(){
  fs.readFile('package-lock.json', function (err, data) {
      if (err) return console.error(err);
      console.log(data.toString());
  });
}, 3000);
console.log("I'm waiting response from server. Be patient...");

setTimeout(function(){ console.log("Ciao pirla che hai atteso..."); }, 6000);
console.log("Attendi 6 secondi");
