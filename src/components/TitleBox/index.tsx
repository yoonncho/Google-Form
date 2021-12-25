import { Wrapper } from './style';

export interface FormProps {
  formTitle: string;
  formDetail: string;
}

interface Props {
  info: FormProps;
  handleChange: (name: string, value: string) => void;
}

const TitleBox = ({ info, handleChange }: Props) => {
  return (
    <Wrapper>
      <div className="inputs">
        <input
          type="text"
          className="title-input"
          placeholder="제목 없는 설문지"
          name="formTitle"
          value={info.formTitle}
          onChange={({ target: { value } }) => handleChange('formTitle', value)}
        />
        <input
          type="text"
          className="detail-input"
          placeholder="설문지 설명"
          name="formDetail"
          value={info.formDetail}
          onChange={({ target: { value } }) => handleChange('formDetail', value)}
        />
      </div>
    </Wrapper>
  );
};

export default TitleBox;
