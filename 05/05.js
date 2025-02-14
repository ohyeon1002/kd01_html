function check1() {
    let s = document.getElementById('txt1').value;
    let t = '';
    // for(let i = s.length-1; i >= 0; i--) {
    //     t = t + s[i];
    // }
    // console.log(t);
    t = s.replaceAll(' ','').split('').reverse().join('');
    console.log(`t = ${t}`);


    if(s.replaceAll(' ','')===t){
        showmsg('맞소');
    }
    else{
        showmsg('아니오');
    }
}

const check2 = () => {
    let s = document.getElementById('txt1').value;
    let sum = 0;
    for (let c of s) {
        if (!isNaN(c)) {
            sum += parseInt(c);
        }
    }
    showmsg(sum);
}

function showmsg(m) {
    document.getElementById('txt2').value = m;
}