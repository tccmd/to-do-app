/* eslint-disable prettier/prettier */
import { atom, selector } from 'recoil';
import { TodoItem, TodoStats } from './components/to-do-list/types';

const textState = atom({
  key: 'textState', // 고유 ID
  default: '', // 기본값
});

// 기존 state를 변형해서 새로운 state를 만드는 도구
// 파생된 상태(derived state)는 기존 상태(state)를 변형(transformation)한 결과
const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState); // 어떤 값을 입력(state)으로 받고

    return text.length; // 변형해서 새로운 값을 출력(derived state)하는 함수
  },
});

// 할 일 목록 (TodoList) 상태를 관리하는 atom
const todoListState = atom<TodoItem[]>({
  key: 'TodoList',
  default: [], // 초기값: 빈 배열
});

// 현재 필터 상태를 관리하는 atom
const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All', // 초기값: "Show All" (모든 할 일 표시)
});

// 필터된 할 일 목록을 반환하는 selector
const filteredTodoListState = selector<TodoItem[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState); // 현재 필터 상태 가져오기
    const list = get(todoListState); // 현재 할 일 목록 가져오기

    // 필터 조건에 따라 할 일 목록을 필터링하여 반환
    switch (filter) {
      case 'Show Completed': // 완료된 항목만 반환
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted': // 미완료 항목만 반환
        return list.filter((item) => !item.isComplete);
      default: // 기본적으로 모든 항목을 반환
        return list;
    }
  },
});

// 할 일 목록의 통계를 계산하는 selector
const todoListStatsState = selector<TodoStats>({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState); // 현재 할 일 목록 가져오기
    const totalNum = todoList.length; // 전체 할 일 개수
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length; // 완료된 할 일 개수
    let allText = ''; // 미완료된 모든 할 일 텍스트를 담을 변수
    // eslint-disable-next-line no-return-assign
    todoList.filter((item) => !item.isComplete).map((item) => (allText = `${allText} ${item.text}`));
    const totalUncompletedNum = totalNum - totalCompletedNum; // 미완료된 할 일 개수
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum; // 완료된 비율 (0 ~ 1)

    return {
      totalNum, // 전체 개수
      totalCompletedNum, // 완료된 개수
      totalUncompletedNum, // 미완료 개수
      percentCompleted, // 완료된 비율
      allText, // 미완료된 할 일의 텍스트 목록
    };
  },
});

export {
  charCountState,
  filteredTodoListState,
  textState,
  todoListFilterState,
  todoListState,
  todoListStatsState
};

