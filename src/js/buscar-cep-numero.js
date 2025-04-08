const elemCep = document.querySelector('#cep');
const elemRua = document.querySelector('#rua')
const elemComplemento = document.querySelector('#complemento')
const elemBairro = document.querySelector('#bairro')
const elemCidade = document.querySelector('#cidade')
const elemEstado = document.querySelector('#estado')

document.querySelector('#btnLimpar').addEventListener('click',()=>{
    elemCep.value = "";
    elemRua.value = "";
    elemComplemento.value = "";
    elemBairro.value = "";
    elemCidade.value = "";
    elemEstado.value = "";
});

elemCep.addEventListener('keypress',(e)=>{
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
    atribuirCampos(data);
}

document.querySelector('#btnPesquisar').addEventListener('click',(e)=>{
    e.preventDefault();

    if(elemCep.value.length!=8){
        alert('Por favor, digite um CEP válido com 8 dígitos.')
        document.querySelector('#cep').value="";
        return;
    }
    obterDadosApi(elemCep.value);
});

const atribuirCampos=(callback)=>{
    elemRua.value = callback.logradouro;
    elemComplemento.value = callback.complemento;
    elemBairro.value = callback.bairro;
    elemCidade.value = callback.localidade;
    elemEstado.value = callback.estado;
}