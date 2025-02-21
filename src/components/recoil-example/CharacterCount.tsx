import { useRecoilValue } from 'recoil';
import { Text } from '@chakra-ui/react';
import { charCountState } from '../../recoil_state';

export default function CharacterCount(): React.ReactElement {
  // selector(charCountState) 리턴 값 사용
  const count = useRecoilValue(charCountState);

  return <Text fontSize="sm">Character Count: {count}</Text>;
}
