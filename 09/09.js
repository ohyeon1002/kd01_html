function randNum() {
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const bts = document.querySelectorAll('button');
    for (let bt of bts) {
        bt.addEventListener('click', () => {
            let k = bt.textContent.split(' 선택')[0];
            document.querySelector('img#userDice').setAttribute('src', `../img/${k}.png`)
            document.querySelector('img#userDice').setAttribute('alt', `a dice that shows ${k}`);
            let n = randNum();
            document.querySelector('img').setAttribute('src', `../img/${n}.png`);
            document.querySelector('img').setAttribute('alt', `a dice that shows ${n}`);
            if (k > n) {
                document.querySelector('#result').textContent = "Win 🥳";
            }
            else if (k < n) {
                document.querySelector('#result').textContent = "Lose 😣";
            }
            else document.querySelector('#result').textContent = "Draw 😐";
        });
    }
});
