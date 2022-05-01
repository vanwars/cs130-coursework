const resetButtonBackgrounds = () => {
    const color = '#EEE';
    document.querySelector('#btn1').style.backgroundColor = color;
    document.querySelector('#btn2').style.backgroundColor = color;
    document.querySelector('#btn3').style.backgroundColor = color;
    document.querySelector('#btn4').style.backgroundColor = color;
    // document.querySelectorAll('button').style.backgroundColor = color;
    // this will be a list of elements:
    // document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = color);
};


const makeRed = () => {
    // your code here...
    //resetButtonBackgrounds();
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = '#FF3300';
    document.querySelector('#btn1').style.backgroundColor = 'red';
};

const makeBlue = () => {
    // your code here...
    //resetButtonBackgrounds();
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('#btn2').style.backgroundColor = 'blue';
    document.querySelector('#btn2').style.fontSize = '20px';
};

const makePink = () => {
    // your code here...
    //resetButtonBackgrounds();
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('#btn3').style.backgroundColor = 'pink';
};

const makeOrange = () => {
    // your code here...
    //resetButtonBackgrounds();
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('#btn4').style.backgroundColor = 'orange';
};

