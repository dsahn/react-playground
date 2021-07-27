### 마스토돈 웹 API 사용해보기

- 마스토돈은 웹 API를 사용해 자유롭게 클라이언트 애플리케이션 제작 가능
- OAuth2를 사용해 인증
    - OAuth2 애플리케이션을 마스토돈 인스턴스에 등록
    - 사용자가 사이트에서 인증하고, 접근 토큰 추출
    - 접근 토큰을 사용해 API에 접근

```
$ mkdir mstdn_cli
cd mstdn_cli
npm init -y
# 마스토돈 라이브러리 설치
npm i --save mastodon-api
npm i --save readline-sync
npm i --save-dev electron
npm i --save-dev react react-dom
npm i --save-dev babel-core babel-preset-es2015 babel-preset-react
npm i --save-dev webpack babel-loader
```

#### 과정1) 애플리케이션을 인스턴스에 등록

1_create_app.js에 작성


#### 과정2) 접근토큰 추출하기

2_auth.js 에 작성

사이트 접속 후, 가입하고 코드를 받아옴. SNS인것 같은데 마스토돈 중 하나의 인스턴스가 pawoo라고 함

#### 과정3) 타임라인 추출하기

3_get_timeline.js 에 작성

