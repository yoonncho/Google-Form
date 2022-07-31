## Google-Form

[구글 설문조사 서비스](https://docs.google.com/forms)를 구현해보는 프로젝트입니다

( redux-toolkit을 다루면서 작성한 [블로그 포스팅](https://velog.io/@yoonvelog/Redux-toolkit) )

### 서비스 핵심 기능

<img src="https://user-images.githubusercontent.com/49135797/147803061-74a2518b-a23a-44f3-a865-2883192ee711.png"/>

```
- 설문지의 제목 추가 및 변경
- 설문지의 설명 추가 및 변경
- 질문 추가 버튼 클릭 시 새로운 질문 추가
- 질문 유형은 단답형, 장문형, 객관식, 체크박스, 드롭다운으로 구성
- 질문 복사 가능
- 질문 삭제 가능
- 필수 옵션 선택 가능
- 미리보기 버튼을 통해 작성한 설문지 확인가능
- 답안 입력 후 제출 버튼을 통해 입력된 내용 확인가능
- 양식 지우기 버튼을 통해 입력한 답안 초기화 가능
- 질문들은 드래그앤드롭으로 순서 변경 가능
```

### Tech Stack

[![TypeScript Badge](https://img.shields.io/badge/Typescript-235A97?style=flat-square&logo=Typescript&logoColor=white)]()
[![React Badge](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)]()
[![Redux Badge](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)]()
[![styled Badge](https://img.shields.io/badge/styled-DB7093?style=flat-square&logo=styled-components&logoColor=white)]()

### Dependencies

```
"@material-ui/core": "^4.12.3",
"@reduxjs/toolkit": "^1.7.1",
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^12.0.0",
"@testing-library/user-event": "^13.2.1",
"@types/jest": "^27.0.1",
"@types/node": "^16.7.13",
"@types/react": "^17.0.20",
"@types/react-dom": "^17.0.9",
"react": "^17.0.2",
"react-beautiful-dnd": "^13.1.0",
"react-dom": "^17.0.2",
"react-redux": "^7.2.6",
"react-router-dom": "^6.2.1",
"react-scripts": "5.0.0",
"redux": "^4.1.2",
"shortid": "^2.2.16",
"styled-components": "^5.3.3",
"typescript": "^4.4.2",
"web-vitals": "^2.1.0"
```

### Coding Convention

```
[feat] : 새로운 기능 추가
[fix] : 버그 수정
[docs] : 문서 추가 및 변경
[style] : 코드 포맷팅, 로직의 변화는 없이 띄어쓰기나 탭 문자 등의 사소한 변화
[refactor] : 리팩토링
[test] : 테스트 코드 수정 및 변경
[chore] : 그 외 사소한 변경
```

### Project Structure

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂icon
 ┣ 📂components
 ┃ ┣ 📂Dropdown
 ┃ ┣ 📂Question
 ┃ ┣ 📂SideMenu
 ┃ ┣ 📂TitleBox
 ┃ ┣ 📜index.ts
 ┣ 📂const
 ┃ ┣ 📜QuestionTypes.ts
 ┃ ┣ 📜index.ts
 ┣ 📂containers
 ┃ ┣ 📂PreviewContainer
 ┃ ┣ 📂QuestionContainer
 ┃ ┣ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📜useAppSelector.ts
 ┃ ┣ 📜useInput.ts
 ┃ ┣ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜Preview.tsx
 ┃ ┣ 📜Result.tsx
 ┃ ┣ 📜index.ts
 ┣ 📂slices
 ┃ ┣ 📜form.ts
 ┃ ┣ 📜question.ts
 ┃ ┣ 📜index.ts
 ┣ 📂store
 ┃ ┣ 📜configureStore.ts
 ┣ 📂styles
```

### Install & Execute

```
yarn
yarn start
```

### Demonstration

[시연 영상 확인하기](https://drive.google.com/file/d/1RpVzPdRxzxasbguOW_ISOVYRFsRlOWh5/view?usp=sharing)
