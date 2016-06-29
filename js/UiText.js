var UiText = class {

	constructor(jText, container){
		this.jText     = jText;
		this.container = container;
	}

	appendText(){

		var div = document.createElement('div');
		this.container.appendChild(div);

		var count = 0;
		for( var i in this.jText ) {

			var textArray = this.jText[i].split('');

			for (var t = 0; t < textArray.length; t++) {

				var span = document.createElement('span');
				div.appendChild(span);
				this.animatText(span, textArray[t]);

			}

			if(count < Object.keys(this.jText).length - 1){
				var br = document.createElement('br');
				div.appendChild(br);
			}

			count++;	

		}

	}

	animatText(span, letter){

		var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY Zéèàêîïç-1234567890';
		var lettersArray = Helpers.shuffle(letters.split(''));
			
		var count = 0;
		var timer = setInterval(function(){

			span.innerHTML = '';
			span.innerHTML = lettersArray[count];

			if(lettersArray[count] == letter) clearInterval(timer);
			count++;

		}, Helpers.getRandomInt(50, 200));

	}

}