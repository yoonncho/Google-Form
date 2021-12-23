import { useState } from 'react';
import { Wrapper } from './style';

const TitleBox = () => {
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };

  return (
    <Wrapper>
      <div className="inputs">
        <input
          type="text"
          className="title"
          placeholder="제목 없는 설문지"
          value={title}
          onChange={handleTitleChange}
        />
        <input type="text" className="detail" placeholder="설문지 설명" value={detail} onChange={handleDetailChange} />
      </div>
    </Wrapper>
  );
};

export default TitleBox;
