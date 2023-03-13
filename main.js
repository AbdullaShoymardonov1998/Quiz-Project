const statement = document.getElementById("statement");
const optionButtons = document.querySelectorAll("button");
const explanation = document.getElementById("explanation");

let fact = {
	statement : "Arrays are like objects",
	answer: true,
	explanation: "Arrays are type of objects with special properties"
};

statement.textContent = fact.statement;

let disable = (button) =>{
	button.setAttribute("disabled", " ");
};

let enable = (button) => {
	button.removeAttribute("disabled");
};

function isCorrect(guessString){
	return guessString === fact.answer.toString();
}

for (let button of optionButtons){
	button.addEventListener("click", (e) => {
		explanation.textContent = fact.explanation;

		for (let unClickableButton of optionButtons){
			disable(unClickableButton);
		}

		if( isCorrect(button.value)){
            button.classList.add("correct");
        }else{
            button.classList.add("incorrect");
        }
	});
}