import { atom, selector } from 'recoil';
import { TodoItem, TodoStats } from './components/to-do-list/types';

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

// 우선 순위 상태를 관리하는 atom
const todoListPriorityState = atom<string>({
  key: 'todoListPriorityState',
  default: '우선순', // 초기값: "우선순"
});

// 필터와 정렬을 동시에 처리하는 selector
const filteredAndSortedTodoListState = selector<TodoItem[]>({
  key: 'filteredAndSortedTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState); // 현재 필터 상태
    const priority = get(todoListPriorityState); // 현재 우선 상태
    const list = get(todoListState); // 할 일 목록

    // 필터
    const filteredList =
      filter === 'Show Completed'
        ? list.filter((item) => item.isCompleted)
        : filter === 'Show Uncompleted'
        ? list.filter((item) => !item.isCompleted)
        : list; // 필터 상태에 따른 리스트 반환

    // 정렬
    return [...filteredList].sort((a, b) => {
      if (priority === '우선역순') {
          return b.priority - a.priority;
      } else {
          return a.priority - b.priority;
      }
    });
  },
});

// 할 일 목록의 통계를 계산하는 selector
const todoListStatsState = selector<TodoStats>({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState); // 현재 할 일 목록 가져오기
    const totalNum = todoList.length; // 전체 할 일 개수
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length; // 완료된 할 일 개수
    let allText = ''; // 미완료된 모든 할 일 텍스트를 담을 변수
    // eslint-disable-next-line no-return-assign
    todoList.filter((item) => !item.isCompleted).map((item) => (allText = `${allText} ${item.text}`));
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
  filteredAndSortedTodoListState,
  todoListFilterState, todoListPriorityState,
  todoListState,
  todoListStatsState
};

