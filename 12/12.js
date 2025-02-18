document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    let flag = false;

    for (let [idx, col] of cols.entries()) {
        if (!flag) {
            col.innerHTML = idx + 1;
            col.addEventListener('click', () => {
                col.setAttribute('style', "background-color : paleturquoise;");
                document.getElementById('noti').innerHTML = `<span style="font-weight:bolder; font-size: 30px;">버튼 누르세요</ span>`
            });
        }
        else if (flag) {
            col.innerHTML = null;// 하트 or 폭탄 이미지 삽입
        }
    }

    bt.addEventListener('click', () => {
        flag = true;
        let bomb = Math.floor(Math.random() * 9 + 1);
        
    });
});
