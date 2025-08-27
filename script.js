document.getElementById("calcular").addEventListener("click", function () {
  // Pegando os valores do HTML
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let custo = parseFloat(document.getElementById("custo").value);
  let taxaPlataforma = parseFloat(document.getElementById("taxa-plataforma").value) / 100;
  let taxaAntecipacao = parseFloat(document.getElementById("taxa-antecipacao").value) / 100;
  let mensalidade = parseFloat(document.getElementById("mensalidade").value);

  // Verificando se todos os campos foram preenchidos
  if (isNaN(quantidade) || isNaN(custo) || isNaN(taxaPlataforma) || isNaN(taxaAntecipacao) || isNaN(mensalidade)) {
    alert("Por favor, preencha todos os campos corretamente!");
    return;
  }

  // Calculando a taxa da mensalidade por unidade
  let taxaMensalidadeUnidade = mensalidade / quantidade;

  // Calculando o preço de venda
  // Fórmula: preço = custo + taxas + mensalidade por unidade
  let precoVenda = (custo + taxaMensalidadeUnidade) / (1 - taxaPlataforma - taxaAntecipacao);

  // Atualizando o HTML com os resultados
  document.getElementById("preco-venda").textContent = "R$ " + precoVenda.toFixed(2);
  document.getElementById("taxa-mensalidade").textContent = "R$ " + taxaMensalidadeUnidade.toFixed(2);
});

