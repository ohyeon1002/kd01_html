function clicker(cols, flag, bomb) {
    let count=0;
    for (let [idx, col] of cols.entries()) {
        while (!flag) {
            col.innerHTML = idx + 1;
            col.addEventListener('click', () => {
                col.setAttribute('style', "background-color : paleturquoise;");
                document.getElementById('noti').innerHTML = `<span style="font-weight:bolder; font-size: 30px;">버튼 누르세요</ span>`
                return;
            });
            break;
        }
        if (flag) {
            col.innerHTML = null;
            col.setAttribute('style', null);
            col.addEventListener('click', ()=>{
                count++;
                console.log(count);
                if (idx == bomb & count < 8) {
                    col.innerHTML = `<img src="../img/boom.png" style="width:70px; height:70px;">`;
                }
                else if(idx != bomb) col.innerHTML = `<img src="../img/hart.png" style="width:70px; height:70px;">`;
                else if(idx == bomb & count == 9) {
                    col.innerHTML = `<img src="../img/hart.png" style="width:70px; height:70px;">`;
                    document.getElementById('noti').innerHTML = `<span style="font-weight:bolder; font-size: 30px;">성공!</ span>`;
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    let flag = false;
    let bomb;
    bt.addEventListener('click', () => {
        document.getElementById('noti').textContent = '';
        flag = true;
        bomb = Math.floor(Math.random() * 8 + 1);
        console.log(bomb+1);
        clicker(cols, flag, bomb);
    });
    clicker(cols, flag, bomb);
});
