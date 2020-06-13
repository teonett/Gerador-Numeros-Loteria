function formSubmit(){

    $('form').submit(event => {

        event.preventDefault();
            
        PopulatePageContent();

    })

}
/*
mega (6,1,61)
lotofacil(15,1,26)
quina(5,1,81)
lotomania(50,0,100)
*/
$(formSubmit());

function PopulatePageContent(){

    var megasena = gerarNumeroJogos(6,1,61);
    var lotofacil = gerarNumeroJogos(15,1,26);
    var quina = gerarNumeroJogos(5,1,81);
    var lotomania = gerarNumeroJogos(50,0,100);

    var output = `
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label>MEGA SENA</label><br>
                    <p class="w3-tag w3-teal">${megasena}</p>
                </div>
            </div>
        </div><p></p>

        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label>LOTO FACIL</label><br>
                    <p class="w3-tag w3-teal">${lotofacil}</p>
                </div>
            </div>
        </div><p></p>

        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label>QUINA</label><br>
                    <p class="w3-tag w3-teal">${quina}</p>
                </div>
            </div>
        </div><p></p>
        
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label>LOTOMANIA</label><br>
                    <p class="w3-tag w3-teal">${lotomania}</p>
                </div>
            </div>
        </div><p></p>        
    `

    document.getElementById('populate-page').innerHTML = output
}

function compararNumeros(a, b) {
	return a - b;
}

function getRandomInt(min, max) {

	min = Math.ceil(min);
	max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    
}

function gerarNumeroJogos(qtNumeros, nrInicial, nrFinal){
 
    var lista= [];
    var num;

    for (var i = 0; i < qtNumeros; i++) {
		num = getRandomInt(nrInicial, nrFinal);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
        } 
        else {
			i--;
		}
	}

	return lista.sort(compararNumeros);

}