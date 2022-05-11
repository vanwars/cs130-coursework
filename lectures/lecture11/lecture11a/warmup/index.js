const addTheNumbers = () => {
    // Your code here...
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = Number(num1) + Number(num2);
    document.querySelector('#answer').innerHTML = result;
}


const subtractTheNumbers = () => {
    // Your code here...
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = Number(num1) - Number(num2);
    document.querySelector('#answer').innerHTML = result;
}