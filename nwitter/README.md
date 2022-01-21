#3.2 Getting the Nweets (08:32)

- state 로 nweets 작성
- useeffect 작성 collection.get
- getnweets async 사용하여 별도의 함수로 작성해주기
- useEffect 안에 넣어주김
- get 은 QuerySnapshot 돌려줌 문서참고
- foreach document 출력하기 : 콘솔로그
- setNweet 안에 함수 넣어보기 : 함수 전달하면 이전값에 접근할수 있게 해줌(prev)

```js
// https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9

// 구조분해 할당?
var { a1: awesome_name, a2: dumb, ...rest_a } = { a1: 10, a2: 20, a3: 30, a4: 40 }
console.log(awesome_name) // 10
console.log(dumb) // 20

// 전개 연산자 복사 : deep copy 됨
var arr = [1, 2, 3]
var copy1 = arr
var [...copy2] = arr
var copy3 = [...arr]

arr[0] = "String"
console.log(arr) // [ 'String', 2, 3 ]
console.log(copy1) // [ 'String', 2, 3 ]
console.log(copy2) // [ 1, 2, 3 ]
console.log(copy3) // [ 1, 2, 3 ]

// 객체의 깊은 복사
var prevState = {
  name: "yuddomack",
  birth: "1996-11-01",
  age: 22,
}

var state = {
  ...prevState,
  age: 23,
}

console.log(state) // { name: 'yuddomack', birth: '1996-11-01', age: 23 }
```
