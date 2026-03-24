async function currencyConvert() {
    let input = document.getElementById("number").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let resultBox = document.getElementById("result");

    if (input === "" || input <= 0) {
        resultBox.innerText = "Please enter a valid amount";
        return;
    }

    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${input}`;

    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a5a39c9ca0mshf101a143bb30462p1e979cjsn42fdefce8cb5',
		'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        resultBox.innerText = `${input} ${from} = ${data.result} ${to}`;
    } catch (error) {
        console.error(error);
        resultBox.innerText = "Something went wrong!";
    }
}