function showMenu(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}

function closeMenu(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}

const dialogBox = document.getElementById("dialog-box");
const dialogTitle = document.getElementById("dialog-title");
const result = document.getElementById("result");
let currentAlgo = "";

document.querySelectorAll(".algo-container > div").forEach(div => {
    div.addEventListener("click", () => {
        currentAlgo = div.querySelector("h2").innerText;
        dialogTitle.innerText = currentAlgo;
        document.getElementById("user-input").value = "";
        result.innerText = "";
        dialogBox.style.display = "flex";
    });
});

document.getElementById("close-dialog").addEventListener("click", () => {
    dialogBox.style.display = "none";
});

function runAlgorithm() {
    const input = parseInt(document.getElementById("user-input").value);
    if (isNaN(input)) {
        result.innerText = "Please enter a valid number!";
        return;
    }

    switch (currentAlgo.toLowerCase()) {
        case "reverse a number":
            result.innerText = `Reversed: ${parseInt(input.toString().split("").reverse().join(""))}`;
            break;
        case "factorial of a number":
            let fact = 1;
            for (let i = 2; i <= input; i++) fact *= i;
            result.innerText = `Factorial: ${fact}`;
            break;
        case "fibonacci sequence":
            let fib = [0, 1];
            for (let i = 2; i < input; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            result.innerText = `Fibonacci: ${fib.slice(0, input).join(", ")}`;
            break;
        case "prime checker":
            if (input < 2) result.innerText = "Not Prime";
            else {
                let isPrime = true;
                for (let i = 2; i <= Math.sqrt(input); i++) {
                    if (input % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                result.innerText = isPrime ? "Prime" : "Not Prime";
            }
            break;
        default:
            result.innerText = "Algorithm not implemented.";
    }
}
