function randNum() { // 1~6 주사위 숫자 결정
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener('DOMContentLoaded', () => { // DOM 로드 후 이벤트리스너
    const bts = document.querySelectorAll('button'); // 버튼들을 모두 찾아와서 bts에 저장
    for (let bt of bts) { // for문으로 bts 순회하며 bt에 대해 동작 지시
        bt.addEventListener('click', () => { // 클릭시 이벤트리스너
            let k = bt.textContent.split(' 선택')[0]; // 클릭한 버튼 숫자 읽어 저장
            document.querySelector('img#userDice').setAttribute('src', `../img/${k}.png`) // user 주사위 사진 변경
            document.querySelector('img#userDice').setAttribute('alt', `a dice that shows ${k}`); // user 주사위 설명 변경
            let n = randNum(); // 컴퓨터 주사위 숫자 결정
            document.querySelector('img').setAttribute('src', `../img/${n}.png`); // computer 주사위 사진 변경
            document.querySelector('img').setAttribute('alt', `a dice that shows ${n}`); // computer 주사위 설명 변경
            if (k > n) { // 이겼을 때 문구 출력
                document.querySelector('#result').textContent = "Win 🥳";
            }
            else if (k < n) { // 졌을 때 문구 출력
                document.querySelector('#result').textContent = "Lose 😣";
            }
            else document.querySelector('#result').textContent = "Draw 😐"; // 비겼을 때 문구 출력
        });
    }
});
