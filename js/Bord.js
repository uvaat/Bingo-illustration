var Bord = class {

	constructor(titleX, titleY, area) {

		this.titleX = titleX;
		this.titleY = titleY;
		if(typeof area != 'undefined') this.area   = area;
		this.bord   = this.initBord();

	}

	searchValue(value){

		for (var x = 0; x < this.bord.length; x++) {
			
			var indexY = this.bord[x].indexOf(value);
			if(indexY > -1) return { y : this.titleY[indexY], x : this.titleX[x]}

		}

	}

	initBord() {

		var bord = new Array(),
		value    = 11;

		for (var x = 0; x < this.titleX.length; x++){

			bord[x] = new Array();

			for (var y = 0; y < this.titleY.length; y++){

				bord[x][y] = value;
				value++;

			}

			value = value - this.titleX.length + 10;

		}

		return bord;

	}

	displayBord() {

		if(typeof this.area == 'undefined') return null;
		
		var table = document.createElement('table');

		var row = table.insertRow(0);

		for (var i = 0; i < this.titleX.length +1; i++) {

			var cell = row.insertCell(i);
			if(i > 0) cell.innerHTML = this.titleX[i - 1];

		}

		for (var x = 1; x < this.bord.length+1; x++) {

			var row = table.insertRow(x);
			var cell = row.insertCell(0);
			cell.innerHTML = this.titleY[x-1];

			for (var y = 0; y < this.bord[x-1].length; y++) {
				cell = row.insertCell(y+1);
				cell.innerHTML = this.bord[x-1][y];
			}

		}

		this.area.appendChild(table);

	}

};