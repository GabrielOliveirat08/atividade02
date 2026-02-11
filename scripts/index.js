function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if (idade >= 16 && nivel > 5){
        mensagemIncricao.innerText = "Incrição aceita. Categoria Pro";
        mensagemIncricao.style.color = "green";
    }else if (idade >= 16 && nivel <= 5){
        mensagemIncricao.innerText = "Inscrição aceita. categoria iniciante";
        mensagemIncricao.style.color = "blue";
    }else{
        mensagemIncricao.innerText = "Incrição negada. Idade mínima: 16 anos";
        mensagemIncricao.style.color = "red";
    }
}
function validarSenha(){
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;

    if (senha1.length < 8  ) {
        mensagemSenha.innerText = "A senha precisa ter pelo menos 8 caracteres!"
        mensagemSenha.style.color = "red";
    }else if (senha1 !== senha2) {
        mensagemSenha.innerText = "As senhas não coincidem!";
        mensagemSenha.style.color = "red";
    }else  {
    mensagemSenha.innerText = "Senha válida!";
    mensagemSenha.style.color = "green";
    }
}
function validarIdade(){
    const idadePromocao = document.getElementById("idadePromocao").value;
    const estudante = document.getElementById("estudante");

    if (idadePromocao >= 60 || estudante.checked ) {
        mensagemPromocao.innerText = "Você ganhou um desconto!";
        mensagemPromocao.style.color = "green";
    }else {
        mensagemPromocao.innerText = "Você não um desconto!";
        mensagemPromocao.style.color = "red";
    }
}
function validarPreenchimento(){
    const nome01 = document.getElementById("nome01").value;
    const idade01 = document.getElementById("idade01").value;
    const validacaoIdade = document.getElementById("validacaoIdade");
    const idadeInput = document.getElementById("idade01").value;

    if (nome01 === "" || idadeInput === "" || idade01 < 0 ) {
        mensagemVazio.innerText = "Erro: Preencha corretamente todos os campos.";
        mensagemVazio.style.color = "red";
    } else {
        mensagemVazio.innerText = "Cadastro válida!";
        mensagemVazio.style.color = "green";
    }

}