// Função para recarregar a página
function recarregarPagina() {
    location.reload(true);
}

// Adiciona um ouvinte de evento ao botão
document.getElementById('btRecarrega').addEventListener('click', recarregarPagina);

// Lista de textos vão que mudar
const textosDinamicos = [
    " Cada hora, o Sol fornece energia suficiente para atender às necessidades de energia da Terra por um ano inteiro.",
    " Uma única turbina eólica pode gerar energia suficiente para abastecer mais de 1.500 residências.",
    " O avanço em tecnologias de armazenamento, como baterias de íon de lítio, está tornando a energia limpa mais acessível e eficiente.",
    " O uso de energia limpa não apenas reduz as emissões de carbono, mas também impulsiona o desenvolvimento sustentável, criando empregos e melhorando a qualidade de vida.",
    " Em algumas áreas, pode haver uma falta de acesso a tecnologias de energia limpa devido à disponibilidade limitada ou à falta de fornecedores locais.",
    " Uma das principais barreiras do uso residencial da Energia Limpa é o custo inicial.",
    " Embora a energia hidrelétrica seja uma fonte limpa, a construção de barragens pode causar impactos nos ecossistemas aquáticos, alterando o fluxo dos rios e afetando a vida selvagem.",
    " Algumas comunidades podem resistir à instalação de infraestrutura de energia limpa em suas proximidades devido ao fenômeno 'Not In My Backyard' (NIMBY), que reflete resistência local a projetos mesmo quando são benéficos globalmente.",
    " A biomassa pode ser produzida a partir de resíduos agrícolas e florestais, contribuindo para a gestão sustentável de resíduos e fornecendo uma fonte renovável de energia.",
    " Nas regiões onde a energia geotérmica é abundante, as plantas geotérmicas podem operar continuamente, fornecendo uma fonte constante e confiável de eletricidade.",
    " Alguns aterros sanitários capturam gases gerados pelo lixo em decomposição para produzir eletricidade, transformando resíduos em uma fonte útil de energia.",
    " Pequenas ações diárias, como desligar aparelhos eletrônicos quando não estiverem em uso, podem ter um impacto significativo na redução do consumo de energia ao longo do tempo.",
    " Pequenas ações diárias, como desligar aparelhos eletrônicos quando não estiverem em uso, podem ter um impacto significativo na redução do consumo de energia ao longo do tempo.",
    " Orcas são um dos animais mais inteligentes do mundo, cada grupo de orca tem uma lingua e cultura propria",
    " Os criadores da excelente série The OA lançaram uma série nova chamada Assasinato no Fim do Mundo e está passando no Star+, assistam pfv!!"
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
