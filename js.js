	$(document).ready(function(){
			var options = document.querySelectorAll("input");
			for (var i = 0; i < options.length; i++){
				options[i].addEventListener("click",result,false);
			}
			
         })
		var value_user;
		
	function result (e){
		if (e.target == rock) {
			value_user = 1;
			$('#rock_user').animate({top: "50%"},'fast');
			setTimeout(function(){
			    $('#rock_user').animate({top: "80%"},'fast');
			}, 2000);
		}else if (e.target == paper) {
			value_user = 2;
			$('#paper_user').animate({top: "50%"},'fast');
			setTimeout(function(){
				$('#paper_user').animate({top: "80%"},'fast');
			}, 2000);
		}else if (e.target == scissors) {
			value_user = 3;
			$('#scissors_user').animate({top: "50%"},'fast');
			setTimeout(function(){
			   $('#scissors_user').animate({top: "80%"},'fast');
			}, 2000);
		}
		var value_computer = Math.floor(Math.random() * 3) + 1;
		if (value_computer == 1) {
			$('#rock_ord').animate({bottom: "50%"},'fast');
			setTimeout(function(){
			   $('#rock_ord').animate({bottom: "80%"},'fast');
			}, 2000);
		}else if (value_computer == 2) {
			$('#paper_ord').animate({bottom: "50%"},'fast');
			setTimeout(function(){
			   $('#paper_ord').animate({bottom: "80%"},'fast');
			}, 2000);
		}else if (value_computer == 3) {
			$('#scissors_ord').animate({bottom: "50%"},'fast');
			setTimeout(function(){
			   $('#scissors_ord').animate({bottom: "80%"},'fast');
			}, 2000);
		}
		if (value_user == 1 && value_computer == 3) {
			$('#result').html("<h2>Has ganado</h2>");
			}else if (value_user == 1 && value_computer == 2){
			$('#result').html("<h2>Has perdido</h2>");
			}else if (value_user == 1 && value_computer == 1){
			$('#result').html("<h2>Empate</h2>");
		}

		if (value_user == 2 && value_computer == 1) {
			$('#result').html("<h2>Has ganado</h2>");
			}else if (value_user == 2 && value_computer == 3){
			$('#result').html("<h2>Has perdido</h2>");
			}else if (value_user == 2 && value_computer == 2){
			$('#result').html("<h2>Empate</h2>");
		}

		if (value_user == 3 && value_computer == 2) {
			$('#result').html("<h2>Has ganado</h2>");
			}else if (value_user == 3 && value_computer == 1){
			$('#result').html("<h2>Has perdido</h2>");
			}else if (value_user == 3 && value_computer == 3){
			$('#result').html("<h2>Empate</h2>");
		}
		
	}
