// 할 일(Todo) 아이템을 정의하는 인터페이스
export interface TodoItem {
  id: number;
  text: string; // 할 일의 내용
  isCompleted: boolean; // 완료 여부
  priority: number; // 우선 순위
  createdAt: string;
}

export interface TodoStats {
  totalNum: number; // 전체 할 일 개수
  totalCompletedNum: number; // 완료된 할 일 개수
  totalUncompletedNum: number; // 미완료 할 일 개수
  percentCompleted: number; // 완료된 할 일의 비율
  allText: string; // 미완료된 할 일들의 텍스트 목록
}
