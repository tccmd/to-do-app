import { Box, useColorModeValue, useRadio, useRadioGroup, VStack } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil_state';

interface RadioCardProps {
  children: React.ReactNode;
}

function RadioCard({ children, ...props }: RadioCardProps): React.ReactElement {
  const checkedBgColor = useColorModeValue('gray.800', 'white');
  const checkedTextColor = useColorModeValue('white', 'gray.800');

  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" width="100%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="xl"
        _checked={{
          bg: checkedBgColor,
          color: checkedTextColor,
          borderColor: 'teal.600',
        }}
        px={5}
        py={3}
        fontWeight={600}
      >
        {children}
      </Box>
    </Box>
  );
}

function TodoListFilters(): React.ReactElement {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  // const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };

  const options: string[] = ['Show All', 'Show Completed', 'Show Uncompleted'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Show All',
    onChange: (value) => setFilter(value),
  });

  const group = getRootProps();

  return (
    <>
      <VStack {...group} p={4}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </VStack>
      {/* <AsideButton>
        <HamburgerIcon />
        <Text>All</Text>
      </AsideButton>
      <AsideButton>
        <CalendarIcon />
        <Text>Uncompleted</Text>
      </AsideButton>
      <AsideButton>
        <CheckCircleIcon />
        <Text>Completed</Text>
      </AsideButton> */}
      {/* Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
      <p> </p> */}
    </>
  );
}

export default TodoListFilters;
