function changeMode(size, weight, transform, background, color) {
	return function() {
		document.body.style.fontSize = size + "px";
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	};
}

function main() {
	let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    let spookyBtn = document.createElement('button');
    spookyBtn.textContent = 'Spooky';
    spookyBtn.onclick = spooky;
    document.body.appendChild(spookyBtn);

    let darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = 'Dark mode';
    darkModeBtn.onclick = darkMode;
    document.body.appendChild(darkModeBtn);

    let screamModeBtn = document.createElement('button');
    screamModeBtn.textContent = 'Scream mode';
    screamModeBtn.onclick = screamMode;
    document.body.appendChild(screamModeBtn);
}

main();
