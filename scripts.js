function calculate (type, value) {

	if (type === 'action') {
		if (value === 'c') {
			//limpar o visor caso seja clicado um C
			document.getElementById('result').value = ''
		}

		if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
			document.getElementById('result').value += value 	//concatena o value anterior com o novo.
		}

		if (value === '=') {

			var valuePlace = eval(document.getElementById('result').value)	//eval realiza a operação matemática.
			
			document.getElementById('result').value = valuePlace	//campo result recebe o conteúdo de valuePlace.
		}

	} else if (type === 'value') {

		document.getElementById('result').value += value 	//concatenando.
	}
}