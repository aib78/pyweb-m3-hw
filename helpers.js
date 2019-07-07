my_url = "http://sf-pyw.mosyag.in/m04/api/forecasts"

$("#header1").click(function(){
	console.log("Нажали на заголовок")
	set_prop();

})

function set_prop (){
		$.getJSON(my_url, function (data) {
		
		set_tests(data["prophecies"]);
		})
}

function set_tests(data) {
	for (i=0;i<=5;i++) {
		p = $("#p_"+i);
		p.html(data[i]);
	}
}

