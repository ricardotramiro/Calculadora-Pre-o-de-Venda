document.getElementById('calcular').addEventListener('click', () => {
  const custo = parseFloat(document.getElementById('custo').value);
  const qtdMensal = parseInt(document.getElementById('qtdMensal').value);

  if (isNaN(custo) || isNaN(qtdMensal) || qtdMensal <= 0) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  // Taxas
  const taxaIfood = 0.23;       // 23%
  const taxaPagamento = 0.032;  // 3.2%
  const taxaAntecipacao = 0.0159; // 1.59%
  const mensalidade = 150.00;

  // Mensalidade diluída por item
  const mensalidadePorItem = mensalidade / qtdMensal;

  // Soma total das taxas
  const totalTaxas = taxaIfood + taxaPagamento + taxaAntecipacao;

  // Preço de venda para não ter prejuízo
  const precoVenda = (custo + mensalidadePorItem) / (1 - totalTaxas);

  // Lucro por item
  const lucro = precoVenda - custo - mensalidadePorItem;

  // Mostrar resultado detalhado
  document.getElementById('resultado').innerHTML = `
    <p><strong>Mensalidade por item:</strong> R$ ${mensalidadePorItem.toFixed(2)}</p>
    <p><strong>Comissão (23%):</strong> R$ ${(precoVenda * taxaIfood).toFixed(2)}</p>
    <p><strong>Taxa Pagamento (3,2%):</strong> R$ ${(precoVenda * taxaPagamento).toFixed(2)}</p>
    <p><strong>Taxa Antecipação (1,59%):</strong> R$ ${(precoVenda * taxaAntecipacao).toFixed(2)}</p>
    <hr>
    <p><strong>Preço de venda:</strong> R$ ${precoVenda.toFixed(2)}</p>
    <p><strong>Lucro por item:</strong> R$ ${lucro.toFixed(2)}</p>
  `;
});

