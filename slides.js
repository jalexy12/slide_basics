var fs = require('fs');

function slidePrinter(error, content){
	if (error) {
		console.log("You have an error");
		console.log(error);
	} else {
		var slides = content.split('----');
		
	}
}

fs.readFile('./slides.txt', 'utf8', slidePrinter);