$(document).ready(() => {

	//calculate function
	$("#calculate").click(() => {	
		
		//get the values
		let amount = $("#billamt").val();
		let service = $("#serviceQual").val();
		let numOfPeople = $("#peopleamt").val();
		let each = $("small");
		console.log()

		//validate input
		if(amount === "" || service == 0){
			alert("Please enter values!")
			return false
		}else if(numOfPeople == "" || numOfPeople <= 1){
			numOfPeople = 1
			each.hide()
		}else if(numOfPeople > 1){
			each.show()
		}else if(service == 0){
			alert("how was the service")
		}
		


		//calculate the tip
		let result = (amount * service) / numOfPeople
		
		//allow to have 2 digit after decimal point
		result = Math.round(result * 100) / 100
		result = result.toFixed(2)

		//show the tip 
		$("#tip").text(result)
		$("#totalTip").show()
	})

	//hide tip on load
	$("#totalTip").hide()
})
