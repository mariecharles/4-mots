var input = document.querySelector('input');
var list = document.querySelector('#words');
var words = [];
var colors = ['blue', 'yellow', 'red', 'pink']

document.addEventListener('keypress', function(event) {

	if (input.value !== '' && event.keyCode === 13) { 
		addNewWord();
		renderWords();
		input.value = '';
	}
});


function addNewWord() {
	if (words.length < 4) {	

		words.push(input.value);
		console.log(words);	

	} else if (words.length === 4) {

		for (let i = 0 ; i < words.length ; i++) {
			words[i] = words[i+1];
		}

		words[words.length - 1] = input.value;
	}

}

function renderWords() {
	list.innerHTML = '';

	for (i = 0 ; i < words.length ; i++) {
		var wordElement = document.createElement('li');
		wordElement.setAttribute('class', 'word');
		wordElement.innerHTML = words[i];
		wordElement.style.color = colors[Math.floor(Math.random() * colors.length)];
		list.appendChild(wordElement);
	}
}

		

	