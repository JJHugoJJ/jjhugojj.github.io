// Função para recarregar a página
function recarregarPagina() {
    location.reload(true);
}

// Adiciona um ouvinte de evento ao botão
document.getElementById('btRecarrega').addEventListener('click', recarregarPagina);

// Lista de textos vão que mudam
const textosDinamicos = [
    " Cada hora, o Sol fornece energia suficiente para atender às necessidades de energia da Terra por um ano inteiro.",
    " Uma única turbina eólica pode gerar energia suficiente para abastecer mais de 1.500 residências.",
    " O avanço em tecnologias de armazenamento, como baterias de íon de lítio, está tornando a energia limpa mais acessível e eficiente.",
    " O uso de energia limpa não apenas reduz as emissões de carbono, mas também impulsiona o desenvolvimento sustentável, criando empregos e melhorando a qualidade de vida.",
    " Em algumas áreas, pode haver uma falta de acesso a tecnologias de energia limpa devido à disponibilidade limitada ou à falta de fornecedores locais.",
    "Uma das principais barreiras do uso residencial da Energia Limpa é o custo inicial."
];

// Função para escolher um texto aleatório
function escolherTextoAleatorio() {
    const paragrafoTextoDinamico = document.getElementById('textoRandom');

    // Escolhe um texto aleatório da lista
    const textoAleatorio = textosDinamicos[Math.floor(Math.random() * textosDinamicos.length)];

    // Atualiza o conteúdo do parágrafo
    paragrafoTextoDinamico.textContent = textoAleatorio;
}

// Chama a função ao carregar a página
window.onload = escolherTextoAleatorio;
