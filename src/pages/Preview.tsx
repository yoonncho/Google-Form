import { TitleBox } from '../components';
import { PreviewContainer } from '../containers';
import { useAppSelector } from '../hooks';
import { Wrapper } from './Main';

const Preview = () => {
  const form = useAppSelector((state) => state.form);
  const { questions } = form;

  return (
    <Wrapper>
      <TitleBox info={form.form} />
      {questions.map((question) => (
        <PreviewContainer key={question.id} questionId={question.id} />
      ))}
    </Wrapper>
  );
};

export default Preview;
