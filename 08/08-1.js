document.addEventListener('DOMContentLoaded', () => { //DOM 구조가 모두 완성된 후에 이벤트리스너
    const bts = document.querySelectorAll('button'); //querySelector:첫번째 버튼 요소 찾아서 참조, ~All:해당 요소 찾아서 노드리스트로 저장 (따라서 이용시 변수[i]꼴로 호출)
    console.log(bts);

    for(let bt of bts) {
        bt.addEventListener('click', () => {
            console.log(bt.getAttribute); //innerHTML은 안에 태그가 있으면 포함, textContent는 텍스트만 표출
        });
    }
});