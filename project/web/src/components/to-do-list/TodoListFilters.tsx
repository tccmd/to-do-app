import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil_state';
import { ShowAllIcon, ShowCompletedIcon, ShowUncompletedIcon, } from '../other-component/Icon';

export default function TodoListFilters(): React.ReactElement {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const options: Record<string, React.ReactNode> = {
    'Show All': <ShowAllIcon />,
    'Show Completed': <ShowCompletedIcon />,
    'Show Uncompleted': <ShowUncompletedIcon />,
  };

  return (
    <VStack p={4}>
      {Object.entries(options).map(([key, value]) => {
        return (
          <Button
            variant="unstyled"
            className={`aside-filter-button button ${key === filter ? 'active' : ''}`}
            onClick={() => {
              setFilter(key);
              localStorage.setItem('todoFilter', key);
            }}
            display="flex"
            justifyContent="start"
            gap={4}
            key={key}
            role="button"
            tabIndex={0}
            px={4}
          >
            {value}
            {key}
          </Button>
        );
      })}
    </VStack>
  );
}
