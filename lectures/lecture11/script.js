console.log('hello world!');
const name = "Jane"; 
const pic = "https://picsum.photos/id/1/200/200"; 
const score = 300;
// const html = `
//    <div class="card">
//        <img src="${pic}">
//        <p>
//   ${name}'s high score is:      
//   ${score}
//         </p>
//    </div>`;

const someHTML = `
    <section>
        <h1>Hello ${name}!</h1>
        <img src="${pic}" />
        <p>Score: ${score}</p>
        <p>Addition: ${3 + 3}</p>
    </section>
`;

document.querySelector('main').innerHTML = someHTML;