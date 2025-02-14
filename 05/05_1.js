// // alert("안녕하세용");

// // console에 출력
// console.log("안녕하세용");

// // 호이스팅
// console.log(x);
// var x = 1;
// console.log(x);

// // console.log(y);
// let y = 1;
// console.log(y);

// // 변수, 상수 선언
// let x = 10; // 변수 선언
// const y = 10; // 상수 선언

// console.log("x = ", x, ", y = ", y);
// console.log("x ", typeof(x));

// x='pnu';
// console.log("x = ", x, ", y = ", y);
// console.log("x ", typeof(x));

// 템플릿 문자열
// 함수선언 1
// function check1() {
//     // e.preventDefault();
// let s = document.getElementById("txt1").value;
//     // let s2 = document.getElementById("txt2").value;

//     document.getElementById("txt2").value = s[s.length-1];
// }
// // 함수선언 2
// const check2 = () => {
//     let s = document.getElementById("txt1").value;
//     document.getElementById("txt2").value = s.length;
// }
function check1() {
    let s = document.getElementById("txt1").value;
    console.log(s);
    // for (let i = 0; i < s.length; i++) {
    //     console.log(s[i]);
    // }
    for (let c of s) {
        console.log(c);
    }
    console.log(s.indexOf('s'));
}
