import { ShowIcon, AddIcon } from '../../assets';
import { Wrapper } from './style';

const SideMenu = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={ShowIcon} alt="preview" />
        <img src={AddIcon} alt="add" />
      </div>
    </Wrapper>
  );
};

export default SideMenu;
