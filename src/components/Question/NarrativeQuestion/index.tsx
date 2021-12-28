import { useLocation } from 'react-router-dom';
import { Wrapper } from './style';

interface QuestionProps {
  type: 'short' | 'long';
}

const NarrativeQuestion = ({ type }: QuestionProps) => {
  const location = useLocation();
  const isPreview = location.pathname === '/preview';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Wrapper type={type}>
      {isPreview ? (
        <input type="text" placeholder="내 답변" onChange={handleChange} />
      ) : (
        <input type="text" disabled placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
      )}
    </Wrapper>
  );
};

export default NarrativeQuestion;
