const body = document.querySelector("body");
const containerForButtons = document.createElement("div");
containerForButtons.setAttribute("class","area");
body.append(containerForButtons);

for (let i = 0; i < 100; i++) {

    const button = document.createElement("button");
    containerForButtons.append(button);

    button.id = `${i}`;
}

for( let i = 0; i<100; i++){
    let tmp = document.getElementById(`${i}`);
    tmp.setAttribute('onclick',`Play(${tmp.id})`);
}

function Play(tmp){
    console.log(tmp);
}