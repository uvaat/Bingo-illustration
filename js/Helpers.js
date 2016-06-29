var Helpers = class {

	static getRandomInt(min, max) {

		return Math.floor(Math.random() * (max - min + 1)) + min;

	}
	
	static shuffle(array) {

		var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;

		}

		return array;

	}

	static hasClass(el, className) {
		if (el.classList) return el.classList.contains(className)
		else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
	}

	static addClass(el, className) {
		if (el.classList) el.classList.add(className)
		else if (!this.hasClass(el, className)) el.className += " " + className
	}

	static removeClass(el, className) {
		if (el.classList) el.classList.remove(className)
		else if (this.hasClass(el, className)) {
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
			el.className=el.className.replace(reg, ' ')
		}
	}

}