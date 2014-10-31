var Spinner = function(pattern){this.set(pattern, 0);};
Spinner.Patterns = [
'0123456789',
'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏',
'⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓',
'⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆',
'⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋',
'⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁',
'⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈',
'⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈',
'|/-\\',
'◴◷◶◵',
'◰◳◲◱',
'◐◓◑◒',
'▉▊▋▌▍▎▏▎▍▌▋▊▉',
'▌▄▐▀',
'╫╪',
'■□▪▫',
'←↑→↓'
];
Spinner.prototype.set = function(pattern, frame){
	pattern = pattern || 0;
	if(typeof pattern === "number") pattern = Spinner.Patterns[pattern];
	this.pattern = pattern || "";
	this.length = this.pattern.length;
	this.frame =  frame?  frame : 0;
}
Spinner.prototype.start = function(message, interval){
	this.stop();
	this.message = message;
	interval = interval || 250;
	var self = this;
	this.interval = setInterval(function(){
		process.stdout.clearLine();
		process.stdout.write(
			"\r" +
			(self.message || "") +
			self.pattern[self.frame++ % self.length]
		);
	}, interval);
}
Spinner.prototype.stop = function(goto){
	this.frame = goto === undefined ? this.frame : goto;
	if(this.interval) clearInterval(this.interval);
}

Spinner.prototype.reset = function(goto){
	this.frame = goto === undefined ? 0 : goto;
}
module.exports = Spinner;
