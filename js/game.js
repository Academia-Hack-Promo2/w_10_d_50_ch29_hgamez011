'use strict';


(function () {
	var fac1; var fac2;
	var btn = $('#jugar');
	$('#pj1ch_n').click(function(){fac1 = 0; console.log(fac1)});
	$('#pj1ch_r').click(function(){fac1 = 1; console.log(fac1)});
	$('#pj2ch_n').click(function(){fac2 = 0; console.log(fac2)});
	$('#pj2ch_r').click(function(){fac2 = 1; console.log(fac2)});

	btn.click(function(){
		var pj1 = $('#pj1').val();
		var pj2 = $('#pj2').val();
		if(pj1.length > 0 && pj2.length > 0){
			var player1 = new Player(pj1);
			var player2 = new Player(pj2);
    }else{
      alert("Uno de los nombres se encuentra vacios.");
      return false;
    }
    if(fac1 != null && fac2 != null ){
			player1.setFaction(settings.factions[fac1]);
			player2.setFaction(settings.factions[fac2]);
		}else{
			alert("Debe elegir las dos facciones.");
      return false;
		}

		while (!player2.isDead() && !player1.isDead()) {
			player1.attack(player2);
			if(!player2.isDead()){player2.attack(player1)};
		}

		if(player2.isDead()){
				alert("Ha ganado: " + player1.name);
		}else if(player1.isDead()){
				alert("Ha ganado: " + player2.name);
		};

	});
	
})();