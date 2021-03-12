var num = Number(1), input = Number(1);

while(input != 228) {
    if(isNaN(num) || isNaN(input) || input < 0) {
        console.log("Invalid number!");
        num = 1;
    }
    if(num > 10000 || num <= 0) num = 1;
    input = Number(prompt(`Previous result: ${num}. Enter a new number:`, ''));
    num += input;
}
console.log("Correct number!");