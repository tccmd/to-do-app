## ☑️ Todo App

![easyme](/assets/readme/screen.png)

## 🛠 목차

1. [❓ Todo App 구동 방식](#-todo-app-구동-방식)
2. [🏳️‍🌈👁✋🎧🌐 웹 접근성](#%EF%B8%8F-웹-접근성)
3. [SEO](#SEO)
4. [etc](#etc)

## ❓ Todo App 구동 방식

1. 상단 네비게이션 바의 **Search 인풋**에 입력 시 <u>검색된 Task</u>를 볼 수 있습니다.
2. 상단 네비게이션 바의 **Search 인풋**에 입력 후 `Enter`, 우측 '+ Add Task' 버튼 클릭 시 <u>Todo를 생성</u>할 수 있습니다.
3. 상단 네비게이션 바의 '달', '해' 아이콘으로 다크모드, 라이트모드를 전환할 수 있습니다.
4. **Today's Tasks**에서 **Todo 리스트**를 볼 수 있습니다.
5. 각 **Todo**의 **체크박스 토글을 통해 'isCompleted' 상태를 변경**할 수 있습니다.
6. 각 **Todo**에는 **'할일의 텍스트', '생성 일자', '우선순위', '삭제 버튼', '드래그 버튼**'이 있습니다.
7. **'할일의 텍스트**는 인풋 엘리먼트로 구성되어 곧바로 편집할 수 있습니다.
8. **'드래그 버튼**'을 '그립'하여 위 아래로 **우선 순위를 변경**할 수 있습니다. 리스트의 index가 변경될 때 index를 저장하여 데이터를 보내어 우선순위를 저장합니다.
9. **recoil**의 **selecter**로 **필터링, 정렬**하여 'Show All', 'Show Completed', 'Show Uncompleted' 상태에 따라서 필터링된 리스트와 우선순위와 우선 역순으로 정렬할 수 있습니다.
10. **Progress Overview**에서는 **모든 할 일의 수, 완료된 개수, 미완료된 개수, 백분율**을 확인할 수 있습니다.

## 🏳️‍🌈👁✋🎧🌐 웹 접근성

- 대비(contrast)
- 키보드만으로 조작
- 적절한 시멘틱 처리, aria-label 속성

## SEO

- meta 태그 최적화
- Open Graph, Twitter Card

## etc

- 반응형 디자인
- 일관된 코드 스타일 유지 (Prettier, ESLint)
- 데이터 로딩 중 스피너, skeleton 표시
- 로컬스토리지에 필터 상태 저장

## Link

### General link

- [🙋‍♂️ Visit To do App](https://todo-web-nu.vercel.app)

<br/>

\*_vercel의 서버리스 환경의 cold start로 인해 데이터에 지장이 있을 수 있습니다. postman, curl등으로 cold start를 깨울 수 있습니다._
