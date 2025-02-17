function guesser (gs, n, img) {
    if(gs < n) img.setAttribute('src', '../img/up.png');
    else if(gs > n) img.setAttribute('src', '../img/down.png');
    else {
        img.setAttribute('src', '../img/good.png')
        document.getElementById('input').innerHTML = '<button>다시하기</button>';
        document.querySelector('button').addEventListener('click', () => {
            location.reload();
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let number = Math.floor(Math.random()*100);
    const guess = document.querySelector('input');
    const img = document.querySelector('img');
    console.log(number);
    document.querySelector('button').addEventListener('click', () => {
        guesser(guess.value, number, img);
    });
    document.querySelector('input').addEventListener('keydown', (e) =>{
        if(e.code == 'Enter') guesser(guess.value, number, img);
    });
});