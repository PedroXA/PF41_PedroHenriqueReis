const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const valorMensal = document.getElementById('valor_mensal').value;
    const Duracao = document.getElementById('tempo').value;
    const Juros = document.getElementById('juros').value / 100;
    
    var MascaraBRL = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'BRL', });

    if (nome !== '' && valorMensal !== '' && Duracao !== '' && Juros !== '') {  
        if(nome !== '' && valorMensal > 0 && Duracao > 0 && Juros > 0){
            const ValorTotal = (valorMensal * ((((1 + Juros) ** Duracao) - 1) / Juros)).toFixed(2)

            result.textContent = `Olá ${nome}, se você aplicar ${MascaraBRL.format(valorMensal)}, à taxa de juros de ${Juros * 100}% ao mês, durante ${Duracao} meses, acumulará uma poupança de ${MascaraBRL.format(ValorTotal)}`;
        }
    }else {
        result.textContent = 'Para calcular, preencha todos os campos corretamente.';
    }

}
calcular.addEventListener('click', imc);