fetch("OpenDay.json")
.then(function(response){
	return response.json();
})
.then(function(itineraries){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let itinerary of itineraries?.topics){
		out += `
			<tr>
			  <td>${itinerary.name}</td>
				<td>${itinerary.programs[0]?.title}</td>
				<td>${itinerary.programs[0]?.description_short}</td>
				<td>${itinerary.programs[0]?.location.title}</td>
				<td>${itinerary.programs[0]?.programType.type}</td>
				<td>${itinerary.programs[0]?.start_time}</td>
				<td>${itinerary.programs[0]?.end_time}</td>
				<td> <img src='${itinerary.cover_image}'> </td>


			</tr>
		`;
	}

	placeholder.innerHTML = out;
});
