## 컴포넌트의 3대 요소 사용 구분

### 상태와 프로퍼티

상태

- 컴포넌트의 상태, 변화할수 있는 데이터 집합
- 상태가 변화하면 컴포넌트를 다시 렌더링
- 상태로 사용해야 하는것은 컴포넌트의 상태를 나타내는값(리스트에서 선택한 값, 체크박스에서 체크됐는지 여부, 텍스트박스의 텍스트 등)
- 컴포넌트가 스스로 관리해야 하며, 외부 비공개 해야한다
- 상태가 변화하면 다음 메소드(shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate)가 자동으로 호출됨

프로퍼티

- 읽기 전용, 부모로부터 설정받음
- 컴포넌트 내부에서는 변경하지 않음
- 초깃값과 유효성 검사 등을 사용할 수 있음
- 외부에서 변경되면 다음 메소드(~~componentWillReceiveProps~~ getDerivedStateFromProps)가 자동으로 호출
- 프로퍼티 변경은 컴포넌트 상태변경을 같이 발생시킴. setState()가 발생하면 다음 메서드(shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate)가 호출됨