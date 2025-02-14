function generateLotto() {
    let arrLotto = [];
    while (arrLotto.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1;
        if (!arrLotto.includes(n)) arrLotto.push(n);
    }
    let arrBonus = arrLotto.splice(Math.floor(Math.random()*6+1), 1);
    arrLotto.sort((a, b) => a - b);

    let spanTgs = arrLotto.map(item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`).join('');
    document.getElementById("numberdisplay").innerHTML = spanTgs;
    document.getElementById("bonusdisplay").innerHTML = arrBonus.map(item => `<span id="plus">+</span><span id='num' class='sp${Math.floor(item / 10)}'>${item}</span>`);
}
