function criaLinha(){
    const h2 = window.
     document.
     createElement("h2");
     const c = lerCadastro();

    h2.textContent = `[Nome: ${c.nome}, 
        Idade: ${c.idade}, 
        Matricula: ${c.matricula}]`;

    const btn = window.document
     .querySelector("button");
    btn.after(h2);
 }

 function lerCadastro(){
    const nomePrompt = prompt("Digite o seu nome: ");
    const idadePrompt = prompt ("Digite sua idade: ");
    const matriculaPrompt = prompt ("Está matriculado? ");
    return{
        nome: nomePrompt,
        idade: idadePrompt,
        matricula: matriculaPrompt,
    }
 }