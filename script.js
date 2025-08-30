// Elementos do HTML ID
const costInput = document.getElementById("productCost"); // valor líquido desejado
const quantityInput = document.getElementById("units"); // Unidades
const commissionInput = document.getElementById("commission"); // Comissão
const platformFeeInput = document.getElementById("platformFee"); // Taxa da plataforma
const anticipationFeeInput = document.getElementById("anticipationFee"); // Taxa de antecipação 
const monthlyFeeInput = document.getElementById("monthlyFee"); // valor da mensalidade fixa
const calculateBtn = document.getElementById("calculate"); // Botão para calcular o valor de venda
const clearBtn = document.getElementById("to-clean"); // Botão para limpar os campos
const resultDiv = document.getElementById("result"); // resultado aparece aqui

// Função para calcular Preço de Venda
function calculatePrice() {
  // Pegando os valores dos inputs e convertendo
  const receber = parseFloat(costInput.value); // Valor líquido desejado por unidade
  const quantity = parseInt(quantityInput.value); // Quantidade de unidades
  const commission = parseFloat(commissionInput.value) / 100; // Transformando % em decimal
  const platformFee = parseFloat(platformFeeInput.value) / 100; 
  const anticipationFee = parseFloat(anticipationFeeInput.value) / 100; 
  const monthlyFee = parseFloat(monthlyFeeInput.value); // Valor da mensalidade fixa

  // Verifica se os valores são válidos
  if (isNaN(receber) || isNaN(quantity) || quantity <= 0) {
    resultDiv.innerHTML = "<p style='color:red'>Preencha os campos corretamente!</p>";
    resultDiv.style.display = "block";
    return; // sai da função se os dados forem inválidos
  }

  // Calculando quanto  da mensaldade será diluído por unidade
  const monthlyPerUnit = monthlyFee / quantity;

  // lógica do cálculo para Venda

  // Soma o valor líquido + custo mensal por unidade
  let precoVenda = receber + monthlyPerUnit;
  
  // Divide por 1 - taxa para encontrar o valor necessário
  precoVenda = precoVenda / (1 - anticipationFee); // Remove a taxa de antecipação
  precoVenda = precoVenda / (1 - platformFee); // Remove a taxa da plataforma
  precoVenda = precoVenda / (1 - commission); // Remove a comossão
  precoVenda = Math.round(precoVenda * 100) / 100; // Arredonda para 2 casas decimais

  // Mostra o resultado na Tela 
  resultDiv.innerHTML = `
    <p class="price">R$ ${precoVenda.toFixed(2)}</p>
    <p>Se você vender por R$ ${precoVenda.toFixed(2)}, receberá líquido R$ ${receber.toFixed(2)} por unidade.</p>
  `;
  resultDiv.style.display = "block";
}

// Função para limpar os Campos
function clearFields() {
  costInput.value = "";
  quantityInput.value = "";
  commissionInput.value = "23.0";
  platformFeeInput.value = "3.2";
  anticipationFeeInput.value = "1.59";
  monthlyFeeInput.value = "150.00";
  resultDiv.innerHTML = "";
  resultDiv.style.display = "none";
}

// Eventos dos Botões
calculateBtn.addEventListener("click", calculatePrice);
clearBtn.addEventListener("click", clearFields);
