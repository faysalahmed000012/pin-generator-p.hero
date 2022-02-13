function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  document.getElementById("pin-output").value = getPin();
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const numberOutput = document.getElementById("number-output");
  if (isNaN(number)) {
    if (number == "C") {
      numberOutput.value = "";
    }
  } else {
    const previoutNumber = numberOutput.value;
    const newNumber = previoutNumber + number;
    numberOutput.value = newNumber;
  }
});

function submit() {
  const pinId = document.getElementById("pin-output");
  const pin = pinId.value;
  const numberId = document.getElementById("number-output");
  const numbervalue = numberId.value;
  const faild = document.getElementById("notify-faild");
  const success = document.getElementById("notify-success");
  if (pin == numbervalue) {
    success.style.display = "block";
    faild.style.display = "none";
  } else {
    faild.style.display = "block";
    success.style.display = "none";
  }
  pinId.value = "";
  numberId.value = "";
}
