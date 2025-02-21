import { Stack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import TodoItemCreator from '../to-do-list/TodoItemCreator';

export default function Navbar(): React.ReactElement {
  return (
    <Stack justify="flex-end" alignItems="center" direction="row" p={4}>
      <TodoItemCreator />
      <ColorModeSwitcher />
    </Stack>
  );
}
