import { ShowIcon, AddIcon } from '../../assets';
import { FormProps } from '../TitleBox';
import { Wrapper } from './style';
import { useDispatch } from 'react-redux';
import { formActions, questionActions } from '../../slices';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { QUESTION_TYPES } from '../../const';

interface Props {
  info: FormProps;
}

const newQuestion = (newId: string) => ({
  id: newId,
  type: QUESTION_TYPES.ONE_CHOICE,
  questionContent: '',
  isNecessary: false,
  options: [
    {
      id: 1,
      option: '옵션 1',
    },
  ],
  answers: [],
  narrativeAnswer: '',
});

const SideMenu = ({ info }: Props) => {
  const dispatch = useDispatch();

  const handlePreview = () => {
    dispatch(formActions.addForm(info));
  };

  const handleAddQuestion = () => {
    const newId = shortid();
    dispatch(questionActions.addQuestion(newQuestion(newId)));
  };

  return (
    <Wrapper>
      <div className="container">
        <Link to="/preview">
          <img onClick={handlePreview} src={ShowIcon} alt="preview" />
        </Link>
        <img onClick={handleAddQuestion} src={AddIcon} alt="add" />
      </div>
    </Wrapper>
  );
};

export default SideMenu;
