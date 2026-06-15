// ==========================================
// PARTE 1: Código que roda sozinho ao carregar a página
// ==========================================
// Criamos a função para embrulhar o código
function exibirDadosDoCurso() {
    const nomeDoCurso = "JavaScript Iniciante";
    let quantidadeAlunos = 15;

    // Mudando o valor da variável 'let'
    quantidadeAlunos = 16; 

    // Selecionamos o elemento pelo ID e injetamos o texto nele
    document.getElementById("info-curso").textContent = "Nome do Curso: " + nomeDoCurso;
    document.getElementById("info-alunos").textContent = "Quantidade de Alunos: " + quantidadeAlunos;
}

// ==========================================
// PARTE 2: Função que roda apenas quando o botão for clicado
// ==========================================
function saudarUsuario(nome) {
    alert("Olá, " + nome + "! A função do botão também está funcionando! 🎉");
}