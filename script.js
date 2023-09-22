const SUMMARY = document.querySelector("#summary");



function func() {
	fetch("./data.json")
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data)

		const HEADER = document.querySelector("h1");
		const TOTAL = data["0"].score + data["1"].score + data["2"].score + data["3"].score
		const AVG = TOTAL / 4
		HEADER.innerHTML = Math.round(AVG)
		
		for (let count = 0; count < 4; count++) {

			// defining all variables

			let image = document.createElement('img');
			image.classList.add("center");
			
			let categoryTitle = document.createElement('strong');
			categoryTitle.classList.add("center");
			
			let parentDiv = document.createElement("div");
			parentDiv.classList.add("category");
			
			let scoreDiv = document.createElement("div");
			scoreDiv.classList.add("score");
			
			let strong = document.createElement("strong");

			let category = data[`${count}`].category
			let icon = data[`${count}`].icon
			let score = data[`${count}`].score

			// add the category id to the parent div
			parentDiv.setAttribute("id", `${category.toLowerCase()}`)

			// add the src and alt to the image
			image.src = icon
			image.alt = `${data[`${count}`].category} icon`

			// create the strong tag and add the category to it
			strong.innerHTML = category
			
			// add text to score div
			scoreDiv.innerHTML = `${score} / 100`

			//add all elements to the html

			parentDiv.appendChild(image)
			parentDiv.appendChild(strong)
			parentDiv.appendChild(scoreDiv)
			SUMMARY.appendChild(parentDiv);

		}

		const BUTTON = document.createElement("BUTTON");
		BUTTON.innerHTML = "Continue"
		SUMMARY.appendChild(BUTTON);
	})
}

func()