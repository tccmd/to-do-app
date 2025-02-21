import TextInput from './TextInput';
import CharacterCount from './CharacterCount';

export function CharacterCounter(): React.ReactElement {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
