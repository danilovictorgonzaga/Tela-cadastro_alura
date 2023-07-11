async function buscaEndereco(cep) {
    var mansagemErro = document.getElementById('erro')
    mansagemErro.innerHTML = ``;
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw error('Cep não encontrado!')

        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro

        return consultaCEPConvertida;
    } catch {
        mansagemErro.innerHTML = `<p>CEP invalido.Tente novamente!</p>`;
    }
};

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value));