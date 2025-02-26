import { Card, CardBody, Flex, Progress, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../recoil_state';


export default function ProgressOverview(): React.ReactElement {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <Card>
      <CardBody>
        <Text fontSize="2xl" fontWeight={600} pb={4}>
          Progress Overview
        </Text>
        <Flex justify="space-between" pb={2}>
          <Text fontWeight={500}>Today&apos;s Progress</Text>
          <Text fontWeight={500}>{formattedPercentCompleted}%</Text>
        </Flex>
        <Stack spacing={5} pb={4}>
          <Progress
            colorScheme="black"
            size="md"
            value={formattedPercentCompleted}
            borderRadius="xl"
            sx={{
              transition: 'width 2s ease-out !imporant',
            }}
          />
        </Stack>
        <SimpleGrid columns={3} spacing={4}>
          <VStack height="80px" justifyContent="center">
            <Text fontSize="3xl" as="b">
              {totalNum}
            </Text>
            <Text>Total Tasks</Text>
          </VStack>
          <VStack height="80px" justifyContent="center">
            <Text fontSize="3xl" as="b">
              {totalCompletedNum}
            </Text>
            <Text>Completed</Text>
          </VStack>
          <VStack height="80px" justifyContent="center">
            <Text fontSize="3xl" as="b">
              {totalUncompletedNum}
            </Text>
            <Text>Remining</Text>
          </VStack>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
