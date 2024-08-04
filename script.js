function calcular() {
  let num = document.getElementById("txtn");
  let res = document.getElementById("seltab");

  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    res.innerHTML = "";

    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      res.appendChild(item);
      c++;
    }
    let inputNum = document.getElementById("txtn");
    inputNum.value = "";
    inputNum.focus();
  }
}
