import { useRecoilState } from 'recoil';
import { Input, Text } from '@chakra-ui/react';
import { textState } from '../../recoil_state';

export default function TextInput(): React.ReactElement {
  // 'atom(textState)'에 대해 암묵적으로 구독되므로 '원자'가 업데이트 되면 컴포넌트가 다시 렌더링 된다.
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Input type="text" value={text} onChange={onChange} size="sm" />
      <br />
      <Text fontSize="sm">Echo: {text} </Text>
    </div>
  );
}
