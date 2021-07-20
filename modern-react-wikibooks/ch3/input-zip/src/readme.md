## 프로그램의 흐름

### 컴포넌트가 마운트 될 때

- 메인 index.js : ReactDOM.render() -> ZipInput 컴포넌트가 리액트로 생성
- 생성자 실행
- render() 실행

### 사용자가 문자를 입력할 때

- input type="text" 의 onChange 이벤트 실행
- render() 메서드 내부에서 handleChange() 가 실행
  - 텍스트 필터링 처리, 컴포넌트 상태 변경
- react 에 의해 자동으로 render 재호출