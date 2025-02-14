//배열선언(const or let 사용)

let arr = [];           //빈배열
let arr1 = [1,2,3,4];   //초깃값있는 배열
let arr2 = new Array(); //Array객체로서 생성
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

//배열추가
arr.push(10);
arr.push(20)
console.log(arr);

//배열수정
arr[0] = 1;
console.log(arr);

//배열 삭제
arr.pop();
console.log(arr);

arr.length = 0;
console.log(arr);

//배열순회
arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
;}

console.log("in 반복"); //배열 인덱스로 순회
for (let i in arr) {
    console.log(arr[i]);
    console.log(i);     //밑에 of반복과의 차이에 주목
}

console.log("of 반복"); //배열 항목으로 순회
for (let i of arr) {
    console.log(i);
}
console.log("of 반복2");
for (let i of arr.entries()) {
    console.log(i);
}
console.log("of 반복2");
for (let [i, item] of arr.entries()) {
    console.log(i,item);
}

console.log("foreach 메서드");
arr.forEach((item,i) => {
    console.log(i,item);
});

//map메서드
let arrMap = arr.map((item)=>{
    console.log(item);

    return item*2;
});
console.log(arrMap);

//위에거 간략화
arrMap = arr.map(item => item*2);
console.log(arrMap);

console.log("map3");
arrMap = arrMap.map((item,i) => item*i);
console.log(arrMap);

//filter()
console.log("filter1");
let arrFilter = arr.filter((item) => {
    console.log(item);

    return item % 2 === 0;
});
console.log(arrFilter);

//filter2 (작동 로직은 위와 같음)
console.log("filter2");
arrFilter = arr.filter(item => item % 2 == 0);
console.log(arrFilter);

//map()+filter()
let arrMf = arr.map((item,i)=> item*i)
                    .filter(item => item % 3 === 0);
console.log(arrMf);

//랜덤 수 생성 (빈배열에서 추가해나가기)
let arrRand = [];
for (let i = 0; i < 6; i++){
    arrRand.push(Math.floor(Math.random() * 6)+1);
}
console.log(arrRand);
console.log(arrRand.join(", "));

//다른 방법으로 랜덤 수 생성 (6개짜리 초기화된 배열에서 숫자 수정)
let arrRand1 = [0,0,0,0,0,0];
arrRand1 = arrRand1.map(item => Math.floor(Math.random() * 6)+1);
console.log(arrRand1);

//전개연산자
console.log(`arr = ${arr}`);
let arrCopy;
// arrCopy = arr.map(item => item);
arrCopy = [...arr];
console.log(`arrCopy = ${arrCopy}`);

//로또번호 생성


