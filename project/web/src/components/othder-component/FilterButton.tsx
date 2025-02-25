import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState, todoListPriorityState } from '../../recoil_state';
import { FilterIcon } from './Icon';

export default function FilterButton() {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태
  const [, setFilter] = useRecoilState(todoListFilterState); // 필터 상태
  const [, setSort] = useRecoilState(todoListPriorityState); // 정렬 상태

  // 메뉴 열기/닫기 토글
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // 필터 변경
  const changeFilter = (newFilter: string) => {
    localStorage.setItem('todoFilter', newFilter);
    setFilter(newFilter);
    setMenuOpen(false); // 메뉴 닫기
  };

  // 정렬 변경
  const changeSort = (newSort: string) => {
    localStorage.setItem('todoSort', newSort);
    setSort(newSort);
    setMenuOpen(false); // 메뉴 닫기
  };

  useEffect(() => {
    const savedFilter = localStorage.getItem('todoFilter');
    const savedSort = localStorage.getItem('todoSort');

    if (savedFilter) setFilter(savedFilter);
    if (savedSort) setSort(savedSort);
  }, []);
  
  return (
    <div className="container sort">
      <div className="filter-button" onClick={toggleMenu}>
        <FilterIcon />
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => changeFilter('Show All')}>Show All</li>
          <li onClick={() => changeFilter('Show Completed')}>Show Completed</li>
          <li onClick={() => changeFilter('Show Uncompleted')}>Show Uncompleted</li>
          <li onClick={() => changeSort('우선순')}>우선순</li>
          <li onClick={() => changeSort('우선역순')}>우선역순</li>
        </ul>
      </div>
    </div>
  );
}
