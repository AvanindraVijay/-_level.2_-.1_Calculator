let history = [];

function appendValue(value) {
  document.getElementById("result").value += value;
}

function appendOperator(operator) {
  document.getElementById("result").value += operator;
}

function calculate() {
  try {
    const expression = document.getElementById("result").value;
    const result = eval(expression);
    document.getElementById("result").value = result;
    addToHistory(expression, result);
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function addToHistory(expression, result) {
  const historyItem = document.createElement("div");
  historyItem.textContent = `${expression} = ${result}`;
  document.getElementById("history").prepend(historyItem);
  history.push({ expression, result });
}
