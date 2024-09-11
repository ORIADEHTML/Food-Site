let head = document.getElementById('main');
head.addEventListener('click', () => {
    head.style.backgroundColor = "blue";
    head.innerText = "Let the world be great"
    head.innerHTML = "We are the king of kings"

    if(head === "We are the king of kings") {
        console.log("God of god");
    }
    
});

let nav = document.querySelector('ul');
nav.style.display = "flex"
nav.style.justifyContent = "center"
nav.style.gap = "15rem"

let anchor = document.getElementById('list-item');
anchor.style.listStyle = "none"
anchor.style.textDecoration = "none"
anchor.style.color = "red"

// let img = document.getElementById('img')
// img.style.border ="5px solid black"

document.querySelectorAll