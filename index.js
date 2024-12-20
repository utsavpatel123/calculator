function result(v) {
  var result = document.querySelector("#input");

  var oldvalue = result.value;
  var t = oldvalue.length;
  var lastvalue = oldvalue[t - 1];

  var symbol = ["+", "-", "/", "*", "."];

  if (symbol.includes(v)) {
    if (symbol.includes(lastvalue)) {
      var removevalue = oldvalue.slice(0, -1);
      result.value = removevalue + v;
    } else {
      result.value = oldvalue + v;
    }
  } else {
    result.value = oldvalue + v;
  }
}

function equal() {
  var answer = document.querySelector("#input");
  answer.value = eval(answer.value);
}

function cleardata() {
  var clear = document.querySelector("#input");
  clear.value = "";
}

function cancel() {
  var cancel = document.querySelector("#input");
  cancel.value = cancel.value.slice(0, -1);
}
