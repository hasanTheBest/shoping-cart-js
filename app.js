// initial state
const initialState = {
  phone: {
    price: 1219,
  },
  case: {
    price: 59,
  },
  tax: 0.1, // 10%,
};

// Phone
document
  .getElementById("phone-number-spinner")
  .addEventListener("click", (e) => {
    update(e, "phone", initialState.phone.price);
  });

// Case
document
  .getElementById("case-number-spinner")
  .addEventListener("click", (e) => {
    update(e, "case", initialState.case.price);
  });

// update phone and case number and price
function update(e, name, price) {
  const numberNode = document.getElementById(`${name}-number`);
  const priceNode = document.getElementById(`${name}-price`);
  const { id } = e.target;

  // increment button pressed
  if (id === `${name}-increment`) {
    numberNode.value = parseInt(numberNode.value) + 1;

    priceNode.innerText = "$" + price * parseInt(numberNode.value);
  }

  // decrement button pressed
  if (id === `${name}-decrement`) {
    numberNode.value =
      parseInt(numberNode.value) < 2 ? 1 : parseInt(numberNode.value) - 1;

    priceNode.innerText = "$" + price * parseInt(numberNode.value);
  }

  // calling subtotal
  updateSubTotal(
    parseInt(document.getElementById("phone-price").innerText.slice(1)),
    parseInt(document.getElementById("case-price").innerText.slice(1))
  );
}

// update subtotal
let subTotal;
function updateSubTotal(phoneTotal, caseTotal) {
  subTotal = phoneTotal + caseTotal;
  document.getElementById("subTotal").innerText = "$" + subTotal;

  updateTotalWithTax(subTotal, initialState.tax);
}

// update total with tax
function updateTotalWithTax(subtotal, tax) {
  let taxAmount = subtotal * tax;

  document.getElementById("tax").innerText = "$" + taxAmount.toFixed(2);

  document.getElementById("total").innerText =
    "$" + Number(subtotal + taxAmount).toFixed(2);
}
