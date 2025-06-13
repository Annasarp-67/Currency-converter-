async function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!amount) {
    alert("Enter a valid amount");
    return;
  }

  // ❗ Fix: Wrap the URL in quotes and use backticks for template literal
  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await res.json();
  const rate = data.rates[to];
  const result = (amount * rate).toFixed(2);

  // ❗ Fix: Wrap innerText value in backticks ``
  document.getElementById("result").innerText = `${amount} ${from} = ${result} ${to}`;
}