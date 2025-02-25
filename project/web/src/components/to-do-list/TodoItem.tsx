import {
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import { Reorder, useDragControls, useMotionValue } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../generated/graphql';
import { todoListState } from '../../recoil_state';
import { ReorderIcon } from '../othder-component/Icon';
import { useRaisedShadow } from '../othder-component/use-raised-shadow';
import { TodoItem as TodoItemType } from './types';

export default function TodoItem({ item }: { item: TodoItemType }): React.ReactElement {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);
  const hoverColor = useColorModeValue('gray.50', 'gray.800');
  const [updateMutation, { loading: updateLoading }] = useUpdateTodoMutation();
  const [deleteMutation, { loading: deleteLoading }] = useDeleteTodoMutation();

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMutation({
      variables: {
        updateTodoInput: {
          id: item.id,
          text: e.target.value,
        },
      },
    });

    console.log('done');
  };

  const toggleItemCompletion = () => {
    const updatedIsCompleted = !item.isCompleted;

    updateMutation({
      variables: {
        updateTodoInput: {
          id: item.id,
          isCompleted: updatedIsCompleted,
        },
      },
      update: (cache) => {
        console.log(cache);
        cache.modify({
          id: cache.identify({ __typename: 'Todo', id: item.id }),
          fields: {
            isCompleted() {
              return updatedIsCompleted;
            },
          },
        });
      },
    });
  };

  const deleteItem = () => {
    deleteMutation({
      variables: {
        deleteTodoId: item.id,
      },
      update: (cache) => {
        cache.evict({});
        cache.gc();
      },
    });
  };

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  const formattedDate = convertDate(Number(item.createdAt));

  return (
    <Reorder.Item value={item} id={item.text} style={{ boxShadow, y }} dragListener={false} dragControls={dragControls}>
      <Flex
        _hover={{
          bg: hoverColor,
        }}
        px={6}
        py={4}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={4}>
          <Checkbox
            size="lg"
            type="checkbox"
            isChecked={item.isCompleted}
            onChange={toggleItemCompletion}
            colorScheme="black"
          />
          <Flex flexDirection="column">
            <Editable defaultValue={item.text} fontWeight="600">
              <EditablePreview />
              <EditableInput onChange={editItemText} />
            </Editable>
            <Text color="#6B7280">{formattedDate}</Text>
          </Flex>
        </Flex>
        <Wrap>
          <span>{item.priority}</span>
          <button type="button" onClick={deleteItem}>
            <Text color="#6B7280">X</Text>
          </button>
          <ReorderIcon dragControls={dragControls} />
        </Wrap>
      </Flex>
    </Reorder.Item>
  );
}

function convertDate(milliSecond: number) {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const data = new Date(milliSecond);

  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();
  const day = days[data.getDay()];

  return `${year}.${month}.${date}. (${day})`;
}
