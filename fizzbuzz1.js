const mainDiv = document.getElementById("result")
const generate = document.getElementById("start")

function buzit() {
    const numbers = document.getElementById("result")
    var data = document.getElementById("numbers").value;
    var n = parseInt(data);
    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            var fun = document.createElement("div");
            fun.className = "element1";
            fun.innerText = "FizzBuzz";
            result.appendChild(fun);

        }
        else if (i % 3 == 0) {
            var fun = document.createElement("div");
            fun.className = "element2";
            fun.innerText = "Fizz";
            result.appendChild(fun);

        }
        else if (i % 5 == 0) {
            var fun = document.createElement("div");
            fun.className = "element3";
            fun.innerText = "Buzz";
            result.appendChild(fun);

        }
        else {
            var fun = document.createElement("div");
            fun.className = "element4";
            fun.innerText = i;
            result.appendChild(fun);
        }
        document.getElementById("result").innerHTML += " ";
    }
}
