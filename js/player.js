'use strict';

var Player = (function(){

	var Player = function(name){
		this.name = name;
		this.life = 5000;
	};

	Player.prototype.attack = function(player){
		var att=this.typeAtack();
		var ataque = att.damage(); 
		player.damage(ataque);	
	};

	Player.prototype.damage = function(damage){this.life = this.life - damage;};

	Player.prototype.isDead = function () {return this.life <= 0;};

	Player.prototype.setFaction = function(faction){this.faction = faction;};
	
	Player.prototype.typeAtack = function(){
		var i = Math.floor(Math.random()*3);
		var att = this.faction.attack();
		return att[i];
	}

	return Player;

})();
