// Função que faz a requisição na API de cotações de USD para BRL
function getCotacaoUsdBrl() {
    fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/15")
        .then(response => response.json())
        .then(data => {
            const cotacaoUsdBrl = data[0].bid;
            getCotacaoEurBrl(cotacaoUsdBrl); // Chama a próxima requisição com o valor obtido
        })
        .catch(error => console.error("Erro ao obter cotação USD/BRL:", error));
}

// Função que faz a requisição na API de cotações de EUR para BRL
function getCotacaoEurBrl(cotacaoUsdBrl) {
    fetch("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15")
        .then(response => response.json())
        .then(data => {
            const cotacaoEurBrl = data[0].bid;
            exibirCotacoes(cotacaoUsdBrl, cotacaoEurBrl); // Chama a função para exibir as cotações
        })
        .catch(error => console.error("Erro ao obter cotação EUR/BRL:", error));
}

// exibindo as cotações de USD/BRL e EUR/BRL na div cotacaoBox
function exibirCotacoes(cotacaoUsdBrl, cotacaoEurBrl) {
    const cotacaoBox = document.getElementById("cotacaoBox");

    cotacaoBox.innerHTML = `Cotação USD/BRL: ${cotacaoUsdBrl}<br>Cotação EUR/BRL: ${cotacaoEurBrl}`;
}

// chamando a função getCotacaoUsdBrl assim que a página for carregada
document.addEventListener("DOMContentLoaded", getCotacaoUsdBrl);
