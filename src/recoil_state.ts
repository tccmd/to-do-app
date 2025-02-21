import { atom, selector } from 'recoil';

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

// 리스트
interface TodoItem {
  text: string;
  isComplete: boolean;
}

const todoListState = atom<TodoItem[]>({
  key: 'TodoList',
  default: [],
});

// 필터
const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    let allText = '';
    // eslint-disable-next-line no-return-assign
    todoList.filter((item) => !item.isComplete).map((item) => (allText = `${allText} ${item.text}`));
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText,
    };
  },
});

export { textState, charCountState, filteredTodoListState, todoListStatsState };
