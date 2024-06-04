## 🔨 사용 기술 및 도구

### 배포

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### 개발

<img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/reqct_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/next.js_12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">


### 협업

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=eslint&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

<br/>

## 폴더 구조

```bash
public
├── assets
│   └── icons
│   └── images
│       └── button-icon.png
│ 
src
├── apis 
├── types // 타입 지정 관련 파일(Props 타입은 해당 컴포넌트 상단에 지정)
├── components 
│   └──Layout
│   └── Input
│       └── Input.tsx
├── store // 전역 상태 관리
├── constants
│   └── userContext.ts
├── pages 
│   └── DashboardPage
│       └── DashboardPage.tsx
├── styles
│   └──GlobalStyle.css
├── utils  
│   └── calculateDate.ts
├── hooks  
    └── useHook.ts
```
<br/><br/>

## ✨ 서비스 주요 기능


### 📄 메인화면


### 📄 로그인&회원가입 페이지
    - 가입정보를 입력받아서 post로 보내고
    - 로그인하면서 accesstoken을 발급받아 로컬스토리지에 저장.

### 📄 체험상세 페이지

### 📄 내정보 페이지
 #### 내정보
 #### 예약내역
 #### 내 체험관리
 #### 예약현황
     - 캘린더(리액트캘린더 라이브러리사용)
     - 캘린더모달(get, post, patch API를 사용하면 데이터 변화 실시간반영)



<br/><br/>


## 💡 문제 및 해결

### 1️⃣ 문제 : 캘린더 모달을 열때 모달의 데이터가 갱신되기전에 모달이 열려서 화면이 깜빡이는 문제가있었음.
### 💡 해결 
- 리액트 쿼리의 isfetching 을 모달 컴포넌트 랜더링의 조건부로 붙여줘서 해결
<br/>

### 2️⃣ 
### 💡 해결 
- 

<br/>

## 🗒️ 팀 회고




<br/><br/>
<br/><br/>

# Q & A


<br/><br/>
<br/><br/>
<br/><br/>
