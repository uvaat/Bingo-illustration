var rand       = new Rand();

var bords = [
	
	{
		title : 'camera',
		x     : ['Frontale', 'Plongée', 'Contre - plongée', 'Vue Arérienne', 'Sol', 'Débullés'],
		y     : ['Plan général', 'Plan d\'ensemble', 'Plan moyen', 'Plan américain', 'Plan rapproché', 'Point de vue']
	},
	{
		title : 'character',
		x     : ['En fuite', 'Combat', 'Songeur', 'Exploration', 'Joueur', 'Marchandage'],
		y     : ['Petite fille', 'Reine', 'Guerrier', 'Musicien', 'Tigre', 'Élephant mutant']
	},
	{
		title : 'place',
		x     : ['Nuit', 'Levée de soleil', 'Jour', 'Tempète', 'Brouillard', 'Lumière artificielle'],
		y     : ['Forêt', 'Marais', 'Montagne', 'Vaisseau spatial', 'Port', 'Village moyen age']
	},
	{
		title : 'obanompassa',
		x     : ['20min', '40min', '1h', '2h', '4h', '8h'],
		y     : ['Perso x2', 'Niveau de gris', 'Couleur', 'Format scope', 'Format carré', 'Thème pirate']
	}

];

var initBord = function(){

	var index = this.getAttribute('data-index');
	var _bord = bords[index];

	if(Helpers.hasClass(this, 'active')) return;

	Helpers.addClass(this, 'active');

	var bord = new Bord(_bord.x, _bord.y);

	var value   = rand.getScore();
	var results = bord.searchValue(value);

	var uiText = new UiText(results, this);
	uiText.appendText();

}

for (var i = 0; i < bords.length; i++) {

	var _bord = bords[i];
	var ui    = document.querySelector('#area-' + _bord.title);
	ui.setAttribute('data-index', i);
	ui.addEventListener("click", initBord);

}



