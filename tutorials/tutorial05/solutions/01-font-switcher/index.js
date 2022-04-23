let currentFont = 1.4; // hardcoded

/* 
// if you don't want to hardcode, you could also do this:
const pix2em = px => {
    // assumption: 1em -> 16px
    return px / 16;
}
const el = document.querySelector('.content');
const currentFontPixels = parseFloat(getComputedStyle(el)['font-size']);
let currentFont = pix2em(currentFontPixels);
*/ 

const makeBigger = (ev) => {
    currentFont += 0.2;
    setFont();
};

const makeSmaller = (ev) => {
    currentFont -= 0.2;
    setFont();
};

const setFont = () => {
    document.querySelector('.content').style.fontSize = `${currentFont}em`;
    document.querySelector('h1').style.fontSize = `${currentFont + 0.5}em`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);