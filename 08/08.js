function randNum() {
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const bt = document.querySelector('button');
    bt.addEventListener('click', () => {
        let n = randNum();
        document.querySelector('img').setAttribute('src', `../img/${n}.png`);
        document.querySelector('img').setAttribute('alt', `a dice that shows ${n}`);
        alert(`You got a ${n}!`);
    });
});