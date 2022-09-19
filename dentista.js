//Global
var outFila = document.getElementById('outFila');
var outAtendimento = document.getElementById('outAtendimento');
var txtPaciente = document.getElementById('txtPaciente');

var pacientes = [];

function atualizarLista(){
    outFila.textContent = "";
    for(var indice in pacientes){
        outFila.innerHTML += `${Number(indice)+1} - ${pacientes[indice]} <br />`;
    }
}

function nomeVazio(){
    if(txtPaciente.value == ''){
        alert('Digite o nome do paciente');
        txtPaciente.focus();
        return true;
    }

    return false;
}

function limpaCampoNome(){
    txtPaciente.value = '';
    txtPaciente.focus();
}

function adicionar(){

    if(nomeVazio())
        return;

    pacientes.push(txtPaciente.value);  
    atualizarLista();      
    limpaCampoNome();      
}

function atender(){

    if( pacientes.length == 0 )   {
        alert("NÃ£o existem pacientes para serem atendidos. Cadastre algum");
        txtPaciente.focus();
        return;
    }
    var atender = pacientes.shift();
    outAtendimento.textContent = "Em atendimento: "+atender;
    atualizarLista();
}

function priorizar(){
    
    if(nomeVazio())
        return;

    pacientes.unshift(txtPaciente.value);      
    atualizarLista();
    limpaCampoNome();
}

document.getElementById('btnAdicionar').addEventListener('click', adicionar);
document.getElementById('btnPriorizar').addEventListener('click', priorizar);
document.getElementById('btnAtender').addEventListener('click', atender);