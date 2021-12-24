import { Wrapper } from './style';

type QuestionProps = {
  type: 'short' | 'long';
};

const NarrativeQuestion = ({ type }: QuestionProps) => {
  return (
    <Wrapper type={type}>
      <input type="text" disabled placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
    </Wrapper>
  );
};

export default NarrativeQuestion;
