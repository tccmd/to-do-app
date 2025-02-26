import { DeleteIcon, DragHandleIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Skeleton,
  Spinner,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Reorder, useDragControls, useMotionValue } from 'framer-motion';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../generated/graphql';
import { useRaisedShadow } from '../othder-component/use-raised-shadow';
import { TodoItem as TodoItemType } from './types';

export default function TodoItem({ item }: { item: TodoItemType }): React.ReactElement {
  const hoverColor = useColorModeValue('gray.50', 'gray.800');
  const bgColor = useColorModeValue('white', 'gray.800');
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
        bg={bgColor}
        px={6}
        py={4}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={4} alignItems="center">
          <Skeleton isLoaded={!updateLoading}>
            <Checkbox
              aria-label="할 일 완료"
              size="lg"
              type="checkbox"
              isChecked={item.isCompleted}
              onChange={toggleItemCompletion}
              colorScheme="black"
            />
          </Skeleton>
          <Flex flexDirection="column">
            <Editable aria-label="할 일, 할 일 수정" defaultValue={item.text} fontWeight="600">
              <EditablePreview />
              <EditableInput onChange={editItemText} />
            </Editable>
            <Text color="#6B7280">{formattedDate}</Text>
          </Flex>
        </Flex>
        <Flex>
          {/* <span>{item.priority}</span> */}
          {deleteLoading ? (
            <Button variant="unstyled" aria-label="할 일 삭제 중">
              <Spinner size="sm" />
            </Button>
          ) : (
            <IconButton
              isRound={true}
              colorScheme="whiteAlpha"
              aria-label="할 일 삭제"
              icon={<DeleteIcon />}
              onClick={deleteItem}
              variant="customIconButton"
            />
          )}
          <IconButton
            icon={<DragHandleIcon />}
            aria-label="드래그 핸들"
            onPointerDown={(event) => dragControls.start(event)}
            variant="customIconButton"
          />
          {/* <ReorderIcon dragControls={dragControls} /> */}
        </Flex>
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