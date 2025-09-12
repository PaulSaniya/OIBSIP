let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let ans = 0;

let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    if (value == "ENTER" || value == "=") {
      try {
        string = eval(string.replace("√", "Math.sqrt").replace("±", "-"));
        input.value = string;
        ans = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    else if (value == "AC") {
      string = "";
      input.value = "";
    }
    else if (value == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else if (value == "ans") {
      string += ans;
      input.value = string;
    }
    else {
      string += value;
      input.value = string;
    }
  });
});