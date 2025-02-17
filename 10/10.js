function changer(s1, s2, txt1, txt2, sp1, sp2) {
    if (s1.value == '℃') s2.value = '℉';
    else s2.value = '℃';
    sp1.textContent = sel1.value;
    sp2.textContent = sel2.value;
    txt1.value = '';
    txt2.value = '';
    txt1.focus();
}

document.addEventListener('DOMContentLoaded', () => {   //DOM 생성 후 시행
    //DOM 요소 가져오기
    // const sl = document.querySelectorAll('select');
    // const ip = document.querySelectorAll('div>input');
    const sp = document.querySelectorAll('.unitDiv span');
    // const dm = document.querySelectorAll('select, div>input, .unitDiv span'); << 추천 안함~

    const sel1 = document.getElementById('sel1');
    const sel2 = document.querySelector('#sel2');
    const txt1 = document.querySelector('input');
    const txt2 = document.querySelector('input[readonly]');
    let sp1 = sp[0];
    let sp2 = sp[1];

    sel1.addEventListener('change', () => {
        changer(sel1, sel2, txt1, txt2, sp1, sp2);
    });

    sel2.addEventListener('change', () => {
        changer(sel2, sel1, txt1, txt2, sp1, sp2);
    });

    document.addEventListener('input', () => {
        if (sel1.value == '℃') {
            txt2.value = (txt1.value * 9 / 5 + 32).toFixed(1);
        }
        else txt2.value = ((txt1.value - 32) * 5 / 9).toFixed(4);
    });
});

