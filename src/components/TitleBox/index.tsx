import { Wrapper } from './style';
import { useInput } from '../../hooks';

const TitleBox = () => {
  const title = useInput('');
  const detail = useInput('');

  return (
    <Wrapper>
      <div className="inputs">
        <input
          type="text"
          className="title-input"
          placeholder="제목 없는 설문지"
          value={title.value}
          onChange={title.onChange}
        />
        <input
          type="text"
          className="detail-input"
          placeholder="설문지 설명"
          value={detail.value}
          onChange={detail.onChange}
        />
      </div>
    </Wrapper>
  );
};

export default TitleBox;
