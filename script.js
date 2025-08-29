const costInput = document.getElementById("productCost"); // valor líquido desejado
const quantityInput = document.getElementById("units");
const commissionInput = document.getElementById("commission");
const platformFeeInput = document.getElementById("platformFee");
const anticipationFeeInput = document.getElementById("anticipationFee");
const monthlyFeeInput = document.getElementById("monthlyFee");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("to-clean");
const resultDiv = document.getElementById("result");

function calculatePrice() {
  const receber = parseFloat(costInput.value);
  const quantity = parseInt(quantityInput.value); 
  const commission = parseFloat(commissionInput.value) / 100; 
  const platformFee = parseFloat(platformFeeInput.value) / 100; 
  const anticipationFee = parseFloat(anticipationFeeInput.value) / 100; 
  const monthlyFee = parseFloat(monthlyFeeInput.value); 

  if (isNaN(receber) || isNaN(quantity) || quantity <= 0) {
    resultDiv.innerHTML = "<p style='color:red'>Preencha os campos corretamente!</p>";
    resultDiv.style.display = "block";
    return;
  }

  const monthlyPerUnit = monthlyFee / quantity;

  // Cálculo do preço de venda necessário
  let precoVenda = receber + monthlyPerUnit;
  precoVenda = precoVenda / (1 - anticipationFee);
  precoVenda = precoVenda / (1 - platformFee);
  precoVenda = precoVenda / (1 - commission);
  precoVenda = Math.round(precoVenda * 100) / 100;

  // Mensagem direta
  resultDiv.innerHTML = `
    <p class="price">R$ ${precoVenda.toFixed(2)}</p>
    <p>Se você vender por R$ ${precoVenda.toFixed(2)}, receberá líquido R$ ${receber.toFixed(2)} por unidade.</p>
  `;
  resultDiv.style.display = "block";
}

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

calculateBtn.addEventListener("click", calculatePrice);
clearBtn.addEventListener("click", clearFields);
