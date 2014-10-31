var ItsThinking = require('../');
var timeout = 1000;
var counter = 0;
var spinner = new ItsThinking();
var next = function(){
	spinner.stop();
	if(counter < ItsThinking.Patterns.length){
		spinner = new ItsThinking(counter);
		spinner.start("Default " + counter + " ", 100);
		setTimeout(next, timeout);
	}
	else{
		spinner = new ItsThinking(["And", "the", "beat", "goes", "on..."]);
		spinner.start("Custom (Control-C to quit) ", 1000);
	}
	counter++;
}
next();
