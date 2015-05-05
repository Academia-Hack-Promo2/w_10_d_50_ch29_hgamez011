"use strict";
var settings = (function () {

	var attack1 = new Attack('Run Bitch Run', 0);
	var attack2 = new Attack('Sky Budha Palm', 900);
	var attack3 = new Attack('Poison Meat', 1000);
	var attack7 = new Attack('Chavez Speech', 2300);


	var ninja = new Faction('ninja');

	ninja.addAttack(attack1);
	ninja.addAttack(attack2);
	ninja.addAttack(attack3);
	ninja.addAttack(attack7);

	var attack0 = new Attack('Roar', 0);
	var attack4 = new Attack('Tail whip', 900);
	var attack5 = new Attack('Bite', 1000);
	var attack6 = new Attack('Godzilla Beam', 2000);
	

	var dinosaur = new Faction('dinosaur');

	dinosaur.addAttack(attack0);
	dinosaur.addAttack(attack4);
	dinosaur.addAttack(attack5);
	dinosaur.addAttack(attack6);
	

	return {
		factions: [ninja, dinosaur]
	};

})();