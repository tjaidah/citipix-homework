$(document).ready(function() {

// setting variable City 
	var City=1;
// define what happens when user clicks submit and call upon functions
	$("#submit-btn").click(function(event) {

		event.preventDefault();
		compare();
		emptyField();
	});
// define comapre function
	function compare(){
		// set input Value to Var City
		var City = $("#city-type").val();

		// if-else function to track input and change background accordingly
		if (City=="New York City" 
			|| City=="New York" 
			|| City=="NYC") {
			$("body").css({"background":
				"url('images/nyc.jpg') no-repeat fixed",
				"background-size":"cover"});
		}
		else if (City=="San Francisco" 
			|| City=="SF" 
			|| City=="Bay Area") {
			$("body").css({"background":
				"url('images/sf.jpg') no-repeat fixed",
				"background-size":"cover"});
		}
		else if (City=="Los Angeles" 
			|| City=="LA" 
			|| City=="LAX") {
			$("body").css({"background":
				"url('images/la.jpg') no-repeat fixed",
				"background-size":"cover"});
		}
		else if (City=="Sydney" 
			|| City=="SYD") {
			$("body").css({"background":
				"url('images/sydney.jpg') no-repeat fixed",
				"background-size":"cover"});
		}
	};
// emptyField function to empty input field after user clicks submit
	function emptyField(){
		$("#city-type").val('');
	};
});