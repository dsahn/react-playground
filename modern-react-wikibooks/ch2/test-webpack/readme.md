## 실행 명령어

책에 있는 예제대로 하면 실행되지 않는다. webpack4 이상에서는 아래와 같이 실행한다.

```
webpack -o out --mode=development
```

또한 아래와 같은 주의사항이 있다.

- src 디렉토리에 소스 두기
- src 내에 index.* 존재(index.html, index.js, ..)

## webpack

https://kdydesign.github.io/2017/07/27/webpack/

- 패키지 번들러의 역할을 한다고 함
  -  애플리케이션을 처리할 때 필요한 모든 모듈을 종속성 그래프로 반복적으로 작성한 다음 모든 모듈을 브라우저에서 로드 할 수 있는 하나의 Bundle로 패키지화
  - Loader를 통해 Javascript, Image file, Font, CSS, SCSS 등과 같은 자산을 하나의 모듈로 취급
  - Entry 별로 Bundle 생성 가능
  - Bundle에 대한 압축 및 난독화, 소스 맵에 대한 옵션을 제공
  - Plug-In 사용을 통한 사용자 정의 기능 수행
  - 비동기 I/O와 다중 캐시 레벨을 사용하기 때문에 컴파일 속도가 매우 빠름
  - CommonJS(nodejs)와 AMD(requires) 스펙 지원