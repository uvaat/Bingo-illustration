var Rand = class {

	constructor() {
		this.minResult = 11;
	}

	getScore(){

		var nb1 = Helpers.getRandomInt(1,6);
		var nb2 = Helpers.getRandomInt(1,6);

		var result = parseInt(String(nb1) + String(nb2));
		if(result < this.minResult) this.getScore();
		else return result;

	}



};