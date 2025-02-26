import { Stack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../othder-component/ColorModeSwitcher';
import TodoItemCreator from '../to-do-list/TodoItemCreator';

export default function Navbar(): React.ReactElement {
  return (
    <Stack justify="flex-end" alignItems="center" direction="row" py={4} pl={10} pr={2}>
      <TodoItemCreator />
      <ColorModeSwitcher />
    </Stack>
  );
}
