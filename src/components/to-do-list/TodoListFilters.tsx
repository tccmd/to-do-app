import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil_state';

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
      <p> </p>
    </>
  );
}

export default TodoListFilters;
