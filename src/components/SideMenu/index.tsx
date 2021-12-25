import { ShowIcon, AddIcon } from '../../assets';
import { FormProps } from '../TitleBox';
import { Wrapper } from './style';
import { useDispatch } from 'react-redux';
import { formActions } from '../../slices';

interface Props {
  info: FormProps;
}

const SideMenu = ({ info }: Props) => {
  const dispatch = useDispatch();

  const handlePreview = () => {
    dispatch(formActions.addForm(info));
  };

  return (
    <Wrapper>
      <div className="container">
        <img onClick={handlePreview} src={ShowIcon} alt="preview" />
        <img src={AddIcon} alt="add" />
      </div>
    </Wrapper>
  );
};

export default SideMenu;
