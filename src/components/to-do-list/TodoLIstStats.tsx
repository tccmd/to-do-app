import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../recoil_state';

export default function TodoListStats(): React.ReactElement {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted, allText } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
        <li>Text not completed: {allText}</li>
      </ul>
    </div>
  );
}
