# 원티드 프리온보딩 6차 5-1 과제

## 9팀 소개

| <img src="https://avatars.githubusercontent.com/u/92010078?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92101831?v=4"/> | <img src="https://avatars.githubusercontent.com/u/69101321?v=4"/> | <img src="https://avatars.githubusercontent.com/u/85508157?v=4"/> | <img src="https://avatars.githubusercontent.com/u/97271725?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/many-yun">[팀장] 김다윤</a>           | <a href="https://github.com/blcklamb">김채정</a>                  | <a href="https://github.com/jaehyeon74">박재현</a>                | <a href="https://github.com/sacultang">오영재</a>                 | <a href="https://github.com/jungdeokwoo">정덕우</a>              |

## 목차

- [과제 소개](#과제-소개)
- [설치 및 실행](#설치-및-실행)
- [영상](#영상)
- [구현 기능](#구현-기능)
- [요구 사항](#요구-사항)
- [기술 스택](#기술-스택)
- [파일 구조](#파일-구조)
- [Best Practices](#best-practices)

## 과제 소개

- 검색창 구현 + 검색어 추천 기능 구현
- 작업기간: 2022.09.27 ~ 2022.09.29

## 설치 및 실행

> git clone

```bash
> git clone https://github.com/wanted-9team/pre-onboarding-assignment-week-5-1-team-9

> cd pre-onboarding-assignment-week-5-1-team-9
```

> 서버 및 데이터

```bash
# server directory
> cd server

# 관련 패키지 설치
> npm install

# 로컬 서버 실행
> npm start
```

> 클라이언트

```bash
# client directory
> cd client

# 관련 패키지 설치
> npm install

# 프로젝트 실행
> npm run start
```

## 데모

- 로그인 및 리다이렉팅 처리 및 사용자 이메일 표기<br><br>

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/69101321/192122125-d3daedb2-141b-4d87-ac54-73a6e3fb167e.gif)

<br><br>

- 사용자 페이지 <br><br>

  https://user-images.githubusercontent.com/85508157/192121864-9817e518-a41f-41f4-aa0c-3411fa3a3562.mov

- 사용자 편집<br><br>
  ![사용자 편집](https://user-images.githubusercontent.com/92101831/192122171-e79e6ed1-408c-442c-a526-b4880dbfe1ca.gif)

- 사용자 삭제<br><br>
  ![사용자 삭제](https://user-images.githubusercontent.com/92101831/192122176-abe08cb6-6b1d-4694-af55-28fb5da042fb.gif)

  <br><br>

- 계좌 수정 및 삭제, 페이지네이션<br><br>
  ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/69101321/192121396-ef727d59-6fe1-4572-af00-fa347308630d.gif)
  <br><br>

## 구현 기능

### ☑️ 사용자 목록

- [x] 목록에서는 활성화 여부, 임직원 계좌 여부를 필터링 할 수 있어야 합니다.
- [x] 리스트 페이지에서는 검색이 가능해야 합니다.
- [x] 페이지네이션이 되어야 합니다.
- [x] 임의로 신규 사용자를 추가할 수 있어야 합니다.
- [x] 잘못 생성한 사용자를 삭제할 수 있어야 합니다.
- [x] 개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.

### ☑️ 계좌 목록

- [x] 목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 합니다.
- [x] 리스트 페이지에서는 검색이 가능해야 합니다.
- [x] 페이지네이션이 되어야 합니다.

### ☑️ 사용자 및 계좌 상세 페이지

- [x] 각 사용자, 계좌의 상세 페이지는 획득 가능한 대부분의 정보를 표시해주시면 됩니다.

### ☑️ 기타

- [x] Sider 메뉴에서는 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.
- [x] 새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.
- [x] 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
- [x] 사용자 상세에서 사용자의 계좌목록이 보여야 합니다.
- [x] 계좌 목록에서 각 계좌 상태별로 필터링이 가능해야 합니다.
- [x] 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.
- [x] 계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다.

## 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux saga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
</div>

## 파일구조

```bash
├─ data_generate
└─ preface
    ├─ public
    └─ src
        ├─ api
        ├─ components
        │   ├─ blankPage
        │   ├─ footer
        │   ├─ header
        │   └─ sider
        ├─ data
        ├─ pages
        │   ├─ accounts
        │   │   ├─ accountDetails
        │   │   ├─ accountFilter
        │   │   │   └─ components
        │   │   └─ accountList
        │   │       └─ components
        │   ├─ login
        │   │   └─ components
        │   ├─ main
        │   └─ user
        │       ├─ userDetails
        │       │   └─ components
        │       └─ userList
        │           └─ components
        │                ├─ daumPost
        │                └─ userFormDialog
        ├─ redux
        │   ├─ middleware
        │   ├─ saga
        │   └─ slice
        ├─ store
        ├─ utils
        ├─ App.js
        └─ index.js

```

## Best Practices

### 1. MUI

- Material-Ui에는 자주 사용되는 기능들을 Component/Api로 제공이 되어 쉽게 디자인을 만들 수 있습니다.
- styledcomponents 나 emotion 등의 스타일 라이브러리를 같이 사용 할 수 있다는 점이 장점입니다.

### 2. redux toolkit 사용한 이유

- Rdux의 단점으로 꼽히는 보일러플레이트 코드가 줄어듦
  - 보이럴플레이트 코드가 많으면 코드의 예측가능성 측면에서 떨어지고 코드해석이 어려워져 실수를 유발함
- 패키지 의존성을 줄여준다 (redux devtool, reselect 등 많은 라이브러리들이 내장되어 있다)
