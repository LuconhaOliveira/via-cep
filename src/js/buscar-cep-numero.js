document.querySelector('#btnLimpar').addEventListener('click',()=>{
    document.querySelector('#cep').value = "";
    document.querySelector('#rua').value = "";
    document.querySelector('#complemento').value = "";
    document.querySelector('#bairro').value = "";
    document.querySelector('#cidade').value = "";
    document.querySelector('#estado').value = "";
});

document.querySelector('#cep').addEventListener('keypress',(e)=>{
    if(e.keyCode<48 || e.keyCode>57){
        e.preventDefault();
        alert("Por favor, insira apenas números!")
    }
});

const obterDadosApi = async(cep)=>{
    let urlViaCep = `https://viacep.com.br/ws/${cep}/json`
    let response = await fetch(urlViaCep);
    let data = await response.json()

    if(data.erro){
        alert("O CEP inserido está incorreto!");
        return;
    }
    document.querySelector('#rua').value = data.logradouro;
    document.querySelector('#complemento').value = data.complemento;
    document.querySelector('#bairro').value = data.bairro;
    document.querySelector('#cidade').value = data.localidade;
    document.querySelector('#estado').value = data.estado;
}

document.querySelector('#btnPesquisar').addEventListener('click',(e)=>{
    e.preventDefault();

    if(document.querySelector('#cep').value.length!=8){
        alert('Por favor, digite um CEP válido com 8 dígitos.')
        document.querySelector('#cep').value="";
        return;
    }
    
    async()=>{
        let urlViaCep = `https://viacep.com.br/ws/${document.querySelector('#cep').value}/json`
        let response = await fetch(urlViaCep);
        let data = await response.json()

        if(data.erro){
            alert("O CEP inserido está incorreto!");
            return;
        }
        document.querySelector('#rua').value = data.logradouro;
        document.querySelector('#complemento').value = data.complemento;
        document.querySelector('#bairro').value = data.bairro;
        document.querySelector('#cidade').value = data.localidade;
        document.querySelector('#estado').value = data.estado;
    }
});
