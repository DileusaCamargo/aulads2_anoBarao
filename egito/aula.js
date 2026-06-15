// 1. Função que calcula a situação do aluno
function analisarAprovacao(nomeAluno, nota1, nota2) {
    // Calcula a média das duas notas
    let media = (nota1 + nota2) / 2;
    
    // Verifica se a média é suficiente
    if (media >= 7) {
        console.log(nomeAluno + " foi APROVADO(A) com média " + media);
    } else {
        console.log(nomeAluno + " foi REPROVADO(A) com média " + media);
    }
}

// 2. Testando o sistema com alunos diferentes
analisarAprovacao("Carlos", 8.5, 7.0); // Saída: Carlos foi APROVADO(A) com média 7.75
analisarAprovacao("Mariana", 5.0, 6.0); // Saída: Mariana foi REPROVADO(A) com média 5.5