import { ShowIcon, AddIcon } from '../../assets';
import { FormProps } from '../TitleBox';
import { Wrapper } from './style';
import { useDispatch } from 'react-redux';
import { formActions, questionActions } from '../../slices';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

interface Props {
  info: FormProps;
}

const SideMenu = ({ info }: Props) => {
  const dispatch = useDispatch();

  const handlePreview = () => {
    dispatch(formActions.addForm(info));
  };

  const handleAddQuestion = () => {
    const newQuestionId = shortid();
    dispatch(questionActions.addQuestion(newQuestionId));
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
